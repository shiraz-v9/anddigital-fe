import { configureStore } from "@reduxjs/toolkit";
import slice from "./state";

export const store = configureStore({
  reducer: { global: slice },
});
