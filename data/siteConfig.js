// Central Configuration File for ENJOY HOLIDAYS TOUR AND TRAVEL, KATRA
// Real Verified Business Details from Google Business & JustDial

window.SITE_CONFIG = {
  company: {
    name: "ENJOY HOLIDAYS TOUR AND TRAVEL",
    shortName: "Enjoy Holidays",
    tagline: "Your Journey, Our Passion – Explore the World with Enjoy Holidays",
    subTagline: "Discover unforgettable destinations, comfortable stays, and memorable travel experiences with Enjoy Holidays Tour and Travel, Katra.",
    established: "Katra, Jammu & Kashmir",
    category: "Tour and Travel Agency",
    license: "Registered Tour Operator - J&K Tourism",
    rating: "4.8",
    ratingMax: "5.0",
    ratingSource: "Google Customer Reviews",
    currency: "₹",
    copyrightYear: 2026
  },

  // Central Verified Contact Information (from Official Visiting Card & Google Reviews)
  contact: {
    contactPerson: "Sunil Sharma",
    primaryPhone: "+91 70062 35878",
    secondaryPhone: "+91 94191 04938",
    whatsappNumber: "917006235878",
    email: "enjoyholidays44@gmail.com",
    supportEmail: "info@enjoyholidaystravel.com",
    address: {
      line1: "Ban Ganga Road, near Shalimar Garden Chintamani",
      line2: "Opposite Hotel Sanjeev Palace",
      city: "Katra",
      state: "Jammu and Kashmir",
      pincode: "182301",
      country: "India"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.742358988636!2d74.9312154!3d32.993418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e779a5b48ad0d%3A0xe546bdfd35b91b94!2sBan%20Ganga%20Rd%2C%20Katra%2C%20Jammu%20and%20Kashmir%20182301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    officeHours: {
      weekdays: "07:00 AM - 10:30 PM IST (Open 7 Days)",
      yatraSupport: "24/7 Pilgrimage & Emergency Support"
    }
  },

  // WhatsApp Pre-filled Messages
  whatsappMessages: {
    general: "Hello Enjoy Holidays Tour and Travel, I am interested in booking a tour package. Please share the details.",
    packageEnquiry: (packageName, duration) => 
      `Hello Enjoy Holidays Tour and Travel, I am interested in "${packageName}" (${duration}). Please share the package itinerary, quotation, and hotel options.`,
    taxiBooking: (pickup, drop, date, vehicle) =>
      `Hello Enjoy Holidays, I need a taxi booking from ${pickup} to ${drop} on ${date}. Preferred vehicle: ${vehicle}. Please share fare details.`,
    hotelBooking: (destination, checkin, rooms, category) =>
      `Hello Enjoy Holidays, I am looking for hotel booking assistance in ${destination} from ${checkin} for ${rooms} room(s) (${category} category). Please share availability.`
  },

  // Social Links
  socialLinks: {
    facebook: "https://www.facebook.com/enjoyholidays44/",
    googleReview: "https://www.google.com/searchviewer/10?svid=CCYSESoPCg0vZy8xMWNseXZybDVyGAo",
    instagram: "https://instagram.com/enjoyholidaystravel",
    whatsapp: "https://wa.me/917006235878"
  },

  // Admin Credentials
  admin: {
    defaultUsername: "admin",
    defaultPasscode: "katra2026"
  }
};
