// Taxi & Transportation Fleet & Routes Dataset for Enjoy Holidays Tour and Travel, Katra

window.TAXI_DATA = {
  vehicles: [
    {
      id: "sedan",
      name: "Sedan (Swift Dzire / Toyota Etios)",
      category: "Compact Comfort",
      seats: "4 Passengers + 1 Driver",
      luggage: "2 Large + 2 Small Bags",
      ac: true,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      features: ["Clean & Sanitized", "Air Conditioned", "Experienced Hill Driver", "Spacious Boot Space", "Music System"],
      idealFor: "Couples, small families, and budget-friendly transfers"
    },
    {
      id: "suv-kia",
      name: "Premium MPV (New Kia Carens / Ertiga)",
      category: "Spacious Comfort",
      seats: "6 Passengers + 1 Driver",
      luggage: "3 Large + 2 Small Bags",
      ac: true,
      image: "assets/images/unnamed (6).webp",
      features: ["Rear AC Vents", "Flexible Seating", "Smooth Suspension", "Ample Legroom", "New Fleet Vehicle"],
      idealFor: "Families with luggage, Katra railway transfers, and pilgrimage groups"
    },
    {
      id: "suv-crysta",
      name: "Luxury SUV (Toyota Innova Crysta)",
      category: "VIP Mountain Comfort",
      seats: "6-7 Passengers + 1 Driver",
      luggage: "4 Large + 3 Small Bags",
      ac: true,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      features: ["Captain Leather Seats", "Dual Zone Climate AC", "Superior Mountain Safety", "Phone Chargers", "Supreme Comfort"],
      idealFor: "Long-distance Kashmir highways, VIP travel, and premium family tours"
    },
    {
      id: "tempo-traveller",
      name: "Force Tempo Traveller (12 / 17 / 26 Seater)",
      category: "Katra Group Fleet",
      seats: "12 to 26 Passengers",
      luggage: "Dedicated Large Luggage Boot",
      ac: true,
      image: "assets/images/unnamed (3).webp",
      features: ["Pushback Push Recliner Seats", "Individual AC Vents", "Licensed Hill Driver", "Clean & Sanitized", "Wide Panoramic Windows"],
      idealFor: "Large pilgrimage Yatris, Shivkhori darshan, and joint family groups"
    },
    {
      id: "luxury-volvo-coach",
      name: "Super High Deck Volvo Luxury Coach",
      category: "Interstate Tour Coach",
      seats: "35 to 45 Reclining / Sleeper",
      luggage: "Massive Underfloor Cargo",
      ac: true,
      image: "assets/images/unnamed (4).webp",
      features: ["Pushback Luxury Recliners", "Ambient Neon Lighting", "High Deck Safety", "Sound System & Mic", "Large Luggage Bays"],
      idealFor: "Pan-India pilgrimage sangats, corporate tours, and long-distance Himachal & Kashmir packages"
    }
  ],

  routes: [
    {
      id: "katra-jammu-railway",
      from: "Katra Hotel / Base",
      to: "Jammu Tawi Railway Station",
      distance: "48 KM",
      duration: "1 Hour 15 Mins",
      sedanPrice: "₹1,800",
      suvPrice: "₹2,600",
      tempoPrice: "₹4,500",
      popular: true,
      description: "Fast, timely connection for all express trains departing from Jammu Tawi station."
    },
    {
      id: "katra-jammu-airport",
      from: "Katra Hotel / Base",
      to: "Jammu Civil Airport (IXJ)",
      distance: "52 KM",
      duration: "1 Hour 20 Mins",
      sedanPrice: "₹1,900",
      suvPrice: "₹2,700",
      tempoPrice: "₹4,800",
      popular: true,
      description: "Reliable airport transfers with flight tracking and punctual chauffeurs."
    },
    {
      id: "katra-local-darshan",
      from: "Katra Station / Hotels",
      to: "Banganga / Helipad / Local Sightseeing",
      distance: "Local City",
      duration: "Full Day / Transfers",
      sedanPrice: "₹1,200",
      suvPrice: "₹1,800",
      tempoPrice: "₹3,000",
      popular: true,
      description: "Convenient pickups for Ban Ganga entry, Katra Helipad, Nau Devi, and Bhumika Temple."
    },
    {
      id: "katra-shivkhori-return",
      from: "Katra",
      to: "Shivkhori Holy Cave & Back",
      distance: "150 KM (Round Trip)",
      duration: "Same Day Excursion",
      sedanPrice: "₹2,800",
      suvPrice: "₹3,800",
      tempoPrice: "₹6,500",
      popular: true,
      description: "Scenic drive through Reasi hills with halt at Siar Baba waterfall."
    },
    {
      id: "katra-to-srinagar",
      from: "Katra",
      to: "Srinagar (Dal Lake / Hotel)",
      distance: "250 KM",
      duration: "6 - 7 Hours",
      sedanPrice: "₹6,500",
      suvPrice: "₹9,500",
      tempoPrice: "₹15,000",
      popular: true,
      description: "Comfortable drive through the new Banihal-Qazigund four-lane tunnel and scenic valley views."
    },
    {
      id: "srinagar-local-sightseeing",
      from: "Srinagar Hotel",
      to: "Mughal Gardens & Dal Lake Tour",
      distance: "Day Sightseeing",
      duration: "8 Hours / 80 KM",
      sedanPrice: "₹2,200",
      suvPrice: "₹3,200",
      tempoPrice: "₹5,500",
      popular: false,
      description: "Covers Nishat, Shalimar, Chashme Shahi, Shankaracharya Temple, and Old City markets."
    },
    {
      id: "kashmir-complete-tour-taxi",
      from: "Jammu / Katra / Srinagar",
      to: "Complete Kashmir Tour (5-7 Days)",
      distance: "Full Valley Circuit",
      duration: "Multi-Day Dedicated Cab",
      sedanPrice: "₹3,200 / day",
      suvPrice: "₹4,500 / day",
      tempoPrice: "₹7,500 / day",
      popular: true,
      description: "Your vehicle stays dedicated exclusively with you for all days, transfers, and sightseeing."
    },
    {
      id: "katra-amritsar-outstation",
      from: "Katra",
      to: "Amritsar (Golden Temple & Wagah)",
      distance: "260 KM",
      duration: "5 - 6 Hours",
      sedanPrice: "₹5,500",
      suvPrice: "₹8,000",
      tempoPrice: "₹13,500",
      popular: true,
      description: "Smooth NH44 highway drive connecting Katra pilgrimage with the Holy Golden Temple."
    }
  ]
};
