import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-new',
  templateUrl: './group-new.component.html',
  styleUrls: ['./group-new.component.css']
})
export class GroupNewComponent implements OnInit {

  aviso: any = {
    title: 'titulo noticia',
    author: 'nombre del profesor',
    id_author: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quis doloribus doloremque omnis incidunt eius! Laborum quia iste minus dignissimos voluptatem perspiciatis, consequuntur animi soluta, nostrum eligendi quaerat pariatur suscipit!",
    date: '2 de septiembre del 2019'

  }

  constructor() { }

  ngOnInit() {
  }

}
