import {createStore} from 'redux'

const initialState = {
    count: 0
}

//store
const store = createStore((state = initialState, action) => {
    const increment = typeof action.incrementBy === "number" ? action.incrementBy : 1
    const decrement = typeof action.decrementBy === "number" ? action.decrementBy : 1
    
    switch (action.type){
        case "INCREMENT":
            return {
                count: state.count + increment
            }
        case "DECREMENT":
            return {
                count: state.count - decrement
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state
    }
})

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch( { type: "INCREMENT" , incrementBy: 3} )
store.dispatch( { type: "INCREMENT" , incrementBy: 3} )
store.dispatch( { type: "DECREMENT", decrementBy: 2} )
store.dispatch( { type: "RESET" } )