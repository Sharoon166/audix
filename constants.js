export const products = [
  {
    id: 1,
    name: "Wireless N7007",
    description:
      "Experience the freedom of wireless sound with our N7007 earbuds. Engineered for music lovers, gamers, and everyday listeners.",
    image: "/earbuds/skywave.webp",
    price: "$199.99",
    features: [
      {
        heading: "Wireless",
        detail:
          "Active Noise Cancellation, 30-hour battery life, Bluetooth 5.2, Water resistant",
      },
      {
        heading: "Comfort",
        detail:
          "Ergonomic design, Lightweight construction, Multiple ear tip sizes",
      },
      {
        heading: "Sound Quality",
        detail: "Dynamic drivers, Deep bass response, Clear mids and highs",
      },
    ],
  },
  {
    id: 2,
    name: "StudioFlex Pro",
    description:
      "Professional-grade audio quality with premium comfort. Perfect for studio sessions and extended listening.",
    image: "/earbuds/studioflex.png",
    price: "$349.99",
    features: [
      {
        heading: "Studio Quality",
        detail:
          "Hi-Fi audio, 40mm drivers, Memory foam cushions, Foldable design",
      },
      {
        heading: "Professional",
        detail:
          "Balanced sound signature, Pro-grade cables, Dual input options",
      },
      {
        heading: "Durability",
        detail: "Metal construction, Replaceable parts, Heavy-duty headband",
      },
    ],
  },
  {
    id: 3,
    name: "GamePulse Elite",
    description:
      "Ultra-low latency gaming earbuds with immersive 3D audio. Dominate your games with crystal-clear communication.",
    image: "/earbuds/gamepulse.png",
    price: "$229.99",
    features: [
      {
        heading: "Gaming",
        detail:
          "7.1 surround sound, RGB lighting, Detachable mic, Low latency mode",
      },
      {
        heading: "Connectivity",
        detail:
          "Multi-platform support, Quick switch function, Wireless/wired modes",
      },
      {
        heading: "Customization",
        detail: "Programmable buttons, Custom EQ settings, RGB color profiles",
      },
      {
        heading: "Customizable",
        detail: "Programmable buttons, Custom EQ settings, RGB color profiles",
      },
    ],
  },
];

export const collections = [
  {
    id: 1,
    name: "Wireless Essentials",
    description:
      "A curated set of our best wireless audio products for on-the-go listening.",
    image: "/collections/wireless-essentials.webp",
    products: [1, 3], // references product ids
    features: [
      {
        heading: "Freedom",
        detail: "No wires, no limits. Enjoy music anywhere.",
      },
      {
        heading: "Versatility",
        detail: "Perfect for travel, work, and play.",
      },
      {
        heading: "Battery Life",
        detail: "Extended playtime with quick charging capabilities.",
      },
    ],
  },
  {
    id: 2,
    name: "Studio Masterpieces",
    description: "Premium audio gear for professionals and audiophiles.",
    image: "/collections/studio-masterpieces.png",
    products: [2],
    features: [
      {
        heading: "Professional Quality",
        detail: "Engineered for studio and critical listening.",
      },
      {
        heading: "Comfort",
        detail: "Long sessions, zero fatigue.",
      },
      {
        heading: "Sound Isolation",
        detail: "Premium noise cancellation for pure audio experience.",
      },
    ],
  },
];
