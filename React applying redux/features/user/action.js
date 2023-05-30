import axios from "axios";
import * as types from "./actionType";

const getdata = (users) => ({
  type: types.GET_USER,
  payload: users,
});

const get_singledata = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
})

export const getuserdata = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3000/user");
      console.log(res);
      dispatch(getdata(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const adddata = (data) => {
  return async function () {
    try {
      const response = await axios.post("http://localhost:3000/user", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatedata = (id,data) => {
    return async function (dispatch) {
        try {
          const response = await axios.patch(`http://localhost:3000/user/${id}`,data);
          console.log(response);
          dispatch(getuserdata());
        } catch (error) {
          console.log(error);
        }
      };
};

export const deletedata = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`http://localhost:3000/user/${id}`);
      console.log(response);
      dispatch(getuserdata());
    } catch (error) {
      console.log(error);
    }
  };
};

export const getsingledata = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3000/user/${id}`);
      console.log(res);
      dispatch(get_singledata(res.data))
    } catch (error) {
      console.log(error);
    }
  };
};
