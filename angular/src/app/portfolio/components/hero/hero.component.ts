import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly platformId = inject(PLATFORM_ID);

  /** Absolute path from site root — works with Angular public assets */
  readonly bannerSrc = '/images/hero-banner.png';

  readonly floatingTags = [
    { label: 'Angular', x: 8, y: 12, delay: 0 },
    { label: 'Next.js', x: 72, y: 8, delay: 0.5 },
    { label: 'SSR', x: 82, y: 42, delay: 1 },
    { label: 'SEO', x: 6, y: 68, delay: 1.5 },
    { label: 'TypeScript', x: 55, y: 78, delay: 2 },
    { label: 'Responsive', x: 28, y: 88, delay: 2.5 },
  ];

  bannerLoaded = false;
  bannerError = false;

  onBannerLoad(): void {
    this.bannerLoaded = true;
  }

  onBannerError(): void {
    this.bannerError = true;
  }

  scrollTo(id: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
