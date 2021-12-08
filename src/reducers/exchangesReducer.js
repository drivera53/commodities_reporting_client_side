const exchangesReducer = (state = {
    exchanges: [],
    commodities: [],
    currencies: [],
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
        case 'LOADING_COMMODITIES':
            return {
                ...state,
                commodities: [...state.commodities],
                loading: true
            }
        case 'ADD_COMMODITIES':
            return {
                ...state,
                commodities: action.commodities,
                loading: false
            }
        case 'LOADING_CURRENCIES':
            return {
                ...state,
                currencies: [...state.currencies],
                loading: true
            }
        case 'ADD_CURRENCIES':
            return {
                ...state,
                currencies: action.currencies,
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