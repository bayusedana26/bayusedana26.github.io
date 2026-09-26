import { Experience, InstitutionPartner, Education } from "@/types";

export const formalExperiences: Experience[] = [
  {
    id: "asosiasi-ai-indonesia",
    company: "Asosiasi AI Indonesia",
    logo: "/assets/logos/asosiasi-ai-icon.png",
    role: {
      en: "Instructor & Assessor: Applied AI & Data Analytics",
      id: "Instructor & Asesor: Applied AI & Data Analytics",
    },
    start: "Jul 2024",
    end: "Present",
    current: true,
    category: "formal",
    typeLabel: {
      en: "Full-Time In-House",
      id: "Kantoran / In-House",
    },
    tags: ["Python", "Machine Learning", "Curriculum Design", "BNSP Coaching"],
    description: {
      en: [
        "Designed comprehensive curricula and instructed industry practitioners in applied Machine Learning, Python data analytics, and AI API integration.",
        "Directly mentored hundreds of trainees and corporate professionals through data capstone projects toward national BNSP certification.",
        "Facilitated tailored in-house training sessions and university academic partnerships to accelerate data technology adoption.",
      ],
      id: [
        "Merancang kurikulum intensif dan mengajar praktisi industri dalam implementasi Machine Learning terapan, Data Analytics dengan Python, dan integrasi API AI.",
        "Membimbing langsung ratusan peserta dan profesional korporat dalam penyelesaian end-to-end data capstone projects hingga lulus sertifikasi kompetensi nasional BNSP.",
        "Menyelenggarakan program pelatihan in-house khusus instansi dan kemitraan kampus untuk akselerasi adopsi teknologi data modern.",
      ],
    },
  },
  {
    id: "indofun-digital-technology",
    company: "PT Indofun Digital Technology",
    logo: "/assets/logos/indofun.png",
    role: {
      en: "Business Support & Analytics Specialist",
      id: "Business Support & Analytics Specialist",
    },
    start: "Jun 2021",
    end: "Aug 2022",
    current: false,
    category: "formal",
    typeLabel: {
      en: "Full-Time In-House",
      id: "Kantoran / In-House",
    },
    tags: ["Fintech Integration", "ShopeePay", "DANA", "User Analytics", "Technical Docs"],
    description: {
      en: [
        "Coordinated technical payment gateway integrations (ShopeePay & DANA) and server reconciliation for Idle Dynasty (Google Play Store Award 2021 winner).",
        "Executed daily transaction analytics, player spending patterns, and retention metrics to optimize in-game events and operational decisions.",
        "Authored server infrastructure documentation, API runbooks, and internal Standard Operating Procedures (SOPs).",
      ],
      id: [
        "Memimpin integrasi teknis payment gateway fintech (ShopeePay & DANA) dan sinkronisasi server untuk game Idle Dynasty (Pemenang Google Play Store Award 2021).",
        "Mengeksekusi analisis data transaksi harian, pola belanja pemain, dan metrik retensi untuk mengoptimalkan event in-game dan keputusan operasional.",
        "Menyusun dokumentasi teknis infrastruktur server, API runbook, dan Standard Operating Procedure (SOP) internal tim operasi.",
      ],
    },
  },
  {
    id: "glints-software-trainee",
    company: "PT Glints Indonesia Group",
    logo: "/assets/logos/glints.png",
    role: {
      en: "Software Engineer Trainee (Backend)",
      id: "Software Engineer Trainee (Backend)",
    },
    start: "Mar 2021",
    end: "Jun 2021",
    current: false,
    category: "formal",
    typeLabel: {
      en: "Full-Time In-House",
      id: "Kantoran / In-House",
    },
    tags: ["Node.js", "Express", "REST APIs", "Unit Testing", "Agile / Scrum"],
    description: {
      en: [
        "Engineered backend RESTful APIs using Node.js and Express in fast-paced Agile (Scrum) sprints with strict code quality standards.",
        "Authored automated unit tests, conducted debugging clinics, and actively contributed to peer code reviews alongside senior engineers.",
        "Optimized relational database queries and guaranteed endpoint reliability prior to staging deployments.",
      ],
      id: [
        "Mengembangkan RESTful API backend menggunakan Node.js dan Express dalam sprint Agile (Scrum) dengan standar code quality ketat.",
        "Menulis rangkaian unit testing otomatis, menangani debugging endpoint, dan berpartisipasi aktif dalam peer code review bersama senior engineers.",
        "Mengoptimalkan performa query database dan memastikan stabilitas layanan sebelum deployment ke staging environment.",
      ],
    },
  },
];

