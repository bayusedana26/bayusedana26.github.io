import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "dashboard-jakarta",
    title: "Dashboard Monitoring Wilayah Jakarta",
    category: "apps",
    categoryBadge: {
      en: "Vercel • Web App",
      id: "Vercel • Web App",
    },
    typePill: {
      en: "Live App",
      id: "Live App",
    },
    description: {
      en: "Interactive web dashboard aggregating operational indicators, demographic data, and district metrics across Jakarta, deployed in production on Vercel.",
      id: "Aplikasi web dashboard interaktif untuk agregasi data dan monitoring indikator operasional wilayah Jakarta yang dideploy di Vercel.",
    },
    image: "/assets/projects/dashboard_jakarta.png",
    link: "https://dashboardmonitoringjakpus.vercel.app/",
    linkText: {
      en: "Open Live App",
      id: "Buka Live App",
    },
    ndaNote: {
      en: "Live Deployment",
      id: "Live Deployment",
    },
    tags: ["React", "Web App", "Vercel", "Data Visualization", "Jakarta"],
  },
  {
    id: "colab-sentiment",
    title: "Sentiment Analysis Pipeline",
    category: "colab",
    categoryBadge: {
      en: "Google Colab • NLP",
      id: "Google Colab • NLP",
    },
    typePill: {
      en: "Open Notebook",
      id: "Open Notebook",
    },
    description: {
      en: "Text sentiment classification model using Python, natural language text preprocessing, and machine learning algorithm benchmarking in Google Colab.",
      id: "Pemodelan klasifikasi sentimen teks menggunakan Python, preprocessing data teks, dan evaluasi algoritma machine learning di Google Colab.",
    },
    image: "/assets/projects/colab_sentiment.png",
    link: "https://colab.research.google.com/drive/19OVfn0j1Zb-0D3srIEepJ361DYYeKwPV?usp=sharing",
    linkText: {
      en: "Open Notebook",
      id: "Buka Notebook",
    },
    ndaNote: {
      en: "Open Source",
      id: "Open Source",
    },
    tags: ["Python", "NLP", "Machine Learning", "Google Colab", "Scikit-Learn"],
  },
  {
    id: "colab-detect-count",
    title: "Object Detection & Counting",
    category: "colab",
    categoryBadge: {
      en: "Google Colab • Computer Vision",
      id: "Google Colab • Computer Vision",
    },
    typePill: {
      en: "Open Notebook",
      id: "Open Notebook",
    },
    description: {
      en: "Deep learning computer vision implementation designed to detect visual objects and automatically count detected targets across imagery.",
      id: "Implementasi computer vision berbasis deep learning untuk mendeteksi objek sekaligus menghitung jumlah target visual secara otomatis.",
    },
    image: "/assets/projects/colab_detect_count.png",
    link: "https://colab.research.google.com/drive/1qkRe7A5Ynan5lPLkMLgnSGdjZc4CK8af?usp=sharing",
    linkText: {
      en: "Open Notebook",
      id: "Buka Notebook",
    },
    ndaNote: {
      en: "Open Source",
      id: "Open Source",
    },
    tags: ["Computer Vision", "Deep Learning", "Python", "Google Colab", "TensorFlow"],
  },
  {
    id: "colab-aerial",
    title: "Aerial View Object Detection",
    category: "colab",
    categoryBadge: {
      en: "Google Colab • Aerial CV",
      id: "Google Colab • Aerial CV",
    },
    typePill: {
      en: "Open Notebook",
      id: "Open Notebook",
    },
    description: {
      en: "Object detection and target tracking on drone and aerial imagery using computer vision architectures within Google Colab.",
      id: "Deteksi dan pelacakan objek dari sudut pandang citra udara / drone (aerial imagery) menggunakan model deep learning di Google Colab.",
    },
    image: "/assets/projects/colab_aerial.png",
    link: "https://colab.research.google.com/drive/1rGHdYzLWBv5hLjORNRLSRToiVvwHb9gM?usp=sharing",
    linkText: {
      en: "Open Notebook",
      id: "Buka Notebook",
    },
    ndaNote: {
      en: "Open Source",
      id: "Open Source",
    },
    tags: ["Aerial Imagery", "Drone Detection", "Python", "Google Colab"],
  },
  {
    id: "tableau-vizzes",
    title: "Tableau Visualizations & Dashboards",
    category: "tableau",
    categoryBadge: {
      en: "Tableau • Business Intelligence",
      id: "Tableau • Business Intelligence",
    },
    typePill: {
      en: "Data & BI",
      id: "Data & BI",
    },
    description: {
      en: "Public portfolio of interactive dashboards, business metric indicators, and multidimensional data explorations published on Tableau Public.",
      id: "Kumpulan portofolio dashboard interaktif, visualisasi indikator metrik bisnis, dan eksplorasi data yang dipublikasikan di Tableau Public.",
    },
    image: "/assets/projects/tableau_vizzes.png",
    link: "https://public.tableau.com/app/profile/bayusedana/vizzes",
    linkText: {
      en: "Open Tableau Public",
      id: "Buka Tableau",
    },
    ndaNote: {
      en: "Public Dashboards",
      id: "Public Dashboards",
    },
    tags: ["Tableau", "BI Dashboard", "Data Storytelling", "KPI Metrics"],
  },
  {
    id: "house-of-pendowo",
    title: "House of Pendowo Web Portal",
    category: "apps",
    categoryBadge: {
      en: "Web Portal",
      id: "Web Portal",
    },
    typePill: {
      en: "Live Website",
      id: "Live Website",
    },
    description: {
      en: "Digital business profile and services catalog portal engineered for House of Pendowo.",
      id: "Portal profil bisnis digital dan informasi katalog layanan untuk House of Pendowo.",
    },
    image: "/assets/projects/house_of_pendowo.png",
    link: "https://sites.google.com/view/houseofpendowo/home?authuser=0",
    linkText: {
      en: "Open Website",
      id: "Buka Website",
    },
    ndaNote: {
      en: "Live Website",
      id: "Live Website",
    },
    tags: ["Web Portal", "Digital Catalog", "Business Profile"],
  },
  {
    id: "shopeepay-june-2022",
    title: "ShopeePay Partnership Proposal: Media Barter Promo",
    category: "indofun",
    categoryBadge: {
      en: "ShopeePay • Fintech",
      id: "ShopeePay • Fintech",
    },
    typePill: {
      en: "Partnership",
      id: "Partnership",
    },
    description: {
      en: "Fintech integration and promotional campaign proposal with ShopeePay for new player acquisition in Idle Dynasty. Displays Cover Page only under NDA constraints.",
      id: "Proposal integrasi dan kemitraan promosi fintech ShopeePay untuk pengguna baru game Idle Dynasty. Hanya menampilkan Halaman 1 (Cover) sesuai batasan kerahasiaan.",
    },
    image: "/assets/projects/shopeepay_june2022.png",
    ndaNote: {
      en: "Confidential (Page 1 Cover)",
      id: "Confidential (Halaman 1)",
    },
    linkText: {
      en: "View Cover",
      id: "Lihat Cover",
    },
    tags: ["Fintech", "ShopeePay", "Partnership Deck", "Gaming"],
  },
  {
    id: "shopeepay-feb-2022",
    title: "ShopeePay x Google Play Festival Partnership",
    category: "indofun",
    categoryBadge: {
      en: "ShopeePay • Fintech",
      id: "ShopeePay • Fintech",
    },
    typePill: {
      en: "Partnership",
      id: "Partnership",
    },
    description: {
      en: "Promotional partnership planning with ShopeePay during the Google Play Festival. Displays Cover Page only under NDA boundaries.",
      id: "Perencanaan kemitraan promosi pembayaran ShopeePay dalam ajang Google Play Festival. Hanya menampilkan Halaman 1 (Cover) sesuai batasan kerahasiaan.",
    },
    image: "/assets/projects/shopeepay_feb2022.png",
    ndaNote: {
      en: "Confidential (Page 1 Cover)",
      id: "Confidential (Halaman 1)",
    },
    linkText: {
      en: "View Cover",
      id: "Lihat Cover",
    },
    tags: ["Google Play", "Fintech Promo", "ShopeePay", "Payment Systems"],
  },
  {
    id: "indofun-guides",
    title: "Idle Dynasty Player Support & Guides Portal",
    category: "indofun",
    categoryBadge: {
      en: "Indofun • Guides",
      id: "Indofun • Game Guides",
    },
    typePill: {
      en: "Documentation",
      id: "Dokumentasi",
    },
    description: {
      en: "Official documentation knowledgebase and interactive game guide portal assisting players with transaction flows, event mechanics, and gameplay.",
      id: "Portal dokumentasi dan basis panduan interaktif resmi untuk membantu pemain memahami mekanisme event, alur transaksi, dan panduan game.",
    },
    image: "/assets/projects/indofun_guides.png",
    link: "https://idle.indofungames.com/guides",
    linkText: {
      en: "Open Guide Portal",
      id: "Buka Panduan",
    },
    ndaNote: {
      en: "Public Guide Portal",
      id: "Public Guide Portal",
    },
    tags: ["Technical Documentation", "Knowledgebase", "Gaming"],
  },
  {
    id: "ashaedu-workshop",
    title: "Workshop AI: Konten Kreatif Guru Abad 21",
    category: "workshop",
    categoryBadge: {
      en: "Asha Edukasi • AI Workshop",
      id: "Asha Edukasi • AI Workshop",
    },
    typePill: {
      en: "Live Workshop",
      id: "Live Workshop",
    },
    description: {
      en: "Intensive generative AI workshop for educators co-organized with Asha Edukasi and Asosiasi AI Indonesia, covering lesson module creation and automated assessment.",
      id: "Pelatihan pemanfaatan generative AI untuk para pendidik bersama Asha Edukasi dan Asosiasi AI Indonesia, membedah pembuatan modul ajar dan asesmen otomatis.",
    },
    image: "/assets/projects/ashaedu_workshop.png",
    link: "https://www.ashaedu.id/programs/workshop-ai-gratis-membuat-konten-kreatif-dengan-ai-untuk-guru-abad-21-7922",
    linkText: {
      en: "View Program",
      id: "Buka Program",
    },
    ndaNote: {
      en: "Speaker: Bayu Sedana",
      id: "Narasumber: Bayu Sedana",
    },
    tags: ["Generative AI", "Prompt Engineering", "Teacher Workshop", "AshaEdu"],
  },
];
