import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { 
  AboutData,
  MainSection

} from '../interfaces/about.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = `${environment.apiUrl}/about`;

  constructor(private http: HttpClient) { }

  getAboutData(): Observable<AboutData> {
    return this.http.get<AboutData>(this.apiUrl);
  }

  getMainSection(): Observable<MainSection> {
    return this.http.get<AboutData>(this.apiUrl).pipe(
      map((data: AboutData) => data.mainSection)
    );
  }

  
} 