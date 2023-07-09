import { combineReducers, configureStore, createSelector } from '@reduxjs/toolkit';
import { todoSlice } from './todo';
import { filtersSlice, VisibilityFilters } from './filter';

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  filter: filtersSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      immutableCheck: false,
    }),
  ],
});
export type RootDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export const selectTodos = (state: RootState) => state.todo;
export const selectFilter = (state: RootState) => state.filter;

export const selectVisibleTodos = createSelector([selectTodos, selectFilter], (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.ALL:
      return todos.todoList;
    case VisibilityFilters.ACTIVE:
      return todos.todoList.filter(x => !x.done);
    case VisibilityFilters.COMPLETED:
      return todos.todoList.filter(x => x.done);
    default:
      throw new Error(`unknown filters: ${filter}`);
  }
});

export const selectRemainingCount = createSelector(selectVisibleTodos, todos => todos.length);
