import { createAction } from "@ngrx/store";

export const countIncremented = createAction(
  '[app counter] counter incremented'
);

export const countDecremented = createAction(
  '[app counter] count decremented'
);
