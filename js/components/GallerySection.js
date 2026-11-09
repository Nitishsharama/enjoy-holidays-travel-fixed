// Photo Gallery & Lightbox Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.GallerySection = function GallerySection() {
    const galleryItems = window.GALLERY_DATA || [];
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [activeLightboxImage, setActiveLightboxImage] = useState(null);

    const categories = [
      { id: "all", label: "All Photos" },
      { id: "our-office", label: "Our Office & Fleet" },
      { id: "vaishno-devi", label: "Vaishno Devi Katra" },
      { id: "kashmir", label: "Srinagar & Dal Lake" },
      { id: "gulmarg", label: "Gulmarg Snow" },
      { id: "pahalgam", label: "Pahalgam Valleys" },
      { id: "sonamarg", label: "Sonamarg Glaciers" },
      { id: "ladakh", label: "Ladakh & Pangong" },
      { id: "himachal", label: "Himachal Tours" },
      { id: "amritsar", label: "Amritsar Golden Temple" }
    ];

    const filtered = galleryItems.filter((item) => {
      if (selectedCategory === "all") return true;
      return item.category === selectedCategory;
    });

    const openLightbox = (item) => {
      setActiveLightboxImage(item);
    };

    const closeLightbox = () => {
      setActiveLightboxImage(null);
    };

    const navigateLightbox = (direction) => {
      if (!activeLightboxImage) return;
      const currentIndex = filtered.findIndex((i) => i.id === activeLightboxImage.id);
      let nextIndex = currentIndex + direction;
      if (nextIndex < 0) nextIndex = filtered.length - 1;
      if (nextIndex >= filtered.length) nextIndex = 0;
      setActiveLightboxImage(filtered[nextIndex]);
    };

    return h(
      "section",
      { id: "gallery-section", className: "py-20 bg-slate-100/70 relative" },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },

        // Section Title
        h(
          "div",
          { className: "text-center max-w-3xl mx-auto mb-12" },
          h(
            "span",
            {
              className:
                "text-amber-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 inline-flex items-center gap-1.5"
            },
            h(Icons.Camera, { className: "w-4 h-4 text-amber-500" }),
            "Visual Tour Experience"
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mt-1 mb-4" },
            "Travel Photography Gallery"
          ),
          h(
            "p",
            { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
            "Glimpses of divine mountain peaks, serene shikaras floating on Dal Lake, snow-clad slopes of Gulmarg, and sacred shrines across Katra, Kashmir, Ladakh, and Himachal."
          )
        ),

        // Filter Pills
        h(
          "div",
          { className: "flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" },
          categories.map((cat) =>
            h(
              "button",
              {
                key: cat.id,
                onClick: () => setSelectedCategory(cat.id),
                className: `px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  selectedCategory === cat.id
                    ? "bg-amber-500 text-navy-950 shadow-md shadow-amber-500/20"
                    : "bg-white text-slate-700 hover:text-navy-950 border border-slate-200"
                }`
              },
              cat.label
            )
          )
        ),

        // Gallery Grid
        h(
          "div",
          { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" },
          filtered.map((item) =>
            h(
              "div",
              {
                key: item.id,
                onClick: () => openLightbox(item),
                className:
                  "group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/90 hover:border-amber-400 hover:-translate-y-1"
              },
              h("img", {
                src: item.image,
                alt: item.title,
                className:
                  "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              }),
              h("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"
              }),

              // Content overlay
              h(
                "div",
                { className: "absolute bottom-0 left-0 right-0 p-4" },
                h(
                  "span",
                  {
                    className:
                      "text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-1"
                  },
                  item.location
                ),
                h(
                  "h4",
                  { className: "text-sm font-bold text-white leading-snug line-clamp-2" },
                  item.title
                )
              ),

              // Zoom Icon Badge on Hover
              h(
                "div",
                {
                  className:
                    "absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-navy-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                },
                h(Icons.Camera, { className: "w-4 h-4 text-ocean-600" })
              )
            )
          )
        ),

        // Lightbox Modal
        activeLightboxImage &&
          h(
            "div",
            {
              className:
                "fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in",
              onClick: closeLightbox
            },
            h(
              "div",
              {
                className: "relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center",
                onClick: (e) => e.stopPropagation()
              },

              // Close Button
              h(
                "button",
                {
                  onClick: closeLightbox,
                  className:
                    "absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all focus:outline-none"
                },
                h(Icons.X, { className: "w-6 h-6" })
              ),

              // Left Prev Button
              h(
                "button",
                {
                  onClick: () => navigateLightbox(-1),
                  className:
                    "absolute left-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 transition-all focus:outline-none"
                },
                h(Icons.ChevronLeft, { className: "w-6 h-6" })
              ),

              // Right Next Button
              h(
                "button",
                {
                  onClick: () => navigateLightbox(1),
                  className:
                    "absolute right-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 transition-all focus:outline-none"
                },
                h(Icons.ChevronRight, { className: "w-6 h-6" })
              ),

              // Image
              h("img", {
                src: activeLightboxImage.image,
                alt: activeLightboxImage.title,
                className:
                  "max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              }),

              // Caption Box
              h(
                "div",
                { className: "mt-4 text-center max-w-2xl px-4" },
                h(
                  "h3",
                  { className: "text-lg font-serif font-bold text-white mb-1" },
                  activeLightboxImage.title
                ),
                h(
                  "p",
                  { className: "text-xs text-slate-300 leading-relaxed" },
                  activeLightboxImage.caption || activeLightboxImage.location
                )
              )
            )
          )
      )
    );
  };
})();
