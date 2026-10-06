import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ChatComponent } from '../../../common/chat/chat.component';

@Component({
    selector: 'app-banner',
    imports: [NgIf, ChatComponent],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    // Video Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}