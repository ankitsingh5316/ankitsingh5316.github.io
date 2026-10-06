import { Component } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';
import { Service, ServiceDetail } from '../../services/services';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-service-details-page',
    imports: [NavbarOneComponent, PageBannerComponent, SubscribeComponent, FreeTrialComponent, FooterComponent, BackToTopComponent, CommonModule],
    templateUrl: './service-details-page.component.html',
    styleUrl: './service-details-page.component.scss'
})
export class ServiceDetailsPageComponent {

    public service: Service | null = null;
  public loading: boolean = true;
  public error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private serviceDetail: ServiceDetail,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.loadService();
  }

  private loadService(): void {
    this.loading = true;
    this.error = false;
    
    this.route.url.subscribe(segments => {
      const url = segments.map(segment => segment.path).join('/');
      console.log(url, segments);
      this.serviceDetail.getServiceBySlug(segments[1].path).subscribe({
        next: (data) => {
          console.log("data", data);
          this.service = data;
          this.loading = false;
          
          // Update meta tags if they exist in the data
          if (data.metaTags && data.metaTags.length > 0) {
            this.updateMetaTags(data.metaTags);
          } else {
            // Fallback meta tags if metaTags array is not present
            this.titleService.setTitle(`${data.title} | Free Call Center`);
            this.metaService.updateTag({ 
              name: 'description', 
              content: data.summary || 'Free Call Center communication solutions for modern businesses'
            });
            this.metaService.updateTag({ 
              name: 'keywords', 
              content: `${data.title.toLowerCase()}, ${data.category.toLowerCase()}, communication solutions, Free Call Center, customer service` 
            });
          }
        },
        error: (error) => {
          console.error('Error fetching service data:', error);
          this.loading = false;
          this.error = true;
        }
      });
    });
  }

  private updateMetaTags(metaTags: any[]): void {
    // Remove existing meta tags
    this.metaService.removeTag("name='description'");
    this.metaService.removeTag("name='keywords'");
    this.metaService.removeTag("name='author'");
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("property='og:description'");
    this.metaService.removeTag("property='og:image'");
    this.metaService.removeTag("property='og:url'");
    this.metaService.removeTag("property='og:type'");
    this.metaService.removeTag("name='twitter:card'");
    this.metaService.removeTag("name='twitter:title'");
    this.metaService.removeTag("name='twitter:description'");
    this.metaService.removeTag("name='twitter:image'");
    this.metaService.removeTag("rel='canonical'");

    // Add new meta tags
    metaTags.forEach(tag => {
      if (tag.name === 'title') {
        this.titleService.setTitle(tag.content);
      } else if (tag.charset) {
        this.metaService.updateTag({ charset: tag.charset });
      } else if (tag['http-equiv']) {
        this.metaService.updateTag({ 'http-equiv': tag['http-equiv'], content: tag.content });
      } else if (tag.rel === 'canonical') {
        this.metaService.updateTag({ rel: 'canonical', href: tag.href });
      } else {
        const metaTag: any = {};
        if (tag.name) metaTag.name = tag.name;
        if (tag.property) metaTag.property = tag.property;
        if (tag.content) metaTag.content = tag.content;
        this.metaService.updateTag(metaTag);
      }
    });
  }
  
}