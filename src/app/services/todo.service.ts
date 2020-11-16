import { Injectable } from '@angular/core';
import { ToDo } from '../classes/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: ToDo[] = [];

  constructor() { }

  addtoDo(newElement: ToDo){
    console.log("We are going to add to this list: " +this.todos);
    console.log("This Item: " + newElement);
    this.todos.push(newElement);
    return this.todos
  }

  deletetoDo(index: number){
    this.todos.splice(index,1);
    return this.todos
  }

}
