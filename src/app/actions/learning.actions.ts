import { createAction, props } from "@ngrx/store";
import { LearningItemCreate } from "../models/learning.models";
import { LearningEntity } from "../reducers/learning.reducer";

// "Initiator Command"
export const loadLearningData = createAction(
  '[app learning] load learning data'
);

// success
export const loadLearningDataSucceeded = createAction(
  '[app learning] load learning data succeeded',
  props<{ payload: LearningEntity[] }>()
);

// error
export const loadLearningDataFailed = createAction(
  '[app learning] load learning data failed',
  props<{ errorMessage: string }>()
);

// add learning item
export const learningItemCreated = createAction(
  '[app learning] learning itemcreated',
  props<{ payload: LearningItemCreate }>()
);


export const temporaryLearningItemCreated = createAction(
  '[app learning] temporary learning item created',
  props<{ payload: LearningEntity }>()
);

export const learningItemSaved = createAction(
  '[app learning] learning item saved',
  props<{ oldId: string, payload: LearningEntity }>()
);
