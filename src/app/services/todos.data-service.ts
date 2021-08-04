import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ToDoItemModel } from "../models/todo.models";
import { environment } from '../../environments/environment';
import { map, subscribeOn, tap } from "rxjs/operators";

@Injectable()
export class TodosDataService {

  private items: ToDoItemModel[] = [];

  readonly baseUrl = environment.apiUrl + '/todos';

  private subject = new BehaviorSubject<ToDoItemModel[]>(this.items);

  constructor(private client: HttpClient) {

    console.log("about to get the data")

    client.get<{ data: ToDoItemModel[] }>(this.baseUrl)
      .pipe(
        map(response => response.data), // {data: TodoItem[]} => TodoItem[]}
        tap(items => this.items = items),
        tap(() => this.subject.next(this.items)),
        tap(() => console.log('Got the data!'))
      ).subscribe();
  }

  getTodoItems(): Observable<ToDoItemModel[]> {
    return this.subject.asObservable();
  }

  add(description: string): void {
    //call the API
    this.client.post<ToDoItemModel>(this.baseUrl, { description })
      .pipe(
        tap(todoItem => {
          this.items = [todoItem, ...this.items];
          this.subject.next(this.items);
        })
      ).subscribe();
  }
}
