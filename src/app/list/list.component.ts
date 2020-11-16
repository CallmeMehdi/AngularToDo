import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../classes/Person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() redirect = new EventEmitter <Person>();


  resend(newItem: Person){
    this.redirect.emit(newItem);
    console.log("Executed resend!")
  }

  users : Person[]
  constructor() {
    this.users = []
    let person1 = new Person();
    person1.name = "Mehdi Mabrouki"
    person1.image = "../../assets/pdp1.jpg"
    person1.description = "Software Engineering student"
    let person2 = new Person();
    person2.name = "Aymen Sellaouti"
    person2.image = "../../assets/pdp2.jpg"
    person2.description = "Teacher"
    this.users.push(person1);
    this.users.push(person2);
  }


  ngOnInit() {
    console.log(this.users);
  }
  
}
