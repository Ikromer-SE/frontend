import { Component, OnInit } from '@angular/core';
import { ToDoItemModel } from 'src/app/models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: ToDoItemModel[] = [
    { description: 'Buy Twinkies' },
    { description: 'Clean Mom\'s Car' }
  ]

  constructor() { }

  ngOnInit(): void { }

  addToList(description: string) {
    this.items = [{ description }, ...this.items];
  }

}
