import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";
import TabSelectorSlice from "./slices/TabSelectorSlice";

const store = configureStore({ reducer: { Todo: TodoSlice,Tab:TabSelectorSlice } });
export default store;

//for typescript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
