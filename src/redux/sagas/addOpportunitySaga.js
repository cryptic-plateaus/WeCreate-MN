import { takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga
function* submitOpportunitySaga(action) {
  try {
    yield axios.post("/api/opportunities/", action.payload);
  } catch (error) {
    console.log("Error with Post:", error);
  }
}

//root saga
function* addOpportunitySaga() {
  yield takeLatest("SUBMIT_OPPORTUNITY", submitOpportunitySaga); 
}

export default addOpportunitySaga;
