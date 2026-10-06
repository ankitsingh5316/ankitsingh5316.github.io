import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';
import { NavigationData } from '../../core/interfaces/navigation.interface';

@Component({
    selector: 'app-navbar-one',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        NgClass
    ],
    templateUrl: './navbar-one.component.html',
    styleUrl: './navbar-one.component.scss'
})
export class NavbarOneComponent {
    navigationData: NavigationData | null = null;

    constructor(
        public router: Router,
        private navigationService: NavigationService
    ) { }

    ngOnInit() {
        this.loadNavigationData();
    }

    private loadNavigationData(): void {
        this.navigationService.getMainMenu().subscribe({
            next: (data: any) => {
                this.navigationData = data;
                // console.log('Navigation data:', this.navigationData);
            },
            error: (error) => {
                console.error('Error loading navigation data:', error);
            }
        });
    }

    // Navbar Toggle Class
    navbarToggleClassApplied = false;
    navbarToggleClass() {
        this.navbarToggleClassApplied = !this.navbarToggleClassApplied;
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }
}