import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fon-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchTermChanged = new EventEmitter<string>();

  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchChanged(newValue: string) {
    this.searchTermChanged.emit(newValue);
  }

}
