

export const increment = (step) => ({
    type: 'incrementType',
    payload:step   
})
export const decrement = (step) => ({
    type: 'decrementType',
    payload:step
})

export const getEvents = (events) => ({
    type: 'getevents',
    payload : events
})

export const addEvent = (item) => ({
    type: 'addevent',
    payload: item
})

export const updateEvent = (item) => ({
    type: 'updateevent',
    payload: item
})

export const deleteEvent = (id) => ({
    type: 'deleteevent',
    payload : id
})