export const freelanceExperiences: Experience[] = [
  {
    id: "it-solutions-custom-decks",
    company: "IT Solutions, Project Delivery & Custom Decks",
    role: {
      en: "Independent IT Consultant & Deck Specialist",
      id: "Independent IT Consultant & Deck Specialist",
    },
    start: "Feb 2023",
    end: "Present",
    current: true,
    category: "freelance",
    typeLabel: {
      en: "Independent Consulting",
      id: "Konsultasi Independen",
    },
    tags: ["Project Management", "Custom Pitch Decks", "Data Automation", "Business Strategy"],
    description: {
      en: [
        "Consulted on technical project management, API integrations, and data workflow automation for SMEs, digital agencies, and tech startups.",
        "Crafted executive custom pitch decks, business strategy blueprints, and structured financial models for investor fundraising and product validation.",
        "Evaluated cloud and hosting cost structures, recommending technology stacks suited to client budgets.",
      ],
      id: [
        "Memberikan konsultasi manajemen proyek teknologi, integrasi API, dan automasi alur kerja data bagi UMKM, digital agency, serta startup teknologi.",
        "Merancang dan memproduksi custom pitch decks eksekutif, dokumen strategi bisnis, dan model finansial terstruktur untuk presentasi pendanaan investor dan validasi produk.",
        "Mengevaluasi efisiensi biaya infrastruktur cloud/server dan merekomendasikan stack teknologi yang scalable sesuai anggaran bisnis klien.",
      ],
    },
  },
  {
    id: "technical-trainer-mentor",
    company: "Technical Trainer & Data Science Mentor",
    role: {
      en: "Corporate Trainer & Technical Mentor",
      id: "Corporate Trainer & Technical Mentor",
    },
    start: "Feb 2023",
    end: "Present",
    current: true,
    category: "freelance",
    typeLabel: {
      en: "Corporate Training & Mentoring",
      id: "Pelatihan & Mentoring",
    },
    tags: ["Python", "SQL", "In-House Training", "BNSP Coaching", "Bank Indonesia"],
    description: {
      en: [
        "Delivered in-house training in AI and data analytics for institutions including Bank Indonesia KPw Jatim and GenBI Bank Indonesia Sulsel.",
        "Mentored 100+ students and career pivoters at Belajarlagi, MySkill, and ITSTEP Academy, dissecting real-world datasets with Python and SQL.",
        "Delivered guest lectures and hands-on workshops at BINUS Online Learning, Universitas Terbuka, and Pusdiklat TNI.",
      ],
      id: [
        "Instruktur in-house training AI dan analitik data untuk institusi terkemuka, termasuk Bank Indonesia KPw Jatim dan GenBI Bank Indonesia Sulsel.",
        "Mentor teknis data science di Belajarlagi, MySkill, dan ITSTEP Academy; membimbing 100+ peserta membedah dataset riil menggunakan Python dan SQL.",
        "Pemateri kuliah tamu dan workshop aplikatif di BINUS Online Learning, Universitas Terbuka, dan Pusdiklat TNI.",
      ],
    },
  },
];

export const institutionalPartners: InstitutionPartner[] = [
  {
    name: "Bank Indonesia KPw Jatim",
    logo: "/assets/logos/bank-indonesia-icon.png",
    scope: {
      en: "In-House Enterprise AI & Analytics",
      id: "In-House Training AI",
    },
  },
  {
    name: "Bank Indonesia Sulsel",
    logo: "/assets/logos/bank-indonesia-icon.png",
    scope: {
      en: "GenBI Data Analyst & BNSP Coaching",
      id: "GenBI Data Analyst & BNSP",
    },
  },
  {
    name: "Dana Pensiun (Multi-Institusi)",
    logo: "/assets/logos/dana-pensiun.svg",
    scope: {
      en: "AI & Financial Ops Workflow Automation",
      id: "Pelatihan AI & Otomasi Operasional Keuangan",
    },
  },
  {
    name: "Pusdiklat TNI",
    logo: "/assets/logos/tni.svg",
    scope: {
      en: "IT Analytics & Technical Training",
      id: "Analisis & Teknis IT",
    },
  },
  {
    name: "BINUS Online Learning",
    logo: "/assets/logos/binus.svg",
    scope: {
      en: "Guest Lecture: Machine Learning",
      id: "Kuliah Tamu Machine Learning",
    },
  },
  {
    name: "Universitas Terbuka",
    logo: "/assets/logos/universitas-terbuka.svg",
    scope: {
      en: "Data Literacy Workshop",
      id: "Workshop Literasi Data",
    },
  },
  {
    name: "Universitas Trisakti",
    logo: "/assets/logos/trisakti.svg",
    scope: {
      en: "Business Data Analytics",
      id: "Analisis Data Bisnis",
    },
  },
  {
    name: "AshaEdu • Asosiasi AI",
    logo: "/assets/logos/ashaedu.png",
    scope: {
      en: "AI Workshop for 21st Century Educators",
      id: "Workshop AI Guru Abad 21",
    },
  },
  {
    name: "UNTAG Samarinda",
    logo: "/assets/logos/untag-samarinda.png",
    scope: {
      en: "Student Competency Assessment",
      id: "Sesi Uji Kompetensi Mahasiswa",
    },
  },
];

export const educationList: Education[] = [
  {
    institution: "Universitas Muhammadiyah Yogyakarta",
    logo: "/assets/logos/umy.png",
    degree: {
      en: "Bachelor's Degree (S1) • Graduated 2020 (GPA 3.58 / 4.00)",
      id: "Program Sarjana (S1) • Lulus 2020 (IPK 3.58 / 4.00)",
    },
    period: {
      en: "Graduated 2020",
      id: "Lulus 2020",
    },
    gpa: "3.58 / 4.00",
  },
  {
    institution: "Universiti Sains Malaysia",
    logo: "/assets/logos/usm.svg",
    degree: {
      en: "Exchange Scholar Program",
      id: "Exchange Scholar Program",
    },
    period: {
      en: "2016 - 2017",
      id: "2016 - 2017",
    },
  },
];
