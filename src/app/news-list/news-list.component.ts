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
  filteredNewsList: News[] = [];

  searchTerm: string;
  error: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews().subscribe(
      (newsList: News[]) => {
        this.newsList = newsList;
        this.filteredNewsList = newsList;
      },
      (error: NewsApiError) => {
        this.error = error.message;
      }
    );
  }

  filterList(searchValue: string) {
    if (!searchValue) {
      this.filteredNewsList = this.newsList;
      return;
    }
    this.filteredNewsList = this.newsList.filter(n => n.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  }

}
