import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedServicesComponent } from '../../common/featured-services/featured-services.component';
import { ServicesComponent } from '../../common/services/services.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { TeamComponent } from '../../common/team/team.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-one',
    imports: [NavbarComponent, BannerComponent, FeaturedServicesComponent, ServicesComponent, FunfactsComponent, FeaturesComponent, FeedbackComponent, PricingComponent, TeamComponent, ClientsComponent, FaqComponent, SubscribeComponent, BlogComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss'
})
export class HomeDemoOneComponent {}