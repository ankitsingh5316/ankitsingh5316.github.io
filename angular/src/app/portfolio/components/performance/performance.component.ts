import { Component, PLATFORM_ID, inject, AfterViewInit, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PERFORMANCE_METRICS, PERFORMANCE_FEATURES } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss',
})
export class PerformanceComponent implements AfterViewInit {
  readonly metrics = PERFORMANCE_METRICS;
  readonly features = PERFORMANCE_FEATURES;
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.el.nativeElement.querySelectorAll('.metric-ring-progress').forEach((ring: Element) => {
      observer.observe(ring);
    });
  }
}
