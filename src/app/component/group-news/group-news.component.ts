import { Component, OnInit } from '@angular/core';
import { SpecificNew } from 'src/app/models/specific-new';

@Component({
  selector: 'app-group-news',
  templateUrl: './group-news.component.html',
  styleUrls: ['./group-news.component.css']
})
export class GroupNewsComponent implements OnInit {

  profesor: string = "profesor";

  news: SpecificNew[] = [

    {
      title: 'Se suspende clases para el 12 de Septiembre.',
      author: 'Ana Vargas Vargas',
      description: "Por motivos de incapacidad los estudiantes no tendran clases.",
      date: '9 de septiembre del 2019',
      section: '1-1',
      img: 'https://2.bp.blogspot.com/-yf16cM8g1h8/WRJOUvNQpEI/AAAAAAAAA1g/ve_c0lu62GgIzACs7IyU55kK46oGsFtTQCLcB/s1600/latam_nohayclases-1.jpg'
    },
    {
      title: 'Reunión de padres',
      author: 'Ana Vargas Vargas',
      description: "La reunión ser será el próximo lunes 16 de septiembre.",
      date: '5 de septiembre del 2019',
      section: '1-1',
      img: 'http://www.cadenamaxima.com.ar/cadmawp/wp-content/uploads/2019/04/2019-04-04_16-34-28_463984-columna-de-educacion-la-importancia-de-la-primer-reunion-de-padres-del-ano-768x400.jpg'
    },
    {
      title: 'aviso 3',
      author: 'en espera',
      description: "en espera",
      date: 'en espera',
      section: 'en espera',
      img: 'http://www.cadenamaxima.com.ar/cadmawp/wp-content/uploads/2019/04/2019-04-04_16-34-28_463984-columna-de-educacion-la-importancia-de-la-primer-reunion-de-padres-del-ano-768x400.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  foo() {
    this.profesor = "juan"
  }

}
