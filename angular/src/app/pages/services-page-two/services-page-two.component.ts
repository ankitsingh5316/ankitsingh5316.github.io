import { Component } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { RouterLink } from '@angular/router';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { TestimonialsWithSlidesComponent } from '../../common/testimonials-with-slides/testimonials-with-slides.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-services-page-two',
    imports: [RouterLink, NavbarOneComponent, PageBannerComponent, TestimonialsWithSlidesComponent, FunfactsComponent, FooterComponent, BackToTopComponent],
    templateUrl: './services-page-two.component.html',
    styleUrl: './services-page-two.component.scss'
})
export class ServicesPageTwoComponent {}