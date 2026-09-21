export const site = {
  name: "Hawke’s Bay Total Mobility",
  tagline: "Honest • Reliable • Service",
  phoneDisplay: "027 352 1635",
  phoneHref: "tel:+64273521635",
  // 027 is an NZ mobile number, so "Book a ride" opens a pre-filled text message.
  bookHref: "sms:+64273521635?&body=Hi%2C%20I%27d%20like%20to%20book%20a%20ride.",
  areas: ["Napier", "Hastings", "Hawke’s Bay"],
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const benefits = [
  { icon: "shield", title: "Safe & reliable", body: "Dependable, on-time service focused on your comfort and peace of mind." },
  { icon: "access", title: "Accessible vehicles", body: "Wheelchair-friendly vans with ramps and secure restraints for easier journeys." },
  { icon: "heart", title: "Friendly support", body: "Respectful, caring assistance from your front door to your destination." },
] as const;

export const services = [
  { img: "van-hospital", title: "Medical appointments", body: "Hospitals, clinics, GP visits and specialist appointments — on time, every time." },
  { img: "wheelchair", title: "Wheelchair transport", body: "Comfortable wheelchair-accessible rides with door-to-door assistance." },
  { img: "shopping", title: "Shopping & errands", body: "Groceries, banking, prescriptions and everyday essentials, made easy." },
  { img: "social", title: "Social outings", body: "Stay connected with family, friends, community activities and local events." },
  { img: "airport", title: "Airport transfers", body: "Pre-booked accessible transport to and from Hawke’s Bay Airport." },
  { img: "van-driving", title: "Local area travel", body: "Point-to-point trips throughout Napier, Hastings and wider Hawke’s Bay." },
];

export const aboutPoints = [
  { title: "Community focused", body: "Keeping people connected to appointments, errands and the community." },
  { title: "Respectful assistance", body: "Supportive service built around dignity, comfort and individual mobility needs." },
  { title: "Reliable local service", body: "Flexible transport across Hawke’s Bay with easy phone and text booking." },
];

export const steps = [
  { title: "Book your ride", body: "Call or text 027 352 1635 — whatever suits you." },
  { title: "Share your plan", body: "Tell us your pickup, destination and any mobility needs." },
  { title: "Travel with confidence", body: "We arrive on time, assist you and get you there comfortably." },
];
