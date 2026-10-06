import { Component, signal } from '@angular/core';
import { TECH_STACK } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  readonly techStack = TECH_STACK;
  readonly activeTech = signal(TECH_STACK[0].name);
  readonly pipeline = ['UI', 'Components', 'API', 'SSR', 'Performance'];

  selectTech(name: string): void {
    this.activeTech.set(name);
  }

  get activeDescription(): string {
    return this.techStack.find((t) => t.name === this.activeTech())?.description ?? '';
  }
}
