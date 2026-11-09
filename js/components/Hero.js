// Hero Section Component for Enjoy Holidays Tour and Travel, Katra (Light Aesthetic)

(function() {
  const { createElement: h } = React;
  const Icons = window.Icons;

  window.Hero = function Hero({ onExplorePackages, onPlanTrip }) {
    return h(
      "section",
      { className: "relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-24 overflow-hidden" },

      // Cinematic Travel Background
      h("div", {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105",
        style: {
          backgroundImage: "url('https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=85')"
        }
      }),

      // Subtle Gradient Overlay (Ensures high contrast while keeping photography vibrant)
      h("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-slate-900/80"
      }),

      // Content Container
      h(
        "div",
        { className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" },

        // Top Badge (Light frosted glass with Real 4.8/5 Rating)
        h(
          "div",
          {
            className:
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-400/40 text-navy-900 text-xs sm:text-sm font-bold mb-6 shadow-xl backdrop-blur-md animate-fade-in"
          },
          h(Icons.Star, { className: "w-4 h-4 text-amber-500 fill-amber-500" }),
          h("span", { className: "text-amber-700 font-extrabold" }, "4.8 / 5.0 Rating"),
          h("span", { className: "text-slate-600 font-medium hidden sm:inline" }, "(Based on customer reviews)"),
          h("span", { className: "hidden sm:inline text-amber-500" }, "•"),
          h("span", { className: "hidden sm:inline text-slate-700 font-semibold" }, "Ban Ganga Road, Katra (J&K)")
        ),

        // Main Heading
        h(
          "h1",
          {
            className:
              "text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight sm:leading-tight mb-6 drop-shadow-md"
          },
          "Your Journey, Our Passion – ",
          h(
            "span",
            {
              className:
                "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500"
            },
            "Explore the World"
          ),
          h("br", { className: "hidden sm:inline" }),
          " with Enjoy Holidays"
        ),

        // Subheading
        h(
          "p",
          {
            className:
              "text-base sm:text-lg md:text-xl text-slate-100 max-w-3xl mx-auto font-normal leading-relaxed mb-10 drop-shadow"
          },
          "Discover unforgettable destinations, comfortable stays, and memorable travel experiences with Enjoy Holidays Tour and Travel, Katra."
        ),

        // CTA Buttons
        h(
          "div",
          {
            className:
              "flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          },
          h(
            "button",
            {
              onClick: onExplorePackages,
              className:
                "w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
            },
            h(Icons.Compass, { className: "w-5 h-5 text-navy-950" }),
            "Explore Packages"
          ),
          h(
            "button",
            {
              onClick: onPlanTrip,
              className:
                "w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/95 hover:bg-white text-navy-950 font-bold text-base border border-slate-200 shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
            },
            h(Icons.Calendar, { className: "w-5 h-5 text-ocean-600" }),
            "Plan Your Trip"
          )
        ),

        // Quick Trust Highlights Bar (Pure Crisp White Cards)
        h(
          "div",
          {
            className:
              "mt-14 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
          },
          [
            {
              icon: Icons.MapPin,
              title: "Based in Katra",
              desc: "Vaishno Devi base camp local experts"
            },
            {
              icon: Icons.Car,
              title: "Comfortable Fleet",
              desc: "Dzire, Innova Crysta & Tempo"
            },
            {
              icon: Icons.Bed,
              title: "Verified Hotels",
              desc: "Handpicked stays & houseboats"
            },
            {
              icon: Icons.ShieldCheck,
              title: "24/7 Travel Support",
              desc: "Personalized assistance throughout"
            }
          ].map((item, i) =>
            h(
              "div",
              {
                key: i,
                className:
                  "flex items-start gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg"
              },
              h(
                "div",
                {
                  className:
                    "w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0"
                },
                h(item.icon, { className: "w-4 h-4 text-amber-600" })
              ),
              h(
                "div",
                null,
                h("h4", { className: "text-navy-950 text-xs sm:text-sm font-bold" }, item.title),
                h("p", { className: "text-slate-600 text-[11px] leading-tight mt-0.5 font-medium" }, item.desc)
              )
            )
          )
        )
      )
    );
  };
})();
