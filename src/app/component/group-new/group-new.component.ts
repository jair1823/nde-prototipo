import { Component, OnInit, Input } from '@angular/core';
import { SpecificNew } from 'src/app/models/specific-new';

@Component({
  selector: 'app-group-new',
  templateUrl: './group-new.component.html',
  styleUrls: ['./group-new.component.css']
})
export class GroupNewComponent implements OnInit {

  @Input() new: SpecificNew;
  
  constructor() { }

  ngOnInit() {
  }

}
