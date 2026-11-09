// Featured Tour Packages Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.FeaturedPackages = function FeaturedPackages({
    packagesList,
    onViewPackageDetails,
    onEnquirePackage
  }) {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchFilter, setSearchFilter] = useState("");
    const config = window.SITE_CONFIG;

    const categories = [
      { id: "all", label: "All Packages" },
      { id: "special", label: "Special Signature Tours" },
      { id: "religious", label: "Religious & Pilgrimage" },
      { id: "family", label: "Family Holidays" },
      { id: "honeymoon", label: "Honeymoon Specials" },
      { id: "adventure", label: "Adventure Tours" },
      { id: "weekend", label: "Short Breaks" },
      { id: "customized", label: "Heritage & Custom" },
      { id: "group", label: "Beach & Group" },
      { id: "corporate", label: "International" }
    ];

    const filtered = (packagesList || []).filter((pkg) => {
      const matchCat = selectedCategory === "all" || pkg.categoryKey === selectedCategory;
      const matchSearch =
        !searchFilter ||
        pkg.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchFilter.toLowerCase());
      return matchCat && matchSearch;
    });

    const handleWhatsAppEnquiry = (e, pkg) => {
      e.stopPropagation();
      const msg = config.whatsappMessages.packageEnquiry(pkg.name, pkg.duration);
      window.open(
        `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    };

    return h(
      "section",
      { id: "packages-section", className: "py-20 bg-slate-100/70 relative" },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },

        // Section Title
        h(
          "div",
          { className: "text-center max-w-3xl mx-auto mb-10" },
          h(
            "span",
            {
              className:
                "text-amber-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 inline-flex items-center gap-1.5"
            },
            h(Icons.Award, { className: "w-4 h-4 text-amber-500" }),
            "Handcrafted Travel Experiences"
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mt-1 mb-4" },
            "Featured Tour Packages"
          ),
          h(
            "p",
            { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
            "Explore our most popular travel itineraries with transparent inclusions, handpicked comfortable hotels, private sanitized transport, and experienced local Katra travel assistance."
          )
        ),

        // Search & Filter Controls
        h(
          "div",
          { className: "flex flex-col md:flex-row items-center justify-between gap-4 mb-10" },

          // Category Pills
          h(
            "div",
            { className: "flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar" },
            categories.map((cat) =>
              h(
                "button",
                {
                  key: cat.id,
                  onClick: () => setSelectedCategory(cat.id),
                  className: `px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                    selectedCategory === cat.id
                      ? "bg-amber-500 text-navy-950 shadow-md shadow-amber-500/20"
                      : "bg-white text-slate-700 hover:text-navy-950 border border-slate-200"
                  }`
                },
                cat.label
              )
            )
          ),

          // Search Input
          h(
            "div",
            { className: "relative w-full md:w-64 shrink-0" },
            h(Icons.Search, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }),
            h("input", {
              type: "text",
              placeholder: "Search package or place...",
              value: searchFilter,
              onChange: (e) => setSearchFilter(e.target.value),
              className:
                "w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 shadow-sm"
            })
          )
        ),

        // Packages Grid
        filtered.length === 0
          ? h(
              "div",
              { className: "text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm" },
              h(Icons.Compass, { className: "w-12 h-12 text-slate-400 mx-auto mb-3" }),
              h("h4", { className: "text-navy-950 text-lg font-bold" }, "No packages found matching your criteria"),
              h("p", { className: "text-slate-500 text-sm mt-1" }, "Try clearing filters or search terms.")
            )
          : h(
              "div",
              { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" },
              filtered.map((pkg) =>
                h(
                  "div",
                  {
                    key: pkg.id,
                    className:
                      "group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400 shadow-lg hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300 flex flex-col hover:-translate-y-1"
                  },

                  // Card Image & Badges
                  h(
                    "div",
                    { className: "relative h-56 overflow-hidden" },
                    h("img", {
                      src: pkg.image,
                      alt: pkg.name,
                      className:
                        "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    }),
                    h("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
                    }),

                    // Top Badges
                    h(
                      "div",
                      { className: "absolute top-3 left-3 flex flex-wrap gap-1.5" },
                      pkg.badge &&
                        h(
                          "span",
                          {
                            className:
                              "px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500 text-navy-950 shadow-md"
                          },
                          pkg.badge
                        ),
                      h(
                        "span",
                        {
                          className:
                            "px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-ocean-700 shadow-sm backdrop-blur-md"
                        },
                        pkg.category
                      )
                    ),

                    // Duration Badge
                    h(
                      "div",
                      { className: "absolute bottom-3 left-3" },
                      h(
                        "span",
                        {
                          className:
                            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-black/60 text-white backdrop-blur-md"
                        },
                        h(Icons.Clock, { className: "w-3.5 h-3.5 text-amber-400" }),
                        pkg.duration
                      )
                    ),

                    // Rating Badge
                    h(
                      "div",
                      { className: "absolute bottom-3 right-3" },
                      h(
                        "span",
                        {
                          className:
                            "inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold bg-black/60 text-amber-400 backdrop-blur-md"
                        },
                        h(Icons.Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }),
                        pkg.rating,
                        h("span", { className: "text-[10px] text-slate-200 font-normal" }, `(${pkg.reviewsCount})`)
                      )
                    )
                  ),

                  // Card Content (Crisp Light Mode)
                  h(
                    "div",
                    { className: "p-5 flex-1 flex flex-col justify-between" },
                    h(
                      "div",
                      null,
                      // Destination Subtitle
                      h(
                        "div",
                        { className: "flex items-center gap-1.5 text-xs text-ocean-600 font-bold mb-1.5" },
                        h(Icons.MapPin, { className: "w-3.5 h-3.5 shrink-0" }),
                        h("span", { className: "truncate" }, pkg.destination)
                      ),

                      // Package Title
                      h(
                        "h3",
                        {
                          onClick: () => onViewPackageDetails(pkg),
                          className:
                            "text-lg font-serif font-bold text-navy-950 group-hover:text-ocean-600 transition-colors cursor-pointer line-clamp-2 mb-2.5"
                        },
                        pkg.name
                      ),

                      // Short Description
                      h(
                        "p",
                        { className: "text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4" },
                        pkg.shortDescription
                      )
                    ),

                    // Price & Actions
                    h(
                      "div",
                      { className: "pt-4 border-t border-slate-100" },

                      // Price Block
                      h(
                        "div",
                        { className: "flex items-baseline justify-between mb-4" },
                        h(
                          "div",
                          null,
                          h("span", { className: "text-[11px] text-slate-500 font-medium block" }, "Starting from"),
                          h(
                            "div",
                            { className: "flex items-baseline gap-1" },
                            h(
                              "span",
                              { className: "text-xl sm:text-2xl font-bold text-amber-600" },
                              `₹${Number(pkg.startingPrice).toLocaleString('en-IN')}`
                            ),
                            h("span", { className: "text-[11px] text-slate-500" }, "/ person")
                          )
                        ),
                        h(
                          "span",
                          { className: "text-[10px] text-slate-500 font-medium text-right max-w-[120px] leading-tight" },
                          pkg.priceNote || "Customizable"
                        )
                      ),

                      // Buttons Grid
                      h(
                        "div",
                        { className: "grid grid-cols-2 gap-2" },
                        h(
                          "button",
                          {
                            onClick: () => onViewPackageDetails(pkg),
                            className:
                              "w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 px-3 rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                          },
                          "View Details",
                          h(Icons.ChevronRight, { className: "w-3.5 h-3.5 text-ocean-600" })
                        ),
                        h(
                          "button",
                          {
                            onClick: (e) => handleWhatsAppEnquiry(e, pkg),
                            className:
                              "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5"
                          },
                          h(Icons.WhatsApp, { className: "w-3.5 h-3.5" }),
                          "WhatsApp"
                        )
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
