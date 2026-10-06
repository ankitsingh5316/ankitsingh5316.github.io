import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { 
  HomeData,
  MainSection,
  Features,
  KeyBenefits,
  Services,
  VideoSection,
  WhyChoose,
  TestimonialsSection,
  AboutSection,
  Blogs,
  FreeTrialSection
} from '../interfaces/home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = `${environment.apiUrl}/ai-startup`;

  constructor(private http: HttpClient) { }

  getHomeData(): Observable<HomeData> {
    return this.http.get<HomeData>(this.apiUrl);
  }

  getMainSection(): Observable<MainSection> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.mainSection)
    );
  }

  getFeatures(): Observable<Features> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.features)
    );
  }

  getKeyBenefits(): Observable<KeyBenefits> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.keyBenefits)
    );
  }

  getServices(): Observable<Services> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.services)
    );
  }

  getVideoSection(): Observable<VideoSection> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.videoSection)
    );
  }

  getWhyChoose(): Observable<WhyChoose> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.whyChoose)
    );
  }

  getTestimonialsSection(): Observable<TestimonialsSection> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.testimonialsSection)
    );
  }

  getAboutSection(): Observable<AboutSection> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.aboutSection)
    );
  }

  getBlogs(): Observable<Blogs> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.blogs)
    );
  }

  getFreeTrialSection(): Observable<FreeTrialSection> {
    return this.http.get<HomeData>(this.apiUrl).pipe(
      map((data: HomeData) => data.freeTrialSection)
    );
  }


  
} 