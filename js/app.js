// Main Application Master Component for Enjoy Holidays Tour and Travel, Katra

(function() {
  const { createElement: h, useState, useEffect } = React;

  window.EnjoyHolidaysApp = function EnjoyHolidaysApp() {
    // Current Active Page / View
    const [activePage, setActivePage] = useState("home");

    // Datasets with LocalStorage Persistence Fallback & Fresh Data Sync
    const [packages, setPackages] = useState(() => {
      try {
        const saved = localStorage.getItem("enjoy_holidays_packages");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.length >= (window.PACKAGES_DATA || []).length) {
            // Merge fresh image paths and pricing while keeping any admin additions
            const baseMap = {};
            (window.PACKAGES_DATA || []).forEach(p => { baseMap[p.id] = p; });
            return parsed.map(p => {
              if (baseMap[p.id]) {
                return { ...p, image: baseMap[p.id].image, startingPrice: baseMap[p.id].startingPrice, priceNote: baseMap[p.id].priceNote };
              }
              return p;
            });
          }
        }
      } catch (e) {}
      return window.PACKAGES_DATA || [];
    });

    const [enquiries, setEnquiries] = useState(() => {
      try {
        const saved = localStorage.getItem("enjoy_holidays_enquiries");
        if (saved) return JSON.parse(saved);
      } catch (e) {}
      return [
        {
          id: "ENQ-748291",
          fullName: "Vikram Malhotra",
          mobile: "+91 98765 12345",
          email: "vikram.m@example.com",
          destination: "Kashmir Paradise Tour",
          travelDate: "2026-12-15",
          travellers: "2 Adults (Honeymoon)",
          requirements: "Looking for luxury houseboat on Dal lake and Gulmarg Gondola Phase 2 booking.",
          status: "Contacted",
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
        },
        {
          id: "ENQ-918234",
          fullName: "Sunita Aggarwal",
          mobile: "+91 98111 88776",
          email: "sunita.delhi@example.com",
          destination: "Vaishno Devi, Katra",
          travelDate: "2026-11-20",
          travellers: "4 Adults (Family)",
          requirements: "Need Katra hotel near station + Innova cab + Yatra RFID slip assistance.",
          status: "New",
          createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
        }
      ];
    });

    // Modals State
    const [selectedPackageForDetail, setSelectedPackageForDetail] = useState(null);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
    const [enquiryInitialPackage, setEnquiryInitialPackage] = useState(null);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    // Filtered Packages from Search Widget
    const [searchResults, setSearchResults] = useState(null);

    // Save enquiries to localStorage
    useEffect(() => {
      try {
        localStorage.setItem("enjoy_holidays_enquiries", JSON.stringify(enquiries));
      } catch (e) {}
    }, [enquiries]);

    // Handle Search from Search Widget
    const handleSearch = (searchParams) => {
      let filtered = [...packages];

      if (searchParams.destination && searchParams.destination !== "all") {
        const query = searchParams.destination.toLowerCase().replace("-", " ");
        filtered = filtered.filter(
          (p) =>
            p.destination.toLowerCase().includes(query) ||
            p.name.toLowerCase().includes(query)
        );
      }

      if (searchParams.category && searchParams.category !== "all") {
        filtered = filtered.filter((p) => p.categoryKey === searchParams.category);
      }

      setSearchResults(filtered);
      setActivePage("packages");
      setTimeout(() => {
        const el = document.getElementById("packages-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    };

    // Customer Enquiry Handler
    const handleEnquirySubmitted = (newEnquiry) => {
      const updated = [newEnquiry, ...enquiries];
      setEnquiries(updated);

      // Attempt async POST to local Python server if available
      try {
        fetch("/api/enquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEnquiry)
        }).catch(() => {});
      } catch (err) {}
    };

    // Taxi Enquiry Handler
    const handleTaxiSubmitted = (taxiEnquiry) => {
      const formatted = {
        ...taxiEnquiry,
        fullName: "Taxi Passenger",
        mobile: taxiEnquiry.contactNumber,
        destination: `${taxiEnquiry.pickup} to ${taxiEnquiry.destination}`,
        requirements: `Vehicle: ${taxiEnquiry.vehicle}. Notes: ${taxiEnquiry.notes || 'None'}`,
        status: "New"
      };
      handleEnquirySubmitted(formatted);
    };

    // Hotel Enquiry Handler
    const handleHotelSubmitted = (hotelEnquiry) => {
      const formatted = {
        ...hotelEnquiry,
        fullName: hotelEnquiry.name,
        mobile: hotelEnquiry.contact,
        destination: `Hotel in ${hotelEnquiry.destination}`,
        requirements: `Category: ${hotelEnquiry.category}, Rooms: ${hotelEnquiry.rooms}, Guests: ${hotelEnquiry.guests}, Check-in: ${hotelEnquiry.checkIn}, Check-out: ${hotelEnquiry.checkOut}`,
        status: "New"
      };
      handleEnquirySubmitted(formatted);
    };

    // Destination Card Click Handler
    const handleSelectDestination = (dest) => {
      const query = dest.name.split(",")[0].toLowerCase().trim();
      const matched = packages.filter(
        (p) =>
          p.destination.toLowerCase().includes(query) ||
          p.name.toLowerCase().includes(query)
      );
      setSearchResults(matched.length > 0 ? matched : null);
      setActivePage("packages");
      setTimeout(() => {
        const el = document.getElementById("packages-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    };

    // Category Card Click Handler
    const handleSelectCategory = (catKey) => {
      const matched = packages.filter((p) => p.categoryKey === catKey);
      setSearchResults(matched.length > 0 ? matched : null);
      setActivePage("packages");
      setTimeout(() => {
        const el = document.getElementById("packages-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    };

    return h(
      "div",
      { className: "min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-navy-950" },

      // 1. Navigation Bar (Sticky with Top Contact Bar & Mobile Drawer)
      h(window.Navbar, {
        activePage,
        setActivePage: (p) => {
          setActivePage(p);
          setSearchResults(null);
        },
        onOpenEnquiry: (pkg = null) => {
          setEnquiryInitialPackage(pkg);
          setIsEnquiryModalOpen(true);
        },
        onOpenAdmin: () => setIsAdminOpen(true),
        onSelectCategory: handleSelectCategory,
        onSelectDestination: handleSelectDestination
      }),

      // 2. Main Page Content Routing
      h(
        "main",
        { className: "flex-1" },

        // --- HOME PAGE (All requested sections seamlessly integrated) ---
        activePage === "home" &&
          h(
            React.Fragment,
            null,
            // Section 1: Cinematic Hero Slideshow (Real Business Photos)
            h(window.HeroSlideshow, {
              onExploreDestinations: () => {
                const el = document.getElementById("destinations-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else setActivePage("destinations");
              },
              onPlanTrip: () => {
                setEnquiryInitialPackage(null);
                setIsEnquiryModalOpen(true);
              },
              onOpenEnquiry: () => {
                setEnquiryInitialPackage(null);
                setIsEnquiryModalOpen(true);
              }
            }),

            // Section 2: Search Widget
            h(window.SearchWidget, {
              onSearch: handleSearch
            }),

            // Section 3: Popular Destinations
            h(window.PopularDestinations, {
              onSelectDestination: handleSelectDestination
            }),

            // Section 4: Featured Tour Packages
            h(window.FeaturedPackages, {
              packagesList: searchResults || packages,
              onViewPackageDetails: (pkg) => setSelectedPackageForDetail(pkg),
              onEnquirePackage: (pkg) => {
                setEnquiryInitialPackage(pkg);
                setIsEnquiryModalOpen(true);
              }
            }),

            // Section 5: Special Categories
            h(window.SpecialCategories, {
              onSelectCategory: handleSelectCategory
            }),

            // Section 6: Why Choose Enjoy Holidays
            h(window.WhyChooseUs, {
              onPlanTrip: () => {
                setEnquiryInitialPackage(null);
                setIsEnquiryModalOpen(true);
              }
            }),

            // Section 7: Taxi & Transportation Services
            h(window.TaxiServices, {
              onTaxiSubmitted: handleTaxiSubmitted
            }),

            // Section 8: Hotel Booking Section
            h(window.HotelBooking, {
              onHotelSubmitted: handleHotelSubmitted
            }),

            // Section 9: About Us
            h(window.AboutSection, {
              onExplorePackages: () => {
                const el = document.getElementById("packages-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              },
              onContactUs: () => {
                const el = document.getElementById("contact-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }),

            // Section 10: Photo Gallery
            h(window.GallerySection, null),

            // Section 13: Contact Us
            h(window.ContactSection, {
              onMessageSubmitted: (msg) => {
                handleEnquirySubmitted({
                  ...msg,
                  fullName: msg.name,
                  mobile: msg.phone,
                  destination: msg.subject,
                  requirements: msg.message,
                  status: "New"
                });
              }
            })
          ),

        // --- ABOUT US DEDICATED VIEW ---
        activePage === "about" &&
          h(
            "div",
            { className: "pt-24" },
            h(window.AboutSection, {
              onExplorePackages: () => setActivePage("packages"),
              onContactUs: () => setActivePage("contact")
            }),
            h(window.WhyChooseUs, {
              onPlanTrip: () => {
                setEnquiryInitialPackage(null);
                setIsEnquiryModalOpen(true);
              }
            }),
            h(window.ContactSection, null)
          ),

        // --- DESTINATIONS DEDICATED VIEW ---
        activePage === "destinations" &&
          h(
            "div",
            { className: "pt-24" },
            h(window.PopularDestinations, {
              onSelectDestination: handleSelectDestination
            }),
            h(window.FeaturedPackages, {
              packagesList: searchResults || packages,
              onViewPackageDetails: (pkg) => setSelectedPackageForDetail(pkg),
              onEnquirePackage: (pkg) => {
                setEnquiryInitialPackage(pkg);
                setIsEnquiryModalOpen(true);
              }
            })
          ),

        // --- PACKAGES DEDICATED VIEW ---
        activePage === "packages" &&
          h(
            "div",
            { className: "pt-24" },
            h(window.SearchWidget, { onSearch: handleSearch }),
            h(window.FeaturedPackages, {
              packagesList: searchResults || packages,
              onViewPackageDetails: (pkg) => setSelectedPackageForDetail(pkg),
              onEnquirePackage: (pkg) => {
                setEnquiryInitialPackage(pkg);
                setIsEnquiryModalOpen(true);
              }
            }),
            h(window.SpecialCategories, {
              onSelectCategory: handleSelectCategory
            })
          ),

        // --- TAXI SERVICES DEDICATED VIEW ---
        activePage === "taxi" &&
          h(
            "div",
            { className: "pt-24" },
            h(window.TaxiServices, { onTaxiSubmitted: handleTaxiSubmitted }),
            h(window.WhyChooseUs, {
              onPlanTrip: () => {
                setEnquiryInitialPackage(null);
                setIsEnquiryModalOpen(true);
              }
            })
          ),

        // --- HOTEL BOOKING DEDICATED VIEW ---
        activePage === "hotels" &&
          h(
            "div",
            { className: "pt-24" },
            h(window.HotelBooking, { onHotelSubmitted: handleHotelSubmitted }),
            h(window.WhyChooseUs, {
              onPlanTrip: () => {
                setEnquiryInitialPackage(null);
                setIsEnquiryModalOpen(true);
              }
            })
          ),

        // --- GALLERY DEDICATED VIEW ---
        activePage === "gallery" &&
          h(
            "div",
            { className: "pt-24" },
            h(window.GallerySection, null)
          ),

        // --- CONTACT US DEDICATED VIEW ---
        activePage === "contact" &&
          h(
            "div",
            { className: "pt-24" },
            h(window.ContactSection, {
              onMessageSubmitted: (msg) => {
                handleEnquirySubmitted({
                  ...msg,
                  fullName: msg.name,
                  mobile: msg.phone,
                  destination: msg.subject,
                  requirements: msg.message,
                  status: "New"
                });
              }
            })
          ),

        // --- 404 NOT FOUND ---
        activePage === "404" &&
          h(
            "div",
            { className: "pt-24" },
            h(window.NotFoundPage, { onGoHome: () => setActivePage("home") })
          )
      ),

      // 3. Footer
      h(window.Footer, {
        onNavigate: (pageId) => {
          setActivePage(pageId);
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        onOpenAdmin: () => setIsAdminOpen(true)
      }),

      // 4. Floating WhatsApp Action on All Pages
      h(window.FloatingWhatsApp, null),

      // 5. Package Details Modal
      selectedPackageForDetail &&
        h(window.PackageDetailModal, {
          pkg: selectedPackageForDetail,
          onClose: () => setSelectedPackageForDetail(null),
          onOpenEnquiry: (pkg) => {
            setSelectedPackageForDetail(null);
            setEnquiryInitialPackage(pkg);
            setIsEnquiryModalOpen(true);
          }
        }),

      // 6. Customer Enquiry Modal
      isEnquiryModalOpen &&
        h(window.EnquiryModal, {
          isOpen: isEnquiryModalOpen,
          initialPackage: enquiryInitialPackage,
          onClose: () => {
            setIsEnquiryModalOpen(false);
            setEnquiryInitialPackage(null);
          },
          onEnquirySubmitted: handleEnquirySubmitted
        }),

      // 7. Secure Admin Control Dashboard
      isAdminOpen &&
        h(window.AdminDashboard, {
          isOpen: isAdminOpen,
          onClose: () => setIsAdminOpen(false),
          packages,
          setPackages,
          enquiries,
          setEnquiries
        })
    );
  };
})();
