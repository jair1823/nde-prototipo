import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {

  /* esto es para dar la ubicación exacta de la escuela*/
  lat = 9.911337;
  lng = -84.056983;
  constructor() { }

  ngOnInit() {
  }

}
