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

export interface ServiceCategory {
    label: string;
    icon: string;
}

export interface ServiceSection {
    heading: string;
    categorey: ServiceCategory[];
    label: string;
    icon: any;
}

interface FreePlan {
    title: string;
    description: string;
    features: string[];
    note?: string;
}

interface PaidPlan {
    title: string;
    description: string;
    table: {
        headers: string[];
        rows: string[][];
    };
    note: string;
    contact: string;
}

interface Included {
    title: string;
    features: string[];
}

interface Pricing {
    title: string;
    table: {
        headers: string[];
        rows: string[][];
    };
    note?: string;
    contact?: string;
}

interface CustomPlan {
    title: string;
    features: string[];
    contact?: string;
}

interface Package {
    step: number;
    heading: string;
    subheading: string;
    description?: string;
    freePlan?: FreePlan;
    paidPlan?: PaidPlan;
    included?: Included;
    pricing?: Pricing;
    customPlan?: CustomPlan;
}

export interface PlanSection {
    heading: string;
    subheading: string;
    packages: Package[];
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

export interface PricingData {
    metaTags: MetaTag[];
    mainSection: MainSection;
    serviceSection: ServiceSection;
    planSection: PlanSection;
}