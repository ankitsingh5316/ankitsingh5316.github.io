import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { WidgetSidebarComponent } from '../../common/widget-sidebar/widget-sidebar.component';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-blog-right-sidebar-page',
    imports: [RouterLink, NavbarOneComponent, PageBannerComponent, WidgetSidebarComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './blog-right-sidebar-page.component.html',
    styleUrl: './blog-right-sidebar-page.component.scss'
})
export class BlogRightSidebarPageComponent {}