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
      return response.data;
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};

export const updateEvent = (data) => {
  return async (dispatch) => {
    try {
      const body = { ...data };
      const response = await axios.put(
        "http://localhost:5000/api/events",
        body
      );
      return { body: response.data.body, payload: response.data };
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};

export const deleteEvent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/events",
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: id,
          },
        }
      );
      return { message: "Deleted event", body: response };
    } catch (error) {
      console.log(error);
      return { message: "Failed to delete event" };
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
      let photoData = new FormData();
      photoData.append("file", photo);
      photoData.append("upload_preset", "gdsc-iiits-174");
      const response1 = await axios.post(
        "https://api.cloudinary.com/v1_1/gdsc-iiits/image/upload",
        photoData
      );
      const body = {
        ...data,
        photo: response1.data.url,
      };
      const response2 = await axios.post(
        "http://localhost:5000/api/speakers",
        body
      );
      return { body: body, payload: response2.data };
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};

export const updateSpeaker = (id, initPhoto, photo, data) => {
  return async (dispatch) => {
    try {
      let photoData = new FormData();
      photoData.append("file", photo);
      photoData.append("upload_preset", "gdsc-iiits-174");
      const response1 =
        photo !== ''
          ? await axios.post(
              "https://api.cloudinary.com/v1_1/gdsc-iiits/image/upload",
              photoData
            )
          : { data: { url: initPhoto } };
      console.log(response1);
      const body = {
        _id: id,
        ...data,
        photo: response1.data.url,
      };
      console.log(body);
      const response2 = await axios.put(
        "http://localhost:5000/api/speakers",
        body
      );
      return { body: body, payload: response2.data };
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};

export const deleteSpeaker = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/speakers",
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: id,
          },
        }
      );
      return { message: "Deleted speaker", body: response };
    } catch (error) {
      console.log(error);
      return { message: "Failed to delete speaker" };
    }
  };
};

export const signin = (body) => {
  return async (dispatch) => {
    try {
      
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        body
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return "failure";
    }
  };
};
