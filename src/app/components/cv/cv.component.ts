import { Component, OnInit, NgModule } from '@angular/core';
import { Person } from '../../classes/Person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})



export class CvComponent implements OnInit {

  activeUser: Person;

  constructor() { }

  ngOnInit() {
  }

  updateDetails(newUser: Person){
    this.activeUser = newUser;
  }
}
