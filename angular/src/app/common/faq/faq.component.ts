import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-faq',
    imports: [NgIf, NgClass],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss'
})
export class FaqComponent {

    constructor(
        public router: Router
    ) {}

    // Accordion
    activePanelId: string = 'panel1';
    togglePanel(panelId: string): void {
        if (this.activePanelId !== panelId) {
            this.activePanelId = panelId;
        }
    }

}