import axios from "axios";

export const getEvents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      return response.data;
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};

export const sendEvent = (data) => {
  return async (dispatch) => {
    try {
      const body = { ...data };
      const response = await axios.post(
        "http://localhost:5000/api/events",
        body
      );
      return response;
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};

export const getSpeakers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/speakers");
      return response.data;
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};

export const sendSpeaker = (photo, data) => {
  return async (dispatch) => {
    try {
      const response1 = await axios.post(
        "https://api.cloudinary.com/v1_1/gdsc-iiits/image/upload",
        photo
      );
      const body = {
        ...data,
        photo: response1.data.url,
      };
      const response2 = await axios.post(
        "http://localhost:5000/api/speakers",
        body
      );
      return {body: body, payload: response2.data};
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};
