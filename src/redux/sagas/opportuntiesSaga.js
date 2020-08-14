import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga to retrieve (GET) ALL oportunities for job board (PUBLIC)
function* getAllOpportuntiesSaga() {
  try {
    const response = yield axios.get("/api/opportunities/");  
    yield put({ type: "SET_ALL_OPPORTUNITIES", payload: response.data });
    // console.log('test console:',response.data);
  } catch (error) {
    console.log("Error with Get:", error);
  }
}

//worker Saga to retrieve (GET) ALL oportunities for USER
function* getAllUserOpportuntiesSaga(action) {
  try {
    const response = yield axios.get(`/api/opportunities/user_opps/${action.payload}`);
    yield put({ type: "SET_ALL_USER_OPPORTUNITIES", payload: response.data });
    // console.log('test console:',response.data);
  } catch (error) {
    console.log("Error with Get:", error);
  }
}

// worker Saga for USER to submit (POST) new opportunity
function* submitOpportunitySaga(action) {
  try {
    yield axios.post("/api/opportunities/", action.payload);
  } catch (error) {
    console.log("Error with Post:", error);
  }
}

//worker Saga for user to remove (DELETE) an opportunity of theirs
function* deleteUserOpportunityPost(action) {
  try {
    yield axios.delete(`/api/opportunities/${action.payload}`);
    yield put({ type: "FETCH_ALL_USER_OPPORTUNITIES" });
  } catch (error) {
    console.log(error);
  }
}

 //root Saga
function* opportuntiesSaga() {
    yield takeLatest("FETCH_ALL_OPPORTUNITIES", getAllOpportuntiesSaga);//Gets all opps for job board
    yield takeLatest("FETCH_ALL_USER_OPPORTUNITIES", getAllUserOpportuntiesSaga);//Gets all opps for Employer User
    yield takeLatest("SUBMIT_OPPORTUNITY", submitOpportunitySaga);
  yield takeLatest('DELETE_USER_OPP_POST', deleteUserOpportunityPost);
  }

export default opportuntiesSaga;







