import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './DarkThemeReducer'

const store = configureStore({
    reducer: { DarkMode: darkModeReducer},
});

export default store;