// About Us Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h } = React;
  const Icons = window.Icons;

  window.AboutSection = function AboutSection({ onExplorePackages, onContactUs }) {
    const services = [
      {
        icon: Icons.Award,
        title: "Vaishno Devi Pilgrimage Services",
        desc: "Katra base camp coordination, hotel stays, RFID yatra slip guidance, helicopter/battery car assistance, and Shivkhori excursions."
      },
      {
        icon: Icons.Mountain,
        title: "Kashmir Valley Holidays",
        desc: "Curated tours to Srinagar, Gulmarg, Pahalgam, and Sonamarg with luxury Dal Lake houseboats and romantic shikara rides."
      },
      {
        icon: Icons.Compass,
        title: "Ladakh & Himachal Circuits",
        desc: "High-altitude adventures across Khardung La & Pangong Lake, plus scenic escapes to Manali, Shimla, Dharamshala, and Dalhousie."
      },
      {
        icon: Icons.Car,
        title: "Dedicated Taxi & Fleet Rentals",
        desc: "Clean, sanitized private vehicles (Sedan Dzire, Toyota Innova Crysta, and Luxury Tempo Travellers) with licensed hill drivers."
      }
    ];

    return h(
      "section",
      { id: "about-section", className: "py-20 bg-slate-50 relative overflow-hidden" },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },

        // Top Narrative Row: Text on Left, Visual Mosaic on Right
        h(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20" },

          // Left Text Column (7 cols)
          h(
            "div",
            { className: "lg:col-span-7 space-y-6" },
            h(
              "span",
              {
                className:
                  "text-amber-600 text-xs sm:text-sm font-bold tracking-wider uppercase inline-flex items-center gap-1.5"
              },
              h(Icons.MapPin, { className: "w-4 h-4 text-amber-500" }),
              "Based in Katra, Jammu & Kashmir"
            ),
            h(
              "h2",
              { className: "text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 tracking-tight leading-tight" },
              "Discover More with ",
              h("br", { className: "hidden sm:inline" }),
              h(
                "span",
                {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-ocean-600"
                },
                "Enjoy Holidays Tour and Travel"
              )
            ),
            h(
              "p",
              { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
              "Headquartered in the holy town of Katra—the auspicious base camp of Shri Mata Vaishno Devi Ji in Jammu & Kashmir—Enjoy Holidays Tour and Travel was born out of a profound passion for introducing travelers to the authentic beauty, rich heritage, and serene spirituality of the Himalayas."
            ),
            h(
              "p",
              { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
              "We help travellers from across India and around the globe plan memorable holidays, holy pilgrimage trips, peaceful family vacations, romantic honeymoon escapes, comfortable transportation, and bespoke customized travel experiences."
            ),

            // Story & Vision Cards
            h(
              "div",
              { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2" },
              h(
                "div",
                { className: "p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm" },
                h(
                  "h4",
                  { className: "text-sm font-bold text-amber-600 flex items-center gap-2 mb-2" },
                  h(Icons.Sparkles, { className: "w-4 h-4" }),
                  "Our Mission"
                ),
                h(
                  "p",
                  { className: "text-xs text-slate-600 leading-relaxed font-normal" },
                  "To deliver reliable, high-value, and stress-free holiday solutions with transparent pricing, respectful local guidance, and heartfelt hospitality."
                )
              ),
              h(
                "div",
                { className: "p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm" },
                h(
                  "h4",
                  { className: "text-sm font-bold text-ocean-600 flex items-center gap-2 mb-2" },
                  h(Icons.Compass, { className: "w-4 h-4" }),
                  "Our Vision"
                ),
                h(
                  "p",
                  { className: "text-xs text-slate-600 leading-relaxed font-normal" },
                  "To be Katra's premier and most trusted travel brand, acclaimed for setting the benchmark in pilgrim care, safety, and Himalayan exploration."
                )
              )
            ),

            // Actions
            h(
              "div",
              { className: "pt-4 flex flex-wrap gap-4" },
              h(
                "button",
                {
                  onClick: onExplorePackages,
                  className:
                    "bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 hover:shadow-lg transition-all"
                },
                "Explore Tour Packages"
              ),
              h(
                "button",
                {
                  onClick: onContactUs,
                  className:
                    "bg-white hover:bg-slate-100 text-slate-800 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm border border-slate-200 shadow-sm transition-all"
                },
                "Contact Our Katra Office"
              )
            )
          ),

          // Right Visual Mosaic (5 cols) — Features Real Katra Office & Landmark Photo
          h(
            "div",
            { className: "lg:col-span-5 relative" },
            h(
              "div",
              { className: "relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl" },
              h("img", {
                src: "assets/images/unnamed (5).webp",
                alt: "Enjoy Holidays Katra Office Interior",
                className: "w-full h-80 sm:h-96 object-cover"
              }),
              h("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"
              }),
              h(
                "div",
                {
                  className:
                    "absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-800"
                },
                h(
                  "div",
                  { className: "flex items-center justify-between mb-1" },
                  h(
                    "div",
                    { className: "flex items-center gap-1.5 text-xs font-bold text-ocean-700" },
                    h(Icons.MapPin, { className: "w-3.5 h-3.5 text-amber-500" }),
                    "Ban Ganga Road, Katra (J&K)"
                  ),
                  h(
                    "span",
                    { className: "text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full" },
                    "4.8 ★ Rated"
                  )
                ),
                h(
                  "p",
                  { className: "text-[11px] text-slate-600 leading-tight font-medium" },
                  "Opposite Hotel Sanjeev Palace, near Shalimar Garden Chintamani. Managed by Sunil Sharma & our dedicated local Katra team."
                )
              )
            ),

            // Floating Decorative Tag
            h(
              "div",
              {
                className:
                  "absolute -top-5 -right-5 hidden sm:flex items-center gap-2 bg-gradient-to-br from-amber-500 to-amber-600 text-navy-950 px-4 py-2.5 rounded-2xl shadow-xl font-bold text-xs"
              },
              h(Icons.Award, { className: "w-4 h-4 text-navy-950" }),
              "J&K Registered Travel Operator"
            )
          )
        ),

        // Services Grid
        h(
          "div",
          { className: "border-t border-slate-200 pt-16" },
          h(
            "div",
            { className: "text-center max-w-2xl mx-auto mb-12" },
            h(
              "h3",
              { className: "text-2xl font-serif font-bold text-navy-950 mb-2" },
              "Our Comprehensive Travel Services"
            ),
            h(
              "p",
              { className: "text-slate-500 text-xs sm:text-sm font-medium" },
              "Everything you need for a comfortable vacation arranged under one reliable roof."
            )
          ),
          h(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
            services.map((srv, idx) =>
              h(
                "div",
                {
                  key: idx,
                  className: "bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                },
                h(
                  "div",
                  null,
                  h(
                    "div",
                    {
                      className:
                        "w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-4"
                    },
                    h(srv.icon, { className: "w-5 h-5" })
                  ),
                  h("h4", { className: "text-sm font-bold text-navy-950 mb-2" }, srv.title),
                  h("p", { className: "text-xs text-slate-600 leading-relaxed" }, srv.desc)
                )
              )
            )
          )
        )
      )
    );
  };
})();
