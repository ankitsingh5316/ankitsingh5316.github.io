import { Component } from '@angular/core';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-faq-page',
    imports: [NgIf, NavbarOneComponent, PageBannerComponent, SubscribeComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './faq-page.component.html',
    styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

    // Accordion
    activePanelId: string = 'panel1';
    togglePanel(panelId: string): void {
        if (this.activePanelId !== panelId) {
            this.activePanelId = panelId;
        }
    }

}