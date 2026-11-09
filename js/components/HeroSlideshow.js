// Premium Cinematic Hero Slideshow — Enjoy Holidays Tour and Travel, Katra
// Uses ALL original business photographs from Katra office with smooth Ken Burns effect & crossfade transitions

(function () {
  const { createElement: h, useState, useEffect, useRef, useCallback } = React;
  const Icons = window.Icons;

  // ─── COMPLETE COLLECTION OF ORIGINAL KATRA PHOTOGRAPHS ───────────────────
  const SLIDES = [
    {
      id: 1,
      src: "assets/images/unnamed (9).webp",
      alt: "Mata Vaishno Devi Holy Bhavan in Trikuta Hills",
      tag: "Shri Mata Vaishno Devi Yatra",
      caption: "Explore the Beauty of Incredible Destinations",
      subtitle: "Discover Kashmir, Vaishno Devi, Ladakh and unforgettable holiday experiences with Enjoy Holidays Tour and Travel.",
      zoomDir: "in",
      overlayStrength: "strong"
    },
    {
      id: 2,
      src: "assets/images/unnamed.webp",
      alt: "Hotel Sanjeev Palace — Opposite Our Katra Office",
      tag: "Katra Base Camp • Ban Ganga Road",
      caption: "Your Trusted Holiday Partner in Katra",
      subtitle: "Situated right on Ban Ganga Road opposite Hotel Sanjeev Palace, providing complete yatra and hotel booking assistance.",
      zoomDir: "out",
      overlayStrength: "medium"
    },
    {
      id: 3,
      src: "assets/images/unnamed (1).webp",
      alt: "Dalhousie Dharamshala McLeodganj Himachal Holiday Package",
      tag: "Himachal Pilgrimage & Leisure Circuit",
      caption: "Explore the Majestic Valleys of Himachal",
      subtitle: "Dalhousie, Khajjiar Mini Switzerland, Dharamshala HPCA stadium, McLeodganj & holy Chamunda Jawala Devi darshan.",
      zoomDir: "in",
      overlayStrength: "medium"
    },
    {
      id: 4,
      src: "assets/images/unnamed (13).webp",
      tag: "Special Group Tour Package",
      caption: "Vaishno Devi With Kashmir Grand Tour",
      subtitle: "7 Nights / 8 Days complete group tour with dedicated tour manager, verified 3-star stays, meals, and private transport.",
      src2: "assets/images/unnamed (13).webp",
      alt: "Vaishno Devi with Kashmir Group Tour Package",
      zoomDir: "out",
      overlayStrength: "strong"
    },
    {
      id: 5,
      src: "assets/images/unnamed (7).webp",
      alt: "Enjoy Holiday Tour & Travel Office Lounge",
      tag: "Welcome to Our Katra Office",
      caption: "Customized Holiday Planning Just For You",
      subtitle: "Personalized itineraries for Kashmir paradise tours, Mata Vaishno Devi darshan, Ladakh safaris, and Himachal retreats.",
      zoomDir: "in",
      overlayStrength: "medium"
    },
    {
      id: 6,
      src: "assets/images/unnamed (4).webp",
      alt: "Super High Deck Volvo Luxury Sleeper Coach",
      tag: "Fleet & Transportation Services",
      caption: "Premium Volvo Coaches & Group Travel",
      subtitle: "Safe, spacious, and air-conditioned luxury bus rentals for family pilgrimages, community sangats, and corporate groups.",
      zoomDir: "out",
      overlayStrength: "medium"
    },
    {
      id: 7,
      src: "assets/images/unnamed (2).webp",
      alt: "Luxury AC Bus Interior with Reclining Seats & Ambient Lights",
      tag: "Travel in Absolute Comfort",
      caption: "Superior Interior Comfort On Mountain Roads",
      subtitle: "Ergonomic pushback seats, individual climate vents, and clean, sanitized interiors driven by expert hill chauffeurs.",
      zoomDir: "in",
      overlayStrength: "medium"
    },
    {
      id: 8,
      src: "assets/images/unnamed (3).webp",
      alt: "Force Tempo Traveller — Katra Fleet (JK20C 4434)",
      tag: "Katra Station & Helipad Taxi",
      caption: "Dedicated Tempo Travellers & Private Cabs",
      subtitle: "Prompt transfers from Katra Railway Station, Jammu Tawi, Jammu Airport, and sightseeing to Shivkhori & Patnitop.",
      zoomDir: "out",
      overlayStrength: "medium"
    },
    {
      id: 9,
      src: "assets/images/unnamed (6).webp",
      alt: "New Kia Private Commercial Taxi Added to Katra Fleet",
      tag: "Modern Fleet Expansion",
      caption: "Modern, Reliable Vehicles for Every Route",
      subtitle: "Swift Dzire, Ertiga, Toyota Innova Crysta, and latest family cruisers maintained in pristine condition.",
      zoomDir: "in",
      overlayStrength: "light"
    },
    {
      id: 10,
      src: "assets/images/unnamed (8).webp",
      alt: "Happy Pilgrims Blessed with Sacred Prasad",
      tag: "Verified 4.8 / 5.0 Google Rating",
      caption: "Cherished Pilgrimage Memories That Last a Lifetime",
      subtitle: "Every pilgrim is received with heartfelt hospitality, traditional Mata ki chunni, and seamless base camp coordination.",
      zoomDir: "out",
      overlayStrength: "medium"
    },
    {
      id: 11,
      src: "assets/images/unnamed (10).webp",
      alt: "Group Yatris Received with Holy Prasad Frames",
      tag: "Pilgrim Care & Traditional Warmth",
      caption: "Thousands of Families Trust Enjoy Holidays",
      subtitle: "From seniors needing battery car & helicopter assistance to young families, we handle every detail with care.",
      zoomDir: "in",
      overlayStrength: "medium"
    },
    {
      id: 12,
      src: "assets/images/unnamed (11).webp",
      alt: "Happy Couple Felicitated at Katra Hotel",
      tag: "Personalized Customer Care",
      caption: "Honeymoon & Couple Pilgrimage Specials",
      subtitle: "Romantic stays in Kashmir houseboats combined with holy Vaishno Devi blessings — customized to your schedule.",
      zoomDir: "out",
      overlayStrength: "medium"
    },
    {
      id: 13,
      src: "assets/images/unnamed (5).webp",
      alt: "Enjoy Holidays Travel Consultant at Work",
      tag: "Ban Ganga Road, Katra • 7 Days Open",
      caption: "Visit Us In Katra or Call Us 24/7",
      subtitle: "Our travel experts are always ready to guide you on real-time weather, yatra registrations, road status, and best fares.",
      zoomDir: "in",
      overlayStrength: "medium"
    },
    {
      id: 14,
      src: "assets/images/unnamed.jpg",
      alt: "Enjoy Holiday Tour & Travel Office Lounge",
      tag: "Government Registered Travel Operator",
      caption: "Your Journey, Our Passion — Travel with Confidence",
      subtitle: "Transparent pricing, verified hotels, sanitized vehicles, and respectful local Katra hospitality.",
      zoomDir: "out",
      overlayStrength: "medium"
    }
  ];

  const SLIDE_DURATION = 5500;   // 5.5 seconds per slide
  const TRANSITION_MS  = 1200;   // 1.2s smooth crossfade

  // ─── COMPONENT ────────────────────────────────────────────────────────────
  window.HeroSlideshow = function HeroSlideshow({ onExploreDestinations, onPlanTrip, onOpenEnquiry }) {
    const config = window.SITE_CONFIG;
    const [current, setCurrent]             = useState(0);
    const [prev, setPrev]                   = useState(null);
    const [transitioning, setTransitioning] = useState(false);
    const [isPlaying, setIsPlaying]         = useState(true);
    const [hovered, setHovered]             = useState(false);
    const [showThumbs, setShowThumbs]       = useState(false);
    const timerRef                          = useRef(null);
    const totalSlides                       = SLIDES.length;

    // Navigate to slide
    const goTo = useCallback((idx) => {
      if (transitioning || idx === current) return;
      setTransitioning(true);
      setPrev(current);
      setCurrent(idx);
      setTimeout(() => {
        setPrev(null);
        setTransitioning(false);
      }, TRANSITION_MS);
    }, [current, transitioning]);

    const next = useCallback(() => {
      goTo((current + 1) % totalSlides);
    }, [current, totalSlides, goTo]);

    const prev_ = useCallback(() => {
      goTo((current - 1 + totalSlides) % totalSlides);
    }, [current, totalSlides, goTo]);

    // Automatic slide timer
    useEffect(() => {
      if (isPlaying && !hovered) {
        timerRef.current = setTimeout(next, SLIDE_DURATION);
      }
      return () => clearTimeout(timerRef.current);
    }, [current, isPlaying, hovered, next]);

    // Keyboard navigation (Left, Right, Space for Play/Pause)
    useEffect(() => {
      const handler = (e) => {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft")  prev_();
        if (e.key === " ") {
          e.preventDefault();
          setIsPlaying(p => !p);
        }
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [next, prev_]);

    const slide     = SLIDES[current];
    const prevSlide = prev !== null ? SLIDES[prev] : null;

    return h(
      "section",
      {
        id: "hero-slideshow",
        className: "relative w-full overflow-hidden bg-navy-950 select-none",
        style: { height: "100vh", minHeight: "600px", maxHeight: "980px" },
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false)
      },

      // ── 1. PREVIOUS SLIDE (FADES OUT) ─────────────────────────────────────
      prevSlide && h(
        "div",
        {
          key: "prev-" + prev,
          className: "absolute inset-0 z-10 pointer-events-none",
          style: { animation: `eh-fade-out ${TRANSITION_MS}ms ease-in-out forwards` }
        },
        h("img", {
          src: prevSlide.src,
          alt: prevSlide.alt,
          className: `absolute inset-0 w-full h-full object-cover object-center ${
            prevSlide.zoomDir === "in" ? "eh-kb-out" : "eh-kb-in"
          }`
        })
      ),

      // ── 2. CURRENT ACTIVE SLIDE (FADES IN & KEN BURNS ZOOM) ───────────────
      h(
        "div",
        {
          key: "curr-" + current,
          className: "absolute inset-0 z-20 pointer-events-none",
          style: { animation: `eh-fade-in ${TRANSITION_MS}ms ease-in-out forwards` }
        },
        h("img", {
          src: slide.src,
          alt: slide.alt,
          className: `absolute inset-0 w-full h-full object-cover object-center ${
            slide.zoomDir === "in" ? "eh-kb-in" : "eh-kb-out"
          }`,
          loading: "eager"
        }),

        // Cinematic Vignette Overlays (Ensures high text legibility & rich luxury depth)
        h("div", {
          className: "absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-navy-950/30"
        }),
        h("div", {
          className: "absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/40 to-transparent"
        })
      ),

      // ── 3. SILENT NEXT SLIDE PRELOADER ────────────────────────────────────
      h("img", {
        key: "preload-" + ((current + 1) % totalSlides),
        src: SLIDES[(current + 1) % totalSlides].src,
        alt: "",
        className: "hidden",
        loading: "eager",
        "aria-hidden": "true"
      }),

      // ── 4. FLOATING ELEGANT CONTENT OVERLAY ────────────────────────────────
      h(
        "div",
        {
          className:
            "relative z-30 h-full flex flex-col justify-end pb-24 sm:pb-28 lg:pb-32 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full pt-36 pointer-events-auto"
        },
        h(
          "div",
          {
            key: "text-" + current,
            className: "max-w-3xl",
            style: { animation: "eh-text-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" }
          },

          // Trust Badge & Tag
          h(
            "div",
            { className: "flex items-center gap-2.5 mb-3 flex-wrap" },
            h(
              "span",
              {
                className:
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm"
              },
              h(Icons.Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }),
              slide.tag
            ),
            h(
              "span",
              {
                className:
                  "hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold border border-white/20"
              },
              h(Icons.Star, { className: "w-3 h-3 text-amber-400 fill-amber-400" }),
              "4.8 / 5.0 Rated Operator"
            )
          ),

          // Main Heading
          h(
            "h1",
            {
              className:
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight drop-shadow-2xl mb-4"
            },
            slide.caption
          ),

          // Subtitle
          h(
            "p",
            {
              className:
                "text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed mb-8 drop-shadow font-normal max-w-2xl"
            },
            slide.subtitle
          ),

          // Action Buttons
          h(
            "div",
            { className: "flex flex-wrap items-center gap-3 sm:gap-4" },
            // Button 1: Explore Destinations
            h(
              "button",
              {
                onClick: onExploreDestinations,
                className:
                  "group bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-navy-950 font-bold px-6 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-105 flex items-center gap-2"
              },
              "Explore Destinations",
              h(Icons.ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ),
            // Button 2: Plan Your Holiday
            h(
              "button",
              {
                onClick: onPlanTrip || onOpenEnquiry,
                className:
                  "bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold px-6 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm border border-white/30 hover:border-white/60 transition-all hover:scale-105 shadow-lg"
              },
              "Plan Your Holiday"
            ),
            // Button 3: Instant WhatsApp
            h(
              "a",
              {
                href: `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
                  config.whatsappMessages.general
                )}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "hidden md:inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold px-5 py-3.5 rounded-xl text-xs sm:text-sm shadow-lg backdrop-blur-sm transition-all hover:scale-105"
              },
              h(Icons.WhatsApp, { className: "w-4 h-4" }),
              "Chat on WhatsApp"
            )
          )
        )
      ),

      // ── 5. LEFT & RIGHT NAVIGATION ARROWS ─────────────────────────────────
      h(
        "button",
        {
          onClick: prev_,
          className:
            "absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-navy-950/40 hover:bg-amber-500 text-white hover:text-navy-950 backdrop-blur-md border border-white/20 hover:border-amber-400 flex items-center justify-center transition-all hover:scale-110 shadow-2xl",
          "aria-label": "Previous slide"
        },
        h(Icons.ChevronLeft, { className: "w-6 h-6 stroke-[2.5]" })
      ),
      h(
        "button",
        {
          onClick: next,
          className:
            "absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-navy-950/40 hover:bg-amber-500 text-white hover:text-navy-950 backdrop-blur-md border border-white/20 hover:border-amber-400 flex items-center justify-center transition-all hover:scale-110 shadow-2xl",
          "aria-label": "Next slide"
        },
        h(Icons.ChevronRight, { className: "w-6 h-6 stroke-[2.5]" })
      ),

      // ── 6. BOTTOM DOCK (DOTS, PLAY/PAUSE, COUNTER, THUMBNAIL EXPANDER) ────
      h(
        "div",
        {
          className:
            "absolute bottom-5 sm:bottom-6 left-0 right-0 z-40 flex flex-col items-center gap-3 px-4"
        },

        // Dot Indicators
        h(
          "div",
          { className: "flex items-center gap-1.5 sm:gap-2 bg-navy-950/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10" },
          SLIDES.map((s, i) =>
            h("button", {
              key: i,
              onClick: () => goTo(i),
              "aria-label": `Go to slide ${i + 1}`,
              className: `transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 sm:w-8 h-2 sm:h-2.5 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-500/50"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/35 hover:bg-white/70"
              }`
            })
          )
        ),

        // Controls Bar: Play/Pause, Slide Counter, View All Photos Strip
        h(
          "div",
          { className: "flex items-center gap-3 bg-navy-950/50 backdrop-blur-md px-4 py-1 rounded-full border border-white/15" },
          // Play / Pause
          h(
            "button",
            {
              onClick: () => setIsPlaying((p) => !p),
              className:
                "w-7 h-7 rounded-full text-slate-200 hover:text-amber-400 flex items-center justify-center transition-colors",
              "aria-label": isPlaying ? "Pause slideshow" : "Play slideshow"
            },
            isPlaying
              ? h(Icons.Pause, { className: "w-3.5 h-3.5" })
              : h(Icons.Play, { className: "w-3.5 h-3.5 ml-0.5" })
          ),
          h("div", { className: "w-px h-3.5 bg-white/20" }),
          // Slide Counter
          h(
            "span",
            { className: "text-white/80 text-[11px] font-bold tracking-widest" },
            `${String(current + 1).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}`
          ),
          h("div", { className: "w-px h-3.5 bg-white/20" }),
          // Thumbnails Toggle
          h(
            "button",
            {
              onClick: () => setShowThumbs((t) => !t),
              className:
                "text-amber-400 hover:text-amber-300 text-[11px] font-bold tracking-wider uppercase transition-colors"
            },
            showThumbs ? "Hide Photos" : "All Photos"
          )
        ),

        // ── 7. EXPANDABLE THUMBNAIL STRIP ───────────────────────────────────
        showThumbs &&
          h(
            "div",
            {
              className:
                "flex gap-2 overflow-x-auto pb-2 pt-1 max-w-full sm:max-w-3xl px-3 no-scrollbar bg-navy-950/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl animate-fade-in"
            },
            SLIDES.map((s, i) =>
              h(
                "button",
                {
                  key: i,
                  onClick: () => {
                    goTo(i);
                    setShowThumbs(false);
                  },
                  className: `shrink-0 w-16 h-11 sm:w-20 sm:h-13 rounded-lg overflow-hidden border-2 transition-all ${
                    i === current
                      ? "border-amber-400 scale-105 shadow-lg shadow-amber-500/30"
                      : "border-white/20 hover:border-white/60 opacity-60 hover:opacity-100"
                  }`
                },
                h("img", { src: s.src, alt: s.alt, className: "w-full h-full object-cover" })
              )
            )
          )
      ),

      // ── 8. REAL-TIME PROGRESS BAR ─────────────────────────────────────────
      isPlaying &&
        !hovered &&
        h(
          "div",
          { className: "absolute top-0 left-0 right-0 z-50 h-1 bg-white/10" },
          h("div", {
            key: "prog-" + current,
            className: "h-full bg-gradient-to-r from-amber-400 via-amber-500 to-ocean-500",
            style: {
              animation: `eh-progress ${SLIDE_DURATION}ms linear forwards`
            }
          })
        )
    );
  };

  // ─── STYLES & KEN BURNS KEYFRAMES ─────────────────────────────────────────
  if (!document.getElementById("eh-slideshow-styles")) {
    const style = document.createElement("style");
    style.id = "eh-slideshow-styles";
    style.textContent = `
      @keyframes eh-fade-in  { from { opacity: 0; } to { opacity: 1; } }
      @keyframes eh-fade-out { from { opacity: 1; } to { opacity: 0; } }

      @keyframes eh-kb-zoom-in {
        0%   { transform: scale(1.0) translate(0%, 0%); }
        100% { transform: scale(1.10) translate(-1%, -1%); }
      }
      @keyframes eh-kb-zoom-out {
        0%   { transform: scale(1.10) translate(-1%, -1%); }
        100% { transform: scale(1.0) translate(0%, 0%); }
      }
      .eh-kb-in  { animation: eh-kb-zoom-in  ${(SLIDE_DURATION + 1500) / 1000}s ease-out forwards; }
      .eh-kb-out { animation: eh-kb-zoom-out ${(SLIDE_DURATION + 1500) / 1000}s ease-out forwards; }

      @keyframes eh-text-in {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      @keyframes eh-progress {
        from { width: 0%; }
        to   { width: 100%; }
      }
    `;
    document.head.appendChild(style);
  }
})();
