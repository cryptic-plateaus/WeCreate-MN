import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga
function* getAllOpportuntiesSaga() {
  try {
    const response = yield axios.get("/api/opportunities/");  
    yield put({ type: "SET_ALL_OPPORTUNITIES", payload: response.data });
    console.log('test console:', response.data);
  } catch (error) {
    console.log("Error with Get:", error);
  }
}

function* allOpportuntiesSaga() {
    yield takeLatest("FETCH_ALL_OPPORTUNITIES", getAllOpportuntiesSaga); //kind of root saga
}

export default allOpportuntiesSaga;
