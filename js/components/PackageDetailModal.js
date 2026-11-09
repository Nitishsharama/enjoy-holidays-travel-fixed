// Package Detail Modal Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.PackageDetailModal = function PackageDetailModal({
    pkg,
    onClose,
    onOpenEnquiry
  }) {
    if (!pkg) return null;

    const [activeTab, setActiveTab] = useState("itinerary");
    const config = window.SITE_CONFIG;

    const handleWhatsApp = () => {
      const msg = config.whatsappMessages.packageEnquiry(pkg.name, pkg.duration);
      window.open(
        `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    };

    return h(
      "div",
      {
        className:
          "fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in",
        onClick: onClose
      },
      h(
        "div",
        {
          className:
            "bg-white border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative text-left text-slate-800 my-auto",
          onClick: (e) => e.stopPropagation()
        },

        // Close Button
        h(
          "button",
          {
            onClick: onClose,
            className:
              "absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-navy-950 flex items-center justify-center shadow-md border border-slate-200 transition-all focus:outline-none"
          },
          h(Icons.X, { className: "w-5 h-5" })
        ),

        // Header Hero Banner
        h(
          "div",
          { className: "relative h-72 sm:h-80 overflow-hidden rounded-t-3xl" },
          h("img", {
            src: pkg.image,
            alt: pkg.name,
            className: "w-full h-full object-cover"
          }),
          h("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent"
          }),

          // Content in Banner
          h(
            "div",
            { className: "absolute bottom-6 left-6 right-6" },
            h(
              "div",
              { className: "flex flex-wrap items-center gap-2 mb-2" },
              h(
                "span",
                {
                  className:
                    "px-3 py-1 rounded-md text-xs font-bold bg-amber-500 text-navy-950 shadow-md"
                },
                pkg.badge || "Featured Package"
              ),
              h(
                "span",
                {
                  className:
                    "px-3 py-1 rounded-md text-xs font-bold bg-white/95 text-ocean-700 shadow-sm backdrop-blur-md"
                },
                pkg.category
              ),
              h(
                "span",
                {
                  className:
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-black/60 text-white backdrop-blur-md"
                },
                h(Icons.Clock, { className: "w-3.5 h-3.5 text-amber-400" }),
                pkg.duration
              )
            ),
            h(
              "h2",
              { className: "text-2xl sm:text-3xl font-serif font-bold text-white leading-tight" },
              pkg.name
            ),
            h(
              "div",
              { className: "flex items-center gap-2 text-xs sm:text-sm text-sky-300 font-semibold mt-1" },
              h(Icons.MapPin, { className: "w-4 h-4 shrink-0" }),
              pkg.destination
            )
          )
        ),

        // Navigation Tabs Inside Modal
        h(
          "div",
          { className: "border-b border-slate-200 px-6 flex items-center gap-4 overflow-x-auto no-scrollbar bg-slate-50 sticky top-0 z-10" },
          [
            { id: "itinerary", label: "Day-Wise Itinerary" },
            { id: "overview", label: "Overview & Details" },
            { id: "inclusions", label: "Inclusions & Exclusions" },
            { id: "hotels-transport", label: "Hotels & Fleet" }
          ].map((tab) =>
            h(
              "button",
              {
                key: tab.id,
                onClick: () => setActiveTab(tab.id),
                className: `py-3.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-ocean-600 text-ocean-600"
                    : "border-transparent text-slate-500 hover:text-navy-950"
                }`
              },
              tab.label
            )
          )
        ),

        // Body Content (Light Mode)
        h(
          "div",
          { className: "p-6 sm:p-8" },

          // Tab: Itinerary
          activeTab === "itinerary" &&
            h(
              "div",
              { className: "space-y-6" },
              h(
                "h3",
                { className: "text-lg font-serif font-bold text-navy-950 flex items-center gap-2 mb-4" },
                h(Icons.Calendar, { className: "w-5 h-5 text-ocean-600" }),
                "Detailed Tour Itinerary"
              ),
              h(
                "div",
                { className: "relative pl-6 border-l-2 border-slate-200 space-y-8" },
                (pkg.itinerary || []).map((step, idx) =>
                  h(
                    "div",
                    { key: idx, className: "relative" },
                    // Dot
                    h("span", {
                      className:
                        "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-md"
                    }),
                    h(
                      "div",
                      { className: "bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200" },
                      h(
                        "div",
                        { className: "flex items-center gap-2 mb-1" },
                        h(
                          "span",
                          { className: "text-xs font-bold text-amber-600 uppercase tracking-wider" },
                          step.day
                        ),
                        h("span", { className: "text-slate-400 text-xs" }, "•"),
                        h(
                          "h4",
                          { className: "text-sm sm:text-base font-bold text-navy-950" },
                          step.title
                        )
                      ),
                      h(
                        "p",
                        { className: "text-xs sm:text-sm text-slate-600 leading-relaxed mt-1" },
                        step.desc
                      )
                    )
                  )
                )
              )
            ),

          // Tab: Overview
          activeTab === "overview" &&
            h(
              "div",
              { className: "space-y-6" },
              h(
                "div",
                { className: "bg-slate-50 p-5 rounded-2xl border border-slate-200" },
                h("h4", { className: "text-base font-bold text-navy-950 mb-2" }, "Tour Overview"),
                h("p", { className: "text-slate-600 text-sm leading-relaxed" }, pkg.overview)
              ),
              h(
                "div",
                { className: "bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80 space-y-3" },
                h(
                  "h4",
                  { className: "text-base font-bold text-amber-700 flex items-center gap-2" },
                  h(Icons.Info, { className: "w-5 h-5 text-amber-600" }),
                  "Important Information for Travellers"
                ),
                h(
                  "p",
                  { className: "text-slate-700 text-xs sm:text-sm leading-relaxed" },
                  pkg.importantNotes ||
                    "Valid government-issued photo ID is required for all passengers. Hotel check-in is usually at 12:00 Noon. All itineraries can be fully customized as per your arrival flight or train schedules."
                )
              )
            ),

          // Tab: Inclusions & Exclusions
          activeTab === "inclusions" &&
            h(
              "div",
              { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },

              // Inclusions Box
              h(
                "div",
                { className: "bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200" },
                h(
                  "h4",
                  { className: "text-sm font-bold text-emerald-800 flex items-center gap-2 mb-4" },
                  h(Icons.CheckCircle, { className: "w-4 h-4 text-emerald-600" }),
                  "What's Included in This Package"
                ),
                h(
                  "ul",
                  { className: "space-y-2.5 text-xs sm:text-sm text-slate-700" },
                  (pkg.inclusions || []).map((inc, i) =>
                    h(
                      "li",
                      { key: i, className: "flex items-start gap-2.5" },
                      h(Icons.Check, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }),
                      h("span", null, inc)
                    )
                  )
                )
              ),

              // Exclusions Box
              h(
                "div",
                { className: "bg-rose-50/70 p-5 rounded-2xl border border-rose-200" },
                h(
                  "h4",
                  { className: "text-sm font-bold text-rose-800 flex items-center gap-2 mb-4" },
                  h(Icons.X, { className: "w-4 h-4 text-rose-600" }),
                  "What's Excluded"
                ),
                h(
                  "ul",
                  { className: "space-y-2.5 text-xs sm:text-sm text-slate-700" },
                  (pkg.exclusions || []).map((exc, i) =>
                    h(
                      "li",
                      { key: i, className: "flex items-start gap-2.5" },
                      h(Icons.X, { className: "w-4 h-4 text-rose-600 shrink-0 mt-0.5" }),
                      h("span", null, exc)
                    )
                  )
                )
              )
            ),

          // Tab: Hotels & Transport
          activeTab === "hotels-transport" &&
            h(
              "div",
              { className: "space-y-6" },
              h(
                "div",
                { className: "bg-slate-50 p-5 rounded-2xl border border-slate-200" },
                h(
                  "h4",
                  { className: "text-sm font-bold text-amber-700 flex items-center gap-2 mb-2" },
                  h(Icons.Bed, { className: "w-4 h-4 text-amber-600" }),
                  "Hotel Accommodations"
                ),
                h("p", { className: "text-slate-600 text-xs sm:text-sm leading-relaxed" }, pkg.hotelDetails)
              ),
              h(
                "div",
                { className: "bg-slate-50 p-5 rounded-2xl border border-slate-200" },
                h(
                  "h4",
                  { className: "text-sm font-bold text-ocean-700 flex items-center gap-2 mb-2" },
                  h(Icons.Car, { className: "w-4 h-4 text-ocean-600" }),
                  "Dedicated Transportation"
                ),
                h("p", { className: "text-slate-600 text-xs sm:text-sm leading-relaxed" }, pkg.transportDetails)
              )
            )
        ),

        // Footer Actions Bar (Light Mode)
        h(
          "div",
          {
            className:
              "p-6 bg-slate-50 border-t border-slate-200 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4"
          },
          h(
            "div",
            null,
            h("span", { className: "text-xs text-slate-500 font-medium block" }, "Package Starting Price"),
            h(
              "div",
              { className: "flex items-baseline gap-1" },
              h(
                "span",
                { className: "text-2xl sm:text-3xl font-bold text-amber-600" },
                `₹${Number(pkg.startingPrice).toLocaleString('en-IN')}`
              ),
              h("span", { className: "text-xs text-slate-500" }, "/ person"),
              h("span", { className: "text-[11px] text-slate-400 ml-2" }, `(${pkg.priceNote || 'Customizable'})`)
            )
          ),
          h(
            "div",
            { className: "flex items-center gap-3 w-full sm:w-auto" },
            h(
              "button",
              {
                onClick: handleWhatsApp,
                className:
                  "flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-sm"
              },
              h(Icons.WhatsApp, { className: "w-4 h-4" }),
              "Enquire on WhatsApp"
            ),
            h(
              "button",
              {
                onClick: () => {
                  onClose();
                  onOpenEnquiry(pkg);
                },
                className:
                  "flex-1 sm:flex-initial bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md shadow-amber-500/20"
              },
              h(Icons.Send, { className: "w-4 h-4 text-navy-950" }),
              "Book / Custom Quote"
            )
          )
        )
      )
    );
  };
})();
