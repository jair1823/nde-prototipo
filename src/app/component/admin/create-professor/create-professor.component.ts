import { Component, OnInit } from '@angular/core';
import { ProfessorInfo } from 'src/app/models/professor-info';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.css']
})
export class CreateProfessorComponent implements OnInit {

  imgPath: any;
  imgURL: any;
  message: string;
  validaImg: boolean = false;

  createForm: FormGroup;
  submitted: boolean = false;


  professor: ProfessorInfo = {
    name: 'Nombre',
    description: 'descripcion',
    email: 'ejemplo@gmail.com',
    photo: ''
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.createForm = this.formBuilder.group({
      dni: ['', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(9),
        Validators.pattern('^[0-9]*$'),
      ]],
      name: ['', Validators.required],
      lastname1: ['', Validators.required],
      lastname2: ['', Validators.required],
      description: ['', [
        Validators.required,
        Validators.maxLength(200)
      ]],
      email: ['', [Validators.required, Validators.email]],
      photo: [null, Validators.required]
    });

  }

  get f() {
    return this.createForm.controls;
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      this.imgURL = null;
      this.professor.photo = this.imgURL;
      this.validaImg = false;
      return;
    }

    var reader = new FileReader();
    this.imgPath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.professor.photo = this.imgURL;
      this.validaImg = true;
    }
  }

  create() {
    this.submitted = true;
    if (this.createForm.invalid) {
      console.log('invalid');
      return;
    } else {
      alert('Creado');
      /**
       * enviar
       */
    }
  }
}
