export interface Stat {
    number: string;
    title: string;
    icon: string;
}

export interface MainSection {
    title: string;
    subtitle: string;
    mainImage: string;
    image: string;
    buttonText: string;
    buttonIcon: string;
    buttonLink: string;
    videoText: string;
    videoIcon: string;
    videoLink: string;
    carouselSlides: String[];
}

export interface Features {
    heading: string;
    cards: string[];
    icon: string;
    title: string;
    description: string;
    color: string;
}

export interface KeyBenefits {
    heading: string;
    benefits: string[];
    icon: string;
    title: string;
    description: string;
    colorClass: string;
    delay: string;
     image: string;
}

export interface Services {
  title: string;
  image: string;
  icon: string;
  description: string;
  features: string[];
  link: string;
  items: string;
  explore: string;
}

export interface VideoSection {
  title: string;
  videoImage: string;
  videoUrl: string;
  funFacts: string[];
 cta: {
    heading: string;
    subtext: string;
    buttonText: string;
    buttonIcon: string;
    buttonLink: string;
  };
  icon: string;
  count: string;
  label: string;
}

export interface WhyChoose {
  image: string;
  title: string;
  reasons: string[];
  shape: string;
  label: string;
  description: string;
}

export interface TestimonialsSection {
  image: string;
  message: string;
  rating: number;
  name: string;
  location: string;
  heading: string;
  testimonials: string[];
}

export interface AboutSection {
  heading: string;
  faqs: string[];
  question: string;
  answer: string;
}

export interface Blogs {
  title: string;
  description: string;
  items: string[];
  image: string;
  date: string;
  author: string;
}

export interface FreeTrialSection {
  heading: string;
  subtext: string;
  buttonText: string;
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

export interface HomeData {
    metaTags: MetaTag[];
    mainSection: MainSection;
    features: Features;
    keyBenefits: KeyBenefits;
    services: Services; 
    videoSection: VideoSection;
    whyChoose: WhyChoose;
    testimonialsSection: TestimonialsSection;
    aboutSection: AboutSection;
    blogs: Blogs;  
    freeTrialSection: FreeTrialSection;
} 