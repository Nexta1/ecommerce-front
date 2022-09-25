import { SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from './../actions/auth.actions'
import { AuthUnionType } from '../actions/auth.actions'
export interface AuthState {
  signup: {
    loaded: boolean
    success: boolean
    message?: string
  }
}
const intialState: AuthState = {
  signup: {
    loaded: false,
    success: false,
  },
}
export default function authReducer(state: AuthState = intialState, action: AuthUnionType): AuthState {
  switch (action.type) {
    case SIGNUP: {
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
        },
      }
    }

    case SIGNUP_SUCCESS: {
      return {
        ...state,
        signup: {
          loaded: true,
          success: true,
        },
      }
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        signup: {
          loaded: true,
          success: false,
          message: action.message,
        },
      }
    }
  }
}
