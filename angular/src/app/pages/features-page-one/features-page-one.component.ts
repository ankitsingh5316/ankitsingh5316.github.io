import { Component } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-features-page-one',
    imports: [NavbarOneComponent, PageBannerComponent, FeedbackComponent, SubscribeComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './features-page-one.component.html',
    styleUrl: './features-page-one.component.scss'
})
export class FeaturesPageOneComponent {}