import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemModel } from 'src/app/models/todo.models';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent implements OnInit {

  @Input() todoList: ToDoItemModel[] = [];

  constructor() { }

  ngOnInit(): void { }

}
