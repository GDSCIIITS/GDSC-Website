import axios from "axios";

export const getEvents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://gdsciiits-node.herokuapp.com/api/events");
      return response.data;
    } catch (error) {
      return "failure";
    }
  };
};

export const sendEvent = (data) => {
  return async (dispatch) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    try {
      const body = { ...data };
      const response = await axios.post(
        "https://gdsciiits-node.herokuapp.com/api/events",
        body,
        config
      );
      return response.data;
    } catch (error) {
      return { message: "Failure", payload: error.response.data };
    }
  };
};

export const updateEvent = (data) => {
  return async (dispatch) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    try {
      const body = { ...data };
      const response = await axios.put(
        "https://gdsciiits-node.herokuapp.com/api/events",
        body,
        config
      );
      return { body: response.data.body, payload: response.data };
    } catch (error) {
      return { message: "Failure", payload: error.response.data };
    }
  };
};

export const deleteEvent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete("https://gdsciiits-node.herokuapp.com/api/events", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        data: {
          id: id,
        },
      });
      return { message: "Deleted event", body: response };
    } catch (error) {
      return { message: "Failure", payload: error.response.data };
    }
  };
};

export const getSpeakers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://gdsciiits-node.herokuapp.com/api/speakers");
      return response.data;
    } catch (error) {
      return "failure";
    }
  };
};

export const sendSpeaker = (photo, data) => {
  return async (dispatch) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
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
        "https://gdsciiits-node.herokuapp.com/api/speakers",
        body,
        config
      );
      return { body: response2.data.payload, payload: response2.data };
    } catch (error) {
      return { message: "Failure", payload: error.response.data };
    }
  };
};

export const updateSpeaker = (id, initPhoto, photo, data) => {
  return async (dispatch) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    try {
      let photoData = new FormData();
      photoData.append("file", photo);
      photoData.append("upload_preset", "gdsc-iiits-174");
      const response1 =
        photo !== ""
          ? await axios.post(
              "https://api.cloudinary.com/v1_1/gdsc-iiits/image/upload",
              photoData
            )
          : { data: { url: initPhoto } };
      const body = {
        _id: id,
        ...data,
        photo: response1.data.url,
      };
      const response2 = await axios.put(
        "https://gdsciiits-node.herokuapp.com/api/speakers",
        body,
        config
      );
      return { body: body, payload: response2.data };
    } catch (error) {
      return { message: "Failure", payload: error.response.data };
    }
  };
};

export const deleteSpeaker = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        "https://gdsciiits-node.herokuapp.com/api/speakers",
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          data: {
            id: id,
          },
        }
      );
      return { message: "Deleted speaker", body: response };
    } catch (error) {
      return { message: "Failed to delete speaker" };
    }
  };
};

export const signin = (body) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://gdsciiits-node.herokuapp.com/api/auth/signin",
        body
      );
      return response.data;
    } catch (error) {
      return "failure";
    }
  };
};

export const pingAdmin = () => {
  return async (dispatch) => {
    let config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    try {
      const response = await axios.get(
        "https://gdsciiits-node.herokuapp.com/api/auth",
        config
      );
      return {
        message: "Validated admin successfully",
        payload: response.data,
      };
    } catch (error) {
      return { message: "Validation failed", payload: error.response.data };
    }
  };
};
