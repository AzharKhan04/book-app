import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

	@Input() data : any;

  constructor() { }

  ngOnInit() {
  }

  read(data){

 	let dest = data.formats['text/html;charset=utf-8'] || data.formats['text/html']

 	console.log(dest)
  }

}
