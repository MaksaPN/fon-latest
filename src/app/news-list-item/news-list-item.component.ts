import { Component, Input, OnInit } from '@angular/core';

import { NewsItem } from '../shared/models/news';

@Component({
  selector: 'fon-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent implements OnInit {

  @Input() newsItem: NewsItem = {} as NewsItem;
  error: string;

  constructor() { }

  ngOnInit() {
  }

}
