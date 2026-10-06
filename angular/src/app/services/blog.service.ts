import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Blog {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  tags: string[];
  authorImage: string;
}

export interface Category {
  name: string;
  count: number;
}

export interface BlogResponse {
  metaTags: any[];
  blogs: Blog[];
  categories: Category[];
  pagination: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}

export interface BlogDetail extends Blog {
  metaTags: any[];
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getBlogDetails(slug: string) {
      throw new Error('Method not implemented.');
  }
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBlogs(page: number = 1, category?: string): Observable<BlogResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', '9');
    
    if (category) {
      params = params.set('category', category);
    }

    return this.http.get<BlogResponse>(`${this.apiUrl}/blogs`, { params });
  }

  getBlogBySlug(slug: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/blog-details/${slug}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/blogs/categories`);
  }

  getBlogDetailBySlug(slug: string): Observable<BlogDetail> {
    return this.http.get<BlogDetail>(`${this.apiUrl}/blog-details/${slug}`);
  }
} 