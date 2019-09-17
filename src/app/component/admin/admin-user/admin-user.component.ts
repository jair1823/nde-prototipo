import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ExecutiveInfo } from 'src/app/models/executive-info';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  imgPath: any;
  imgURL: any;
  message: string;
  validaImg: boolean = false;

  createForm: FormGroup;
  submitted: boolean = false;


  executive: ExecutiveInfo = {
    name: 'Nombre',
    description: 'descripcion',
    email: 'ejemplo@gmail.com',
    photo: ''
  };
  constructor(private formBuilder: FormBuilder, private router:Router) { }


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
      //email: ['', [Validators.required, Validators.email]],
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
      this.executive.photo = this.imgURL;
      this.validaImg = false;
      return;
    }

    var reader = new FileReader();
    this.imgPath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.executive.photo = this.imgURL;
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
      this.router.navigate(['admin/executive-crud']);
      /**
       * enviar
       */
    }
  }

}
