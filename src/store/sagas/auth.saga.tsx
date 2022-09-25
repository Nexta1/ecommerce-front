import { takeEvery } from '@redux-saga/core/effects'
import axios from 'axios'
import { SIGNUP, SignupAction } from '../actions/auth.actions'
function* handleSignup(action: SignupAction) {
  //    yield axios.post()
}

export default function* authSage() {
  yield takeEvery(SIGNUP, handleSignup)
}
