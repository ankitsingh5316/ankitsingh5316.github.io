import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


export interface ServiceFeature {
  title: string;
  description: string;
}

export interface OfferItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceHighlight {
  topic: string;
  detail: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface TechnicalFeatureSection {
  heading: string;
  points: string[];
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  q: string;
  a: string;
  quote: string;
  author: string;
}

// export interface ProcessContent {
//   heading: string;
//   steps: ProcessStep[];
// }

// export interface offersContent { 
//     title: string;
//     list: ProcessStep[];
// }

export interface Service {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  image2: string;
  youtube: string;
  date: string;
  author: string;
  summary: string;
  mainContent: {
    title: string;
    description: string;
    heading: string;
    content: ServiceFeature[];
  };

  contactContent: {
    heading: string;
    description: string;
    content: ServiceFeature[];
  };

  processContent: {
    heading: string;
    steps: ProcessStep[];
  }

  offersContent: { 
    heading: string;
    steps: ProcessStep[];
  }

  industriesContent: { 
    heading: string;
    images: string;
    steps: ProcessStep[];
  }

  whyChoose: { 
    heading: string;
    steps: ProcessStep[];
  }

  useCases:{
    heading: string;
    steps: ProcessStep[];
  }

  testiMonials: {
    heading: string;
    steps: ProcessStep[];
  }

  faqContent: {
    heading: string;
    steps: ProcessStep[];
  }

  ctaContent: {
    title: string;
    description: string;
    cta: string;
  }

  expContent: {
    title: string;
    solution: {
      points: string[];
    }[];
  };
  partnerContent: {
    title: string;
    solution: {
      points: string[];
    }[];
  };

  contactInfo: ContactInfo;
  metaTags: Array<{
    name: string;
    content: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDetail {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getServiceBySlug(slug: string): Observable<Service> {
    return this.http.get<Service>(`${this.apiUrl}/services/${slug}`);
  }
}



