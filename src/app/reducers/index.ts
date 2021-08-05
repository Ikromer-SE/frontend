import * as fromCounter from './counter.reducer';
import * as fromLearning from './learning.reducer';



export interface AppState {
  counter: fromCounter.CounterState,
  learning: fromLearning.LearningState
}



export const reducers = {
  counter: fromCounter.reducer,
  learning: fromLearning.reducer
}



// selector functions



export const selectCounterCurrent = (state: AppState) => state.counter.current;
