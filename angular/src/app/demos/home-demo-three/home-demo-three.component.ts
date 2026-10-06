import { Component } from '@angular/core';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedServicesComponent } from '../../common/featured-services/featured-services.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from '../../common/team/team.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { MobileAppComponent } from '../../common/mobile-app/mobile-app.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from "../../common/faq/faq.component";

@Component({
    selector: 'app-home-demo-three',
    imports: [NavbarOneComponent, AboutComponent, BannerComponent, FeaturedServicesComponent, ServicesComponent, TeamComponent, FeaturesComponent, TestimonialsComponent, PricingComponent, ClientsComponent, MobileAppComponent, BlogComponent, SubscribeComponent, FreeTrialComponent, FooterComponent, BackToTopComponent, FaqComponent],
    templateUrl: './home-demo-three.component.html',
    styleUrl: './home-demo-three.component.scss'
})
export class HomeDemoThreeComponent {}