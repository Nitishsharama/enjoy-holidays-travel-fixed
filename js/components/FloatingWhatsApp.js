// Floating WhatsApp Widget Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.FloatingWhatsApp = function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);
    const config = window.SITE_CONFIG;

    const handleChatOpen = () => {
      window.open(
        `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
          config.whatsappMessages.general
        )}`,
        "_blank"
      );
    };

    return h(
      "div",
      { className: "fixed bottom-6 right-6 z-40 flex flex-col items-end" },

      // Interactive Mini Popup (Light Mode)
      isOpen &&
        h(
          "div",
          {
            className:
              "mb-3 w-72 sm:w-80 bg-white border border-emerald-500/40 rounded-2xl shadow-2xl p-4 text-slate-800 animate-fade-in text-left"
          },
          h(
            "div",
            { className: "flex items-center justify-between pb-3 border-b border-slate-100" },
            h(
              "div",
              { className: "flex items-center gap-2.5" },
              h(
                "div",
                {
                  className:
                    "w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold"
                },
                h(Icons.WhatsApp, { className: "w-5 h-5" })
              ),
              h(
                "div",
                null,
                h("h4", { className: "text-xs font-bold text-navy-950" }, "Enjoy Holidays Travel"),
                h("span", { className: "text-[10px] text-emerald-600 font-bold" }, "● Online • Katra Desk")
              )
            ),
            h(
              "button",
              {
                onClick: () => setIsOpen(false),
                className: "text-slate-400 hover:text-navy-950 p-1 rounded-full focus:outline-none"
              },
              h(Icons.X, { className: "w-4 h-4" })
            )
          ),
          h(
            "div",
            { className: "py-3 text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl my-2 border border-slate-100 font-medium" },
            "Hello! Planning a trip to Vaishno Devi, Kashmir, Ladakh, or Himachal? Click below to chat directly with our Katra travel specialists."
          ),
          h(
            "button",
            {
              onClick: handleChatOpen,
              className:
                "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            },
            h(Icons.WhatsApp, { className: "w-4 h-4" }),
            "Start Chat on WhatsApp"
          )
        ),

      // Pulsating Floating Button
      h(
        "div",
        { className: "relative group" },
        // Tooltip on Hover
        h(
          "div",
          {
            className:
              "hidden sm:group-hover:flex absolute right-16 top-1/2 -translate-y-1/2 bg-white text-navy-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap border border-slate-200 items-center gap-1.5 pointer-events-none"
          },
          h("span", null, "Chat on WhatsApp"),
          h("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping" })
        ),

        // Glowing Ring
        h("div", {
          className:
            "absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"
        }),

        // Button
        h(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className:
              "relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-900/30 hover:scale-105 active:scale-95 transition-all focus:outline-none"
          },
          isOpen
            ? h(Icons.X, { className: "w-7 h-7" })
            : h(Icons.WhatsApp, { className: "w-7 h-7" })
        )
      )
    );
  };
})();
