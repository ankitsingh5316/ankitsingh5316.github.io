import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../../services/about.service';
import { AboutData } from '../../interfaces/about.interface';

@Component({
    selector: 'app-clients',
    imports: [NgClass, CommonModule],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss'
})
export class ClientsComponent {

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