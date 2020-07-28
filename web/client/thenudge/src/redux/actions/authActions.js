import { SET_USER_DATA } from "./types";
import axios from "axios";


//Action for logging user in
export const loginUser = (userData, userType, history) => (dispatch) => {

  if (userType === "admin") {
    axios
      .post("http://localhost:5000/adminlogin", userData)
      .then((res) => {
        dispatch({
          type: SET_USER_DATA,
          payload: res.data.role,
          data: res.data
        });
        history.push('/admin-dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (userType === "student") {
    console.log('af');
    axios
      .post("http://localhost:5000/studentlogin", userData)
      .then((res) => {
        dispatch({
          type: SET_USER_DATA,
          payload: res.data.role,
          data: res.data
        });
        history.push('/schedule');
      })
      .catch((err) => {
        console.log(err);
      });

  }
  if (userType === "teacher") {

    axios
      .post("http://localhost:5000/teacherlogin", userData)
      .then((res) => {
        dispatch({
          type: SET_USER_DATA,
          payload: res.data.role,
        });
        history.push('/teacherprofile');
      })
      .catch((err) => {
        console.log(err);
      });

  }
}

// Action for registering user
export const registerStudent = (studentData, history) => (dispatch) => {

  // Posting the user data for registration
  axios.post('http://localhost:5000/studentsignup', studentData)
    .then(res => {
      history.push('/login');
    })
    .catch(err => {
      console.log(err);
    })

}

// Logout action
export const logout = () => dispatch => {
  dispatch({
    type: "LOGOUT"
  });
}