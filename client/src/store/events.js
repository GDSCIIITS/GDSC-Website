import { createSlice } from "@reduxjs/toolkit";

const initialEvents = {
  upComingEvents: [],
  pastEvents: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState: initialEvents,
  reducers: {
    addEvents(state, action) {
      state.pastEvents = action.payload.filter(item => item.status === 'Completed')
      state.upComingEvents = action.payload.filter(item => item.status === 'Not started' || item.status === 'Going on')
    }
  },
});

export const eventActions = eventSlice.actions;

export default eventSlice.reducer;








































export const upcomingEvents = [
  // {
  //   title: "Introduction Session for UG-1",
  //   date: "05-01-2022",
  //   time: "7PM",
  //   venue: "Online",
  //   speakers: ["Kush Gupta", "Abhay Ray"],
  //   status: 'upcoming'
  // },
];

export const pastEvents = [
  {
    title: "Android Campaign",
    date: "27-12-2021",
    time: "7PM",
    venue: "Online",
    speakers: [
      "Mahaboob Shaik",
      "Aswani Kumar",
      "Kaushik Rishi",
      "Abhinay Bathina",
      "Surya Teja",
    ],
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-indian-institute-of-information-technology-sri-city-presents-introduction-to-android-app-development-using-kotlin/',
    status: 'past'
  },
  {
    title: "Introduction Session",
    date: "29-09-2021",
    time: "7PM",
    venue: "Online",
    speakers: ["Siddharth Pandey"],
    link: 'https://gdsc.community.dev/events/details/developer-student-clubs-indian-institute-of-information-technology-sri-city-presents-introductory-session/',
    status: 'past'
  },
];

