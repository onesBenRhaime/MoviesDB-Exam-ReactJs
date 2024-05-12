
const initialState = {
    events: [],
    error:''
}

export const eventReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'getevents': return { ...state, events: action.payload }
        case 'addevent': {
            console.log(state)
            const newEvents = state.events
            newEvents.push(action.payload)
            console.log(newEvents)
            return { ...state, events: newEvents }
        }
        case 'updateevent': {
            const index = state.events.indexOf(action.payload)
            if (index != -1) {
                const newEvents = state.events
                newEvents[index] = action.payload
                return {...state,events:newEvents}
            }
            return state
        }
        case 'deleteevent': {
            const newEvents = state.events.filter((e) => e.id !== action.payload)
            return {...state,events:newEvents}
        }
        default : return state
    }
}