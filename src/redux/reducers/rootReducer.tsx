import { combineReducers } from 'redux';
import { feelingReducer } from './feeling.reducer';

export const rootReducer = combineReducers({
  feeling: feelingReducer
});

export type RootState = ReturnType<typeof rootReducer>;