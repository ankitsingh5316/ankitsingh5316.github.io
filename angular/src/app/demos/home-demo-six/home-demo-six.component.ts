import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { TeamComponent } from '../home-demo-two/team/team.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-six',
    imports: [NavbarComponent, BannerComponent, PartnersComponent, ServicesComponent, FeaturesComponent, TestimonialsComponent, ClientsComponent, PricingComponent, TeamComponent, FaqComponent, BlogComponent, SubscribeComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-six.component.html',
    styleUrl: './home-demo-six.component.scss'
})
export class HomeDemoSixComponent {}