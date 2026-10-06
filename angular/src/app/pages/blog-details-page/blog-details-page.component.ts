import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { WidgetSidebarComponent } from '../../common/widget-sidebar/widget-sidebar.component';
import { BlogDetail, BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-blog-details-page',
    imports: [RouterLink, NavbarOneComponent, PageBannerComponent, WidgetSidebarComponent, FreeTrialComponent, FooterComponent, BackToTopComponent],
    templateUrl: './blog-details-page.component.html',
    styleUrl: './blog-details-page.component.scss'
})
export class BlogDetailsPageComponent {

    blog: BlogDetail | null = null;
    loading = true;
    error = false;
    blogs: any;
    constructor(private route: ActivatedRoute, private _service: BlogService,) {

    }


    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('url');
            if (slug) {
                this.fetchBlogDetail(slug);
            }
        });
    }

    fetchBlogDetail(slug: string): void {
        this.loading = true;
        this.error = false;
        this._service.getBlogDetailBySlug(slug).subscribe({
          next: (data) => {
            this.blog = data;
            // console.log(data);
            // this.updateMetaTags(data.metaTags);
            this.loading = false;
          },
          error: (err) => {
            this.error = true;
            this.loading = false;
          }
        });
      }
}