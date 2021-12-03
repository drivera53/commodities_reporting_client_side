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
        case 'CREATE_EXCHANGE':
            return {
                ...state,
                exchanges: action.payload,
                loading: false
            }
        case 'CREATE_COMMODITY':
            return {
                ...state,
                exchanges: action.payload,
                loading: false
            }
        case 'CREATE_CURRENCY':
            return {
                ...state,
                exchanges: action.payload,
                loading: false
            }
        case 'DELETE_EXCHANGE':
            return {
                ...state,
                exchanges: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default exchangesReducer