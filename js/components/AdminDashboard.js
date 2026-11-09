// Admin Dashboard Component for Enjoy Holidays Tour and Travel, Katra (Light Mode)

(function() {
  const { createElement: h, useState } = React;
  const Icons = window.Icons;

  window.AdminDashboard = function AdminDashboard({
    isOpen,
    onClose,
    packages,
    setPackages,
    enquiries,
    setEnquiries,
    onUpdateConfig
  }) {
    if (!isOpen) return null;

    const config = window.SITE_CONFIG;

    // Authentication State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authError, setAuthError] = useState("");

    // Active Dashboard Tab
    const [activeTab, setActiveTab] = useState("enquiries");

    // Package Editing State
    const [editingPackage, setEditingPackage] = useState(null);
    const [isAddingPackage, setIsAddingPackage] = useState(false);
    const [pkgForm, setPkgForm] = useState({
      name: "",
      duration: "",
      destination: "",
      startingPrice: "",
      categoryKey: "family",
      category: "Family Holidays",
      shortDescription: "",
      image: ""
    });

    // Contact Settings Form State
    const [settingsForm, setSettingsForm] = useState({
      primaryPhone: config.contact.primaryPhone,
      whatsappNumber: config.contact.whatsappNumber,
      email: config.contact.email,
      addressLine1: config.contact.address.line1,
      city: config.contact.address.city
    });
    const [settingsSuccess, setSettingsSuccess] = useState(false);

    // Login Handler
    const handleLogin = (e) => {
      e.preventDefault();
      if (
        username === config.admin.defaultUsername &&
        password === config.admin.defaultPasscode
      ) {
        setIsAuthenticated(true);
        setAuthError("");
      } else {
        setAuthError("Invalid credentials. Default: admin / katra2026");
      }
    };

    // Enquiry Status Toggle
    const toggleEnquiryStatus = (id) => {
      const updated = enquiries.map((enq) => {
        if (enq.id === id) {
          const nextStatus =
            enq.status === "New" ? "Contacted" : enq.status === "Contacted" ? "Confirmed" : "New";
          return { ...enq, status: nextStatus };
        }
        return enq;
      });
      setEnquiries(updated);
      try {
        localStorage.setItem("enjoy_holidays_enquiries", JSON.stringify(updated));
      } catch (err) {}
    };

    // Delete Enquiry
    const handleDeleteEnquiry = (id) => {
      if (confirm("Delete this customer enquiry record?")) {
        const updated = enquiries.filter((e) => e.id !== id);
        setEnquiries(updated);
        try {
          localStorage.setItem("enjoy_holidays_enquiries", JSON.stringify(updated));
        } catch (err) {}
      }
    };

    // Package Delete
    const handleDeletePackage = (id) => {
      if (confirm("Are you sure you want to delete this tour package?")) {
        const updated = packages.filter((p) => p.id !== id);
        setPackages(updated);
        try {
          localStorage.setItem("enjoy_holidays_packages", JSON.stringify(updated));
        } catch (err) {}
      }
    };

    // Package Save (Add / Edit)
    const handleSavePackage = (e) => {
      e.preventDefault();
      if (!pkgForm.name || !pkgForm.startingPrice) {
        alert("Please fill in package name and price.");
        return;
      }

      let updated;
      if (editingPackage) {
        updated = packages.map((p) =>
          p.id === editingPackage.id
            ? {
                ...p,
                name: pkgForm.name,
                duration: pkgForm.duration,
                destination: pkgForm.destination,
                startingPrice: Number(pkgForm.startingPrice),
                category: pkgForm.category,
                categoryKey: pkgForm.categoryKey,
                shortDescription: pkgForm.shortDescription,
                image: pkgForm.image || p.image
              }
            : p
        );
        setEditingPackage(null);
      } else {
        const newPkg = {
          id: "pkg-" + Date.now().toString().slice(-6),
          name: pkgForm.name,
          duration: pkgForm.duration || "4 Days / 3 Nights",
          destination: pkgForm.destination || "Katra & Kashmir",
          startingPrice: Number(pkgForm.startingPrice),
          category: pkgForm.category || "Family Holidays",
          categoryKey: pkgForm.categoryKey || "family",
          shortDescription: pkgForm.shortDescription || "Tailored travel package with verified hotels and private transport.",
          image:
            pkgForm.image ||
            "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
          rating: 4.9,
          reviewsCount: 1,
          badge: "New Tour"
        };
        updated = [newPkg, ...packages];
        setIsAddingPackage(false);
      }

      setPackages(updated);
      try {
        localStorage.setItem("enjoy_holidays_packages", JSON.stringify(updated));
      } catch (err) {}
    };

    // Save Settings
    const handleSaveSettings = (e) => {
      e.preventDefault();
      config.contact.primaryPhone = settingsForm.primaryPhone;
      config.contact.whatsappNumber = settingsForm.whatsappNumber;
      config.contact.email = settingsForm.email;
      config.contact.address.line1 = settingsForm.addressLine1;
      config.contact.address.city = settingsForm.city;

      if (onUpdateConfig) {
        onUpdateConfig({ ...config });
      }
      try {
        localStorage.setItem("enjoy_holidays_settings", JSON.stringify(config.contact));
      } catch (err) {}

      setSettingsSuccess(true);
      setTimeout(() => setSettingsSuccess(false), 3000);
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
            "bg-white border border-slate-200 rounded-3xl w-full max-w-5xl max-h-[94vh] overflow-y-auto shadow-2xl relative text-left text-slate-800 my-auto p-6 sm:p-8",
          onClick: (e) => e.stopPropagation()
        },

        // Top Close Button
        h(
          "button",
          {
            onClick: onClose,
            className:
              "absolute top-5 right-5 text-slate-400 hover:text-navy-950 p-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
          },
          h(Icons.X, { className: "w-5 h-5" })
        ),

        !isAuthenticated
          ? // Login View (Light Mode)
            h(
              "div",
              { className: "max-w-md mx-auto py-8 text-center space-y-6" },
              h(
                "div",
                {
                  className:
                    "w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mx-auto"
                },
                h(Icons.Lock, { className: "w-7 h-7" })
              ),
              h(
                "div",
                null,
                h("h3", { className: "text-2xl font-serif font-bold text-navy-950" }, "Admin Control Portal"),
                h(
                  "p",
                  { className: "text-xs text-slate-500 mt-1" },
                  "Enjoy Holidays Tour and Travel Management System"
                )
              ),
              h(
                "form",
                { onSubmit: handleLogin, className: "space-y-4 text-left" },
                h(
                  "div",
                  { className: "space-y-1" },
                  h("label", { className: "text-xs font-bold text-slate-700" }, "Admin Username"),
                  h("input", {
                    type: "text",
                    value: username,
                    onChange: (e) => setUsername(e.target.value),
                    placeholder: "Default: admin",
                    className:
                      "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                  })
                ),
                h(
                  "div",
                  { className: "space-y-1" },
                  h("label", { className: "text-xs font-bold text-slate-700" }, "Admin Passcode"),
                  h("input", {
                    type: "password",
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    placeholder: "Default: katra2026",
                    className:
                      "w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-ocean-500 font-medium"
                  })
                ),
                authError &&
                  h("div", { className: "p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium" }, authError),
                h(
                  "button",
                  {
                    type: "submit",
                    className:
                      "w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold py-3 rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  },
                  h(Icons.Lock, { className: "w-4 h-4 text-navy-950" }),
                  "Authenticate & Access Portal"
                )
              ),
              h(
                "p",
                { className: "text-[11px] text-slate-500" },
                "Default Demo Access: Username = ",
                h("code", { className: "text-amber-600 font-bold" }, "admin"),
                " | Passcode = ",
                h("code", { className: "text-amber-600 font-bold" }, "katra2026")
              )
            )
          : // Authenticated Dashboard View (Light Mode)
            h(
              "div",
              { className: "space-y-6" },

              // Top Bar with Logout
              h(
                "div",
                { className: "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200" },
                h(
                  "div",
                  null,
                  h(
                    "span",
                    { className: "text-amber-600 text-xs font-bold uppercase tracking-wider block" },
                    "Admin Control Panel"
                  ),
                  h(
                    "h3",
                    { className: "text-xl font-serif font-bold text-navy-950 mt-0.5" },
                    "Enjoy Holidays Operations Dashboard"
                  )
                ),
                h(
                  "div",
                  { className: "flex items-center gap-2" },
                  h(
                    "button",
                    {
                      onClick: () => setIsAuthenticated(false),
                      className:
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 text-xs border border-slate-200 font-bold transition-colors"
                    },
                    h(Icons.LogOut, { className: "w-3.5 h-3.5" }),
                    "Sign Out"
                  )
                )
              ),

              // Dashboard Navigation Tabs
              h(
                "div",
                { className: "flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar" },
                [
                  { id: "enquiries", label: `Customer Enquiries (${enquiries.length})` },
                  { id: "packages", label: `Tour Packages (${packages.length})` },
                  { id: "settings", label: "Contact & Katra Office Settings" }
                ].map((t) =>
                  h(
                    "button",
                    {
                      key: t.id,
                      onClick: () => setActiveTab(t.id),
                      className: `px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                        activeTab === t.id
                          ? "bg-amber-500 text-navy-950 shadow-md shadow-amber-500/20"
                          : "bg-slate-100 text-slate-700 hover:text-navy-950 hover:bg-slate-200"
                      }`
                    },
                    t.label
                  )
                )
              ),

              // --- TAB 1: Enquiries ---
              activeTab === "enquiries" &&
                h(
                  "div",
                  { className: "space-y-4" },
                  h(
                    "div",
                    { className: "flex items-center justify-between" },
                    h("h4", { className: "text-base font-bold text-navy-950" }, "Real Customer Enquiries Received"),
                    h(
                      "span",
                      { className: "text-xs text-slate-500 font-medium" },
                      "Click status pill to cycle: New ➔ Contacted ➔ Confirmed"
                    )
                  ),

                  enquiries.length === 0
                    ? h(
                        "div",
                        { className: "text-center py-12 bg-slate-50 rounded-2xl border border-slate-200" },
                        h(Icons.MessageSquare, { className: "w-10 h-10 text-slate-400 mx-auto mb-2" }),
                        h("p", { className: "text-sm text-slate-700 font-medium" }, "No customer enquiries yet."),
                        h(
                          "p",
                          { className: "text-xs text-slate-500 mt-1" },
                          "When customers submit enquiries from any page or package, they will appear here live."
                        )
                      )
                    : h(
                        "div",
                        { className: "overflow-x-auto rounded-2xl border border-slate-200" },
                        h(
                          "table",
                          { className: "w-full text-left text-xs text-slate-700 border-collapse bg-white" },
                          h(
                            "thead",
                            { className: "bg-slate-50 text-slate-500 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200" },
                            h(
                              "tr",
                              null,
                              h("th", { className: "py-3 px-3" }, "Ref ID"),
                              h("th", { className: "py-3 px-3" }, "Customer"),
                              h("th", { className: "py-3 px-3" }, "Mobile"),
                              h("th", { className: "py-3 px-3" }, "Destination / Req"),
                              h("th", { className: "py-3 px-3" }, "Date / Pax"),
                              h("th", { className: "py-3 px-3" }, "Status"),
                              h("th", { className: "py-3 px-3 text-right" }, "Actions")
                            )
                          ),
                          h(
                            "tbody",
                            { className: "divide-y divide-slate-100" },
                            enquiries.map((enq) =>
                              h(
                                "tr",
                                { key: enq.id, className: "hover:bg-slate-50 transition-colors" },
                                h("td", { className: "py-3 px-3 font-mono font-bold text-amber-600" }, enq.id),
                                h(
                                  "td",
                                  { className: "py-3 px-3" },
                                  h("span", { className: "font-bold text-navy-950 block" }, enq.fullName || enq.name),
                                  enq.email && h("span", { className: "text-[10px] text-slate-500 block" }, enq.email)
                                ),
                                h(
                                  "td",
                                  { className: "py-3 px-3" },
                                  h(
                                    "a",
                                    {
                                      href: `tel:${enq.mobile || enq.contactNumber || enq.contact}`,
                                      className: "text-emerald-700 hover:underline font-mono font-bold"
                                    },
                                    enq.mobile || enq.contactNumber || enq.contact
                                  )
                                ),
                                h(
                                  "td",
                                  { className: "py-3 px-3 max-w-xs" },
                                  h("span", { className: "font-bold text-ocean-700 block truncate" }, enq.destination || enq.type || "Tour"),
                                  h("span", { className: "text-[10px] text-slate-500 block truncate" }, enq.requirements || enq.notes || enq.category || "")
                                ),
                                h(
                                  "td",
                                  { className: "py-3 px-3 whitespace-nowrap" },
                                  h("span", { className: "font-medium text-slate-800 block" }, enq.travelDate || enq.date || "TBD"),
                                  h("span", { className: "text-[10px] text-slate-500" }, enq.travellers || enq.passengers || enq.rooms || "")
                                ),
                                h(
                                  "td",
                                  { className: "py-3 px-3" },
                                  h(
                                    "button",
                                    {
                                      onClick: () => toggleEnquiryStatus(enq.id),
                                      className: `px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                                        enq.status === "Confirmed"
                                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                          : enq.status === "Contacted"
                                          ? "bg-sky-100 text-sky-800 border border-sky-200"
                                          : "bg-amber-100 text-amber-800 border border-amber-200"
                                      }`
                                    },
                                    enq.status || "New"
                                  )
                                ),
                                h(
                                  "td",
                                  { className: "py-3 px-3 text-right" },
                                  h(
                                    "button",
                                    {
                                      onClick: () => handleDeleteEnquiry(enq.id),
                                      className: "text-rose-600 hover:text-rose-800 p-1 rounded"
                                    },
                                    h(Icons.Trash2, { className: "w-4 h-4" })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                ),

              // --- TAB 2: Packages Management ---
              activeTab === "packages" &&
                h(
                  "div",
                  { className: "space-y-6" },
                  h(
                    "div",
                    { className: "flex items-center justify-between" },
                    h("h4", { className: "text-base font-bold text-navy-950" }, "Manage Tour Packages"),
                    h(
                      "button",
                      {
                        onClick: () => {
                          setEditingPackage(null);
                          setPkgForm({
                            name: "",
                            duration: "5 Days / 4 Nights",
                            destination: "Katra & Kashmir",
                            startingPrice: "12000",
                            categoryKey: "family",
                            category: "Family Holidays",
                            shortDescription: "",
                            image: ""
                          });
                          setIsAddingPackage(!isAddingPackage);
                        },
                        className:
                          "bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow"
                      },
                      h(Icons.Plus, { className: "w-4 h-4 text-navy-950" }),
                      isAddingPackage ? "Cancel" : "Add New Package"
                    )
                  ),

                  // Add / Edit Form Modal
                  (isAddingPackage || editingPackage) &&
                    h(
                      "form",
                      {
                        onSubmit: handleSavePackage,
                        className:
                          "bg-slate-50 p-5 rounded-2xl border border-amber-400 space-y-4 animate-fade-in shadow-sm"
                      },
                      h(
                        "h5",
                        { className: "text-sm font-bold text-amber-700" },
                        editingPackage ? `Edit: ${editingPackage.name}` : "Create New Tour Package"
                      ),
                      h(
                        "div",
                        { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                        h(
                          "div",
                          { className: "space-y-1" },
                          h("label", { className: "text-xs font-bold text-slate-700" }, "Package Title *"),
                          h("input", {
                            type: "text",
                            value: pkgForm.name,
                            onChange: (e) => setPkgForm({ ...pkgForm, name: e.target.value }),
                            required: true,
                            className:
                              "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                          })
                        ),
                        h(
                          "div",
                          { className: "space-y-1" },
                          h("label", { className: "text-xs font-bold text-slate-700" }, "Starting Price (INR) *"),
                          h("input", {
                            type: "number",
                            value: pkgForm.startingPrice,
                            onChange: (e) => setPkgForm({ ...pkgForm, startingPrice: e.target.value }),
                            required: true,
                            className:
                              "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                          })
                        )
                      ),
                      h(
                        "div",
                        { className: "grid grid-cols-1 sm:grid-cols-3 gap-4" },
                        h(
                          "div",
                          { className: "space-y-1" },
                          h("label", { className: "text-xs font-bold text-slate-700" }, "Duration (e.g. 5 Days / 4 Nights)"),
                          h("input", {
                            type: "text",
                            value: pkgForm.duration,
                            onChange: (e) => setPkgForm({ ...pkgForm, duration: e.target.value }),
                            className:
                              "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                          })
                        ),
                        h(
                          "div",
                          { className: "space-y-1" },
                          h("label", { className: "text-xs font-bold text-slate-700" }, "Destinations Included"),
                          h("input", {
                            type: "text",
                            value: pkgForm.destination,
                            onChange: (e) => setPkgForm({ ...pkgForm, destination: e.target.value }),
                            className:
                              "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                          })
                        ),
                        h(
                          "div",
                          { className: "space-y-1" },
                          h("label", { className: "text-xs font-bold text-slate-700" }, "Tour Category"),
                          h(
                            "select",
                            {
                              value: pkgForm.categoryKey,
                              onChange: (e) =>
                                setPkgForm({
                                  ...pkgForm,
                                  categoryKey: e.target.value,
                                  category: e.target.options[e.target.selectedIndex].text
                                }),
                              className:
                                "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                            },
                            [
                              { key: "religious", name: "Religious Tours" },
                              { key: "family", name: "Family Holidays" },
                              { key: "honeymoon", name: "Honeymoon Packages" },
                              { key: "adventure", name: "Adventure Tours" },
                              { key: "weekend", name: "Weekend Getaways" },
                              { key: "corporate", name: "Corporate Tours" }
                            ].map((c) =>
                              h("option", { key: c.key, value: c.key }, c.name)
                            )
                          )
                        )
                      ),
                      h(
                        "div",
                        { className: "space-y-1" },
                        h("label", { className: "text-xs font-bold text-slate-700" }, "Image URL (Unsplash or hosted)"),
                        h("input", {
                          type: "url",
                          value: pkgForm.image,
                          onChange: (e) => setPkgForm({ ...pkgForm, image: e.target.value }),
                          placeholder: "https://images.unsplash.com/...",
                          className:
                            "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                        })
                      ),
                      h(
                        "div",
                        { className: "space-y-1" },
                        h("label", { className: "text-xs font-bold text-slate-700" }, "Short Description"),
                        h("textarea", {
                          rows: 2,
                          value: pkgForm.shortDescription,
                          onChange: (e) => setPkgForm({ ...pkgForm, shortDescription: e.target.value }),
                          className:
                            "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                        })
                      ),
                      h(
                        "div",
                        { className: "flex justify-end gap-2" },
                        h(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              setIsAddingPackage(false);
                              setEditingPackage(null);
                            },
                            className: "px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs"
                          },
                          "Cancel"
                        ),
                        h(
                          "button",
                          {
                            type: "submit",
                            className:
                              "px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs shadow"
                          },
                          editingPackage ? "Save Changes" : "Create Package"
                        )
                      )
                    ),

                  // Packages Table (Light Mode)
                  h(
                    "div",
                    { className: "overflow-x-auto rounded-2xl border border-slate-200" },
                    h(
                      "table",
                      { className: "w-full text-left text-xs text-slate-700 bg-white" },
                      h(
                        "thead",
                        { className: "bg-slate-50 text-slate-500 uppercase text-[10px] font-bold border-b border-slate-200" },
                        h(
                          "tr",
                          null,
                          h("th", { className: "py-3 px-3" }, "Package Name"),
                          h("th", { className: "py-3 px-3" }, "Duration"),
                          h("th", { className: "py-3 px-3" }, "Destination"),
                          h("th", { className: "py-3 px-3" }, "Price (INR)"),
                          h("th", { className: "py-3 px-3 text-right" }, "Actions")
                        )
                      ),
                      h(
                        "tbody",
                        { className: "divide-y divide-slate-100" },
                        packages.map((pkg) =>
                          h(
                            "tr",
                            { key: pkg.id, className: "hover:bg-slate-50" },
                            h(
                              "td",
                              { className: "py-3 px-3" },
                              h("span", { className: "font-bold text-navy-950 block" }, pkg.name),
                              h("span", { className: "text-[10px] text-amber-600 font-semibold" }, pkg.category)
                            ),
                            h("td", { className: "py-3 px-3 whitespace-nowrap font-medium" }, pkg.duration),
                            h("td", { className: "py-3 px-3" }, pkg.destination),
                            h(
                              "td",
                              { className: "py-3 px-3 font-bold text-amber-600 whitespace-nowrap" },
                              `₹${Number(pkg.startingPrice).toLocaleString('en-IN')}`
                            ),
                            h(
                              "td",
                              { className: "py-3 px-3 text-right whitespace-nowrap space-x-2" },
                              h(
                                "button",
                                {
                                  onClick: () => {
                                    setEditingPackage(pkg);
                                    setIsAddingPackage(false);
                                    setPkgForm({
                                      name: pkg.name,
                                      duration: pkg.duration,
                                      destination: pkg.destination,
                                      startingPrice: pkg.startingPrice,
                                      category: pkg.category,
                                      categoryKey: pkg.categoryKey,
                                      shortDescription: pkg.shortDescription,
                                      image: pkg.image
                                    });
                                  },
                                  className: "text-amber-600 hover:text-amber-800 p-1"
                                },
                                h(Icons.Edit, { className: "w-4 h-4" })
                              ),
                              h(
                                "button",
                                {
                                  onClick: () => handleDeletePackage(pkg.id),
                                  className: "text-rose-600 hover:text-rose-800 p-1"
                                },
                                h(Icons.Trash2, { className: "w-4 h-4" })
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),

              // --- TAB 3: Settings ---
              activeTab === "settings" &&
                h(
                  "form",
                  { onSubmit: handleSaveSettings, className: "space-y-4 max-w-xl" },
                  h("h4", { className: "text-base font-bold text-navy-950 mb-2" }, "Update Central Contact Details"),
                  settingsSuccess &&
                    h(
                      "div",
                      { className: "p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs border border-emerald-200 font-bold flex items-center gap-2" },
                      h(Icons.CheckCircle, { className: "w-4 h-4 text-emerald-600" }),
                      "Contact settings successfully updated across the website!"
                    ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Primary Business Phone"),
                    h("input", {
                      type: "text",
                      value: settingsForm.primaryPhone,
                      onChange: (e) => setSettingsForm({ ...settingsForm, primaryPhone: e.target.value }),
                      className:
                        "w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                    })
                  ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "WhatsApp Number (with Country Code)"),
                    h("input", {
                      type: "text",
                      value: settingsForm.whatsappNumber,
                      onChange: (e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value }),
                      className:
                        "w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                    })
                  ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Official Email Address"),
                    h("input", {
                      type: "email",
                      value: settingsForm.email,
                      onChange: (e) => setSettingsForm({ ...settingsForm, email: e.target.value }),
                      className:
                        "w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                    })
                  ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h("label", { className: "text-xs font-bold text-slate-700" }, "Katra Office Address Line"),
                    h("input", {
                      type: "text",
                      value: settingsForm.addressLine1,
                      onChange: (e) => setSettingsForm({ ...settingsForm, addressLine1: e.target.value }),
                      className:
                        "w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                    })
                  ),
                  h(
                    "button",
                    {
                      type: "submit",
                      className:
                        "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold py-2.5 px-6 rounded-xl text-xs shadow transition-all"
                    },
                    "Save Business Information"
                  )
                )
            )
      )
    );
  };
})();
