import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { 
  PricingData,
  MainSection,
  ServiceSection,
  PlanSection
} from '../interfaces/pricing.interface';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  private apiUrl = `${environment.apiUrl}/pricing`;

  constructor(private http: HttpClient) { }

  getPricingData(): Observable<PricingData> {
    return this.http.get<PricingData>(this.apiUrl);
  }

  getMainSection(): Observable<MainSection> {
    return this.http.get<PricingData>(this.apiUrl).pipe(
      map((data: PricingData) => data.mainSection)
    );
  }

  getServiceSection(): Observable<ServiceSection> {
    return this.http.get<PricingData>(this.apiUrl).pipe(
      map((data: PricingData) => data.serviceSection)
    );
  }

  getPlanSection(): Observable<PlanSection> {
    return this.http.get<PricingData>(this.apiUrl).pipe(
      map((data: PricingData) => data.planSection)
    );
  }
} 