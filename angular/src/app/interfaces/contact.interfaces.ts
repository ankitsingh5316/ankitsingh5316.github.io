export interface Stat {
    number: string;
    title: string;
    icon: string;
}

export interface MainSection {
    title: string;
    subtitle: string;
    description: string;
    mainImage: string;
    stats: Stat[];
}

export interface Choose {
    title: string;
    subtitle: string;
    description: string;
    items: string[];
}

export interface Contact {
    title: string;
}

export interface TrailsScetion {
    title: string;
}

export interface ContactInfo {
  title: string;
  phone: string;
  email: string;
  social: SocialLink[];
}

export interface SocialLink {
  icon: string;
  url: string;
}

interface MetaTag {
    charset?: string;
    name?: string;
    content?: string;
    property?: string;
    rel?: string;
    href?: string;
    'http-equiv'?: string;
}

export interface ContactData {
chooseData: any;
    metaTags: MetaTag[];
    mainSection: MainSection;
    choose: Choose; 
    contact: Contact; 
    trailsScetion: TrailsScetion;
    contactInfo: ContactInfo;
} 