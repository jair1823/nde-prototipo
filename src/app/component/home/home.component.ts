import { Component, OnInit } from '@angular/core';
import { GeneralNew } from 'src/app/models/general-new';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: GeneralNew[];

  constructor() { }

  ngOnInit() {
    this.news = [
      {
        title: "Gran Bingo Familiar",
        author: "author",
        description: "Este 13 de septiembre acérquese a nuestras instalaciones con sus pequeños y disfrute de esta noche ya que tendremos muchos premios.",
        imagen: "http://4.bp.blogspot.com/-eFPm-A1hGl4/VhlPJVz49gI/AAAAAAAAFQo/i_rKC-1xjM0/s1600/tarde-de-bingo-galerias-vallarta.png",
        date: "date"
      },
      {
        title: "PENDIENTE",
        author: "author",
        description: "...",
        imagen: "http://4.bp.blogspot.com/-eFPm-A1hGl4/VhlPJVz49gI/AAAAAAAAFQo/i_rKC-1xjM0/s1600/tarde-de-bingo-galerias-vallarta.png",
        date: "date"
      }
    ];
  }

}
