import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChatComponent } from '../../../common/chat/chat.component';

@Component({
    selector: 'app-banner',
    imports: [RouterLink, ChatComponent],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {}