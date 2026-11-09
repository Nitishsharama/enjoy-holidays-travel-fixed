// Custom 404 Page Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h } = React;
  const Icons = window.Icons;

  window.NotFoundPage = function NotFoundPage({ onGoHome }) {
    return h(
      "div",
      { className: "min-h-[70vh] flex items-center justify-center py-20 px-4 text-center bg-slate-50" },
      h(
        "div",
        { className: "max-w-md mx-auto space-y-6" },
        h(
          "div",
          {
            className:
              "w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mx-auto"
          },
          h(Icons.Compass, { className: "w-10 h-10 animate-spin" })
        ),
        h(
          "h1",
          { className: "text-4xl sm:text-5xl font-serif font-bold text-navy-950 tracking-tight" },
          "404 - Lost in the Mountains?"
        ),
        h(
          "p",
          { className: "text-slate-600 text-sm leading-relaxed font-normal" },
          "The travel destination or package page you are looking for has taken a scenic detour. Let us guide you back to safe trails."
        ),
        h(
          "button",
          {
            onClick: onGoHome,
            className:
              "inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold px-6 py-3 rounded-xl text-sm shadow-md shadow-amber-500/20 transition-all"
          },
          h(Icons.ChevronLeft, { className: "w-4 h-4 text-navy-950" }),
          "Back to Enjoy Holidays Home"
        )
      )
    );
  };
})();
