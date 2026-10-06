import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { 
  MainSection,
  Choose,
  Contact,
  ContactData,
  TrailsScetion
} from '../interfaces/contact.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) { }

  sendContactForm(formData: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/contact-us`, formData);
  }

  getContactData(): Observable<ContactData> {
    return this.http.get<ContactData>(this.apiUrl);
  }

  getMainSection(): Observable<MainSection> {
    return this.http.get<ContactData>(this.apiUrl).pipe(
      map((data: ContactData) => data.mainSection)
    );
  }

  getChoose(): Observable<Choose> {
    return this.http.get<ContactData>(this.apiUrl).pipe(
      map((data: ContactData) => data.choose)
    );
  }

   gettrailsScetion(): Observable<TrailsScetion> {
    return this.http.get<ContactData>(this.apiUrl).pipe(
      map((data: ContactData) => data.trailsScetion)
    );
  }

  getContact(): Observable<Contact> {
    return this.http.get<ContactData>(this.apiUrl).pipe(
      map((data: ContactData) => data.contact)
    );
  }
} 