import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga
function* getOrgInfoSaga(action) {
  try {
    const response = yield axios.get(`/api/orgInfo/${action.payload}`);  
    yield put({ type: "SET_ORG_INFO", payload: response.data}); //Check response.data
  } catch (error) {
    console.log("Error with GET Org Info:", error);
  }
}

 //root Saga
function* orgInfoSaga() {
  yield takeLatest("FETCH_ORGANIZATION_DETAILS", getOrgInfoSaga);
}

export default orgInfoSaga;
