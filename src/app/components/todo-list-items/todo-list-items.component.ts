import { Component, OnInit } from '@angular/core';
import { ToDoItemModel } from 'src/app/models/todo.models';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent implements OnInit {
  items: ToDoItemModel[] = [
    { description: 'Mow Lawn' },
    { description: 'Empty Boxes from Garage' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
