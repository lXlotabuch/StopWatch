import { CREATE_STOPWATCH } from "./actionCreator";

const initialState = {
    stopwatchs: []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CREATE_STOPWATCH:
        return {
            ...state,
            stopwatchs: [...state.stopwatchs, payload]
        }
    
        default:
            return state
    }
}