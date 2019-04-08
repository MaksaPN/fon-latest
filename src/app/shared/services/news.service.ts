import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { NewsItem } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<NewsItem[]> {
    const newsUrl = `${environment.newsApiUrl}/news`;
    return this.http.get<{ results: NewsItem[] }>(newsUrl)
      .pipe(map((response) => {
        return response.results;
      }));
  }

  getNewsDetails(id: number): Observable<NewsItem> {
    const newsUrl = `${environment.newsApiUrl}/news/${id}`;

    return this.http.get<{ article: NewsItem }>(newsUrl)
      .pipe(map((response) => {
        return response.article;
      }));
  }

}
