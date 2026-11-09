// Taxi and Transportation Services Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.TaxiServices = function TaxiServices({ onTaxiSubmitted }) {
    const taxiData = window.TAXI_DATA || { vehicles: [], routes: [] };
    const config = window.SITE_CONFIG;

    const [pickup, setPickup] = useState("Katra Railway Station / Hotel");
    const [destination, setDestination] = useState("Jammu Airport / Station");
    const [date, setDate] = useState("");
    const [passengers, setPassengers] = useState("4 Passengers");
    const [vehicle, setVehicle] = useState("Toyota Innova Crysta");
    const [contactNumber, setContactNumber] = useState("");
    const [notes, setNotes] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!contactNumber.trim()) {
        alert("Please enter a valid contact number.");
        return;
      }

      const taxiEnquiry = {
        id: "TX-" + Date.now().toString().slice(-6),
        type: "Taxi Booking",
        pickup,
        destination,
        date: date || "Flexible / Not specified",
        passengers,
        vehicle,
        contactNumber,
        notes,
        createdAt: new Date().toISOString()
      };

      if (onTaxiSubmitted) {
        onTaxiSubmitted(taxiEnquiry);
      }

      setIsSubmitted(true);
    };

    const handleWhatsAppBook = () => {
      const msg = config.whatsappMessages.taxiBooking(
        pickup,
        destination,
        date || "Upcoming Date",
        vehicle
      );
      window.open(
        `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    };

    return h(
      "section",
      { id: "taxi-section", className: "py-20 bg-slate-50 relative overflow-hidden" },
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
            h(Icons.Car, { className: "w-4 h-4 text-amber-500" }),
            "Katra & Kashmir Fleet Services"
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mt-1 mb-4" },
            "Taxi & Transportation Services"
          ),
          h(
            "p",
            { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
            "Travel safely and comfortably across the hills of Jammu & Kashmir. From Katra station/helipad drops and Jammu Airport connections to multi-day complete Kashmir tour rentals, book verified cabs with licensed local drivers."
          )
        ),

        // 2-Column: Left (Fleet Cards & Routes), Right (Interactive Booking Form)
        h(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16" },

          // Left Side: Fleet Showcase (7 cols)
          h(
            "div",
            { className: "lg:col-span-7 space-y-6" },
            h("h3", { className: "text-xl font-serif font-bold text-navy-950 mb-4" }, "Our Verified Vehicle Fleet"),
            h(
              "div",
              { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
              (taxiData.vehicles || []).map((veh) =>
                h(
                  "div",
                  {
                    key: veh.id,
                    className:
                      "bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-amber-400 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                  },
                  h(
                    "div",
                    { className: "relative h-36 overflow-hidden" },
                    h("img", {
                      src: veh.image,
                      alt: veh.name,
                      className: "w-full h-full object-cover"
                    }),
                    h("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
                    }),
                    h(
                      "span",
                      {
                        className:
                          "absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-navy-950"
                      },
                      veh.category
                    )
                  ),
                  h(
                    "div",
                    { className: "p-4 flex-1 flex flex-col justify-between" },
                    h(
                      "div",
                      null,
                      h("h4", { className: "text-sm font-bold text-navy-950 mb-1" }, veh.name),
                      h(
                        "div",
                        { className: "flex items-center gap-2 text-xs text-slate-600 mb-2 font-medium" },
                        h(Icons.Users, { className: "w-3.5 h-3.5 text-amber-500" }),
                        h("span", null, veh.seats)
                      ),
                      h(
                        "ul",
                        { className: "text-[11px] text-slate-500 space-y-1 mb-3" },
                        (veh.features || []).slice(0, 3).map((f, i) =>
                          h("li", { key: i, className: "flex items-center gap-1.5" },
                            h(Icons.Check, { className: "w-3 h-3 text-emerald-600 shrink-0" }),
                            f
                          )
                        )
                      )
                    ),
                    h(
                      "button",
                      {
                        onClick: () => {
                          setVehicle(veh.name);
                          const el = document.getElementById("taxi-booking-card");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        },
                        className:
                          "w-full text-center py-2 text-xs font-bold text-ocean-700 hover:text-white bg-ocean-50 hover:bg-ocean-600 rounded-xl border border-ocean-200 transition-colors"
                      },
                      "Select This Vehicle"
                    )
                  )
                )
              )
            ),

            // Route Highlights
            h(
              "div",
              { className: "mt-8 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-md" },
              h(
                "h4",
                { className: "text-base font-serif font-bold text-navy-950 mb-3 flex items-center gap-2" },
                h(Icons.MapPin, { className: "w-4 h-4 text-amber-500" }),
                "Popular Katra & Kashmir Taxi Routes"
              ),
              h(
                "div",
                { className: "space-y-2.5" },
                (taxiData.routes || []).slice(0, 4).map((rt) =>
                  h(
                    "div",
                    {
                      key: rt.id,
                      className:
                        "flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm"
                    },
                    h(
                      "div",
                      null,
                      h(
                        "span",
                        { className: "font-bold text-navy-950 block" },
                        `${rt.from} ➔ ${rt.to}`
                      ),
                      h(
                        "span",
                        { className: "text-[11px] text-slate-500" },
                        `${rt.distance} • approx ${rt.duration}`
                      )
                    ),
                    h(
                      "div",
                      { className: "text-right" },
                      h("span", { className: "font-bold text-amber-600 block" }, rt.sedanPrice),
                      h("span", { className: "text-[10px] text-slate-400" }, "Sedan from")
                    )
                  )
                )
              )
            )
          ),

          // Right Side: Taxi Enquiry Form (5 cols)
          h(
            "div",
            { id: "taxi-booking-card", className: "lg:col-span-5" },
            h(
              "div",
              {
                className:
                  "bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xl shadow-slate-300/60"
              },
              h(
                "div",
                { className: "flex items-center gap-2 mb-1" },
                h(Icons.Car, { className: "w-5 h-5 text-amber-500" }),
                h("h3", { className: "text-lg font-serif font-bold text-navy-950" }, "Book Your Taxi")
              ),
              h(
                "p",
                { className: "text-xs text-slate-500 mb-6 font-medium" },
                "Instant booking assistance for Katra, Jammu, Kashmir, and outstation."
              ),

              isSubmitted
                ? h(
                    "div",
                    { className: "text-center py-8 space-y-4 animate-fade-in" },
                    h(
                      "div",
                      {
                        className:
                          "w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto"
                      },
                      h(Icons.CheckCircle, { className: "w-7 h-7" })
                    ),
                    h("h4", { className: "text-lg font-bold text-navy-950" }, "Taxi Enquiry Received!"),
                    h(
                      "p",
                      { className: "text-xs text-slate-600 leading-relaxed" },
                      "Our Katra taxi coordinator will contact you shortly on your provided mobile number with confirmed fare and driver details."
                    ),
                    h(
                      "button",
                      {
                        onClick: handleWhatsAppBook,
                        className:
                          "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs shadow-md transition-all"
                      },
                      h(Icons.WhatsApp, { className: "w-4 h-4" }),
                      "Confirm via WhatsApp Now"
                    ),
                    h(
                      "button",
                      {
                        onClick: () => setIsSubmitted(false),
                        className: "text-xs text-slate-500 underline hover:text-navy-950"
                      },
                      "Submit Another Taxi Booking"
                    )
                  )
                : h(
                    "form",
                    { onSubmit: handleFormSubmit, className: "space-y-4" },

                    // Pickup Location
                    h(
                      "div",
                      { className: "space-y-1" },
                      h("label", { className: "text-xs font-bold text-slate-700" }, "Pickup Location"),
                      h("input", {
                        type: "text",
                        value: pickup,
                        onChange: (e) => setPickup(e.target.value),
                        required: true,
                        placeholder: "e.g. Katra Hotel / Station / Jammu Airport",
                        className:
                          "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                      })
                    ),

                    // Drop Destination
                    h(
                      "div",
                      { className: "space-y-1" },
                      h("label", { className: "text-xs font-bold text-slate-700" }, "Destination / Drop Location"),
                      h("input", {
                        type: "text",
                        value: destination,
                        onChange: (e) => setDestination(e.target.value),
                        required: true,
                        placeholder: "e.g. Jammu Tawi / Srinagar / Shivkhori",
                        className:
                          "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                      })
                    ),

                    // Date & Passengers Row
                    h(
                      "div",
                      { className: "grid grid-cols-2 gap-3" },
                      h(
                        "div",
                        { className: "space-y-1" },
                        h("label", { className: "text-xs font-bold text-slate-700" }, "Travel Date"),
                        h("input", {
                          type: "date",
                          value: date,
                          onChange: (e) => setDate(e.target.value),
                          className:
                            "w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                        })
                      ),
                      h(
                        "div",
                        { className: "space-y-1" },
                        h("label", { className: "text-xs font-bold text-slate-700" }, "Passengers"),
                        h(
                          "select",
                          {
                            value: passengers,
                            onChange: (e) => setPassengers(e.target.value),
                            className:
                              "w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                          },
                          ["1-2 Passengers", "3-4 Passengers", "5-6 Passengers", "7-12 Passengers", "13+ Passengers"].map((p) =>
                            h("option", { key: p, value: p }, p)
                          )
                        )
                      )
                    ),

                    // Vehicle Preference
                    h(
                      "div",
                      { className: "space-y-1" },
                      h("label", { className: "text-xs font-bold text-slate-700" }, "Vehicle Preference"),
                      h(
                        "select",
                        {
                          value: vehicle,
                          onChange: (e) => setVehicle(e.target.value),
                          className:
                            "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                        },
                        [
                          "Sedan (Swift Dzire / Etios) - 4 Seater",
                          "SUV (Maruti Suzuki Ertiga) - 6 Seater",
                          "Toyota Innova Crysta - 7 Seater Luxury",
                          "Tempo Traveller (12 Seater Luxury)",
                          "Tempo Traveller (17 / 26 Seater)"
                        ].map((v) =>
                          h("option", { key: v, value: v }, v)
                        )
                      )
                    ),

                    // Contact Number
                    h(
                      "div",
                      { className: "space-y-1" },
                      h("label", { className: "text-xs font-bold text-slate-700" }, "Contact Mobile Number *"),
                      h("input", {
                        type: "tel",
                        value: contactNumber,
                        onChange: (e) => setContactNumber(e.target.value),
                        required: true,
                        placeholder: "e.g. +91 98765 43210",
                        className:
                          "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                      })
                    ),

                    // Submit Buttons
                    h(
                      "div",
                      { className: "pt-2 space-y-2.5" },
                      h(
                        "button",
                        {
                          type: "submit",
                          className:
                            "w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                        },
                        h(Icons.Car, { className: "w-4 h-4 text-navy-950" }),
                        "Request Taxi Quotation"
                      ),
                      h(
                        "button",
                        {
                          type: "button",
                          onClick: handleWhatsAppBook,
                          className:
                            "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                        },
                        h(Icons.WhatsApp, { className: "w-4 h-4" }),
                        "Book Taxi on WhatsApp"
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
