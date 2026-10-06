import { Component } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { ServicesComponent } from '../../demos/home-demo-three/services/services.component';

@Component({
    selector: 'app-services-page-one',
    imports: [NavbarOneComponent, PageBannerComponent, FooterComponent, BackToTopComponent, FreeTrialComponent, ServicesComponent],
    templateUrl: './services-page-one.component.html',
    styleUrl: './services-page-one.component.scss'
})
export class ServicesPageOneComponent {}