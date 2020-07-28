import { GET_STUDENTS_DATA, SET_STUDENTS_LOADING } from "../actions/types";

const initialState = {
  isLoading: false,
  students: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS_DATA:
      return {
        ...state,
        isLoading: false,
        students: action.payload
      };
    case "ADD_JOB":
      return {
        ...state
      }
    case "JOB_DETAILS":
      return {
        ...state,
        jobs: action.payload
      }
    case SET_STUDENTS_LOADING:
      return {
        ...state,
        isLoading: true,
        students: null
      }
    case "GET_LEADERBOARD":
      console.log("IN lEader")
      return {
        ...state,
        leader: action.payload
      }
    default:
      return state;
  }
}
