import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:id', component: NewsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
