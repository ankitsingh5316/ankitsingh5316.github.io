import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class JqueryService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initializeJquery(callback: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      callback();
    }
  }

  getJquery() {
    if (isPlatformBrowser(this.platformId)) {
      return $;
    }
    return null;
  }
} 