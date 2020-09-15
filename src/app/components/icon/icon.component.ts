import { Component, OnInit, Input } from '@angular/core';
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons" // these are icons for pen 
import {faCircle} from "@fortawesome/free-regular-svg-icons" ;  // this is for o in game

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
// here we need to paste these icons in the variables so we can use....use the same names in import

  @Input()
  iconName: string;

  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  constructor() { }

  ngOnInit() {
  }

}
