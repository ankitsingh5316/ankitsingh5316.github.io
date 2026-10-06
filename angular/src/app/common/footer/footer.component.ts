import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterData } from '../../core/interfaces/footer.interface';
import { FooterService } from '../../core/services/footer.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    footerData: FooterData | null = null;
  currentYear: number = new Date().getFullYear();

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.loadFooterData();
  }

  private loadFooterData(): void {
    this.footerService.getFooterData().subscribe({
      next: (data) => {
        this.footerData = data;
      },
      error: (error) => {
        console.error('Error loading footer data:', error);
      }
    });
  }
}