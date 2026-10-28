export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://civtechsolution.com";

export const company = {
  name: "Civtech Solution",
  tagline: "Expertly Crafted, Smartly Managed",
  description:
    "PEC-registered civil engineering and construction company in Karachi delivering residential, commercial, industrial, fuel station and EV charging projects with end-to-end project management.",
  yearsExperience: 14,
  phone: { display: "+92 333 2088924", href: "tel:+923332088924" },
  email: "info@civtechsolution.com",
  ceoEmail: "wajahat@civtechsolution.com",
  address: {
    street: "B-280, Block 10, Gulberg Town",
    city: "Karachi",
    country: "Pakistan",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=B-280+Block+10+Gulberg+Town+Karachi",
  },
  pec: { category: "C4", licence: "20691", fields: 12 },
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export const stats = [
  { value: "50+", label: "Shell fuel station projects" },
  {
    value: `${company.yearsExperience}+`,
    label: "Years of engineering experience",
  },
  { value: "6+", label: "Hascol depot & plant projects" },
  { value: "1st", label: "Commercial DC fast charger in Pakistan" },
];
