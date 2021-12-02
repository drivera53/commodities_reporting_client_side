const exchangesReducer = (state = {
    exchanges: [],
    loading:false
}, action) => {
    switch(action.type) {
        case 'LOADING_EXCHANGES':
            return {
                ...state,
                exchanges: [...state.exchanges],
                loading: true
            }
        case 'ADD_EXCHANGES':
            return {
                ...state,
                exchanges: action.exchanges,
                loading: false
            }
        default:
            return state
    }
}

export default exchangesReducer