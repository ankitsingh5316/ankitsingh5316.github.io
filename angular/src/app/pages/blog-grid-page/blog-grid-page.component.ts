import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

import { BlogService, Blog, Category } from '../../services/blog.service';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';;

@Component({
    selector: 'app-blog-grid-page',
    imports: [RouterLink, RouterModule, NavbarOneComponent, PageBannerComponent, FreeTrialComponent, FooterComponent, BackToTopComponent, CommonModule],
    templateUrl: './blog-grid-page.component.html',
    styleUrl: './blog-grid-page.component.scss'
})
export class BlogGridPageComponent {

      blogs: Blog[] = [];
  categories: Category[] = [];
  loading = true;
  error = false;
  currentPage = 1;
  lastPage = 1;
  selectedCategory: string | null = null;
  loadingMore = false;

  constructor(
    private blogService: BlogService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.loadBlogs();
    this.loadCategories();
    this.setDefaultMetaTags();
  }

  loadBlogs(page: number = 1): void {
    if (page === 1) {
      this.loading = true;
      this.error = false;
      this.blogs = [];
    } else {
      this.loadingMore = true;
    }

    this.blogService.getBlogs(page, this.selectedCategory || undefined)
      .subscribe({
        next: (response) => {
          if (page === 1) {
            this.blogs = response.blogs;
            this.updateMetaTags(response.metaTags);
          } else {
            this.blogs = [...this.blogs, ...response.blogs];
          }
          this.currentPage = response.pagination.current_page;
          this.lastPage = response.pagination.last_page;
          this.loading = false;
          this.loadingMore = false;
        },
        error: (error) => {
          console.error('Error loading blogs:', error);
          this.error = true;
          this.loading = false;
          this.loadingMore = false;
        }
      });
  }

  loadCategories(): void {
    this.blogService.getCategories()
      .subscribe({
        next: (categories) => {
          this.categories = categories;
        },
        error: (error) => {
          console.error('Error loading categories:', error);
        }
      });
  }

  loadMore(): void {
    if (this.currentPage < this.lastPage && !this.loadingMore) {
      this.loadBlogs(this.currentPage + 1);
    }
  }

  filterByCategory(category: string | null): void {
    if (this.selectedCategory !== category) {
      this.selectedCategory = category;
      this.currentPage = 1;
      this.loadBlogs();
    }
  }

  getPopularTags(): string[] {
    const allTags = this.blogs.reduce((tags: string[], blog) => {
      return tags.concat(blog.tags || []);
    }, []);

    // Count tag occurrences
    const tagCount = allTags.reduce((acc: { [key: string]: number }, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});

    // Sort tags by count and get top 10
    return Object.entries(tagCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([tag]) => tag);
  }

  getAuthorInitials(blog: Blog): string {
    if (!blog.author) return 'AU';
    return blog.author
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  private setDefaultMetaTags(): void {
    this.titleService.setTitle('Blog - Latest Insights & News');
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Stay updated with the latest trends in business communication and technology through our expert insights and industry analysis.'
    });
  }

  private updateMetaTags(metaTags: any[]): void {
    if (!metaTags) return;

    metaTags.forEach(tag => {
      if (tag.name === 'title') {
        this.titleService.setTitle(tag.content);
      } else if (tag.name) {
        this.metaService.updateTag({ name: tag.name, content: tag.content });
      } else if (tag.property) {
        this.metaService.updateTag({ property: tag.property, content: tag.content });
      }
    });
  }
}