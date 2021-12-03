export const fetchExchanges = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_EXCHANGES'})
        fetch('http://localhost:3001/exchanges')
        .then(response => {
            return response.json()
        })
        .then(responseJSON => {
            dispatch({ type: 'ADD_EXCHANGES', exchanges: responseJSON})
        })
    }
}

export const createExchange = exchangeObj => {
    return {
        type: 'CREATE_EXCHANGE',
        payload: exchangeObj
    }
}

export function createExchangeFetch(exchangeInfo){
    return dispatch => fetch(`http://localhost:3001/exchanges`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(exchangeInfo) 
    })
    .then(r=>r.json())
    .then(data=>{
        if(data.error){
            alert(data.error)
        } else {
            let exchange_json = JSON.parse(data.exchanges)
            dispatch(createExchange(exchange_json))
        }
    })
}

export const createCommodity = commodityObj => {
    return {
        type: 'CREATE_COMMODITY',
        payload: commodityObj
    }
}

export function createCommodityFetch(commodityInfo){
    return dispatch => fetch(`http://localhost:3001/commodities`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(commodityInfo) 
    })
    .then(r=>r.json())
    .then(data=>{
        if(data.error){
            alert(data.error)
        } else {
            let commodity_json = JSON.parse(data.exchanges)
            dispatch(createCommodity(commodity_json))
        }
    })
}

export const createCurrency = currencyObj => {
    return {
        type: 'CREATE_CURRENCY',
        payload: currencyObj
    }
}

export function createCurrencyFetch(currencyInfo){
    return dispatch => fetch(`http://localhost:3001/currencies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(currencyInfo) 
    })
    .then(r=>r.json())
    .then(data=>{
        if(data.error){
            alert(data.error)
        } else {
            let currency_json = JSON.parse(data.exchanges)
            dispatch(createCurrency(currency_json))
        }
    })
}

export const deleteExchange = exchangeObj => {
    return {
        type: 'DELETE_EXCHANGE',
        payload: exchangeObj
    }
}

export function deleteExchangeFetch(exchangeInfo){
    return dispatch => fetch(`http://localhost:3001/exchanges/special_delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(exchangeInfo) 
    })
    .then(r=>r.json())
    .then(data=>{
        if(data.error){
            alert(data.error)
        } else {
            let exchange_json = JSON.parse(data.exchanges)
            dispatch(deleteExchange(exchange_json))
        }
    })
}

