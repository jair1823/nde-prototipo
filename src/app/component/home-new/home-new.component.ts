import { Component, OnInit, Input } from '@angular/core';
import { GeneralNew } from 'src/app/models/general-new';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent implements OnInit {

  @Input() new: GeneralNew;

  constructor() { }

  ngOnInit() {
  }

}
