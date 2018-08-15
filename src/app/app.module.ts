import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { Configuration } from './app.constants';
import { HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from './book-card/book-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({

  declarations: [
    AppComponent,
    BookListComponent,
    HomeComponent,
    CategoryCardComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  schemas: [
	NO_ERRORS_SCHEMA
],
  providers: [
  	Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
