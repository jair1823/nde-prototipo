import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {


  mapForm: FormGroup;

  description: string;

  contactInformation: any = {
    phone1: '2525-3654',
    phone2: '7525-3654',
    email: 'escuelarepublicadominicana@yahoo.es'
  }

  /* esto es para dar la ubicación exacta de la escuela*/
  lat: Number = 9.911337;
  lng: Number = -84.056983;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.description = "La escuela es una de las instituciones más importantes en la vida de una persona, quizás también una de las primordiales luego de la familia, ya que en la actualidad se supone que el niño se integra a ella desde sus años tempranos para finalizarla normalmente cerca de su adultez. Si bien puede haber variantes en sus denominaciones, la escuela primaria y secundaria es la base de la educación de cualquier individuo.\n\nSi bien puede haber variantes en sus denominaciones, la escuela primaria y secundaria es la base de la educación de cualquier individuo."
    this.mapForm = this.formBuilder.group({
      lati: [this.lat],
      long: [this.lng]
    });
  }

  updateMap() {
    console.log(this.mapForm.value);
    this.lat = this.mapForm.value.lati;
    this.lng = this.mapForm.value.long;
  }

}
