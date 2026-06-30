export interface Farmhouse {
  slug: string;
  name: string;
  location: string;
  description: string;
  capacity: number;
  amenities: string[];
  priceDisplay: string;
  images: string[];
  featured: boolean;
  mapEmbedUrl?: string;
  reviews?: { name: string; rating: number; text: string }[];
}

export const farmhouses: Farmhouse[] = [
  {
    slug: "mountain-grace",
    name: "Mountain Grace",
    location: "Shimla Hills, HP",
    description: "Perched on a ridge with 180-degree Himalayan views, this luxury farmhouse offers an infinity pool, private orchard, and vintage interiors. Ideal for family reunions and wellness retreats.",
    capacity: 12,
    amenities: ["Pool", "BBQ", "Bonfire", "WiFi", "Chef", "Parking"],
    priceDisplay: "Starting ₹25,000/night",
    images: [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800"
],
    featured: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.468334087702!2d77.17358931513005!3d31.104681981497745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057c1c3f1f1f1f%3A0xb1c1c1c1c1c1c1c1!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000",
    reviews: [
      { name: "Rahul S.", rating: 5, text: "Absolutely stunning! The infinity pool and the view were breathtaking." },
      { name: "Priya M.", rating: 4, text: "Lovely place, great service. The bonfire night was magical." }
    ]
  },
  {
    slug: "lake-view-retreat",
    name: "Lake View Retreat",
    location: "Nainital, UK",
    description: "Steps away from the lake, this serene farmhouse blends contemporary design with Kumaoni architecture. Enjoy a private jacuzzi, bonfire pit, and boat rides.",
    capacity: 8,
    amenities: ["Jacuzzi", "Bonfire", "Lake Access", "WiFi", "Breakfast", "Parking"],
    priceDisplay: "Starting ₹18,000/night",
    images: [
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    featured: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.123...",
    reviews: [
      { name: "Amit K.", rating: 5, text: "Perfect getaway! The lake access made our trip unforgettable." },
      { name: "Sunita R.", rating: 4, text: "Beautiful property, very clean and well maintained." }
    ]
  },
  {
    slug: "goa-beach-villa",
    name: "Goa Beach Villa",
    location: "North Goa, GA",
    description: "A tropical paradise with a private pool, direct beach access, and an open bar. Perfect for party lovers and sunset chasers.",
    capacity: 10,
    amenities: ["Pool", "Beach Access", "Bar", "WiFi", "Parking"],
    priceDisplay: "Starting ₹22,000/night",
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
    ],
    featured: false,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.789...",
    reviews: [
      { name: "Vikram P.", rating: 5, text: "Insane sunset views and the private beach was a dream!" },
      { name: "Neha G.", rating: 4, text: "Great party spot, staff was super friendly." }
    ]
  },
  {
    slug: "coorg-coffee-estate",
    name: "Coorg Coffee Estate",
    location: "Coorg, KA",
    description: "Nestled in coffee plantations, this farmhouse offers misty mornings, lush greenery, and the aroma of fresh coffee. A perfect romantic escape.",
    capacity: 6,
    amenities: ["Bonfire", "Coffee Tour", "WiFi", "Breakfast", "Parking"],
    priceDisplay: "Starting ₹14,000/night",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
    ],
    featured: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.654...",
    reviews: [
      { name: "Deepa M.", rating: 5, text: "The plantation walk was so romantic. We loved every bit." },
      { name: "Rohan S.", rating: 5, text: "Coffee was amazing, and the misty mornings felt like a dream." }
    ]
  },
  {
    slug: "jaipur-heritage-haveli",
    name: "Jaipur Heritage Haveli",
    location: "Jaipur, RJ",
    description: "A 200-year-old restored haveli with courtyards, rooftop dining, and Rajasthani cuisine. Experience royalty like never before.",
    capacity: 14,
    amenities: ["Pool", "Rooftop Dining", "Cultural Show", "WiFi", "Parking"],
    priceDisplay: "Starting ₹30,000/night",
    images: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      "https://images.unsplash.com/photo-1570168007206-dfb0e1e5e2f0?w=800",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800"
    ],
    featured: false,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.987...",
    reviews: [
      { name: "Sangeeta R.", rating: 5, text: "Felt like a queen! The haveli is gorgeous and food is divine." }
    ]
  },
  {
    slug: "lonavala-misty-woods",
    name: "Lonavala Misty Woods",
    location: "Lonavala, MH",
    description: "Surrounded by dense forests, this farmhouse offers a private waterfall, trekking trails, and a natural pool. Perfect for adventure enthusiasts.",
    capacity: 10,
    amenities: ["Waterfall", "Trekking", "Pool", "BBQ", "WiFi"],
    priceDisplay: "Starting ₹20,000/night",
    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
    ],
    featured: false,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.456...",
    reviews: [
      { name: "Arjun M.", rating: 5, text: "Trekking to the waterfall was the highlight. Great for groups." },
      { name: "Kavita B.", rating: 4, text: "Very peaceful, loved the natural surroundings." }
    ]
  },
  {
    slug: "udaipur-lake-palace",
    name: "Udaipur Lake Palace",
    location: "Udaipur, RJ",
    description: "A luxurious farmhouse on the banks of Lake Pichola with a private boat ride, rooftop pool, and royal dining. Witness the city of lakes in style.",
    capacity: 8,
    amenities: ["Pool", "Boat Ride", "Rooftop Dining", "WiFi", "Parking"],
    priceDisplay: "Starting ₹35,000/night",
    images: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
      "https://images.unsplash.com/photo-1570168007206-dfb0e1e5e2f0?w=800",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800"
    ],
    featured: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.987...",
    reviews: [
      { name: "Rajesh K.", rating: 5, text: "The private boat ride at sunset was magical. Unforgettable!" },
      { name: "Anjali T.", rating: 5, text: "Absolutely luxurious, felt like a royal vacation." }
    ]
  },
  {
    slug: "kerala-backwaters",
    name: "Kerala Backwaters",
    location: "Alleppey, KL",
    description: "A serene farmhouse overlooking the backwaters, with a private houseboat, Ayurvedic spa, and traditional Kerala cuisine. Reconnect with nature.",
    capacity: 6,
    amenities: ["Houseboat", "Spa", "Ayurvedic Meals", "WiFi", "Parking"],
    priceDisplay: "Starting ₹27,000/night",
    images: [
      "https://images.unsplash.com/photo-1590055531615-f86d26e1a15c?w=800",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
    ],
    featured: false,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.789...",
    reviews: [
      { name: "Lakshmi N.", rating: 5, text: "Houseboat stay was surreal. Spa treatments were top-notch." }
    ]
  }
];