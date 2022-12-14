export const SIGNUP = 'SIGNUP'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'

export interface SignupPayload {
  email: string
  name: string
  password: string
}

export interface SignupAction {
  type: typeof SIGNUP
  payload: SignupPayload
}

export interface SignUpSuccessAction {
  type: typeof SIGNUP_SUCCESS
}
export interface SignUpFailAction {
  type: typeof SIGNUP_FAIL
  message: string
}

export const signup = (payload: SignupPayload) => ({
  type: SIGNUP,
  payload,
})

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
})

export const signupFail = (message: string): SignUpFailAction => ({
  type: SIGNUP_FAIL,
  message,
})

export type AuthUnionType = SignupAction | SignUpSuccessAction | SignUpFailAction
