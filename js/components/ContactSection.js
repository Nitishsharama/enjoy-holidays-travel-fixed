// Contact Us Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.ContactSection = function ContactSection({ onMessageSubmitted }) {
    const config = window.SITE_CONFIG;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("General Travel Enquiry");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!phone.trim()) {
        alert("Please provide a contact number.");
        return;
      }

      const msgData = {
        id: "MSG-" + Date.now().toString().slice(-6),
        name,
        email,
        phone,
        subject,
        message,
        createdAt: new Date().toISOString()
      };

      if (onMessageSubmitted) {
        onMessageSubmitted(msgData);
      }
      setIsSent(true);
    };

    const handleWhatsApp = () => {
      window.open(
        `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
          config.whatsappMessages.general
        )}`,
        "_blank"
      );
    };

    return h(
      "section",
      { id: "contact-section", className: "py-20 bg-white relative overflow-hidden" },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },

        // Section Title
        h(
          "div",
          { className: "text-center max-w-3xl mx-auto mb-16" },
          h(
            "span",
            {
              className:
                "text-amber-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 inline-flex items-center gap-1.5"
            },
            h(Icons.MapPin, { className: "w-4 h-4 text-amber-500" }),
            "Connect with Our Katra Office"
          ),
          h(
            "h2",
            { className: "text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mt-1 mb-4" },
            "Get In Touch With Enjoy Holidays"
          ),
          h(
            "p",
            { className: "text-slate-600 text-sm sm:text-base leading-relaxed" },
            "Have questions about Mata Vaishno Devi yatra timings, Kashmir weather, Leh road status, or private taxi bookings? Our local travel advisors are here to assist you 7 days a week."
          )
        ),

        // 2-Column: Left Contact Cards, Right Form
        h(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16" },

          // Left 5 Columns: Info Cards & Hours
          h(
            "div",
            { className: "lg:col-span-5 space-y-4" },

            // Office Address Card
            h(
              "div",
              { className: "bg-slate-50 p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4" },
              h(
                "div",
                {
                  className:
                    "w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 mt-1"
                },
                h(Icons.MapPin, { className: "w-5 h-5" })
              ),
              h(
                "div",
                null,
                h("h4", { className: "text-sm font-bold text-navy-950 mb-1" }, "Katra Head Office"),
                h(
                  "p",
                  { className: "text-xs text-slate-600 leading-relaxed font-normal" },
                  `${config.company.name}`,
                  h("br", null),
                  `${config.contact.address.line1}, ${config.contact.address.line2}`,
                  h("br", null),
                  `${config.contact.address.city}, ${config.contact.address.state} - ${config.contact.address.pincode}, ${config.contact.address.country}`
                )
              )
            ),

            // Phone Numbers Card
            h(
              "div",
              { className: "bg-slate-50 p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4" },
              h(
                "div",
                {
                  className:
                    "w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0 mt-1"
                },
                h(Icons.Phone, { className: "w-5 h-5" })
              ),
              h(
                "div",
                null,
                h("h4", { className: "text-sm font-bold text-navy-950 mb-1" }, "Direct Helpline & Bookings"),
                h(
                  "div",
                  { className: "space-y-1 text-xs text-slate-600" },
                  h(
                    "a",
                    {
                      href: `tel:${config.contact.primaryPhone.replace(/\s+/g, '')}`,
                      className: "block hover:text-ocean-600 transition-colors font-bold text-navy-950"
                    },
                    config.contact.primaryPhone,
                    h("span", { className: "text-[11px] text-slate-500 ml-1.5 font-normal" }, "(Primary Helpline)")
                  ),
                  h(
                    "a",
                    {
                      href: `tel:${config.contact.secondaryPhone.replace(/\s+/g, '')}`,
                      className: "block hover:text-ocean-600 transition-colors font-medium"
                    },
                    config.contact.secondaryPhone,
                    h("span", { className: "text-[11px] text-slate-500 ml-1.5 font-normal" }, "(Katra Desk)")
                  )
                )
              )
            ),

            // Email Card
            h(
              "div",
              { className: "bg-slate-50 p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4" },
              h(
                "div",
                {
                  className:
                    "w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 flex items-center justify-center shrink-0 mt-1"
                },
                h(Icons.Mail, { className: "w-5 h-5" })
              ),
              h(
                "div",
                null,
                h("h4", { className: "text-sm font-bold text-navy-950 mb-1" }, "Official Email Address"),
                h(
                  "div",
                  { className: "space-y-1 text-xs text-slate-600" },
                  h(
                    "a",
                    {
                      href: `mailto:${config.contact.email}`,
                      className: "block hover:text-ocean-600 transition-colors font-bold text-navy-950"
                    },
                    config.contact.email
                  ),
                  h(
                    "a",
                    {
                      href: `mailto:${config.contact.supportEmail}`,
                      className: "block hover:text-ocean-600 transition-colors text-slate-500 font-medium"
                    },
                    config.contact.supportEmail
                  )
                )
              )
            ),

            // Business Hours Card
            h(
              "div",
              { className: "bg-slate-50 p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4" },
              h(
                "div",
                {
                  className:
                    "w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 flex items-center justify-center shrink-0 mt-1"
                },
                h(Icons.Clock, { className: "w-5 h-5" })
              ),
              h(
                "div",
                null,
                h("h4", { className: "text-sm font-bold text-navy-950 mb-1" }, "Business Working Hours"),
                h(
                  "p",
                  { className: "text-xs text-slate-600 leading-relaxed font-normal" },
                  h("span", { className: "text-navy-950 font-bold block" }, config.contact.officeHours.weekdays),
                  h("span", { className: "text-amber-600 text-[11px] font-bold block mt-0.5" }, config.contact.officeHours.yatraSupport)
                )
              )
            ),

            // Quick WhatsApp Button
            h(
              "button",
              {
                onClick: handleWhatsApp,
                className:
                  "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md"
              },
              h(Icons.WhatsApp, { className: "w-5 h-5" }),
              "Chat Directly with Katra Office on WhatsApp"
            )
          ),

          // Right 7 Columns: Interactive Contact Form
          h(
            "div",
            { className: "lg:col-span-7" },
            h(
              "div",
              {
                className:
                  "bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md"
              },
              h("h3", { className: "text-xl font-serif font-bold text-navy-950 mb-1" }, "Send Us a Message"),
              h(
                "p",
                { className: "text-xs text-slate-500 mb-6 font-medium" },
                "We usually respond within 1-2 hours during business hours."
              ),

              isSent
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
                    h("h4", { className: "text-xl font-bold text-navy-950" }, "Message Sent Successfully!"),
                    h(
                      "p",
                      { className: "text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed" },
                      "Thank you for contacting Enjoy Holidays Tour and Travel, Katra. One of our team members will get back to you shortly."
                    ),
                    h(
                      "button",
                      {
                        onClick: () => setIsSent(false),
                        className: "text-xs text-ocean-600 font-bold underline hover:text-ocean-700 pt-2"
                      },
                      "Send Another Message"
                    )
                  )
                : h(
                    "form",
                    { onSubmit: handleSubmit, className: "space-y-4" },
                    h(
                      "div",
                      { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                      h(
                        "div",
                        { className: "space-y-1" },
                        h("label", { className: "text-xs font-bold text-slate-700" }, "Your Name *"),
                        h("input", {
                          type: "text",
                          value: name,
                          onChange: (e) => setName(e.target.value),
                          required: true,
                          placeholder: "e.g. Rahul Sharma",
                          className:
                            "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                        })
                      ),
                      h(
                        "div",
                        { className: "space-y-1" },
                        h("label", { className: "text-xs font-bold text-slate-700" }, "Phone / Mobile Number *"),
                        h("input", {
                          type: "tel",
                          value: phone,
                          onChange: (e) => setPhone(e.target.value),
                          required: true,
                          placeholder: "e.g. +91 98765 43210",
                          className:
                            "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                        })
                      )
                    ),

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
                          placeholder: "e.g. rahul@example.com",
                          className:
                            "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                        })
                      ),
                      h(
                        "div",
                        { className: "space-y-1" },
                        h("label", { className: "text-xs font-bold text-slate-700" }, "Subject / Topic"),
                        h(
                          "select",
                          {
                            value: subject,
                            onChange: (e) => setSubject(e.target.value),
                            className:
                              "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                          },
                          [
                            "Vaishno Devi Pilgrimage Assistance",
                            "Kashmir Tour Packages",
                            "Ladakh Adventure Inquiry",
                            "Himachal Pradesh Tour",
                            "Katra Taxi / Cab Booking",
                            "Hotel Booking Support",
                            "Custom Group / Corporate Query",
                            "Other Inquiries"
                          ].map((s) =>
                            h("option", { key: s, value: s }, s)
                          )
                        )
                      )
                    ),

                    h(
                      "div",
                      { className: "space-y-1" },
                      h("label", { className: "text-xs font-bold text-slate-700" }, "Your Message / Question *"),
                      h("textarea", {
                        rows: 4,
                        value: message,
                        onChange: (e) => setMessage(e.target.value),
                        required: true,
                        placeholder: "Tell us about your travel dates, preferred destination, number of persons, or questions...",
                        className:
                          "w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                      })
                    ),

                    h(
                      "button",
                      {
                        type: "submit",
                        className:
                          "w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                      },
                      h(Icons.Send, { className: "w-4 h-4 text-navy-950" }),
                      "Send Message to Katra Desk"
                    )
                  )
            )
          )
        ),

        // Google Maps Embed
        h(
          "div",
          { className: "rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-80 sm:h-96" },
          h("iframe", {
            src: config.contact.googleMapsEmbedUrl,
            width: "100%",
            height: "100%",
            style: { border: 0 },
            allowFullScreen: false,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            title: "Enjoy Holidays Tour and Travel Office Location Katra"
          })
        )
      )
    );
  };
})();
