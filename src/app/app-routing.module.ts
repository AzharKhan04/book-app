import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [

  	{ 
  		path: 'book/:category',
  		component: BookListComponent
  	},

  	{ 
  		path: '**',
  		component: HomeComponent
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
