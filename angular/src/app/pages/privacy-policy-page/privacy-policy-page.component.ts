import { Component } from '@angular/core';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-privacy-policy-page',
    imports: [RouterLink, NavbarOneComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './privacy-policy-page.component.html',
    styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent {}