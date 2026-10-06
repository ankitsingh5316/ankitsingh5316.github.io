import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedServicesComponent } from '../../common/featured-services/featured-services.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsWithSlidesComponent } from '../../common/testimonials-with-slides/testimonials-with-slides.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-two',
    imports: [NavbarComponent, BannerComponent, FeaturedServicesComponent, ServicesComponent, FeaturesComponent, TestimonialsWithSlidesComponent, FunfactsComponent, PricingComponent, TeamComponent, FaqComponent, BlogComponent, SubscribeComponent, ClientsComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-two.component.html',
    styleUrl: './home-demo-two.component.scss'
})
export class HomeDemoTwoComponent {}