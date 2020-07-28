import axios from "axios";

// Action for adding jobs
export const addJob = (userData) => (dispatch) => {

    axios
        .post("http://localhost:5000/addjob", userData)
        .then((res) => {
            dispatch({
                type: "JOB_ADD",
            });
        })
        .catch((err) => {
            console.log(err);
        });

};

// Getting job details
export const getJobDetails = () => (dispatch) => {

    // fetching the list of jobs
    axios
        .get("http://localhost:5000/getJobDetails")
        .then((res) => {
            dispatch({
                type: "JOB_DETAILS",
                payload: res
            });
        })
        .catch((err) => {
            console.log(err);
        });

};
