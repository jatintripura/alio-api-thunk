import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice";
import postReducer from "../features/posts/postsSlice";
const store = configureStore({
  reducer: {
    counters: countersReducer,
    posts: postReducer,
  },
});
export default store;
