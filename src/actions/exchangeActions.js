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
