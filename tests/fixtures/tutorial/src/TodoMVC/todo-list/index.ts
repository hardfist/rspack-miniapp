/// <reference types="@byted-lynx/typings" /> #
/// <reference types="@byted-lynx/bdtypings" /> #

import { filterActions, VisibilityFilters } from '../store/filter';
import { store, selectVisibleTodos, RootState, selectRemainingCount } from '../store/root';
import { fetchTodoList, todoActions, TodoItem } from '../store/todo';

import { eventBus, TodoEvent } from '../utils/event-bus';

type EventHandler = 'onToggle' | 'onDelete';

// type EventHandler = `on${keyof typeof Event}`; wait for Typescript@4.1 support

function mergeData(state: RootState) {
  return {
    ...state,
    filterTodos: selectVisibleTodos(state),
    remainingCount: selectRemainingCount(state),
    filters: Object.keys(VisibilityFilters),
  };
}

Card({
  data: mergeData(store.getState()),
  onLoad: async function () {
    store.subscribe(() => {
      const newState = store.getState();
      const mergedData = mergeData(newState);
      this.setData(mergedData);
    });
    const { payload } = await store.dispatch(fetchTodoList());
    console.log('result:', payload);
  },
  onAdd(event: Lynx.LynxEvent) {
    store.dispatch(todoActions.addItem(this.data.todo.newTodo));
  },
  onToggle(item: TodoItem) {
    store.dispatch(todoActions.toggleItem(item));
  },
  onInput(event: Lynx.LynxEvent) {
    store.dispatch(todoActions.changeInput(event.currentTarget.detail.value));
  },
  onDelete(item: TodoItem) {
    store.dispatch(todoActions.deleteItem(item));
  },
  setFilter(event: Lynx.LynxEvent) {
    console.log('event:', event);
    const filter = event.currentTarget.dataset['key'] as VisibilityFilters;
    store.dispatch(filterActions.setVisibilityFilter(filter));
  },
  onReady() {
    for (const [key, value] of Object.entries(TodoEvent)) {
      eventBus.on(value, obj => {
        this[`on${key}` as EventHandler](obj);
      });
    }
  },
});
