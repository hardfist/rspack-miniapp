import { createAsyncThunk, createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import delay from 'delay';

type LoadingStatus = 'loading' | 'succeeded' | 'failed';
export const fetchTodoList = createAsyncThunk('fetchTodo', async (params, thunk) => {
  await delay(3000);
  return [{ text: 'done!', id: nanoid(), done: true }];
});

export interface TodoItem {
  text: string;
  done: boolean;
  id: string;
}

const initialState = {
  todoList: [
    { text: 'Lynx', id: nanoid(), done: false },
    {
      text: 'Vue',
      id: nanoid(),
      done: false,
    },
    {
      text: 'React',
      id: nanoid(),
      done: false,
    },
  ] as TodoItem[],
  newTodo: '',
  status: 'succeeded' as LoadingStatus,
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addItem: {
      reducer(state, { payload }: PayloadAction<TodoItem>) {
        state.todoList.push(payload);
      },
      prepare(text: string) {
        return {
          payload: {
            text,
            id: nanoid(),
            done: false,
          },
        };
      },
    },
    changeInput(state, { payload: text }: PayloadAction<string>) {
      state.newTodo = text;
    },
    deleteItem(state, { payload: item }: PayloadAction<TodoItem>) {
      state.todoList = state.todoList.filter(x => x.id !== item.id);
    },
    toggleItem(state, { payload: item }: PayloadAction<TodoItem>) {
      state.todoList.forEach(x => {
        if (x.id === item.id) {
          x.done = !x.done;
        }
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodoList.fulfilled, (state, { payload: todosList }: PayloadAction<TodoItem[]>) => {
      state.todoList.concat(todosList);
      state.status = 'succeeded';
    });
    builder.addCase(fetchTodoList.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchTodoList.rejected, state => {
      state.status = 'failed';
    });
  },
});

export const todoActions = todoSlice.actions;
