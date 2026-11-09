// Special Tour Categories Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h } = React;
  const Icons = window.Icons;

  window.SpecialCategories = function SpecialCategories({ onSelectCategory }) {
    const categories = [
      {
        id: "special",
        title: "Special Signature Tours",
        tagline: "Kashmir + Katra & 9 Devi Circuits",
        desc: "Exclusive combination packages merging spiritual darshans with Himalayan leisure stays and private cabs.",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
        badge: "Flagship Circuits",
        icon: Icons.Sparkles
      },
      {
        id: "religious",
        title: "Religious & Pilgrimage",
        tagline: "Vaishno Devi, Shivkhori & Golden Temple",
        desc: "Complete sacred journey assistance including Katra hotel, RFID Yatra slips, helicopter & battery car guidance.",
        image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
        badge: "Sacred Yatra",
        icon: Icons.Award
      },
      {
        id: "honeymoon",
        title: "Honeymoon Packages",
        tagline: "Romance in Kashmir & Dal Lake Houseboats",
        desc: "Candlelight dinners, flower bed setups, private shikara rides, and cozy hillside suites for newlyweds.",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
        badge: "Couples Special",
        icon: Icons.Heart
      },
      {
        id: "family",
        title: "Family Holidays",
        tagline: "Relaxed Pacing & Safe Kid-Friendly Stays",
        desc: "Carefully paced itineraries with comfortable vehicles, interconnecting rooms, and memorable scenic stops.",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
        badge: "All Generations",
        icon: Icons.Users
      },
      {
        id: "adventure",
        title: "Adventure Tours",
        tagline: "Leh Ladakh High Passes & Glaciers",
        desc: "Cross Khardung La, camp beside turquoise Pangong Lake, and ride double-humped camels in Nubra desert.",
        image: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?auto=format&fit=crop&w=800&q=80",
        badge: "Thrill Seekers",
        icon: Icons.Mountain
      },
      {
        id: "weekend",
        title: "Weekend Getaways",
        tagline: "Rejuvenating 3-4 Day Mountain Breaks",
        desc: "Quick escapes to Gulmarg, Pahalgam, Patnitop, Manali, and Dalhousie with door-to-door cab transfers.",
        image: "https://images.unsplash.com/photo-1583250846564-b77a77da4460?auto=format&fit=crop&w=800&q=80",
        badge: "Quick Escapes",
        icon: Icons.Clock
      },
      {
        id: "group",
        title: "Group Tours",
        tagline: "Large Pilgrimage Sangats & College Trips",
        desc: "Cost-effective luxury Tempo Travellers, group hotel bookings, buffet catering, and tour coordinator.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        badge: "Special Group Rates",
        icon: Icons.Users
      },
      {
        id: "corporate",
        title: "Corporate Tours & MICE",
        tagline: "Offsites, Conferences & International",
        desc: "Seamless company retreats, dealer meets, and incentive trips to Kashmir, Goa, and Dubai.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        badge: "Executive Class",
        icon: Icons.Compass
      },
      {
        id: "customized",
        title: "Customized Packages",
        tagline: "Your Wishlist, Your Schedule",
        desc: "Tell us your dream holiday, preferred hotels, and dates. Our Katra travel planners will tailor every detail.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        badge: "Bespoke Luxury",
        icon: Icons.Sparkles
      }
    ];

    return h(
      "section",
      { className: "py-20 bg-white relative overflow-hidden" },
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
            h(Icons.Sparkles, { className: "w-4 h-4 text-amber-500" }),
            "Travel Styles & Themes"
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mt-1 mb-4" },
            "Special Tour Categories"
          ),
          h(
            "p",
            { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
            "Whether you seek holy pilgrimage darshan, honeymoon romance, high-altitude mountain thrills, or leisurely family vacations, discover tailored themes suited to your travel aspiration."
          )
        ),

        // Grid of Categories
        h(
          "div",
          { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
          categories.map((cat) =>
            h(
              "div",
              {
                key: cat.id,
                onClick: () => onSelectCategory(cat.id),
                className:
                  "group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/80 hover:border-amber-400 hover:-translate-y-1.5"
              },

              // Background Image
              h("img", {
                src: cat.image,
                alt: cat.title,
                className:
                  "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              }),

              // Gradient Overlay
              h("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-black/20 group-hover:via-navy-950/70 transition-all"
              }),

              // Top Badge
              h(
                "div",
                { className: "absolute top-4 left-4" },
                h(
                  "span",
                  {
                    className:
                      "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500 text-navy-950 shadow-md"
                  },
                  cat.badge
                )
              ),

              // Bottom Content
              h(
                "div",
                { className: "absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end" },
                h(
                  "div",
                  {
                    className:
                      "w-10 h-10 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-navy-950 text-white transition-all duration-300"
                  },
                  h(cat.icon, { className: "w-5 h-5" })
                ),
                h(
                  "h3",
                  { className: "text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-tight mb-1" },
                  cat.title
                ),
                h(
                  "p",
                  { className: "text-xs text-amber-300 font-medium mb-2" },
                  cat.tagline
                ),
                h(
                  "p",
                  { className: "text-[11px] text-slate-200 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity" },
                  cat.desc
                ),
                h(
                  "div",
                  { className: "mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-amber-400" },
                  h("span", null, "View Packages"),
                  h(Icons.ChevronRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                )
              )
            )
          )
        )
      )
    );
  };
})();
