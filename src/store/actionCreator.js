export const CREATE_STOPWATCH = 'CREATE_STOPWATCH'
export const CLOSE_WINDOW = 'CLOSE_WINDOW'

export const createStopWatch = (payload) => {
    return {
        type: CREATE_STOPWATCH,
        payload
    }
}

export const closeWindow = (payload) => {
    return {
        type: CLOSE_WINDOW,
        payload
    }
}