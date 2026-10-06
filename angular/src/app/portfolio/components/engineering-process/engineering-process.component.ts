import { Component } from '@angular/core';
import { PROCESS_STEPS } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-engineering-process',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './engineering-process.component.html',
  styleUrl: './engineering-process.component.scss',
})
export class EngineeringProcessComponent {
  readonly steps = PROCESS_STEPS;
}
