export type Lang = "ar" | "en";

export const content = {
  ar: {
    nav: { about: "من أنا", services: "الخدمات", projects: "المشاريع", youtube: "يوتيوب", contact: "تواصل" },
    hero: {
      badge: "Web3 • Blockchain • Web Development",
      title: "حسام الجابري",
      subtitle: "يوتيوبر • خبير بلوكشين وعملات رقمية • مطوّر ويب",
      desc: "أبني منصات رقمية حديثة، عقود ذكية، مشاريع NFT، وأحوّل الأفكار التقنية إلى منتجات حقيقية.",
      cta1: "شاهد أعمالي",
      cta2: "تواصل معي",
      cta3: "قناتي على يوتيوب",
    },
    stats: [
      { k: "Web3", v: "Smart Contracts / NFT" },
      { k: "Web", v: "Next.js / React" },
      { k: "Brand", v: "Digital Identity" },
      { k: "Content", v: "YouTube تعليم تقني" },
    ],
    about: {
      title: "من أنا",
      p1: "أنا حسام الجابري، أساعد المشاريع والأفراد ببناء حضور رقمي قوي، ومنصات ويب حديثة، وربط Web3 عند الحاجة.",
      p2: "أركز على الجودة، السرعة، وتجربة المستخدم — مع تصميم أنيق وتنفيذ مضبوط.",
    },
    services: {
      title: "الخدمات",
      items: [
        { t: "تطوير مواقع ومنصات", d: "مواقع شخصية/شركات، لوحات تحكم، Web Apps، أداء وSEO." },
        { t: "عقود ذكية", d: "ERC20/721، NFT Mint، تدقيق بسيط وإرشادات نشر." },
        { t: "تصميم واجهات UI/UX", d: "واجهات عصرية، Responsive، وتجربة مستخدم واضحة." },
        { t: "استشارات Web3", d: "خارطة طريق، توكنوميكس، ونصائح للمنتج والنمو." },
      ],
    },
    projects: {
      title: "مشاريع مختارة",
      note: "سيتم تحديث القائمة باستمرار.",
      items: [
        {
          t: "UNX Labs",
          d: "موقع رسمي لمنصة/مشروع UNX Labs مع واجهة حديثة وتجربة استخدام سريعة.",
          tag: "Live",
          img: "/xlabs.png",
          href: "https://unxlabs.xyz/",
        },
        {
          t: "HeatRush",
          d: "Landing Page لمشروع HeatRush مع تصميم عصري وتحسينات أداء.",
          tag: "Live",
          img: "/heatrush.png",
          href: "https://heatrush.xyz",
        },
        {
          t: "Clinic Demo",
          d: "قالب عيادات: حجز عبر واتساب + موقع على الخريطة + واجهة زجاثثثجية.",
          tag: "Live",
          img: "/Clinic-Demo%20.png",
          href: "https://d1d1h.site/",
        },
      ],
    },
    youtube: { title: "يوتيوب", desc: "محتوى مبسّط عن Web3 والبرمجة وبناء المشاريع التقنية.", cta: "زيارة القناة" },
    contact: { title: "تواصل معي", desc: "للتعاون، الاستشارات، أو بناء مشروعك.", cta: "إرسال رسالة" },
    footer: "© " + new Date().getFullYear() + " Husam Aljabre — جميع الحقوق محفوظة",
  },

  en: {
    nav: { about: "About", services: "Services", projects: "Projects", youtube: "YouTube", contact: "Contact" },
    hero: {
      badge: "Web3 • Blockchain • Web Development",
      title: "Husam Aljabre",
      subtitle: "YouTuber • Blockchain Expert • Web Developer",
      desc: "I build modern web platforms, smart contracts, NFT projects, and turn technical ideas into real products.",
      cta1: "View Work",
      cta2: "Contact",
      cta3: "YouTube Channel",
    },
    stats: [
      { k: "Web3", v: "Smart Contracts / NFT" },
      { k: "Web", v: "Next.js / React" },
      { k: "Brand", v: "Digital Identity" },
      { k: "Content", v: "Educational YouTube" },
    ],
    about: {
      title: "About",
      p1: "I help teams and individuals build strong digital presence, modern web products, and optional Web3 integrations.",
      p2: "I focus on quality, speed, and clean user experience with elegant design and solid implementation.",
    },
    services: {
      title: "Services",
      items: [
        { t: "Web Development", d: "Websites, dashboards, web apps, performance and SEO." },
        { t: "Smart Contracts", d: "ERC20/721, NFT minting, basic audits and deployment guidance." },
        { t: "UI/UX Design", d: "Modern responsive interfaces with clear user flows." },
        { t: "Web3 Consulting", d: "Roadmaps, tokenomics, and product growth advice." },
      ],
    },
    projects: {
      title: "Featured Work",
      note: "This list will be updated continuously.",
      items: [
        {
          t: "UNX Labs",
          d: "Official website for the UNX Labs project with a modern UI and fast UX.",
          tag: "Live",
          img: "/xlabs.png",
          href: "https://unxlabs.xyz/",
        },
        {
          t: "HeatRush",
          d: "HeatRush landing page with a clean modern design and performance tweaks.",
          tag: "Live",
          img: "/heatrush.png",
          href: "https://heatrush.xyz",
        },
        {
          t: "Clinic Demo",
          d: "Clinic template: WhatsApp booking + map location + glass UI.",
          tag: "Live",
          img: "/Clinic-Demo%20.png",
          href: "https://d1d1h.site/",
        },
      ],
    },
    youtube: { title: "YouTube", desc: "Clear content on Web3, programming, and building tech projects.", cta: "Visit Channel" },
    contact: { title: "Contact", desc: "For collaboration, consulting, or building your product.", cta: "Send Message" },
    footer: "© " + new Date().getFullYear() + " Husam Aljabre — All rights reserved",
  },
} as const;
