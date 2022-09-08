import { PostConstant } from "../constants";
const initialState = {
    payload: "",
    type: '',
    error: ""
}

export default function authReducers(state = initialState, action) {
    switch (action.type) {
            case PostConstant.GETTOTALSUCCESS:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
            case PostConstant.GETTOTALTFAIL:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };

        default:
            return state
    }
}