// Footer Component for Enjoy Holidays Tour and Travel, Katra

(function() {
  const { createElement: h } = React;
  const Icons = window.Icons;

  window.Footer = function Footer({ onNavigate, onOpenAdmin }) {
    const config = window.SITE_CONFIG;

    return h(
      "footer",
      { className: "bg-navy-950 text-slate-300 border-t border-navy-800 pt-16 pb-12 relative overflow-hidden" },

      // Subtle Background Glow
      h("div", {
        className:
          "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
      }),

      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },

        // 4 Columns Layout
        h(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800" },

          // Col 1: Brand & Intro (4 cols)
          h(
            "div",
            { className: "lg:col-span-4 space-y-4" },
            // Brand Logo — Real Business Logo Image
            h(
              "div",
              {
                onClick: () => onNavigate("home"),
                className: "cursor-pointer flex items-center gap-2 group"
              },
              h("img", {
                src: "assets/images/logo.jpg",
                alt: "Enjoy Holidays Tour and Travel",
                className: "h-16 w-auto object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300",
                onError: function(e) {
                  e.target.style.display = "none";
                  e.target.nextSibling && (e.target.nextSibling.style.display = "block");
                }
              }),
              h(
                "div",
                { style: { display: "none" } },
                h(
                  "span",
                  { className: "font-serif font-bold text-white tracking-wider text-base block uppercase" },
                  "ENJOY HOLIDAYS"
                ),
                h(
                  "span",
                  { className: "text-[10px] text-amber-400 font-semibold tracking-widest block uppercase" },
                  "TOUR AND TRAVEL • KATRA (J&K)"
                )
              )
            ),
            h(
              "p",
              { className: "text-xs text-slate-400 leading-relaxed max-w-sm" },
              "Enjoy Holidays Tour and Travel is a trusted tour operator based in Katra, Jammu & Kashmir. We specialize in Mata Vaishno Devi pilgrimage trips, scenic Kashmir holidays, Ladakh high-pass expeditions, and verified comfortable transport."
            ),
            h(
              "div",
              { className: "flex items-center gap-2 pt-1 text-xs text-amber-400 font-medium" },
              h(Icons.Award, { className: "w-4 h-4" }),
              "J&K Tourism Registered Operator"
            ),

            // Social Buttons
            h(
              "div",
              { className: "flex items-center gap-3 pt-2" },
              [
                { label: "WhatsApp", icon: Icons.WhatsApp, url: `https://wa.me/${config.contact.whatsappNumber}` },
                { label: "Phone", icon: Icons.Phone, url: `tel:${config.contact.primaryPhone.replace(/\s+/g, '')}` },
                { label: "Mail", icon: Icons.Mail, url: `mailto:${config.contact.email}` }
              ].map((s, i) =>
                h(
                  "a",
                  {
                    key: i,
                    href: s.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "w-8 h-8 rounded-lg bg-navy-900 hover:bg-amber-500 hover:text-navy-950 text-slate-300 flex items-center justify-center border border-navy-800 transition-colors"
                  },
                  h(s.icon, { className: "w-4 h-4" })
                )
              )
            )
          ),

          // Col 2: Quick Links (2 cols)
          h(
            "div",
            { className: "lg:col-span-2 space-y-3" },
            h(
              "h4",
              { className: "text-xs font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2" },
              "Quick Links"
            ),
            h(
              "ul",
              { className: "space-y-2 text-xs" },
              [
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "destinations", label: "Destinations" },
                { id: "packages", label: "Tour Packages" },
                { id: "taxi", label: "Taxi Fleet & Fares" },
                { id: "hotels", label: "Hotel Assistance" },
                { id: "gallery", label: "Photo Gallery" },
                { id: "contact", label: "Contact Us" }
              ].map((link) =>
                h(
                  "li",
                  { key: link.id },
                  h(
                    "button",
                    {
                      onClick: () => onNavigate(link.id),
                      className: "hover:text-amber-400 transition-colors text-left"
                    },
                    link.label
                  )
                )
              )
            )
          ),

          // Col 3: Popular Packages & Destinations (3 cols)
          h(
            "div",
            { className: "lg:col-span-3 space-y-3" },
            h(
              "h4",
              { className: "text-xs font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2" },
              "Popular Packages"
            ),
            h(
              "ul",
              { className: "space-y-2 text-xs" },
              [
                "Vaishno Devi Darshan Package",
                "Kashmir Paradise Tour (6D/5N)",
                "Kashmir Romantic Honeymoon",
                "Srinagar Gulmarg Pahalgam",
                "Leh Ladakh Adventure Safari",
                "Manali & Shimla Hill Escape",
                "Amritsar & Wagah Border Tour"
              ].map((item, idx) =>
                h(
                  "li",
                  { key: idx },
                  h(
                    "button",
                    {
                      onClick: () => onNavigate("packages"),
                      className: "hover:text-amber-400 transition-colors text-left flex items-center gap-1.5"
                    },
                    h(Icons.ChevronRight, { className: "w-3 h-3 text-amber-400" }),
                    item
                  )
                )
              )
            )
          ),

          // Col 4: Katra Contact Info (3 cols)
          h(
            "div",
            { className: "lg:col-span-3 space-y-3" },
            h(
              "h4",
              { className: "text-xs font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2" },
              "Katra Contact Desk"
            ),
            h(
              "div",
              { className: "space-y-2.5 text-xs text-slate-400" },
              h(
                "div",
                { className: "flex items-start gap-2" },
                h(Icons.MapPin, { className: "w-4 h-4 text-amber-400 shrink-0 mt-0.5" }),
                h(
                  "span",
                  null,
                  `${config.contact.address.line1}, ${config.contact.address.city}, ${config.contact.address.state} - ${config.contact.address.pincode}`
                )
              ),
              h(
                "div",
                { className: "flex items-center gap-2" },
                h(Icons.Phone, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
                h(
                  "a",
                  {
                    href: `tel:${config.contact.primaryPhone.replace(/\s+/g, '')}`,
                    className: "hover:text-white transition-colors"
                  },
                  config.contact.primaryPhone
                )
              ),
              h(
                "div",
                { className: "flex items-center gap-2" },
                h(Icons.Mail, { className: "w-4 h-4 text-sky-400 shrink-0" }),
                h(
                  "a",
                  {
                    href: `mailto:${config.contact.email}`,
                    className: "hover:text-white transition-colors truncate"
                  },
                  config.contact.email
                )
              ),
              h(
                "div",
                { className: "pt-2" },
                h(
                  "a",
                  {
                    href: `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
                      config.whatsappMessages.general
                    )}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-xl text-xs shadow-md transition-all"
                  },
                  h(Icons.WhatsApp, { className: "w-3.5 h-3.5" }),
                  "Enquire on WhatsApp"
                )
              )
            )
          )
        ),

        // Bottom Copyright & Credits
        h(
          "div",
          { className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400" },
          h(
            "p",
            null,
            `© ${config.company.copyrightYear} ${config.company.name}. All Rights Reserved.`
          ),
          h(
            "div",
            { className: "flex items-center gap-4" },
            h("span", null, "Katra • Jammu • Kashmir • Ladakh"),
            h("span", { className: "text-slate-600" }, "•"),
            h(
              "button",
              {
                onClick: onOpenAdmin,
                className: "text-slate-500 hover:text-amber-400 transition-colors"
              },
              "Admin Access"
            )
          )
        )
      )
    );
  };
})();
