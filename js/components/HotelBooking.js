// Hotel Booking Assistance Section for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.HotelBooking = function HotelBooking({ onHotelSubmitted }) {
    const config = window.SITE_CONFIG;

    const [destination, setDestination] = useState("Katra (Near Vaishno Devi Yatra Track)");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [rooms, setRooms] = useState("1 Room");
    const [guests, setGuests] = useState("2 Guests");
    const [category, setCategory] = useState("3-Star Deluxe");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const hotelCategories = [
      "Standard Budget (Clean & Verified)",
      "3-Star Deluxe (Family Comfort)",
      "4-Star Luxury (Mountain / Valley View)",
      "5-Star Premium Resort",
      "Traditional Luxury Dal Lake Houseboat"
    ];

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!contact.trim()) {
        alert("Please enter a contact number.");
        return;
      }

      const hotelEnquiry = {
        id: "HT-" + Date.now().toString().slice(-6),
        type: "Hotel Booking Enquiry",
        name,
        contact,
        destination,
        checkIn: checkIn || "Not selected",
        checkOut: checkOut || "Not selected",
        rooms,
        guests,
        category,
        createdAt: new Date().toISOString()
      };

      if (onHotelSubmitted) {
        onHotelSubmitted(hotelEnquiry);
      }
      setIsSubmitted(true);
    };

    const handleWhatsApp = () => {
      const msg = config.whatsappMessages.hotelBooking(destination, checkIn || "Upcoming", rooms, category);
      window.open(
        `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    };

    return h(
      "section",
      { id: "hotels-section", className: "py-20 bg-white relative" },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },

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
            h(Icons.Bed, { className: "w-4 h-4 text-amber-500" }),
            "Comfortable Stays & Houseboats"
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mt-1 mb-4" },
            "Hotel & Houseboat Booking Assistance"
          ),
          h(
            "p",
            { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
            "Enjoy Holidays Tour and Travel partners with hand-picked hotels, heritage Kashmiri houseboats, and alpine resorts. Submit your stay dates to receive tailored room options at competitive negotiated tariffs."
          )
        ),

        // Form Container Card
        h(
          "div",
          {
            className:
              "max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/60"
          },

          isSubmitted
            ? h(
                "div",
                { className: "text-center py-10 space-y-4 animate-fade-in" },
                h(
                  "div",
                  {
                    className:
                      "w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto"
                  },
                  h(Icons.CheckCircle, { className: "w-8 h-8" })
                ),
                h("h3", { className: "text-xl font-bold text-navy-950" }, "Hotel Requirement Submitted!"),
                h(
                  "p",
                  { className: "text-xs sm:text-sm text-slate-600 max-w-md mx-auto" },
                  "Our hotel booking desk in Katra is checking room availability for your dates and will send options with photos and negotiated rates."
                ),
                h(
                  "div",
                  { className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2" },
                  h(
                    "button",
                    {
                      onClick: handleWhatsApp,
                      className:
                        "bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 text-xs shadow"
                    },
                    h(Icons.WhatsApp, { className: "w-4 h-4" }),
                    "Check on WhatsApp"
                  ),
                  h(
                    "button",
                    {
                      onClick: () => setIsSubmitted(false),
                      className: "text-xs text-slate-500 underline hover:text-navy-950"
                    },
                    "Submit Another Requirement"
                  )
                )
              )
            : h(
                "form",
                { onSubmit: handleSubmit, className: "space-y-6" },

                // Grid 1: Destination & Hotel Category
                h(
                  "div",
                  { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                  h(
                    "div",
                    { className: "space-y-1.5" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Destination"),
                    h(
                      "select",
                      {
                        value: destination,
                        onChange: (e) => setDestination(e.target.value),
                        className:
                          "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                      },
                      [
                        "Katra (Near Vaishno Devi Track)",
                        "Srinagar (Dal Lake / Boulevard)",
                        "Srinagar (Luxury Dal Lake Houseboat)",
                        "Gulmarg (Pine & Snow Peak Resorts)",
                        "Pahalgam (Lidder Riverside Stays)",
                        "Sonamarg (Glacier View Hotels)",
                        "Leh Ladakh (Heated Deluxe Hotels)",
                        "Manali (Riverside Resorts)",
                        "Shimla (Mall Road & Kufri)",
                        "Amritsar (Near Golden Temple)",
                        "Goa / Rajasthan / Dubai"
                      ].map((dest) =>
                        h("option", { key: dest, value: dest }, dest)
                      )
                    )
                  ),
                  h(
                    "div",
                    { className: "space-y-1.5" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Hotel Category"),
                    h(
                      "select",
                      {
                        value: category,
                        onChange: (e) => setCategory(e.target.value),
                        className:
                          "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                      },
                      hotelCategories.map((c) =>
                        h("option", { key: c, value: c }, c)
                      )
                    )
                  )
                ),

                // Grid 2: Check-in, Check-out, Rooms, Guests
                h(
                  "div",
                  { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4" },
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Check-in Date"),
                    h("input", {
                      type: "date",
                      value: checkIn,
                      onChange: (e) => setCheckIn(e.target.value),
                      className:
                        "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                    })
                  ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Check-out Date"),
                    h("input", {
                      type: "date",
                      value: checkOut,
                      onChange: (e) => setCheckOut(e.target.value),
                      className:
                        "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                    })
                  ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Rooms Required"),
                    h(
                      "select",
                      {
                        value: rooms,
                        onChange: (e) => setRooms(e.target.value),
                        className:
                          "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                      },
                      ["1 Room", "2 Rooms", "3 Rooms", "4+ Rooms"].map((r) =>
                        h("option", { key: r, value: r }, r)
                      )
                    )
                  ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Number of Guests"),
                    h(
                      "select",
                      {
                        value: guests,
                        onChange: (e) => setGuests(e.target.value),
                        className:
                          "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                      },
                      ["1 Guest", "2 Guests", "3-4 Guests", "5-8 Guests", "8+ Guests"].map((g) =>
                        h("option", { key: g, value: g }, g)
                      )
                    )
                  )
                ),

                // Grid 3: Contact Name & Mobile
                h(
                  "div",
                  { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Your Full Name"),
                    h("input", {
                      type: "text",
                      value: name,
                      onChange: (e) => setName(e.target.value),
                      required: true,
                      placeholder: "e.g. Rajesh Kumar",
                      className:
                        "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                    })
                  ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Contact Mobile Number *"),
                    h("input", {
                      type: "tel",
                      value: contact,
                      onChange: (e) => setContact(e.target.value),
                      required: true,
                      placeholder: "e.g. +91 98765 43210",
                      className:
                        "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                    })
                  )
                ),

                // Notice Box
                h(
                  "div",
                  { className: "p-3.5 rounded-xl bg-ocean-50 border border-ocean-200 text-[11px] text-ocean-900 flex items-start gap-2" },
                  h(Icons.Info, { className: "w-4 h-4 text-ocean-600 shrink-0 mt-0.5" }),
                  h("span", { className: "font-medium" }, "Transparent Booking Notice: We verify live seasonal availability with partner hoteliers and houseboats to secure negotiated prices, verified hygiene, and personalized room views without automated surge pricing.")
                ),

                // Submit Buttons
                h(
                  "div",
                  { className: "flex flex-col sm:flex-row items-center justify-end gap-3 pt-2" },
                  h(
                    "button",
                    {
                      type: "button",
                      onClick: handleWhatsApp,
                      className:
                        "w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-xs flex items-center justify-center gap-2 shadow"
                    },
                    h(Icons.WhatsApp, { className: "w-4 h-4" }),
                    "Check via WhatsApp"
                  ),
                  h(
                    "button",
                    {
                      type: "submit",
                      className:
                        "w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold py-3 px-8 rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                    },
                    h(Icons.Send, { className: "w-4 h-4 text-navy-950" }),
                    "Submit Hotel Requirements"
                  )
                )
              )
        )
      )
    );
  };
})();
