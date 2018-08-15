import { Component, OnInit } from '@angular/core';

import { CategoryCardComponent } from '../category-card/category-card.component'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public data:any;

  constructor() { 

  	this.data = ["FICTION","DRAMA", "HUMOR", "POLITICS","PHILOSOPHY", "HISTORY", "ADVANTURE"]


      document.body.style.backgroundColor = "#7700EA";

  }

  ngOnInit() {
  }

  

}
