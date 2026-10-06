import { Component } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { RouterLink } from '@angular/router';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-terms-conditions-page',
    imports: [RouterLink, NavbarOneComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './terms-conditions-page.component.html',
    styleUrl: './terms-conditions-page.component.scss'
})
export class TermsConditionsPageComponent {}