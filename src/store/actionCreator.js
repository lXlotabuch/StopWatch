export const CREATE_STOPWATCH = 'CREATE_STOPWATCH'

export const createStopWatch = (payload) => {
    return {
        type: CREATE_STOPWATCH,
        payload
    }
}