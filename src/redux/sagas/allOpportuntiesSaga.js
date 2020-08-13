import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga
function* getAllOpportuntiesSaga() {
  try {
    const response = yield axios.get("/api/opportunities/");  
    yield put({ type: "SET_ALL_OPPORTUNITIES", payload: response.data });
    // console.log('test console:',response.data);
  } catch (error) {
    console.log("Error with Get:", error);
  }
}

function* getAllUserOpportuntiesSaga(action) {
  try {
    const response = yield axios.get(`/api/opportunities/user_opps/${action.payload}`);
    yield put({ type: "SET_ALL_USER_OPPORTUNITIES", payload: response.data });
    // console.log('test console:',response.data);
  } catch (error) {
    console.log("Error with Get:", error);
  }
}

 //root Saga
function* allOpportuntiesSaga() {
    yield takeLatest("FETCH_ALL_OPPORTUNITIES", getAllOpportuntiesSaga);//Gets all opps for job board
    yield takeLatest("FETCH_ALL_USER_OPPORTUNITIES", getAllUserOpportuntiesSaga);//Gets all opps for Employer User
  }

export default allOpportuntiesSaga;
