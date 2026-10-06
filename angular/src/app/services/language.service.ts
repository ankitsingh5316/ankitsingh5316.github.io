import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

export interface Language {
  code: string;
  name: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  public currentLang$ = this.currentLangSubject.asObservable();
  
  private translationsSubject = new BehaviorSubject<any>({});
  public translations$ = this.translationsSubject.asObservable();
  
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  
  public availableLanguages: Language[] = [
    { code: 'en', name: 'English', flag: 'gb', direction: 'ltr' },
    { code: 'fr', name: 'Français', flag: 'fr', direction: 'ltr' },
    { code: 'de', name: 'Deutsch', flag: 'de', direction: 'ltr' },
    { code: 'es', name: 'Español', flag: 'es', direction: 'ltr' },
    { code: 'it', name: 'Italiano', flag: 'it', direction: 'ltr' },
    { code: 'ar', name: 'العربية', flag: 'sa', direction: 'rtl' },
    { code: 'tr', name: 'Türkçe', flag: 'tr', direction: 'ltr' },
    { code: 'ru', name: 'Русский', flag: 'ru', direction: 'ltr' },
    { code: 'zh', name: '中文', flag: 'cn', direction: 'ltr' },
    { code: 'hi', name: 'हिंदी', flag: 'in', direction: 'ltr' }
  ];
  
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Only access browser APIs if we're in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Try to get language from localStorage or browser
      const savedLang = localStorage.getItem('language');
      const browserLang = navigator.language.split('-')[0];
      const initialLang = savedLang || this.availableLanguages.find(lang => lang.code === browserLang)?.code || 'en';
      
      this.setLanguage(initialLang);
    } else {
      // Server-side: use default language
      this.setLanguage('en');
    }
  }
  
  setLanguage(langCode: string) {
    if (!this.availableLanguages.find(lang => lang.code === langCode)) {
      console.error(`Language ${langCode} not supported`);
      return;
    }
    
    this.loadingSubject.next(true);
    
    // Save to localStorage only in browser environment
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', langCode);
    }
    
    // Update current language
    this.currentLangSubject.next(langCode);
    
    // Load translations
    this.loadTranslations(langCode);
    
    // Update document direction for RTL languages only in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const lang = this.availableLanguages.find(l => l.code === langCode);
      if (lang) {
        document.documentElement.dir = lang.direction;
        document.documentElement.lang = langCode;
      }
    }
  }
  
  private loadTranslations(langCode: string) {
    // Load UI translations
    this.http.get<any>(`/assets/i18n/${langCode}.json`).subscribe({
      next: (translations) => {
        this.translationsSubject.next(translations);
        this.loadingSubject.next(false);
      },
      error: (error) => {
        console.error(`Failed to load translations for ${langCode}`, error);
        this.loadingSubject.next(false);
      }
    });
  }
  
  getCurrentLanguage(): Language {
    const code = this.currentLangSubject.value;
    return this.availableLanguages.find(lang => lang.code === code) || this.availableLanguages[0];
  }
  
  translate(key: string): string {
    const translations = this.translationsSubject.value;
    return this.getNestedValue(translations, key) || key;
  }
  
  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null;
    }, obj);
  }
} 