import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./DarkThemeReducer";
import eventReducer from "./events";

const store = configureStore({
  reducer: { DarkMode: darkModeReducer, activity: eventReducer },
});

export default store;
