import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio/portfolio-page.component';

export const routes: Routes = [
  { path: '', component: PortfolioPageComponent },
  { path: '**', redirectTo: '' },
];
