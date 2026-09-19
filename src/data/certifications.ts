import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "fortinet-cybersecurity-fundamentals",
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet Training Institute",
    date: "08 Aug 2025",
    credentialId: "2898741129BS",
    badge: "Cybersecurity",
    image: "/assets/certificates/Fortinet Cybersecurity Fundamentals.pdf.png",
    description: {
      en: "Validated fundamentals in modern cybersecurity, network threat landscape, and defensive security posture.",
      id: "Validasi keahlian fundamental dalam keamanan siber, lanskap ancaman jaringan, dan postur pertahanan sistem.",
    },
  },
  {
    id: "fortinet-certified-associate",
    title: "Fortinet Certified Associate (FCA)",
    issuer: "IBM SkillsBuild • Fortinet",
    date: "08 Aug 2025",
    credentialId: "PLAN-3B9FFEDE788B",
    badge: "Security Associate",
    image: "/assets/certificates/FCA.pdf.png",
    description: {
      en: "Associate-level certification in cybersecurity infrastructure, zero-trust network access, and endpoint protection.",
      id: "Sertifikasi tingkat associate untuk infrastruktur cybersecurity, zero-trust network access, dan keamanan endpoint.",
    },
  },
  {
    id: "hackerrank-sql-advanced",
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "07 Sep 2024",
    credentialId: "8681805399c9",
    verifyUrl: "https://www.hackerrank.com/certificates/8681805399c9",
    badge: "Database & SQL",
    image: "/assets/certificates/hackerrank_sql_advanced.png",
    description: {
      en: "Advanced database mastery: complex joins, window functions, recursive CTEs, subqueries, and performance query tuning.",
      id: "Penguasaan query database tingkat lanjut: complex joins, window functions, recursive CTEs, dan tuning kueri.",
    },
  },
  {
    id: "fcc-data-analysis-python",
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialId: "bayusedana26",
    verifyUrl: "https://www.freecodecamp.org/certification/bayusedana26/data-analysis-with-python-v7",
    badge: "Python & Data",
    image: "/assets/certificates/fcc_data_analysis.png",
    description: {
      en: "Data wrangling, statistical analysis, and visualization using Pandas, NumPy, Matplotlib, and Seaborn.",
      id: "Pembersihan data, analisis statistik terapan, dan visualisasi data ilmiah dengan Pandas, NumPy, dan Matplotlib.",
    },
  },
  {
    id: "fcc-machine-learning-python",
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialId: "bayusedana26",
    verifyUrl: "https://www.freecodecamp.org/certification/bayusedana26/machine-learning-with-python-v7",
    badge: "Machine Learning",
    image: "/assets/certificates/fcc_machine_learning.png",
    description: {
      en: "Machine learning algorithms, neural networks, predictive modeling, and TensorFlow implementations.",
      id: "Implementasi algoritma machine learning, neural networks, pemodelan prediktif, dan TensorFlow.",
    },
  },
];
