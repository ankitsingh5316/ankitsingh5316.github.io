import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CONTACT, NAV_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly navLinks = NAV_LINKS;
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();
  private readonly platformId = inject(PLATFORM_ID);

  scrollTo(href: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
