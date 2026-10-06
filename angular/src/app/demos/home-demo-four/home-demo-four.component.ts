import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { ServicesComponent } from './services/services.component';
import { MoreDiscoverComponent } from '../../common/more-discover/more-discover.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { OverviewComponent } from '../../common/overview/overview.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-four',
    imports: [NavbarComponent, BannerComponent, FeaturesComponent, ServicesComponent, MoreDiscoverComponent, FunfactsComponent, OverviewComponent, FeedbackComponent, PricingComponent, FaqComponent, ClientsComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-four.component.html',
    styleUrl: './home-demo-four.component.scss'
})
export class HomeDemoFourComponent {}