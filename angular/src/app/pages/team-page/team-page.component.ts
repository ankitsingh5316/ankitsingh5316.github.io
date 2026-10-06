import { Component } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-team-page',
    imports: [NavbarOneComponent, PageBannerComponent, ClientsComponent, FeedbackComponent, FooterComponent, BackToTopComponent],
    templateUrl: './team-page.component.html',
    styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {}