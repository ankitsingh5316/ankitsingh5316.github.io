import { Component } from '@angular/core';
import { PROJECTS, Project } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;

  mockupHost(project: Project): string {
    if (!project.url) {
      return `${project.title.toLowerCase().replace(/\s+/g, '')}.app`;
    }
    try {
      return new URL(project.url).hostname;
    } catch {
      return project.url;
    }
  }
}
