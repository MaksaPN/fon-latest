import { Component, OnInit } from '@angular/core';

import { News, NewsApiError } from '../shared/models/news';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'fon-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList: News[] = [];
  error: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews().subscribe(
      (newsList: News[]) => {
        this.newsList = newsList;
      },
      (error: NewsApiError) => {
        this.error = error.message;
      }
    );
  }

}
