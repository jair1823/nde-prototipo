import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-crud',
  templateUrl: './galery-crud.component.html',
  styleUrls: ['./galery-crud.component.css']
})
export class GaleryCrudComponent implements OnInit {

  imgPath: any;
  imgURL: any;
  message: string;

  imgs: any[];

  constructor() { }

  ngOnInit() {
    this.imgs = [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/The_Woodlands_College_Park_Front_Image.jpg'
      },
      {
        url: 'https://static.iris.net.co/semana/upload/images/2019/5/24/616850_1.jpg'
      },
      {
        url: 'https://balneaguaformacion.com/wp-content/uploads/2014/03/Mantenimiento-piscinas1.jpg'
      },
      {
        url: 'https://cdn.ultraplay.com/uploads/products/uPLAY-006-P_MaddiesChase_Houston_TX_0767.jpg'
      }
    ]
  }
  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      this.imgURL = null;
      return;
    }

    var reader = new FileReader();
    this.imgPath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
