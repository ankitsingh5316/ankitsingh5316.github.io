import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface MetaTag {
  charset?: string;
  name?: string;
  content?: string;
  property?: string;
  rel?: string;
  href?: string;
  'http-equiv'?: string;
}

export interface IndustryData {
  metaTags: MetaTag[];
  title: string;
  subtitle: string;
  banner: {
    heading: string;
    subheading: string;
    backgroundImage: string;
  };
  overview: {
    title: string;
    description: string;
    keyFeatures: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  features: {
    title: string;
    list: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  statistics: Array<{
    number: string;
    title: string;
    icon: string;
  }>;
  testimonials: Array<{
    name: string;
    position: string;
    organization: string;
    quote: string;
    image: string;
  }>;
  callToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getIndustryData(industry: string): Observable<IndustryData> {
    return this.http.get<IndustryData>(`${this.apiUrl}/industry/${industry}`);
  }
} 