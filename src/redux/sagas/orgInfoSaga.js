import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: Getting Logged-in Employer Org Details
function* getOrgInfoSaga(action) {
  try {
    const response = yield axios.get(`/api/orgInfo/${action.payload}`);  
    yield put({ type: "SET_ORG_INFO", payload: response.data}); //Check response.data
  } catch (error) {
    console.log("Error with GET Org Info:", error);
  }
}

// worker Saga: Updating Logged-in Employer Org Details
function* changeOrgDetailsSaga(action) {
  try {
    yield axios.put("/api/orgInfo/", action.payload);
  } catch (err) {
    console.log("error", err);
  }
}

 //root Saga
function* orgInfoSaga() {
  yield takeLatest("FETCH_ORGANIZATION_DETAILS", getOrgInfoSaga);
  yield takeLatest("CHANGE_ORG_DETAILS", changeOrgDetailsSaga);
}

export default orgInfoSaga;
