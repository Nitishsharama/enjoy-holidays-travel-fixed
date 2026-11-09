// Popular Destinations Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.PopularDestinations = function PopularDestinations({ onSelectDestination }) {
    const [activeTab, setActiveTab] = useState("all");
    const destinations = window.DESTINATIONS_DATA || [];

    const tabs = [
      { id: "all", label: "All Destinations" },
      { id: "kashmir", label: "Kashmir Valley" },
      { id: "pilgrimage", label: "Pilgrimage & Katra" },
      { id: "ladakh", label: "Ladakh" },
      { id: "himachal", label: "Himachal Pradesh" },
      { id: "outstation", label: "Outstation Tours" },
      { id: "international", label: "International" }
    ];

    const filteredDestinations = destinations.filter((dest) => {
      if (activeTab === "all") return true;
      if (activeTab === "kashmir") return dest.category === "kashmir";
      if (activeTab === "pilgrimage") return dest.category === "pilgrimage";
      if (activeTab === "ladakh") return dest.category === "ladakh";
      if (activeTab === "himachal") return dest.category === "himachal";
      if (activeTab === "outstation") return dest.category === "outstation";
      if (activeTab === "international") return dest.category === "international";
      return true;
    });

    return h(
      "section",
      { id: "destinations-section", className: "py-20 bg-slate-50 relative overflow-hidden" },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },

        // Section Header
        h(
          "div",
          { className: "text-center max-w-3xl mx-auto mb-12" },
          h(
            "span",
            {
              className:
                "text-amber-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 inline-flex items-center gap-1.5"
            },
            h(Icons.Compass, { className: "w-4 h-4 text-amber-500" }),
            "Curated Holiday Escapes"
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mt-1 mb-4" },
            "Popular Travel Destinations"
          ),
          h(
            "p",
            { className: "text-slate-600 text-sm sm:text-base leading-relaxed font-normal" },
            "From the sacred heights of Vaishno Devi in Katra and the poetic valleys of Kashmir to the stark high-passes of Ladakh and misty Himachal peaks, explore destinations crafted for memories of a lifetime."
          )
        ),

        // Filter Tabs
        h(
          "div",
          { className: "flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" },
          tabs.map((tab) =>
            h(
              "button",
              {
                key: tab.id,
                onClick: () => setActiveTab(tab.id),
                className: `px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shadow-sm ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-bold shadow-md shadow-amber-500/20"
                    : "bg-white text-slate-700 hover:text-navy-950 hover:bg-slate-100 border border-slate-200"
                }`
              },
              tab.label
            )
          )
        ),

        // Destinations Grid
        h(
          "div",
          { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" },
          filteredDestinations.map((dest) =>
            h(
              "div",
              {
                key: dest.id,
                className:
                  "group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400 shadow-md hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300 flex flex-col hover:-translate-y-1"
              },

              // Image Container
              h(
                "div",
                { className: "relative h-60 overflow-hidden" },
                h("img", {
                  src: dest.image,
                  alt: dest.name,
                  className:
                    "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                }),
                h("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent"
                }),

                // Badges
                h(
                  "div",
                  { className: "absolute top-3 left-3 flex items-center gap-1.5" },
                  h(
                    "span",
                    {
                      className:
                        "px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide bg-white/95 text-navy-950 shadow-sm"
                    },
                    dest.region
                  )
                ),
                h(
                  "div",
                  { className: "absolute top-3 right-3" },
                  h(
                    "span",
                    {
                      className:
                        "px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/60 text-white backdrop-blur-md"
                    },
                    dest.duration
                  )
                ),

                // Title Overlay
                h(
                  "div",
                  { className: "absolute bottom-3 left-4 right-4" },
                  h(
                    "h3",
                    { className: "text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors" },
                    dest.name
                  ),
                  h(
                    "p",
                    { className: "text-amber-300 text-xs font-semibold" },
                    dest.tagline
                  )
                )
              ),

              // Content Body (Crisp Light Mode)
              h(
                "div",
                { className: "p-5 flex-1 flex flex-col justify-between" },
                h(
                  "div",
                  null,
                  h(
                    "p",
                    { className: "text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4" },
                    dest.description
                  ),

                  // Highlights / Popular tags
                  h(
                    "div",
                    { className: "flex flex-wrap gap-1.5 mb-5" },
                    (dest.popularFor || []).slice(0, 3).map((tag, idx) =>
                      h(
                        "span",
                        {
                          key: idx,
                          className:
                            "text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                        },
                        tag
                      )
                    )
                  )
                ),

                // Bottom Action
                h(
                  "div",
                  { className: "pt-4 border-t border-slate-100 flex items-center justify-between" },
                  h(
                    "div",
                    { className: "text-[11px] text-slate-500" },
                    h("span", { className: "block text-[10px] uppercase font-bold tracking-wider text-slate-400" }, "Best Season"),
                    h("span", { className: "text-navy-950 font-bold" }, dest.bestSeason)
                  ),
                  h(
                    "button",
                    {
                      onClick: () => onSelectDestination(dest),
                      className:
                        "inline-flex items-center gap-1.5 text-xs font-bold text-ocean-600 hover:text-ocean-700 group-hover:translate-x-0.5 transition-all"
                    },
                    "Explore More",
                    h(Icons.ChevronRight, { className: "w-4 h-4 text-ocean-600" })
                  )
                )
              )
            )
          )
        )
      )
    );
  };
})();
