import { Component, OnInit } from '@angular/core';
import { ProfessorInfo } from 'src/app/models/professor-info';

@Component({
  selector: 'app-teacher-staff',
  templateUrl: './teacher-staff.component.html',
  styleUrls: ['./teacher-staff.component.css']
})
export class TeacherStaffComponent implements OnInit {

  professors: ProfessorInfo[];

  constructor() { }

  ngOnInit() {
    this.professors = [
      {
        name: "Roberto Quesada Alvarado",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus quia porro non ratione",
        email: "ejemplo@email.com",
        photo: "http://buscarempleo.republica.com/files/2012/05/Saca-el-mayor-partido-a-tus-fotograf%C3%ADas-para-el-curr%C3%ADculum-vitae.jpg"
      },
      {
        name: "Aurora Escalante Gómez",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus quia porro non ratione",
        email: "ejemplo@email.com",
        photo: "https://hannajaff.com/wp-content/uploads/2013/03/foto-para-CV-229x300.jpg"
      },
      {
        name: "Daniela Quesada Segura",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus quia porro non ratione",
        email: "ejemplo@email.com",
        photo: "http://www.slainte21.com/wp-content/uploads/2013/10/DSC_9781.jpg"
      },
      {
        name: "Luis Herrera López",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus quia porro non ratione",
        email: "ejemplo@email.com",
        photo: "https://www.planetacurioso.com/wp-content/uploads/2014/03/hacker-millonarios5.jpg"
      }
    ];
  }

}
