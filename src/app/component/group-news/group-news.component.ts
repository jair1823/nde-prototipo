import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-news',
  templateUrl: './group-news.component.html',
  styleUrls: ['./group-news.component.css']
})
export class GroupNewsComponent implements OnInit {
  profesor: string = "profesor";
  constructor() { }

  ngOnInit() {
  }

  foo() {
    this.profesor = "juan"
  }

}
