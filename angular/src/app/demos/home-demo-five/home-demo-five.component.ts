import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { ServicesComponent } from './services/services.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { FeaturesComponent } from './features/features.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { PricingComponent } from '../../common/pricing/pricing.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-five',
    imports: [NavbarComponent, BannerComponent, PartnersComponent, ServicesComponent, FunfactsComponent, FeaturesComponent, FeedbackComponent, PricingComponent, FaqComponent, ClientsComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-five.component.html',
    styleUrl: './home-demo-five.component.scss'
})
export class HomeDemoFiveComponent {}