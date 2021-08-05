import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface LearningEntity {
  id: string;
  topic: string;
  competency: string;
  notes?: string;
}

export interface LearningState extends EntityState<LearningEntity> {

}

export const adapter = createEntityAdapter<LearningEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: LearningState = initialState, action: Action): LearningState {
  return reducerFunction(state, action);
}
