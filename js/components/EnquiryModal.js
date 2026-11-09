// Customer Enquiry System & Modal for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState, useEffect } = React;
  const Icons = window.Icons;

  window.EnquiryModal = function EnquiryModal({
    isOpen,
    initialPackage,
    onClose,
    onEnquirySubmitted
  }) {
    if (!isOpen) return null;

    const config = window.SITE_CONFIG;

    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [destination, setDestination] = useState(
      initialPackage ? initialPackage.destination : "Katra / Kashmir / Himachal"
    );
    const [travelDate, setTravelDate] = useState("");
    const [travellers, setTravellers] = useState("2 Adults");
    const [requirements, setRequirements] = useState(
      initialPackage
        ? `Interested in booking the "${initialPackage.name}" (${initialPackage.duration}). Please provide best quote and hotel options.`
        : ""
    );
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    useEffect(() => {
      if (initialPackage) {
        setDestination(initialPackage.destination);
        setRequirements(
          `Interested in "${initialPackage.name}" (${initialPackage.duration}). Please provide details for hotel choices and private transport.`
        );
      }
    }, [initialPackage]);

    const validate = () => {
      const errs = {};
      if (!fullName.trim()) errs.fullName = "Full name is required.";
      if (!mobile.trim() || mobile.replace(/\D/g, '').length < 10) {
        errs.mobile = "Please provide a valid 10-digit mobile number.";
      }
      if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errs.email = "Please enter a valid email address.";
      }
      if (!destination.trim()) errs.destination = "Destination is required.";
      setErrors(errs);
      return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validate()) return;

      const newEnquiry = {
        id: "ENQ-" + Date.now().toString().slice(-6),
        fullName,
        mobile,
        email,
        destination,
        travelDate: travelDate || "Flexible / To be finalized",
        travellers,
        requirements,
        packageId: initialPackage ? initialPackage.id : null,
        packageName: initialPackage ? initialPackage.name : null,
        status: "New",
        createdAt: new Date().toISOString()
      };

      if (onEnquirySubmitted) {
        onEnquirySubmitted(newEnquiry);
      }

      setSubmittedData(newEnquiry);
    };

    const handleSendWhatsApp = () => {
      const enquiry = submittedData || {
        fullName,
        mobile,
        destination,
        travelDate: travelDate || "Upcoming",
        travellers,
        requirements
      };

      const text = `*New Trip Enquiry - Enjoy Holidays Tour & Travel, Katra*
*Name:* ${enquiry.fullName}
*Mobile:* ${enquiry.mobile}
${enquiry.email ? `*Email:* ${enquiry.email}\n` : ''}*Destination:* ${enquiry.destination}
*Travel Date:* ${enquiry.travelDate}
*Travellers:* ${enquiry.travellers}
*Tour Requirements:* ${enquiry.requirements || "Custom Tour & Hotel Package"}`;

      window.open(
        `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
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
            "bg-white border border-slate-200 rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl relative text-left text-slate-800 my-auto p-6 sm:p-8",
          onClick: (e) => e.stopPropagation()
        },

        // Close Button
        h(
          "button",
          {
            onClick: onClose,
            className:
              "absolute top-5 right-5 text-slate-400 hover:text-navy-950 p-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
          },
          h(Icons.X, { className: "w-5 h-5" })
        ),

        submittedData
          ? // Success Screen
            h(
              "div",
              { className: "text-center py-6 space-y-5 animate-fade-in" },
              h(
                "div",
                {
                  className:
                    "w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto"
                },
                h(Icons.CheckCircle, { className: "w-10 h-10" })
              ),
              h(
                "h3",
                { className: "text-2xl font-serif font-bold text-navy-950" },
                "Enquiry Successfully Submitted!"
              ),
              h(
                "div",
                {
                  className:
                    "bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto"
                },
                h(
                  "div",
                  { className: "flex justify-between border-b border-slate-200 pb-2" },
                  h("span", { className: "text-slate-500" }, "Reference ID:"),
                  h("span", { className: "font-mono font-bold text-amber-600" }, submittedData.id)
                ),
                h(
                  "div",
                  { className: "flex justify-between" },
                  h("span", { className: "text-slate-500" }, "Name:"),
                  h("span", { className: "text-navy-950 font-bold" }, submittedData.fullName)
                ),
                h(
                  "div",
                  { className: "flex justify-between" },
                  h("span", { className: "text-slate-500" }, "Destination:"),
                  h("span", { className: "text-ocean-700 font-bold" }, submittedData.destination)
                ),
                h(
                  "div",
                  { className: "flex justify-between" },
                  h("span", { className: "text-slate-500" }, "Contact:"),
                  h("span", { className: "text-slate-800 font-medium" }, submittedData.mobile)
                )
              ),
              h(
                "p",
                { className: "text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed" },
                "Thank you for contacting Enjoy Holidays Tour and Travel, Katra. Our tour specialist has received your requirements and will reach out with a detailed proposal."
              ),
              h(
                "div",
                { className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2" },
                h(
                  "button",
                  {
                    onClick: handleSendWhatsApp,
                    className:
                      "w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md"
                  },
                  h(Icons.WhatsApp, { className: "w-4 h-4" }),
                  "Send via WhatsApp for Instant Response"
                ),
                h(
                  "button",
                  {
                    onClick: onClose,
                    className:
                      "w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl text-xs sm:text-sm border border-slate-200"
                  },
                  "Done"
                )
              )
            )
          : // The Form
            h(
              "form",
              { onSubmit: handleSubmit, className: "space-y-4" },
              h(
                "div",
                { className: "mb-6" },
                h(
                  "span",
                  { className: "text-amber-600 text-xs font-bold uppercase tracking-wider block" },
                  "Plan Your Holiday"
                ),
                h(
                  "h3",
                  { className: "text-2xl font-serif font-bold text-navy-950 mt-1" },
                  initialPackage ? `Enquire for ${initialPackage.name}` : "Custom Travel Enquiry"
                ),
                h(
                  "p",
                  { className: "text-xs text-slate-500 mt-1" },
                  "Fill out your details below and our Katra destination planner will curate the ideal trip for you."
                )
              ),

              // Full Name & Mobile
              h(
                "div",
                { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                h(
                  "div",
                  { className: "space-y-1" },
                  h("label", { className: "text-xs font-bold text-slate-700" }, "Full Name *"),
                  h("input", {
                    type: "text",
                    value: fullName,
                    onChange: (e) => setFullName(e.target.value),
                    placeholder: "e.g. Amit Sharma",
                    className: `w-full bg-slate-50 border ${
                      errors.fullName ? "border-rose-500" : "border-slate-200"
                    } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium`
                  }),
                  errors.fullName &&
                    h("span", { className: "text-[11px] text-rose-600 block" }, errors.fullName)
                ),
                h(
                  "div",
                  { className: "space-y-1" },
                  h("label", { className: "text-xs font-bold text-slate-700" }, "Mobile Number (WhatsApp Preferred) *"),
                  h("input", {
                    type: "tel",
                    value: mobile,
                    onChange: (e) => setMobile(e.target.value),
                    placeholder: "e.g. +91 98765 43210",
                    className: `w-full bg-slate-50 border ${
                      errors.mobile ? "border-rose-500" : "border-slate-200"
                    } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium`
                  }),
                  errors.mobile &&
                    h("span", { className: "text-[11px] text-rose-600 block" }, errors.mobile)
                )
              ),

              // Email & Destination
              h(
                "div",
                { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                h(
                  "div",
                  { className: "space-y-1" },
                  h("label", { className: "text-xs font-bold text-slate-700" }, "Email Address (Optional)"),
                  h("input", {
                    type: "email",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    placeholder: "e.g. amit@example.com",
                    className: `w-full bg-slate-50 border ${
                      errors.email ? "border-rose-500" : "border-slate-200"
                    } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium`
                  }),
                  errors.email &&
                    h("span", { className: "text-[11px] text-rose-600 block" }, errors.email)
                ),
                h(
                  "div",
                  { className: "space-y-1" },
                  h("label", { className: "text-xs font-bold text-slate-700" }, "Destination *"),
                  h("input", {
                    type: "text",
                    value: destination,
                    onChange: (e) => setDestination(e.target.value),
                    placeholder: "e.g. Katra, Kashmir, Ladakh, Manali",
                    className: `w-full bg-slate-50 border ${
                      errors.destination ? "border-rose-500" : "border-slate-200"
                    } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium`
                  }),
                  errors.destination &&
                    h("span", { className: "text-[11px] text-rose-600 block" }, errors.destination)
                )
              ),

              // Travel Date & Travellers
              h(
                "div",
                { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                h(
                  "div",
                  { className: "space-y-1" },
                  h("label", { className: "text-xs font-bold text-slate-700" }, "Approximate Travel Date"),
                  h("input", {
                    type: "date",
                    value: travelDate,
                    onChange: (e) => setTravelDate(e.target.value),
                    className:
                      "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                  })
                ),
                h(
                  "div",
                  { className: "space-y-1" },
                  h("label", { className: "text-xs font-bold text-slate-700" }, "Number of Travellers"),
                  h(
                    "select",
                    {
                      value: travellers,
                      onChange: (e) => setTravellers(e.target.value),
                      className:
                        "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                    },
                    [
                      "1 Solo Traveller",
                      "2 Adults (Couple)",
                      "Family (2 Adults + 1-2 Kids)",
                      "Small Group (4-6 Travellers)",
                      "Large Group / Yatra (7+ Travellers)"
                    ].map((t) =>
                      h("option", { key: t, value: t }, t)
                    )
                  )
                )
              ),

              // Tour Requirements
              h(
                "div",
                { className: "space-y-1" },
                h(
                  "label",
                  { className: "text-xs font-bold text-slate-700" },
                  "Tour Requirements / Special Requests"
                ),
                h("textarea", {
                  rows: 3,
                  value: requirements,
                  onChange: (e) => setRequirements(e.target.value),
                  placeholder:
                    "Mention specific preferences: 3-Star or 4-Star hotels, helicopter tickets, houseboat stay, Innova cab, dietary needs, etc.",
                  className:
                    "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-ocean-500 font-medium"
                })
              ),

              // Action Buttons
              h(
                "div",
                { className: "pt-4 flex flex-col sm:flex-row items-center justify-end gap-3" },
                h(
                  "button",
                  {
                    type: "button",
                    onClick: handleSendWhatsApp,
                    className:
                      "w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                  },
                  h(Icons.WhatsApp, { className: "w-4 h-4" }),
                  "Enquire on WhatsApp"
                ),
                h(
                  "button",
                  {
                    type: "submit",
                    className:
                      "w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold py-3 px-8 rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  },
                  h(Icons.Send, { className: "w-4 h-4 text-navy-950" }),
                  "Submit Enquiry"
                )
              )
            )
      )
    );
  };
})();
