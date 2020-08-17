import { takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga for user to submit (POST) new opportunity
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
    yield axios.delete(`/api/opportunities/user_opps/${action.payload.opp_id}`);
    yield put({ type: 'FETCH_ALL_USER_OPPORTUNITIES', payload: action.payload.org_id });
  } catch (error) {
    console.log(error);
  }
}

//root saga
function* userOpportunitiesSaga() {
  yield takeLatest("SUBMIT_OPPORTUNITY", submitOpportunitySaga);
  yield takeEvery('DELETE_USER_OPP_POST', deleteUserOpportunityPost);
}

export default userOpportunitiesSaga;
