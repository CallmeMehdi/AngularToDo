import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToDo } from '../classes/ToDo';







@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  firstname: string;
  content: string;
  todos: ToDo[];

  add(firstname: string, content: string){
    console.log(firstname);
    console.log(content);
    let todo = new ToDo(firstname, content);
    this.todos = this.todoService.addtoDo(todo);
    this.firstname='';
    this.content='';
  }

  delete(index: number){
    this.todos = this.todoService.deletetoDo(index);
  }

  constructor(private todoService: TodoService) { 
  }

  ngOnInit() {
  }

}
