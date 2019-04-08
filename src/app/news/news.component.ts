import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsItem, NewsApiError } from '../shared/models/news';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'fon-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsItem: NewsItem = {} as NewsItem;
  error: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getNewsDetails(params.id);
    });
  }

  getNewsDetails(id: number) {
    this.newsService.getNewsDetails(id).subscribe(
      (newsItem: NewsItem) => {
        this.newsItem = newsItem;
      },
      (error: NewsApiError) => {
        this.error = error.message;
      }
    );
  }

}
