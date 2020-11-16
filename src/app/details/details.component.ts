import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../classes/Person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() activeUser: Person;

  constructor() { }

  ngOnInit() {
    let defaultUser = new Person();
    defaultUser.name= "No user is selected"
    this.activeUser = defaultUser;
  }

}
