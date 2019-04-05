import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { NewsListComponent } from './news-list/news-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:id', component: NewsListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
