import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
    theme: false // Indicates that the dark mode is off. "true" indicates that the dark mode is on
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialTheme,
    reducers: {
        toggleTheme(state, actions) {
            state.theme = actions.payload
            localStorage.setItem("theme", actions.payload)
        }
    },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;