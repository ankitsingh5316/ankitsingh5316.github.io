export interface CompanyInfo {
  description: string;
  address: string;
  email: string;
  phone: string;
  mapLink: string;
  image: string;
}

export interface QuickLink {
  id: number;
  title: string;
  link: string;
}

export interface Service {
  id: number;
  title: string;
  link: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  link: string;
  icon: string;
}

export interface FooterData {
  companyInfo: CompanyInfo;
  quickLinks: QuickLink[];
  services: Service[];
  socialLinks: SocialLink[];
} 