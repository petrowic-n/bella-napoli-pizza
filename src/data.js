// ─────────────────────────────────────────
//  Bella Napoli — App Data
//  Import what you need:
//  import { PIZZAS, FEATURES, REVIEWS, CATEGORIES } from './data'
// ─────────────────────────────────────────

export const CATEGORIES = [
  { id: "all",     label: "All" },
  { id: "classic", label: "Classic" },
  { id: "special", label: "Special" },
  { id: "veggie",  label: "Veggie" },
];

export const PIZZAS = [
  {
    id: 1,
    name: "Margherita",
    description: "San Marzano tomato, fior di latte, fresh basil, extra virgin olive oil.",
    price: 10,
    emoji: "🍕",
    category: "classic",
  },
  {
    id: 2,
    name: "Diavola",
    description: "Spicy Calabrian salami, tomato, smoked provola, chilli oil.",
    price: 13,
    emoji: "🌶️",
    category: "classic",
  },
  {
    id: 3,
    name: "Quattro Stagioni",
    description: "Artichokes, ham, mushrooms, olives — each in their corner.",
    price: 14,
    emoji: "🍄",
    category: "classic",
  },
  {
    id: 4,
    name: "Nduja & Honey",
    description: "Spreadable Calabrian 'nduja, fresh ricotta, wildflower honey, rocket.",
    price: 15,
    emoji: "🍯",
    category: "special",
  },
  {
    id: 5,
    name: "Burrata Bianca",
    description: "No tomato. Burrata, truffle oil, porcini, thyme, sea salt.",
    price: 17,
    emoji: "🧀",
    category: "special",
  },
  {
    id: 6,
    name: "Pistachio Mortadella",
    description: "Mortadella, pistachio cream, smoked scamorza, lemon zest.",
    price: 16,
    emoji: "🌿",
    category: "special",
  },
  {
    id: 7,
    name: "Verdure Arrosto",
    description: "Roasted courgette, aubergine, peppers, buffalo mozzarella.",
    price: 12,
    emoji: "🥦",
    category: "veggie",
  },
  {
    id: 8,
    name: "Funghi e Tartufo",
    description: "Mixed wild mushrooms, black truffle paste, fontina, rosemary.",
    price: 16,
    emoji: "🍄",
    category: "veggie",
  },
  {
    id: 9,
    name: "Pomodorini Confit",
    description: "Slow-roasted cherry tomatoes, stracciatella, fresh basil, capers.",
    price: 13,
    emoji: "🍅",
    category: "veggie",
  },
];

export const FEATURES = [
  {
    id: 1,
    icon: "🔥",
    title: "Wood-fired Oven",
    description: "Hand-built in 1989. 485°C. 90 seconds to perfection.",
  },
  {
    id: 2,
    icon: "🌿",
    title: "Local Ingredients",
    description: "Sourced from farms within 50km. What's fresh dictates the menu.",
  },
  {
    id: 3,
    icon: "⏱",
    title: "45 min delivery",
    description: "Guaranteed hot, or your next pizza is on us. No exceptions.",
  },
  {
    id: 4,
    icon: "🧑‍🍳",
    title: "Family Recipe",
    description: "Three generations of dough. Nothing written down — all in our hands.",
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Luca M.",
    stars: 5,
    text: "The Margherita is the best I've had outside of Naples itself. Crisp, charred, perfect.",
  },
  {
    id: 2,
    name: "Sophie R.",
    stars: 5,
    text: "Nduja and honey sounds wrong. It is spectacularly right. Changed my whole relationship with pizza.",
  },
  {
    id: 3,
    name: "Marco B.",
    stars: 5,
    text: "Three generations of family recipe and you can taste every one of them. Nothing else compares.",
  },
];

export const DELIVERY_OPTIONS = [
  {
    id: "delivery",
    icon: "🛵",
    label: "Delivery",
    sublabel: "30–45 min · €2.50",
    fee: 2.5,
  },
  {
    id: "pickup",
    icon: "🏪",
    label: "Pick up",
    sublabel: "15–20 min · Free",
    fee: 0,
  },
];

export const PAYMENT_METHODS = [
  {
    id: "card",
    icon: "💳",
    label: "Credit / debit card",
    sublabel: "Visa, Mastercard, Amex",
  },
  {
    id: "paypal",
    icon: "🅿️",
    label: "PayPal",
    sublabel: "You'll be redirected to PayPal",
  },
  {
    id: "cash",
    icon: "💵",
    label: "Cash on delivery",
    sublabel: "Pay when your order arrives",
  },
];

export const RESTAURANT_INFO = {
  name: "Bella Napoli",
  tagline: "The real thing, since 1987.",
  address: "Via Tribunali 35, Naples",
  hours: "Open daily 12:00 – 23:00",
  phone: "+39 081 555 0187",
  foundedYear: 1987,
};