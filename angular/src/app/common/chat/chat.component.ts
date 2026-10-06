import { Component, OnInit, Renderer2, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ChatMessage {
    name: string;
    msg: string;
    delay: number;
    align: 'left' | 'right';
    showTime: boolean;
    time: string;
    img: string;
}

@Component({
    selector: 'app-chat',
    imports: [],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {

    chatMessages: ChatMessage[] = [
        {
            name: "ms1",
            msg: "👋Hi​! I'm a Jexsa. Let me know if you have any questions regarding our tool or set up a demo to learn more!",
            delay: 500,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img8.jpg"
        },
        {
            name: "ms2",
            msg: "Ask a Question",
            delay: 1000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img7.jpg"
        },
        {
            name: "ms3",
            msg: "Sure! Ask me anything!",
            delay: 1000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img8.jpg"
        },
        {
            name: "ms4",
            msg: "What are you doing?",
            delay: 1000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img7.jpg"
        },
        {
            name: "ms5",
            msg: "I'm great! I would love to get to better understand how you're doing and your needs, so I can best tell you how I can help you. Let me get some contact details.",
            delay: 1000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img8.jpg"
        },
        {
            name: "ms6",
            msg: "Could you describe EnvyTheme in one sentence?",
            delay: 1000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img7.jpg"
        },
        {
            name: "ms7",
            msg: "EnvyTheme.com | Premium High-Quality Items Design+Dev! Buy all exciting premium templates and themes from EnvyTheme!",
            delay: 1000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img8.jpg"
        },
        {
            name: "ms8",
            msg: "What makes you different from other learning platforms?",
            delay: 1000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img7.jpg"
        },
        {
            name: "ms9",
            msg: "The best Innovative Chatbot and automations are here to expand.",
            delay: 1000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img8.jpg"
        },
        {
            name: "ms10",
            msg: "Great, Thank You!❤️",
            delay: 1000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img7.jpg"
        },
        {
            name: "ms11",
            msg: "EnvyTheme.com | Premium High-Quality Items Design+Dev! Buy all exciting premium templates and themes from EnvyTheme! EnvyTheme.com | Premium High-Quality Items Design+Dev! Great, Thank You!❤️",
            delay: 1000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "img/author-image/img8.jpg"
        }
    ];

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.displayMessages();
        }
    }

    displayMessages(): void {
        let chatDelay = 0;

        this.chatMessages.forEach((message) => {
            chatDelay += 500;
            const chatDelay2 = chatDelay + message.delay;
            const chatDelay3 = chatDelay2 + 10;

            setTimeout(() => {
                const messageElement = this.renderer.createElement('li');
                this.renderer.addClass(messageElement, `message-${message.align}`);
                this.renderer.addClass(messageElement, message.name);

                const spinnerDiv = this.renderer.createElement('div');
                this.renderer.addClass(spinnerDiv, `sp-${message.name}`);

                const spinmeSpan = this.renderer.createElement('span');
                this.renderer.addClass(spinmeSpan, `spinme-${message.align}`);

                const spinnerInner = this.renderer.createElement('div');
                this.renderer.addClass(spinnerInner, 'spinner');

                const bounce1 = this.renderer.createElement('div');
                this.renderer.addClass(bounce1, 'bounce1');
                const bounce2 = this.renderer.createElement('div');
                this.renderer.addClass(bounce2, 'bounce2');
                const bounce3 = this.renderer.createElement('div');
                this.renderer.addClass(bounce3, 'bounce3');

                this.renderer.appendChild(spinnerInner, bounce1);
                this.renderer.appendChild(spinnerInner, bounce2);
                this.renderer.appendChild(spinnerInner, bounce3);
                this.renderer.appendChild(spinmeSpan, spinnerInner);
                this.renderer.appendChild(spinnerDiv, spinmeSpan);

                const messageInner = this.renderer.createElement('div');
                this.renderer.addClass(messageInner, `messageinner-${message.name}`);
                this.renderer.setAttribute(messageInner, 'hidden', 'true');

                const img = this.renderer.createElement('img');
                this.renderer.setAttribute(img, 'src', message.img);

                const messageText = this.renderer.createElement('span');
                this.renderer.addClass(messageText, 'message-text');
                const messageTextContent = this.renderer.createText(message.msg);
                this.renderer.appendChild(messageText, messageTextContent);

                if (message.showTime) {
                    const timeSpan = this.renderer.createElement('span');
                    this.renderer.addClass(timeSpan, 'message-time');
                    const timeText = this.renderer.createText(message.time);
                    this.renderer.appendChild(timeSpan, timeText);
                    this.renderer.appendChild(messageText, timeSpan);
                }

                this.renderer.appendChild(messageInner, img);
                this.renderer.appendChild(messageInner, messageText);
                this.renderer.appendChild(messageElement, spinnerDiv);
                this.renderer.appendChild(messageElement, messageInner);

                const chatList = this.el.nativeElement.querySelector('.chat-message-list');
                if (chatList) {
                    this.renderer.appendChild(chatList, messageElement);
                }

                setTimeout(() => {
                    const spinner = this.el.nativeElement.querySelector(`.sp-${message.name}`);
                    if (spinner) {
                        this.renderer.removeChild(messageElement, spinner);
                    }
                    this.renderer.removeAttribute(messageInner, 'hidden');
                }, message.delay);

                this.scrollToBottom();
            }, chatDelay);

            chatDelay = chatDelay3;
        });
    }

    scrollToBottom(): void {
        const chatContainer = this.el.nativeElement.querySelector('.chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }

}