import { Component } from '@angular/core';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PricingService } from '../../services/pricing.service';
import { PricingData } from '../../interfaces/pricing.interface';


@Component({
  selector: 'app-pricing-page',
  imports: [NgIf, NgClass, CommonModule, RouterLink, NavbarOneComponent, PageBannerComponent, FaqComponent, ClientsComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss'
})
export class PricingPageComponent {
  loading = true;
  error = false;
  pricingData: PricingData | null = null;
  // Tabs
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

  constructor(private titleService: Title, private metaService: Meta, private pricingService: PricingService) { }

  ngOnInit(): void {
    this.loadPricingData();
    // Set the title
    this.titleService.setTitle('Fax Pricing - Best Online Fax Service Pricing By B2B E-Faxing');

    // Set meta tags
    this.metaService.updateTag({ name: 'description', content: 'The best online fax service pricing by B2B E-Faxing. Find cost-effective solutions for your business communication needs with transparent and competitive fax pricing plans.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Fax Pricing, online fax service, B2B E-Faxing, business communication, pricing plans' });
  }

  private loadPricingData(): void {
    this.loading = true;
    this.error = false;

    this.pricingService.getPricingData().subscribe({
      next: (data) => {
        console.log("pricingData", data);
        this.pricingData = data;
        this.loading = false;
        // this.updateMetaTags(data.metaTags);
      },
      error: (err) => {
        console.error('Error loading pricing data:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  selectedStep = 1;

  // steps = [
  //   { label: 'Dialer', icon: 'bx bx-phone' },
  //   { label: 'FAX', icon: 'bx bx-printer' },
  //   { label: 'Email Marketing', icon: 'bx bx-envelope' },
  //   { label: 'SMS Marketing', icon: 'bx bx-chat' },
  //   { label: 'E-commerce Solution (Services & Products)', icon: 'bx bx-cart' },
  //   { label: 'Social Media Management Tool', icon: 'bx bx-share-alt' },
  //   { label: 'Simple Dialer', icon: 'bx bx-phone-call' }
  // ];




  goToStep(step: number) {
    this.selectedStep = step;
  }

}