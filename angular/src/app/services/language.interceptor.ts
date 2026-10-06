import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { take } from 'rxjs/operators';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private languageService: LanguageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentLang = 'en';
    this.languageService.currentLang$.pipe(take(1)).subscribe(lang => {
      currentLang = lang;
    });

    request = request.clone({
      setHeaders: {
        'Accept-Language': currentLang
      }
    });

    return next.handle(request);
  }
}
