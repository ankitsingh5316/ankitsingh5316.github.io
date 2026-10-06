import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials-with-slides',
    imports: [CarouselModule],
    templateUrl: './testimonials-with-slides.component.html',
    styleUrl: './testimonials-with-slides.component.scss'
})
export class TestimonialsWithSlidesComponent {

    testimonialsSlides: OwlOptions = {
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

}