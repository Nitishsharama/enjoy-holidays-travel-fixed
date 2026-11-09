// Travel Search & Enquiry Bar Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.SearchWidget = function SearchWidget({ onSearch }) {
    const [destination, setDestination] = useState("all");
    const [travelDate, setTravelDate] = useState("");
    const [travellers, setTravellers] = useState("2 Travellers");
    const [days, setDays] = useState("all");
    const [category, setCategory] = useState("all");

    const destinationsList = [
      { value: "all", label: "All Destinations" },
      { value: "vaishno-devi", label: "Vaishno Devi (Katra)" },
      { value: "srinagar", label: "Srinagar & Dal Lake" },
      { value: "gulmarg", label: "Gulmarg Snow Valley" },
      { value: "pahalgam", label: "Pahalgam & Betaab Valley" },
      { value: "sonamarg", label: "Sonamarg Glaciers" },
      { value: "ladakh", label: "Leh Ladakh & Pangong" },
      { value: "manali", label: "Manali & Solang Valley" },
      { value: "shimla", label: "Shimla & Kufri" },
      { value: "dharamshala", label: "Dharamshala & Dalhousie" },
      { value: "amritsar", label: "Amritsar Golden Temple" },
      { value: "rajasthan", label: "Rajasthan Royal Heritage" },
      { value: "goa", label: "Goa Beach Holiday" },
      { value: "dubai", label: "Dubai Extravaganza" }
    ];

    const categoriesList = [
      { value: "all", label: "All Categories" },
      { value: "special", label: "Special Signature Tours" },
      { value: "religious", label: "Religious & Pilgrimage" },
      { value: "family", label: "Family Holidays" },
      { value: "honeymoon", label: "Honeymoon Packages" },
      { value: "adventure", label: "Adventure Tours" },
      { value: "weekend", label: "Weekend Getaways" },
      { value: "corporate", label: "Corporate Tours" },
      { value: "customized", label: "Customized Packages" }
    ];

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      onSearch({
        destination,
        travelDate,
        travellers,
        days,
        category
      });
    };

    return h(
      "div",
      { className: "relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-16" },
      h(
        "div",
        {
          className:
            "bg-white rounded-2xl p-5 sm:p-7 shadow-2xl shadow-slate-300/60 border border-slate-200/80"
        },
        h(
          "div",
          { className: "flex items-center justify-between mb-4 pb-3 border-b border-slate-100" },
          h(
            "div",
            { className: "flex items-center gap-2" },
            h(Icons.Search, { className: "w-5 h-5 text-amber-500" }),
            h(
              "h3",
              { className: "text-navy-950 font-bold text-sm sm:text-base" },
              "Find Your Perfect Tour Package"
            )
          ),
          h(
            "span",
            { className: "text-slate-500 text-xs hidden sm:inline font-medium" },
            "Tailored Katra, Kashmir & Pan-India Itineraries"
          )
        ),

        // Form Fields Grid
        h(
          "form",
          {
            onSubmit: handleSearchSubmit,
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end"
          },

          // Destination
          h(
            "div",
            { className: "space-y-1.5" },
            h(
              "label",
              { className: "block text-xs font-bold text-slate-700 flex items-center gap-1.5" },
              h(Icons.MapPin, { className: "w-3.5 h-3.5 text-amber-500" }),
              "Destination"
            ),
            h(
              "select",
              {
                value: destination,
                onChange: (e) => setDestination(e.target.value),
                className:
                  "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 cursor-pointer font-medium"
              },
              destinationsList.map((d) =>
                h("option", { key: d.value, value: d.value }, d.label)
              )
            )
          ),

          // Travel Date
          h(
            "div",
            { className: "space-y-1.5" },
            h(
              "label",
              { className: "block text-xs font-bold text-slate-700 flex items-center gap-1.5" },
              h(Icons.Calendar, { className: "w-3.5 h-3.5 text-ocean-600" }),
              "Travel Date"
            ),
            h("input", {
              type: "date",
              value: travelDate,
              onChange: (e) => setTravelDate(e.target.value),
              className:
                "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 font-medium"
            })
          ),

          // Travellers
          h(
            "div",
            { className: "space-y-1.5" },
            h(
              "label",
              { className: "block text-xs font-bold text-slate-700 flex items-center gap-1.5" },
              h(Icons.Users, { className: "w-3.5 h-3.5 text-emerald-600" }),
              "Travellers"
            ),
            h(
              "select",
              {
                value: travellers,
                onChange: (e) => setTravellers(e.target.value),
                className:
                  "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 cursor-pointer font-medium"
              },
              ["1 Solo Traveller", "2 Travellers (Couple)", "3-4 Travellers (Small Family)", "5-8 Travellers (Family / Friends)", "8+ Travellers (Group / Yatra)"].map((t) =>
                h("option", { key: t, value: t }, t)
              )
            )
          ),

          // Duration / Tour Category
          h(
            "div",
            { className: "space-y-1.5" },
            h(
              "label",
              { className: "block text-xs font-bold text-slate-700 flex items-center gap-1.5" },
              h(Icons.Compass, { className: "w-3.5 h-3.5 text-purple-600" }),
              "Tour Category"
            ),
            h(
              "select",
              {
                value: category,
                onChange: (e) => setCategory(e.target.value),
                className:
                  "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 cursor-pointer font-medium"
              },
              categoriesList.map((c) =>
                h("option", { key: c.value, value: c.value }, c.label)
              )
            )
          ),

          // Search Button
          h(
            "div",
            null,
            h(
              "button",
              {
                type: "submit",
                className:
                  "w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold py-2.5 sm:py-3 px-4 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2 text-sm"
              },
              h(Icons.Search, { className: "w-4 h-4 text-navy-950" }),
              "Search Packages"
            )
          )
        )
      )
    );
  };
})();
