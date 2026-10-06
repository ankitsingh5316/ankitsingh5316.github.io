import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { NavigationData } from '../interfaces/navigation.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private endpoint = 'navigation';

  constructor(private apiService: ApiService) { }

  getMainMenu(): Observable<NavigationData> {
    return this.apiService.get<NavigationData>(this.endpoint);
  }
} 