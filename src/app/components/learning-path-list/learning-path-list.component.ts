import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LearningListItem } from 'src/app/models/learning.models';
import { AppState, selectLearningListItems } from 'src/app/reducers';

@Component({
  selector: 'app-learning-path-list',
  templateUrl: './learning-path-list.component.html',
  styleUrls: ['./learning-path-list.component.css']
})

export class LearningPathListComponent implements OnInit {

  items$!: Observable<LearningListItem[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // TODO -select some data that returns a LearningListItem[]
    this.items$ = this.store.select(selectLearningListItems);
  }

}
