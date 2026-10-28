import { SITE_URL, navLinks } from "@/lib/site";

export default function sitemap() {
  return navLinks.map((link) => ({
    url: `${SITE_URL}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
