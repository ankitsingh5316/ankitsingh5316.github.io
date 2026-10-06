import { Component } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-features-page-two',
    imports: [NavbarOneComponent, PageBannerComponent, SubscribeComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './features-page-two.component.html',
    styleUrl: './features-page-two.component.scss'
})
export class FeaturesPageTwoComponent {}