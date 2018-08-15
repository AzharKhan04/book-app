import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
declare var require: any

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

@Input() data: any;

public arrowicon = require('../ic_right_arrow.png')


  constructor(private router: Router) { 

  console.log(this.data)

  }

  ngOnInit() {
  }

  navigate(d){

    let link = ['/book',d];
    this.router.navigate(link);
  

  }

}
