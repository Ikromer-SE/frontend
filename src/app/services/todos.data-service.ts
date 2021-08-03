import { BehaviorSubject, Observable } from "rxjs";
import { ToDoItemModel } from "../models/todo.models";

export class TodosDataService {

  private items: ToDoItemModel[] = [
    {
      id: '1',
      description: 'Make an API'
    },
    {
      id: '2',
      description: 'Update this Service to use the API'
    }
  ];

  private subject = new BehaviorSubject<ToDoItemModel[]>(this.items);

  getTodoItems(): Observable<ToDoItemModel[]> {
    return this.subject.asObservable();
  }

  add(description: string): void {
    //call the API
    const newItem: ToDoItemModel = { id: '99', description };
    this.items = [newItem, ...this.items];
    this.subject.next(this.items);
  }
}
