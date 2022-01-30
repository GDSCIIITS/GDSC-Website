import { createSlice } from "@reduxjs/toolkit";

const initialEvents = {
  upComingEvents: [],
  pastEvents: [],
  speakers: []
};

const eventSlice = createSlice({
  name: "events",
  initialState: initialEvents,
  reducers: {
    setEvents(state, action) {
      state.pastEvents = action.payload.filter(item => item.status === 'Completed')
      state.upComingEvents = action.payload.filter(item => item.status === 'Not started' || item.status === 'Going on')
    },
    setSpeakers(state, action) {
      state.speakers = action.payload
    },
    addSpeaker(state, action) {
      state.speakers = [...state.speakers, action.payload]      
    },
    addEvent(state, action) {
      if(action.payload.status === 'Completed') {
        state.pastEvents = [...state.pastEvents, action.payload]
      } else {
        state.upComingEvents = [...state.upComingEvents, action.payload]
      }
    }
  },
});

export const eventActions = eventSlice.actions;

export default eventSlice.reducer;