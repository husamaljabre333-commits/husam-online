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
      p1: "أنا حسام الجابري، صانع محتوى تقني وخبير في البلوكشين والعملات الرقمية، ومطوّر ويب متخصص في بناء المنتجات الحديثة.",
      p2: "أركز على التنفيذ: تصميم تجربة فخمة، أداء سريع، وبنية نظيفة قابلة للتوسّع.",
    },
    services: {
      title: "الخدمات",
      items: [
        { t: "تطوير مواقع ومنصات", d: "مواقع شخصية/شركات، لوحات تحكم، Web Apps، أداء وSEO." },
        { t: "عقود ذكية", d: "ERC20/721، NFT Mint، تدقيق أولي، وربط Web3." },
        { t: "مشاريع NFT وهوية رقمية", d: "إطلاق مشروع، صفحات هبوط، مجتمع، وبنية تقنية." },
        { t: "استشارات بلوكشين", d: "خارطة طريق، اختيار شبكة، توكينوميكس بشكل مبدئي." },
      ],
    },
    projects: {
      title: "مشاريع مختارة",
      note: "سيتم تحديث القائمة باستمرار.",
      items: [
        { t: "Clinic Demo (Cloudflare Pages)", d: "قالب عيادات: حجز واتساب + خريطة + واجهة زجاجية.", tag: "Live" },
        { t: "Web3 Experiments", d: "تجارب وربط محافظ وواجهات Web3.", tag: "R&D" },
        { t: "Personal Brand System", d: "نظام محتوى وهوية رقمية جاهزة للتوسع.", tag: "Brand" },
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
      desc: "I build modern web products, smart contracts, NFT projects, and turn technical ideas into real products.",
      cta1: "View Work",
      cta2: "Contact",
      cta3: "YouTube",
    },
    stats: [
      { k: "Web3", v: "Smart Contracts / NFT" },
      { k: "Web", v: "Next.js / React" },
      { k: "Brand", v: "Digital Identity" },
      { k: "Content", v: "Educational YouTube" },
    ],
    about: {
      title: "About",
      p1: "I’m Husam Aljabre, a tech creator and blockchain expert, building modern web products with a clean scalable architecture.",
      p2: "I focus on delivery: premium UX, fast performance, and a maintainable codebase.",
    },
    services: {
      title: "Services",
      items: [
        { t: "Web Platforms", d: "Websites, dashboards, web apps, performance & SEO." },
        { t: "Smart Contracts", d: "ERC20/721, NFT minting, basic review, Web3 integration." },
        { t: "NFT & Digital Branding", d: "Launch plan, landing pages, community-ready structure." },
        { t: "Blockchain Consulting", d: "Roadmap, chain selection, initial tokenomics guidance." },
      ],
    },
    projects: {
      title: "Featured Work",
      note: "This list will be updated continuously.",
      items: [
        { t: "Clinic Demo (Cloudflare Pages)", d: "Dental template: WhatsApp booking + Maps + glass UI.", tag: "Live" },
        { t: "Web3 Experiments", d: "Wallet integrations and Web3 front-ends.", tag: "R&D" },
        { t: "Personal Brand System", d: "A scalable personal brand website foundation.", tag: "Brand" },
      ],
    },
    youtube: { title: "YouTube", desc: "Clear content on Web3, programming, and building tech projects.", cta: "Visit Channel" },
    contact: { title: "Contact", desc: "For collaboration, consulting, or building your product.", cta: "Send Message" },
    footer: "© " + new Date().getFullYear() + " Husam Aljabre — All rights reserved",
  },
} as const;
