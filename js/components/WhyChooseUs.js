// Why Choose Enjoy Holidays Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h } = React;
  const Icons = window.Icons;

  window.WhyChooseUs = function WhyChooseUs({ onPlanTrip }) {
    const pillars = [
      {
        icon: Icons.Sparkles,
        title: "Customized Holiday Packages",
        desc: "Every traveller is unique. We tailor day-wise itineraries, hotel tiers, and sightseeing to match your personal pace, family requirements, and budget."
      },
      {
        icon: Icons.ShieldCheck,
        title: "Affordable Travel Solutions",
        desc: "Honest, transparent quotations with zero hidden surprises. High-value holiday itineraries that balance luxury and savings."
      },
      {
        icon: Icons.Car,
        title: "Comfortable Transportation",
        desc: "Modern, air-conditioned and well-maintained fleet (Innova Crysta, Dzire, Tempo Travellers) driven by polite, licensed mountain-certified chauffeurs."
      },
      {
        icon: Icons.Bed,
        title: "Hotel Booking Assistance",
        desc: "Direct partnerships with verified hotels and traditional Dal Lake houseboats offering clean rooms, scenic views, and quality dining."
      },
      {
        icon: Icons.Award,
        title: "Experienced Travel Support",
        desc: "Deep destination insight across Jammu, Katra, Kashmir, Ladakh, and Himachal to help you choose the best season, routes, and timing."
      },
      {
        icon: Icons.Users,
        title: "Personalized Customer Service",
        desc: "Dedicated trip coordinator assigned to your booking to assist you right from first enquiry until you return safely back home."
      },
      {
        icon: Icons.Compass,
        title: "Hassle-Free Travel Planning",
        desc: "We handle all logistics—station/airport pickups, sightseeing permits, gondola guidance, and route management so you can relax completely."
      },
      {
        icon: Icons.MapPin,
        title: "Local Katra Travel Assistance",
        desc: "Headquartered right in Katra, we provide genuine on-ground support for Mata Vaishno Devi pilgrims, RFID slips, helipad drops, and Shivkhori tours."
      }
    ];

    return h(
      "section",
      { className: "py-20 bg-slate-50 relative overflow-hidden" },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },

        // Section Title
        h(
          "div",
          { className: "text-center max-w-3xl mx-auto mb-14" },
          h(
            "span",
            {
              className:
                "text-amber-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 inline-flex items-center gap-1.5"
            },
            h(Icons.ShieldCheck, { className: "w-4 h-4 text-amber-500" }),
            "The Enjoy Holidays Distinction"
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mt-1 mb-4" },
            "Why Choose Enjoy Holidays Tour and Travel?"
          ),
          h(
            "p",
            { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
            "Headquartered at the sacred foothills of Katra, Jammu & Kashmir, we combine intimate regional knowledge with dependable travel logistics to make your vacation effortless and memorable."
          )
        ),

        // Grid of 8 Pillars (Crisp White Cards)
        h(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" },
          pillars.map((item, idx) =>
            h(
              "div",
              {
                key: idx,
                className:
                  "bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-amber-400 shadow-md hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              },
              h(
                "div",
                null,
                h(
                  "div",
                  {
                    className:
                      "w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-5"
                  },
                  h(item.icon, { className: "w-6 h-6" })
                ),
                h(
                  "h3",
                  { className: "text-base font-serif font-bold text-navy-950 mb-2.5 leading-snug" },
                  item.title
                ),
                h(
                  "p",
                  { className: "text-xs sm:text-sm text-slate-600 leading-relaxed font-normal" },
                  item.desc
                )
              )
            )
          )
        ),

        // Bottom CTA Banner (Regal Navy Accent Banner)
        h(
          "div",
          {
            className:
              "mt-14 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 sm:p-8 rounded-2xl border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          },
          h(
            "div",
            { className: "text-center md:text-left" },
            h(
              "h4",
              { className: "text-xl font-serif font-bold text-white mb-1" },
              "Ready to Plan Your Dream Journey with Katra's Specialists?"
            ),
            h(
              "p",
              { className: "text-slate-300 text-xs sm:text-sm" },
              "Get an instant custom quote with complete hotel options and dedicated private cab."
            )
          ),
          h(
            "button",
            {
              onClick: onPlanTrip,
              className:
                "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm shrink-0 flex items-center gap-2"
            },
            h(Icons.Calendar, { className: "w-4 h-4 text-navy-950" }),
            "Request Custom Quotation"
          )
        )
      )
    );
  };
})();
