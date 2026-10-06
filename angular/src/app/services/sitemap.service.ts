import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SitemapService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNavigationUrls(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/navigation/sitemap`);
  }

  getFooterUrls(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/footer/sitemap`);
  }

  getBlogUrls(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/blogs/sitemap`).pipe(
      map(blogs => blogs.map(blog => `/blog/${blog.slug}`))
    );
  }

  generateSitemap(): Observable<string> {
    return forkJoin({
      navigation: this.getNavigationUrls(),
      blogs: this.getBlogUrls()
    }).pipe(
      map(({ navigation, blogs }) => {
        const allUrls = [...navigation, ...blogs];
        const baseUrl = environment.baseUrl; // Replace with your actual domain
        const today = new Date().toISOString().split('T')[0];

        let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
        sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        allUrls.forEach(url => {
          if (!url.startsWith('#')) { // Skip anchor links
            sitemap += '  <url>\n';
            sitemap += `    <loc>${baseUrl}${url}</loc>\n`;
            sitemap += `    <lastmod>${today}</lastmod>\n`;
            sitemap += '    <changefreq>weekly</changefreq>\n';
            sitemap += '    <priority>0.8</priority>\n';
            sitemap += '  </url>\n';
          }
        });

        sitemap += '</urlset>';
        return sitemap;
      })
    );
  }
} 