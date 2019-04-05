import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<News[]> {
    const newsUrl = `${environment.newsApiUrl}/news`;

    return this.http.get<{ results: News[] }>(newsUrl)
      .pipe(map((response) => {
        return response.results;
      }));
  }

  getNewsDetails(id: number): Observable<News> {
    const newsUrl = `${environment.newsApiUrl}/news/${id}`;

    return this.http.get<{ article: News }>(newsUrl)
      .pipe(map((response) => {
        return response.article;
      }));
  }

}
