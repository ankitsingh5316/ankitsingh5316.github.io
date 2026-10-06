export interface MainSection {
    heading: any;
    title: string;
    subtitle: string;
    description: string;
    description2: string;
    mainImage: string;
    stats: Stat[];
    subheading: string;
}

export interface Stat {
    number: string;
    title: string;
    icon: string;
}

export interface OurStory {
    mainImage: string;
    heading: string;
    subheading: string;
    description: string;
}

export interface MissionVision {
  heading: string;     
  subheading: string;  
  cards: MissionVisionCard[];
}

export interface MissionVisionCard {
  type: string;       
  icon: string;       
  title: string;      
  description: string; 
}

export interface OurValues {
  heading: string;     
  subheading: string;  
  values: OurValue[];
}

export interface OurValue {
  icon: string;        
  title: string;       
  description: string; 
}

export interface WhatWeDo {
  heading: string;          
  services: WhatWeDoService[];
}

export interface WhatWeDoService {
  icon: string;        
  title: string;       
  description: string; 
}

export interface IndustriesSection {
  heading: string;
  subheading: string;
  industries: Industry[];
}

export interface Industry {
  icon: string;
  title: string;
  description: string;
}

export interface AchievementsSection {
  heading: string;
  achievements: Achievement[];
}

export interface Achievement {
  icon: string;
  text: string;
}

export interface ContactCTA {
  heading: string;
  paragraphs: string[];
  button: CTAButton;
}

export interface CTAButton {
  text: string;
  icon: string;
  link: string;
}

export interface VideoPopup {
  url: string;
  title: string;
}

export interface IndustriesPageData {
  industriesSection: IndustriesSection;
  achievementsSection: AchievementsSection;
  contactCTA: ContactCTA;
  videoPopup: VideoPopup;
}

export interface FeedbackSection {
  heading: string;
  items: FeedbackItem[];
}

export interface FeedbackItem {
  image: string;
  feedback: string;
  rating: number;
  name: string;
  position: string;
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

export interface AboutData {
    metaTags: MetaTag[];
    mainSection: MainSection;
    ourStory: OurStory;
    missionVision: MissionVision;
    ourValues: OurValues;
    whatWeDo: WhatWeDo;
    industriesSection: IndustriesSection;
    achievementsSection: AchievementsSection;
    contactCTA: ContactCTA;
    videoPopup: VideoPopup;
    industriesPageData: IndustriesPageData;
    feedbackSection: FeedbackSection;

}
