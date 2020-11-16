import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../classes/Person';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  @Input() user : Person; 
  @Output() clicked = new EventEmitter <Person>();

  constructor() { }

  ngOnInit() {
  }
  sendToParent(){
    this.clicked.emit(this.user);
    console.log("Emitted successfully!")
  }
}

