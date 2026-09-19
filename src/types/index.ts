export type Language = "id" | "en";

export type Theme = "light" | "dark" | "system";

export type Experience = {
  id: string;
  company: string;
  logo?: string;
  role: {
    en: string;
    id: string;
  };
  start: string;
  end: string;
  category: "formal" | "freelance";
  typeLabel?: {
    en: string;
    id: string;
  };
  description: {
    en: string[];
    id: string[];
  };
  tags?: string[];
  clients?: string[];
  current?: boolean;
};

export type ProjectCategory = "all" | "colab" | "apps" | "tableau" | "indofun" | "workshop";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryBadge: {
    en: string;
    id: string;
  };
  typePill: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  image: string;
  link?: string;
  linkText?: {
    en: string;
    id: string;
  };
  ndaNote?: {
    en: string;
    id: string;
  };
  tags?: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  image: string;
  badge: string;
  description?: {
    en: string;
    id: string;
  };
};

export type GalleryItem = {
  id: string;
  title: {
    en: string;
    id: string;
  };
  client: "bi" | "binus" | "ut" | "untag" | "kuliah-umum" | "dana-pensiun";
  clientLabel: {
    en: string;
    id: string;
  };
  image: string;
  description?: {
    en: string;
    id: string;
  };
  org?: string;
  featuredAlbum?: boolean;
};

export type InstitutionPartner = {
  name: string;
  scope: {
    en: string;
    id: string;
  };
  logo?: string;
};

export type Education = {
  institution: string;
  degree: {
    en: string;
    id: string;
  };
  period: {
    en: string;
    id: string;
  } | string;
  gpa?: string;
  logo?: string;
};
