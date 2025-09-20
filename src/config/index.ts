import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kasur Ortopedic SPEQ",
  author: "SPEQ",
  description:
    "Kasur Kesehatan Ortopedic SPEQ.",
  lang: "en",
  siteLogo: "/ab.png",
  navLinks: [
    { text: "Manfaat", href: "#manfaat" },
    { text: "Produk", href: "#produk" },
    { text: "Tentang", href: "#tentang" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Kasur SPEQ",
    specialty: "Kasur Kesehatan Ortopedic",
    summary:
      "Kasur kesehatan yang mampu menopang tubuh dengan kuat dan memberikan rasa nyaman saat tidur dan bangun tidur.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "SPEQ",
      position: "Kasur Ortopedic",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Mencegah sakit tulang punggung.",
        "Sejuk Ketika digunakan pada udara sedikit panas.",
        "Membahagiakan Keluarga.",
        "Mampu memberi kenyamanan pada tidur anda.",
        "Kenyamanan tidur sampai bertahun tahun",
      ],
    },
   
  ],
  projects: [
    {
      name: "SPEQ S100",
      summary: "Kasur kesehatan yang memberikan kenyamanan tidur anda.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/s100.jpg",
    },
    {
      name: "Kasru SPEQ S200",
      summary: "Manfaat untuk tulang punggung dan pinggang anda.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/s200.jpg",
    },
    {
      name: "Kasur SPEQ S300",
      summary: "Rasakan kenyamanan tidur yang sesungguhnya.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/s300.jpeg",
    },
  ],
  about: {
    description: `
      Kasur Ortopedic SPEQ dibuat oleh tangan-tangan terampil yang memberikan kualitas terbaik untuk tidur anda.
     
      Aneka Busa Internasioanl menjadi produsen kasur SPEQ memiliki pengalaman yang panjang untuk menciptakan kasur kesehatan yang nyaman dan sehat.
    `,
    image: "/kasur-speq.jpg",
  },
};

// #5755ff
