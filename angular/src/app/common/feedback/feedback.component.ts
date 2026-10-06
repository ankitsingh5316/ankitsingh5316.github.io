import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { AboutService } from '../../services/about.service';
import { AboutData } from '../../interfaces/about.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-feedback',
    imports: [CarouselModule, CommonModule],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

    feedbackSlides: OwlOptions = {
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
		responsive: {
			0: {
				items: 1
			},
			516: {
				items: 1
			},
			696: {
				items: 1
			},
			936: {
				items: 2
			}
		}
    }

    constructor(public aboutService: AboutService , router: Router) { }

    ngOnInit() {
        console.log("clients", this.clients);
         this.loadAboutData();
    }

    aboutData: AboutData | null = null;
    loading: boolean = false;
    error: boolean = false;

    public clients: any[] = [
        {
            name: 'Client 1',
            image: 'assets/images/client-1.png'
        },
        
    ];

    private loadAboutData(): void {
        this.loading = true;
        this.error = false;

        this.aboutService.getAboutData().subscribe({
            next: (data) => {
                console.log(data);
                this.aboutData = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading about data:', err);
                this.error = true;
                this.loading = false;
            }
        });
    }

}