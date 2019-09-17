import { Component, OnInit } from '@angular/core';
import { ExecutiveInfo } from 'src/app/models/executive-info';

@Component({
  selector: 'app-executive-crud',
  templateUrl: './executive-crud.component.html',
  styleUrls: ['./executive-crud.component.css']
})
export class ExecutiveCrudComponent implements OnInit {

  executives: ExecutiveInfo[];

  constructor() { }

  ngOnInit() {
    this.executives = [
      {
        name: "Marco Segura Matarrita",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntducimus quia porro non ratione",
        email: "ejemplo@email.com",
        photo: "https://pro2-bar-s3-cdn-cf4.myportfolio.com/3a227f4b9a8ebe035b7799961cc0c1e8/f26346e8-39cf-43bd-a8fd-cc4b4f20a99b_rw_1920.jpg?h=70be0465b99945d93718517e7636649c"
      },
      {
        name: "Elena Martínez Rojas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntducimus quia porro non ratione",
        email: "ejemplo@email.com",
        photo: "http://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg"
      },
      {
        name: "Eduardo Ramírez Piedra",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntducimus quia porro non ratione",
        email: "ejemplo@email.com",
        photo: "https://nadiazheng.com/wp-content/uploads/2017/01/Montreal-business-portrait-professional-accoutant-linkedin-profile.jpg"
      },
      {
        name: "Milena Brenes Astorga",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntducimus quia porro non ratione",
        email: "ejemplo@email.com",
        photo: "http://nadiazheng.com/wp-content/uploads/2015/12/Montreal-authentic-natural-professional-headshot.jpg"
      }
    ];
  }

}
