import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { TestimonialsWithSlidesComponent } from '../../common/testimonials-with-slides/testimonials-with-slides.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { TeamComponent } from '../../common/team/team.component';
import { MobileAppComponent } from '../../common/mobile-app/mobile-app.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-seven',
    imports: [NavbarComponent, BannerComponent, PartnersComponent, FeaturesComponent, ServicesComponent, ClientsComponent, TestimonialsWithSlidesComponent, PricingComponent, TeamComponent, MobileAppComponent, BlogComponent, SubscribeComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-seven.component.html',
    styleUrl: './home-demo-seven.component.scss'
})
export class HomeDemoSevenComponent {}