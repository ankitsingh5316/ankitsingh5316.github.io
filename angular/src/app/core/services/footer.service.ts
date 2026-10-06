import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { FooterData } from '../interfaces/footer.interface';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private endpoint = 'footer';

  constructor(private apiService: ApiService) { }

  getFooterData(): Observable<FooterData> {
    return this.apiService.get<FooterData>(this.endpoint);
  }
} 