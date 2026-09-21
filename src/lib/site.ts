export const site = {
  name: "Hawke’s Bay Total Mobility",
  tagline: "Honest • Reliable • Service",
  phoneDisplay: "027 352 1635",
  phoneHref: "tel:+64273521635",
  // 027 is an NZ mobile number, so "Book a ride" opens a pre-filled text message.
  bookHref: "sms:+64273521635?&body=Hi%2C%20I%27d%20like%20to%20book%20a%20ride.",
  smsNumber: "+64273521635",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Total Mobility", href: "/total-mobility" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const benefits = [
  { icon: "shield", title: "Safe & reliable", body: "Dependable, on-time service focused on your comfort and peace of mind." },
  { icon: "access", title: "Accessible vehicles", body: "Wheelchair-friendly vans with ramps and secure restraints for easier journeys." },
  { icon: "heart", title: "Friendly support", body: "Respectful, caring assistance from your front door to your destination." },
] as const;

export type Service = {
  slug: string;
  img: string;
  alt: string;
  title: string;
  short: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "medical-appointments",
    img: "van-hospital",
    alt: "Driver helping a man with a walking frame out of the branded van at a hospital entrance",
    title: "Medical appointments",
    short: "Hospitals, clinics, GP visits and specialist appointments — on time, every time.",
    metaDescription:
      "Accessible transport to hospital, GP, specialist and clinic appointments in Napier, Hastings and across Hawke’s Bay. Door-to-door help. Call 027 352 1635.",
    intro:
      "Getting to a medical appointment shouldn’t add to the stress. We pick you up from your door, help you in and out of the van, and get you to hospital, your GP, a specialist or a clinic with time to spare — then bring you home again.",
    includes: [
      "Door-to-door pickup and drop-off at the right entrance",
      "Help getting in and out of the vehicle",
      "Wheelchair-accessible vans with secure restraints",
      "Return trips arranged when you book",
    ],
    idealFor: ["Hospital outpatient and specialist visits", "GP, dental and physio appointments", "Regular treatments and check-ups"],
    faqs: [
      { q: "What if my appointment runs late?", a: "Appointments often run over. Give us a call or text when you’re finished and we’ll arrange your pickup." },
      { q: "Can a support person come with me?", a: "Yes — let us know when you book so we can make sure there’s room." },
    ],
  },
  {
    slug: "wheelchair-transport",
    img: "van-wheelchair",
    alt: "Driver guiding a man in a wheelchair onto the rear ramp of the branded van",
    title: "Wheelchair transport",
    short: "Comfortable wheelchair-accessible rides with door-to-door assistance.",
    metaDescription:
      "Wheelchair-accessible van transport in Hawke’s Bay. Ramp access, secure wheelchair restraints and door-to-door assistance. Call 027 352 1635.",
    intro:
      "Stay in your own wheelchair for the whole trip. Our vans have ramp access and secure floor restraints, and our drivers take the time to load, secure and unload you safely and comfortably.",
    includes: [
      "Ramp access at the rear of the van",
      "Wheelchair secured with floor restraints and a seatbelt",
      "Help from your door to the vehicle and at your destination",
      "Patient, unhurried drivers",
    ],
    idealFor: ["Manual and power wheelchair users", "People who find transferring to a car seat difficult", "Any trip across Hawke’s Bay"],
    faqs: [
      { q: "Do I need to transfer out of my wheelchair?", a: "No. You can stay seated in your own wheelchair — we secure it in the van for the journey." },
      { q: "Will my power chair fit?", a: "Most will. Tell us the make or size when you book and we’ll confirm." },
    ],
  },
  {
    slug: "shopping-errands",
    img: "van-shopping",
    alt: "Driver carrying grocery bags beside a woman with a walking stick next to the branded van",
    title: "Shopping & errands",
    short: "Groceries, banking, prescriptions and everyday essentials, made easy.",
    metaDescription:
      "Accessible transport for grocery shopping, banking, prescriptions and errands in Napier, Hastings and Hawke’s Bay. Help with bags. Call 027 352 1635.",
    intro:
      "Do your own shopping, your own way. We’ll take you to the supermarket, pharmacy, bank or post shop, give you a hand with your bags and bring you home.",
    includes: [
      "Trips to supermarkets, pharmacies, banks and shops",
      "A hand with shopping bags to and from the van",
      "Multiple stops in one trip — just ask when booking",
      "Door-to-door pickup and drop-off",
    ],
    idealFor: ["Weekly grocery shopping", "Picking up prescriptions", "Banking and paying bills in person"],
    faqs: [
      { q: "Can I make more than one stop?", a: "Yes. Tell us your stops when you book and we’ll plan the trip around them." },
      { q: "Will the driver help carry my shopping?", a: "Yes — we’ll help carry your bags between the shop, the van and your door." },
    ],
  },
  {
    slug: "social-outings",
    img: "social",
    alt: "Friends laughing over coffee at a seaside café, one in a wheelchair",
    title: "Social outings",
    short: "Stay connected with family, friends, community activities and local events.",
    metaDescription:
      "Accessible transport to visit family and friends, clubs, church, cafés and events around Hawke’s Bay. Wheelchair-friendly vans. Call 027 352 1635.",
    intro:
      "Life is more than appointments. Visit family, meet friends for coffee, get to club, church or a community event — we’ll get you there and back comfortably.",
    includes: [
      "Visits to family and friends",
      "Clubs, church, community groups and classes",
      "Cafés, restaurants and local events",
      "Return pickups at a time that suits you",
    ],
    idealFor: ["Regular weekly activities", "Family occasions and celebrations", "Local events around Napier and Hastings"],
    faqs: [
      { q: "Can you pick me up at a set time after my outing?", a: "Yes. Tell us your return time when you book, or call or text us when you’re ready." },
      { q: "Can I book regular trips?", a: "Yes — let us know your regular day and time and we’ll set it up." },
    ],
  },
  {
    slug: "airport-transfers",
    img: "van-airport",
    alt: "Driver unloading a suitcase from the branded van at the airport kerb while a woman in a wheelchair waits",
    title: "Airport transfers",
    short: "Pre-booked accessible transport to and from Hawke’s Bay Airport.",
    metaDescription:
      "Pre-booked wheelchair-accessible airport transfers to and from Hawke’s Bay Airport in Napier. Help with luggage, door-to-door. Call 027 352 1635.",
    intro:
      "Start and finish your trip without the stress. We’ll pick you up from home, help with your luggage and drop you right at the terminal kerb at Hawke’s Bay Airport — and be there to bring you home.",
    includes: [
      "Pre-booked pickups timed around your flight",
      "Help loading and unloading luggage",
      "Drop-off and pickup at the terminal kerb",
      "Wheelchair-accessible vans",
    ],
    idealFor: ["Holidays and family visits", "Travel for medical treatment out of region", "Anyone travelling with a wheelchair or mobility aid"],
    faqs: [
      { q: "How far ahead should I book?", a: "As early as you can — especially for early-morning or late-night flights." },
      { q: "What if my flight is delayed?", a: "Let us know your flight details when you book and call or text us if plans change." },
    ],
  },
  {
    slug: "local-travel",
    img: "van-driving",
    alt: "The branded van driving along a coastal road lined with Norfolk pines",
    title: "Local area travel",
    short: "Point-to-point trips throughout Napier, Hastings and wider Hawke’s Bay.",
    metaDescription:
      "Accessible point-to-point transport around Napier, Hastings, Havelock North, Taradale and wider Hawke’s Bay. Call 027 352 1635.",
    intro:
      "Wherever you need to go around the Bay, we can take you. Point-to-point trips between home and anywhere in Napier, Hastings, Havelock North, Taradale and the surrounding area.",
    includes: [
      "Trips anywhere within Napier and Hastings",
      "Havelock North, Taradale, Flaxmere and nearby towns",
      "Longer trips across Hawke’s Bay on request",
      "Door-to-door help at both ends",
    ],
    idealFor: ["Visiting another town in the Bay", "Getting to work, study or volunteering", "Any trip public transport doesn’t suit"],
    faqs: [
      { q: "Do you travel outside Napier and Hastings?", a: "Yes — longer trips around Hawke’s Bay can be arranged. Call or text us with the details." },
      { q: "Can I book on the day?", a: "Call us and we’ll do our best. Booking ahead gives you the best chance of your preferred time." },
    ],
  },
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

export const areas = [
  { name: "Napier", body: "Including Napier Hill, Ahuriri, Marewa, Onekawa, Tamatea and the Marine Parade." },
  { name: "Hastings", body: "Including Hastings central, Mahora, Parkvale, Akina and trips to Hawke’s Bay Hospital." },
  { name: "Havelock North", body: "Village trips, appointments and visits around Havelock North and Te Mata." },
  { name: "Taradale", body: "Taradale, Greenmeadows, Pirimai and the surrounding suburbs." },
  { name: "Flaxmere", body: "Local trips around Flaxmere and into Hastings." },
  { name: "Clive & Haumoana", body: "Clive, Haumoana, Te Awanga and the coastal villages." },
  { name: "Bay View & Eskdale", body: "Northern Napier suburbs and rural pickups on request." },
  { name: "Wider Hawke’s Bay", body: "Longer trips across the region can be arranged — call or text us to check." },
];
