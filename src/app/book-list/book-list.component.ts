import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../rest.service';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { BookCardComponent } from '../book-card/book-card.component';

import { Router } from '@angular/router';

declare var require: any
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

	private bookCategory: any;
	private books:any[]=[];
	public booksReady:boolean;
	private pageNo:Number = 1

	public searchicon = require('../ic_search.png')
	public backicon = require('../ic_left_arrow.png')


  constructor(public route: ActivatedRoute, public restService: RestService, private router: Router) { 

  	this.route.params.subscribe((params: Params) => {
        this.bookCategory = params['category'];
      });

      document.body.style.backgroundColor = "white";

  }

  ngOnInit() {

	let that = this;
  	this.booksReady = false;

  	let books=[];

  	for(let i = 0;i<30;i++) {

  		this.loadMore(i);

  	}
  	



 }


  fetchBooks (p) {

  	return this.restService.get('/books',p);
}

loadMore (pageNo) {
	this.fetchBooks(pageNo).subscribe(res=> {

		let obj = JSON.parse(JSON.stringify(res))
		let books = obj.results.filter(b=>{

		console.log('-- '+this.bookCategory.toLowerCase())
			return b.formats['image/jpeg'] && b.subjects.join(' ').toLowerCase().indexOf('-- '+this.bookCategory.toLowerCase())>=0

		})

		this.books=this.books.concat(books)

		this.booksReady = true;

	},err=>{

	})
}

 onScrollDown() {
    console.log('scrolled down!!');
  }
 
  onScrollUp() {
    console.log('scrolled up!!');
  }

  back(){

  	
    let link = ['/'];
    this.router.navigate(link);
  

  }

}
