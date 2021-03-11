import { CLOSE_WINDOW, CREATE_STOPWATCH } from "./actionCreator";

const initialState = {
    stopwatchs: []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CREATE_STOPWATCH:
        return {
            ...state,
            stopwatchs: [{ id: Math.floor(Math.random()*10000),...payload}, ...state.stopwatchs]
        }
        case CLOSE_WINDOW:
            return {
                ...state,
                stopwatchs: state.stopwatchs.map((el) => (el.id === payload.id)
                ? 
                ({
                    ...el, 
                    closeWindow: Date.now(),
                    timer: payload.timer
                })
                :
                el)
            }
        default:
            return state
    }
}