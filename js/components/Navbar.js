// Navigation Bar Component for Enjoy Holidays Tour and Travel, Katra
// Features Holiday Makers Travel structure with rich interactive dropdowns and options

(function() {
  const { createElement: h, useState, useEffect, useRef } = React;
  const Icons = window.Icons;

  window.Navbar = function Navbar({ activePage, setActivePage, onOpenEnquiry, onOpenAdmin, onSelectCategory, onSelectDestination }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const config = window.SITE_CONFIG;
    const navRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 30);
      };
      const handleClickOutside = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setActiveDropdown(null);
        }
      };
      window.addEventListener("scroll", handleScroll);
      document.addEventListener("click", handleClickOutside);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

    const handleNavClick = (pageId, subAction) => {
      setActivePage(pageId);
      setMobileMenuOpen(false);
      setActiveDropdown(null);
      if (subAction) subAction();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Dropdown Data Collections matching holidaymakerstravel.com
    const placesDropdown = [
      { id: "vaishno-devi-katra", name: "Vaishno Devi (Katra)", tag: "Holy Base Camp", icon: Icons.MapPin },
      { id: "srinagar", name: "Srinagar & Dal Lake", tag: "Houseboats & Shikara", icon: Icons.Mountain },
      { id: "gulmarg", name: "Gulmarg (Snow Valley)", tag: "Gondola Cable Car", icon: Icons.Sparkles },
      { id: "pahalgam", name: "Pahalgam & Betaab Valley", tag: "Pine Valleys & Lidder", icon: Icons.Compass },
      { id: "sonamarg", name: "Sonamarg Glaciers", tag: "Thajiwas Snow Point", icon: Icons.Mountain },
      { id: "leh", name: "Leh Ladakh & Pangong", tag: "Khardung La High Pass", icon: Icons.Camera },
      { id: "manali", name: "Manali & Solang Valley", tag: "Adventure Sports", icon: Icons.Compass },
      { id: "shimla", name: "Shimla & Khajjiar", tag: "Mini Switzerland", icon: Icons.MapPin },
      { id: "amritsar", name: "Amritsar Golden Temple", tag: "Wagah Border", icon: Icons.Award },
      { id: "dubai", name: "International (Dubai/Thailand)", tag: "World Holidays", icon: Icons.Compass }
    ];

    const exploreToursDropdown = [
      { id: "religious", name: "Pilgrim & Religious Tours", desc: "Vaishno Devi, Shivkhori & Temples", icon: Icons.Award },
      { id: "family", name: "Family Holidays", desc: "Relaxed pacing, verified hotels & cabs", icon: Icons.Users },
      { id: "honeymoon", name: "Honeymoon Special Tours", desc: "Candlelight dinners & luxury houseboats", icon: Icons.Heart },
      { id: "adventure", name: "Adventure & Trekking", desc: "Ladakh high passes & glacier treks", icon: Icons.Mountain },
      { id: "weekend", name: "Weekend Getaways", desc: "Quick 3-4 day rejuvenating mountain breaks", icon: Icons.Clock },
      { id: "group", name: "Group Tours & Sangats", desc: "Large pilgrimage Yatris & Tempo rentals", icon: Icons.Users }
    ];

    const specialToursDropdown = [
      { id: "kashmir-vaishnodevi-combined", name: "Kashmir & Vaishnodevi Combined", duration: "7D / 6N", desc: "Our flagship combined sacred and leisure holiday", icon: Icons.Sparkles },
      { id: "9-devi-darshan-tour", name: "9 Devi Darshan Temple Tour", duration: "7D / 6N", desc: "Vaishno Devi, Kangra Ji, Jwala Ji & Chintpurni", icon: Icons.Award },
      { id: "amritsar-dharamshala-katra", name: "Amritsar, Dharamshala & Katra", duration: "9D / 8N", desc: "Golden Temple, Dalhousie, and Mata Darshan", icon: Icons.Compass },
      { id: "andaman-island-escape", name: "Andaman Emerald Island Tour", duration: "5D / 4N", desc: "Havelock Radhanagar beach & coral cruise", icon: Icons.MapPin },
      { id: "nepal-himalayan-tour", name: "Nepal Himalayan Grandeur", duration: "6D / 5N", desc: "Kathmandu Pashupatinath & Pokhara Lake", icon: Icons.Mountain }
    ];

    const taxiDropdown = [
      { id: "katra-local-darshan", title: "Katra Local Taxi", desc: "Station, Hotel, Banganga & Helipad drops" },
      { id: "katra-jammu-railway", title: "Katra to Jammu Tawi Station", desc: "48 KM • Punctual train connection" },
      { id: "katra-jammu-airport", title: "Katra to Jammu Airport", desc: "52 KM • Flight tracking assistance" },
      { id: "katra-to-srinagar", title: "Katra to Srinagar Highway", desc: "250 KM • Comfortable valley scenic drive" },
      { id: "kashmir-complete-tour-taxi", title: "Complete Kashmir Tour Taxi", desc: "Multi-day dedicated cab for full trip" },
      { id: "katra-amritsar-outstation", title: "Outstation Cabs", desc: "Amritsar, Dharamshala, Shimla & Manali" }
    ];

    const hotelsDropdown = [
      { title: "Katra Pilgrimage Stays", desc: "Verified hotels near Railway Station & Yatra Track" },
      { title: "Traditional Dal Lake Houseboats", desc: "Carved pinewood luxury floating suites with meals" },
      { title: "Kashmir Valley Resorts", desc: "Scenic mountain & riverside stays in Gulmarg & Pahalgam" },
      { title: "Ladakh Glamping Camps", desc: "Heated rooms in Leh and luxury Swiss camps at Pangong" },
      { title: "Himachal Pine Resorts", desc: "Riverside properties in Manali and Mall Road in Shimla" }
    ];

    return h(
      "header",
      { ref: navRef, className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300" },

      // --- 1. Top Contact & Katra Desk Bar ---
      h(
        "div",
        {
          className: `bg-navy-900 text-slate-200 text-xs py-2 px-4 transition-all duration-300 border-b border-navy-800 ${
            isScrolled ? "hidden md:block py-1 text-[11px]" : "block"
          }`
        },
        h(
          "div",
          { className: "max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2" },
          // Left: Location & 24/7 Pilgrimage Support
          h(
            "div",
            { className: "flex items-center gap-4 flex-wrap" },
            h(
              "span",
              { className: "flex items-center gap-1.5 text-amber-400 font-bold" },
              h(Icons.MapPin, { className: "w-3.5 h-3.5 text-amber-400" }),
              "Katra, Jammu & Kashmir, India"
            ),
            h(
              "span",
              { className: "hidden sm:inline-flex items-center gap-1.5 text-slate-300 font-medium" },
              h(Icons.Clock, { className: "w-3.5 h-3.5 text-sky-400" }),
              "24/7 Vaishno Devi Yatra & Tour Assistance"
            )
          ),
          // Right: Phones, Email, Admin
          h(
            "div",
            { className: "flex items-center gap-4 flex-wrap ml-auto" },
            h(
              "a",
              {
                href: `tel:${config.contact.primaryPhone.replace(/\s+/g, '')}`,
                className: "flex items-center gap-1.5 hover:text-white transition-colors font-bold text-slate-100"
              },
              h(Icons.Phone, { className: "w-3.5 h-3.5 text-emerald-400" }),
              h("span", null, config.contact.primaryPhone)
            ),
            h(
              "a",
              {
                href: `mailto:${config.contact.email}`,
                className: "hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
              },
              h(Icons.Mail, { className: "w-3.5 h-3.5 text-sky-400" }),
              h("span", null, config.contact.email)
            ),
            h(
              "button",
              {
                onClick: onOpenAdmin,
                className: "flex items-center gap-1 text-[11px] bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white px-2 py-0.5 rounded transition-colors"
              },
              h(Icons.Lock, { className: "w-3 h-3 text-amber-400" }),
              "Admin"
            )
          )
        )
      ),

      // --- 2. Main Sticky Navigation with Options & Dropdowns ---
      h(
        "nav",
        {
          className: `transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200"
              : "bg-white/90 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-200/60"
          }`
        },
        h(
          "div",
          { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" },

          // Brand Logo — Real Business Logo Image
          h(
            "div",
            {
              onClick: () => handleNavClick("home"),
              className: "cursor-pointer flex items-center gap-2 group shrink-0"
            },
            h("img", {
              src: "assets/images/logo.jpg",
              alt: "Enjoy Holidays Tour and Travel - Katra",
              className: "h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-sm",
              onError: function(e) {
                e.target.style.display = "none";
                e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
              }
            }),
            // Fallback text logo (shown only if image fails to load)
            h(
              "div",
              { className: "hidden flex-col" },
              h(
                "span",
                {
                  className:
                    "font-serif tracking-wider font-bold text-lg sm:text-xl text-navy-950 group-hover:text-ocean-600 transition-colors uppercase leading-tight"
                },
                "ENJOY HOLIDAYS"
              ),
              h(
                "div",
                { className: "flex items-center gap-1.5" },
                h(
                  "span",
                  { className: "text-[10px] sm:text-xs font-bold tracking-widest text-amber-600 uppercase" },
                  "TOUR AND TRAVEL"
                ),
                h("span", { className: "text-[10px] text-slate-500 font-medium" }, "• Katra (J&K)")
              )
            )
          ),

          // Desktop Navigation Links with Dropdowns (Holiday Makers Inspired)
          h(
            "div",
            { className: "hidden xl:flex items-center gap-1" },

            // 1. Home
            h(
              "button",
              {
                onClick: () => handleNavClick("home"),
                className: `px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  activePage === "home" ? "text-ocean-600 bg-ocean-50/80" : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                }`
              },
              "Home"
            ),

            // 2. About Us
            h(
              "button",
              {
                onClick: () => handleNavClick("about"),
                className: `px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  activePage === "about" ? "text-ocean-600 bg-ocean-50/80" : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                }`
              },
              "About Us"
            ),

            // 3. Places / Destinations Dropdown
            h(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setActiveDropdown("places"),
                onMouseLeave: () => setActiveDropdown(null)
              },
              h(
                "button",
                {
                  onClick: () => handleNavClick("destinations"),
                  className: `px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    activePage === "destinations" || activeDropdown === "places"
                      ? "text-ocean-600 bg-ocean-50/80"
                      : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                  }`
                },
                "Places",
                h(Icons.ChevronDown, { className: "w-3.5 h-3.5" })
              ),
              activeDropdown === "places" &&
                h(
                  "div",
                  {
                    className:
                      "absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid grid-cols-1 gap-1 animate-fade-in z-50"
                  },
                  h("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-100" }, "Popular Destinations"),
                  placesDropdown.map((p) =>
                    h(
                      "div",
                      {
                        key: p.id,
                        onClick: () => {
                          handleNavClick("destinations");
                          if (onSelectDestination) onSelectDestination({ name: p.name });
                        },
                        className:
                          "flex items-center justify-between p-2 rounded-xl hover:bg-ocean-50 cursor-pointer transition-colors group"
                      },
                      h(
                        "div",
                        { className: "flex items-center gap-2.5" },
                        h(p.icon, { className: "w-4 h-4 text-ocean-600 group-hover:scale-110 transition-transform" }),
                        h(
                          "div",
                          null,
                          h("span", { className: "text-xs font-bold text-navy-950 block group-hover:text-ocean-600" }, p.name),
                          h("span", { className: "text-[10px] text-slate-500 font-medium block" }, p.tag)
                        )
                      ),
                      h(Icons.ChevronRight, { className: "w-3.5 h-3.5 text-slate-300 group-hover:text-ocean-600 group-hover:translate-x-0.5 transition-all" })
                    )
                  ),
                  h(
                    "div",
                    {
                      onClick: () => handleNavClick("destinations"),
                      className: "pt-2 mt-1 border-t border-slate-100 text-center text-xs font-bold text-ocean-600 hover:text-ocean-700 cursor-pointer"
                    },
                    "View All Destinations ➔"
                  )
                )
            ),

            // 4. Explore Tours Dropdown (By Style)
            h(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setActiveDropdown("explore"),
                onMouseLeave: () => setActiveDropdown(null)
              },
              h(
                "button",
                {
                  onClick: () => handleNavClick("packages"),
                  className: `px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    activePage === "packages" || activeDropdown === "explore"
                      ? "text-ocean-600 bg-ocean-50/80"
                      : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                  }`
                },
                "Explore Tours",
                h(Icons.ChevronDown, { className: "w-3.5 h-3.5" })
              ),
              activeDropdown === "explore" &&
                h(
                  "div",
                  {
                    className:
                      "absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid grid-cols-1 gap-1 animate-fade-in z-50"
                  },
                  h("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-100" }, "Browse by Travel Style"),
                  exploreToursDropdown.map((cat) =>
                    h(
                      "div",
                      {
                        key: cat.id,
                        onClick: () => {
                          handleNavClick("packages");
                          if (onSelectCategory) onSelectCategory(cat.id);
                        },
                        className:
                          "flex items-center justify-between p-2 rounded-xl hover:bg-amber-50 cursor-pointer transition-colors group"
                      },
                      h(
                        "div",
                        { className: "flex items-center gap-2.5" },
                        h(cat.icon, { className: "w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" }),
                        h(
                          "div",
                          null,
                          h("span", { className: "text-xs font-bold text-navy-950 block group-hover:text-amber-600" }, cat.name),
                          h("span", { className: "text-[10px] text-slate-500 font-medium block" }, cat.desc)
                        )
                      ),
                      h(Icons.ChevronRight, { className: "w-3.5 h-3.5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" })
                    )
                  ),
                  h(
                    "div",
                    {
                      onClick: () => handleNavClick("packages"),
                      className: "pt-2 mt-1 border-t border-slate-100 text-center text-xs font-bold text-amber-600 hover:text-amber-700 cursor-pointer"
                    },
                    "View All Tour Packages ➔"
                  )
                )
            ),

            // 5. Special Tours Dropdown (Holiday Makers Flagship Packages)
            h(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setActiveDropdown("special"),
                onMouseLeave: () => setActiveDropdown(null)
              },
              h(
                "button",
                {
                  onClick: () => handleNavClick("packages"),
                  className: `px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    activeDropdown === "special"
                      ? "text-ocean-600 bg-ocean-50/80"
                      : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                  }`
                },
                "Special Tours",
                h(
                  "span",
                  { className: "px-1.5 py-0.2 rounded bg-amber-500 text-navy-950 text-[9px] font-bold uppercase" },
                  "Featured"
                ),
                h(Icons.ChevronDown, { className: "w-3.5 h-3.5" })
              ),
              activeDropdown === "special" &&
                h(
                  "div",
                  {
                    className:
                      "absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid grid-cols-1 gap-1 animate-fade-in z-50"
                  },
                  h("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-100" }, "Katra Signature Combined Tours"),
                  specialToursDropdown.map((sp) =>
                    h(
                      "div",
                      {
                        key: sp.id,
                        onClick: () => {
                          handleNavClick("packages");
                          if (onSelectCategory) onSelectCategory("special");
                        },
                        className:
                          "flex items-center justify-between p-2.5 rounded-xl hover:bg-ocean-50 cursor-pointer transition-colors group"
                      },
                      h(
                        "div",
                        { className: "flex items-start gap-2.5" },
                        h(sp.icon, { className: "w-4 h-4 text-ocean-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" }),
                        h(
                          "div",
                          null,
                          h("div", { className: "flex items-center gap-2" },
                            h("span", { className: "text-xs font-bold text-navy-950 group-hover:text-ocean-600 leading-tight" }, sp.name),
                            h("span", { className: "text-[9px] font-bold px-1.5 rounded bg-ocean-100 text-ocean-700" }, sp.duration)
                          ),
                          h("span", { className: "text-[10px] text-slate-500 font-medium block mt-0.5 leading-tight" }, sp.desc)
                        )
                      ),
                      h(Icons.ChevronRight, { className: "w-3.5 h-3.5 text-slate-300 group-hover:text-ocean-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" })
                    )
                  ),
                  h(
                    "div",
                    {
                      onClick: () => {
                        handleNavClick("packages");
                        if (onSelectCategory) onSelectCategory("special");
                      },
                      className: "pt-2 mt-1 border-t border-slate-100 text-center text-xs font-bold text-ocean-600 hover:text-ocean-700 cursor-pointer"
                    },
                    "Explore All Special Tours ➔"
                  )
                )
            ),

            // 6. Taxi Services Dropdown
            h(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setActiveDropdown("taxi"),
                onMouseLeave: () => setActiveDropdown(null)
              },
              h(
                "button",
                {
                  onClick: () => handleNavClick("taxi"),
                  className: `px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    activePage === "taxi" || activeDropdown === "taxi"
                      ? "text-ocean-600 bg-ocean-50/80"
                      : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                  }`
                },
                "Taxi Services",
                h(Icons.ChevronDown, { className: "w-3.5 h-3.5" })
              ),
              activeDropdown === "taxi" &&
                h(
                  "div",
                  {
                    className:
                      "absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid grid-cols-1 gap-1 animate-fade-in z-50"
                  },
                  h("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-100" }, "Katra & Kashmir Cab Routes"),
                  taxiDropdown.map((tx, idx) =>
                    h(
                      "div",
                      {
                        key: idx,
                        onClick: () => handleNavClick("taxi"),
                        className:
                          "p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group"
                      },
                      h("span", { className: "text-xs font-bold text-navy-950 block group-hover:text-ocean-600" }, tx.title),
                      h("span", { className: "text-[10px] text-slate-500 block font-medium" }, tx.desc)
                    )
                  ),
                  h(
                    "div",
                    {
                      onClick: () => handleNavClick("taxi"),
                      className: "pt-2 mt-1 border-t border-slate-100 text-center text-xs font-bold text-ocean-600 hover:text-ocean-700 cursor-pointer"
                    },
                    "View Vehicle Fleet & Fares ➔"
                  )
                )
            ),

            // 7. Hotels Dropdown
            h(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setActiveDropdown("hotels"),
                onMouseLeave: () => setActiveDropdown(null)
              },
              h(
                "button",
                {
                  onClick: () => handleNavClick("hotels"),
                  className: `px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    activePage === "hotels" || activeDropdown === "hotels"
                      ? "text-ocean-600 bg-ocean-50/80"
                      : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                  }`
                },
                "Hotels",
                h(Icons.ChevronDown, { className: "w-3.5 h-3.5" })
              ),
              activeDropdown === "hotels" &&
                h(
                  "div",
                  {
                    className:
                      "absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid grid-cols-1 gap-1 animate-fade-in z-50"
                  },
                  h("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-100" }, "Accommodation Guidance"),
                  hotelsDropdown.map((ht, idx) =>
                    h(
                      "div",
                      {
                        key: idx,
                        onClick: () => handleNavClick("hotels"),
                        className:
                          "p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group"
                      },
                      h("span", { className: "text-xs font-bold text-navy-950 block group-hover:text-ocean-600" }, ht.title),
                      h("span", { className: "text-[10px] text-slate-500 block font-medium" }, ht.desc)
                    )
                  ),
                  h(
                    "div",
                    {
                      onClick: () => handleNavClick("hotels"),
                      className: "pt-2 mt-1 border-t border-slate-100 text-center text-xs font-bold text-ocean-600 hover:text-ocean-700 cursor-pointer"
                    },
                    "Submit Hotel Requirements ➔"
                  )
                )
            ),

            // 8. Gallery
            h(
              "button",
              {
                onClick: () => handleNavClick("gallery"),
                className: `px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  activePage === "gallery" ? "text-ocean-600 bg-ocean-50/80" : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                }`
              },
              "Gallery"
            ),

            // 9. Contact Us
            h(
              "button",
              {
                onClick: () => handleNavClick("contact"),
                className: `px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  activePage === "contact" ? "text-ocean-600 bg-ocean-50/80" : "text-slate-700 hover:text-ocean-600 hover:bg-slate-100"
                }`
              },
              "Contact"
            )
          ),

          // Action Buttons: WhatsApp & Book Now
          h(
            "div",
            { className: "hidden sm:flex items-center gap-2.5 shrink-0" },
            h(
              "a",
              {
                href: `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
                  config.whatsappMessages.general
                )}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-sm transition-all"
              },
              h(Icons.WhatsApp, { className: "w-4 h-4" }),
              "WhatsApp"
            ),
            h(
              "button",
              {
                onClick: () => onOpenEnquiry(),
                className:
                  "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-lg transition-all flex items-center gap-1.5"
              },
              h(Icons.Sparkles, { className: "w-4 h-4 text-navy-950" }),
              "Book Now"
            )
          ),

          // Mobile Hamburger Button
          h(
            "button",
            {
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              className: "xl:hidden p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
            },
            mobileMenuOpen ? h(Icons.X, { className: "w-6 h-6" }) : h(Icons.Menu, { className: "w-6 h-6" })
          )
        )
      ),

      // --- 3. Mobile Drawer Menu with Submenus ---
      mobileMenuOpen &&
        h(
          "div",
          {
            className:
              "xl:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-fade-in"
          },
          h(
            "div",
            { className: "flex flex-col space-y-1" },

            // Mobile Links
            h(
              "button",
              {
                onClick: () => handleNavClick("home"),
                className: `text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                  activePage === "home" ? "bg-ocean-50 text-ocean-600" : "text-slate-800 hover:bg-slate-50"
                }`
              },
              "Home"
            ),
            h(
              "button",
              {
                onClick: () => handleNavClick("about"),
                className: `text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                  activePage === "about" ? "bg-ocean-50 text-ocean-600" : "text-slate-800 hover:bg-slate-50"
                }`
              },
              "About Us"
            ),

            // Mobile Places
            h(
              "div",
              null,
              h(
                "button",
                {
                  onClick: () => setMobileSubmenu(mobileSubmenu === "places" ? null : "places"),
                  className: "w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50"
                },
                "Places / Destinations",
                h(Icons.ChevronDown, { className: `w-4 h-4 transition-transform ${mobileSubmenu === "places" ? "rotate-180" : ""}` })
              ),
              mobileSubmenu === "places" &&
                h(
                  "div",
                  { className: "pl-4 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200" },
                  placesDropdown.map((p) =>
                    h(
                      "button",
                      {
                        key: p.id,
                        onClick: () => {
                          handleNavClick("destinations");
                          if (onSelectDestination) onSelectDestination({ name: p.name });
                        },
                        className: "w-full text-left py-1.5 px-2 text-xs font-semibold text-slate-700 hover:text-ocean-600 block"
                      },
                      `• ${p.name}`
                    )
                  )
                )
            ),

            // Mobile Explore Tours
            h(
              "div",
              null,
              h(
                "button",
                {
                  onClick: () => setMobileSubmenu(mobileSubmenu === "explore" ? null : "explore"),
                  className: "w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50"
                },
                "Explore Tours (By Style)",
                h(Icons.ChevronDown, { className: `w-4 h-4 transition-transform ${mobileSubmenu === "explore" ? "rotate-180" : ""}` })
              ),
              mobileSubmenu === "explore" &&
                h(
                  "div",
                  { className: "pl-4 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200" },
                  exploreToursDropdown.map((cat) =>
                    h(
                      "button",
                      {
                        key: cat.id,
                        onClick: () => {
                          handleNavClick("packages");
                          if (onSelectCategory) onSelectCategory(cat.id);
                        },
                        className: "w-full text-left py-1.5 px-2 text-xs font-semibold text-slate-700 hover:text-amber-600 block"
                      },
                      `• ${cat.name}`
                    )
                  )
                )
            ),

            // Mobile Special Tours
            h(
              "div",
              null,
              h(
                "button",
                {
                  onClick: () => setMobileSubmenu(mobileSubmenu === "special" ? null : "special"),
                  className: "w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50"
                },
                "Special Signature Tours",
                h(Icons.ChevronDown, { className: `w-4 h-4 transition-transform ${mobileSubmenu === "special" ? "rotate-180" : ""}` })
              ),
              mobileSubmenu === "special" &&
                h(
                  "div",
                  { className: "pl-4 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200" },
                  specialToursDropdown.map((sp) =>
                    h(
                      "button",
                      {
                        key: sp.id,
                        onClick: () => {
                          handleNavClick("packages");
                          if (onSelectCategory) onSelectCategory("special");
                        },
                        className: "w-full text-left py-1.5 px-2 text-xs font-semibold text-slate-700 hover:text-ocean-600 block"
                      },
                      `• ${sp.name} (${sp.duration})`
                    )
                  )
                )
            ),

            // Mobile Taxi Services
            h(
              "button",
              {
                onClick: () => handleNavClick("taxi"),
                className: `text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                  activePage === "taxi" ? "bg-ocean-50 text-ocean-600" : "text-slate-800 hover:bg-slate-50"
                }`
              },
              "Taxi Services (Katra Fleet)"
            ),

            // Mobile Hotels
            h(
              "button",
              {
                onClick: () => handleNavClick("hotels"),
                className: `text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                  activePage === "hotels" ? "bg-ocean-50 text-ocean-600" : "text-slate-800 hover:bg-slate-50"
                }`
              },
              "Hotels & Houseboats"
            ),

            // Mobile Gallery
            h(
              "button",
              {
                onClick: () => handleNavClick("gallery"),
                className: `text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                  activePage === "gallery" ? "bg-ocean-50 text-ocean-600" : "text-slate-800 hover:bg-slate-50"
                }`
              },
              "Photo Gallery"
            ),

            // Mobile Contact
            h(
              "button",
              {
                onClick: () => handleNavClick("contact"),
                className: `text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                  activePage === "contact" ? "bg-ocean-50 text-ocean-600" : "text-slate-800 hover:bg-slate-50"
                }`
              },
              "Contact Us"
            ),

            // Action Buttons in Mobile
            h("div", { className: "pt-3 border-t border-slate-200 flex flex-col gap-2" },
              h(
                "button",
                {
                  onClick: () => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  },
                  className:
                    "w-full bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
                },
                h(Icons.Sparkles, { className: "w-4 h-4" }),
                "Book Now / Plan Trip"
              ),
              h(
                "a",
                {
                  href: `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
                    config.whatsappMessages.general
                  )}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
                },
                h(Icons.WhatsApp, { className: "w-4 h-4" }),
                "Chat on WhatsApp"
              ),
              h(
                "a",
                {
                  href: `tel:${config.contact.primaryPhone.replace(/\s+/g, '')}`,
                  className:
                    "w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 rounded-xl flex items-center justify-center gap-2 text-xs"
                },
                h(Icons.Phone, { className: "w-3.5 h-3.5 text-emerald-600" }),
                `Call Katra Desk: ${config.contact.primaryPhone}`
              )
            )
          )
        )
    );
  };
})();
