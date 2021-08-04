import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter-actions'

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}

const counterReducer = createReducer(
  initialState,
  on(actions.countIncremented, (state, action) => ({ current: state.current + 1 })),
  on(actions.countDecremented, (state, action) => ({ current: state.current - 1 }))
)

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return counterReducer(state, action);
}
