import { Component } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { TeamComponent } from '../../common/team/team.component';
import { MobileAppComponent } from '../../common/mobile-app/mobile-app.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { ValuesComponent } from "../../common/values/values.component";
import { AboutService } from '../../services/about.service';
import { AboutData } from '../../interfaces/about.interface';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-about-page',
    imports: [NavbarOneComponent, PageBannerComponent, ClientsComponent, FunfactsComponent, TeamComponent, MobileAppComponent, FeedbackComponent, FreeTrialComponent, FooterComponent, BackToTopComponent, ValuesComponent],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
    aboutData: AboutData | null = null;
    loading: boolean = false;
    error: boolean = false;

    public clients: any[] = [
        {
            name: 'Client 1',
            image: 'assets/images/client-1.png'
        },
        
    ];

    constructor(public aboutService: AboutService) { }

    ngOnInit() {
        this.loadAboutData();
    }

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