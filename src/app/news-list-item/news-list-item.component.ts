import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { News, NewsApiError } from '../shared/models/news';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'fon-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent implements OnInit {

  newsItem: News = {} as News;
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
      (newsItem: News) => {
        this.newsItem = newsItem;
      },
      (error: NewsApiError) => {
        this.error = error.message;
      }
    );
  }
}
