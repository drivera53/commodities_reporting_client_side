import React from 'react'
import './Currency.css'
import { deleteExchangeFetch } from '../actions/exchangeActions'
import { connect } from 'react-redux'

export class ExchangeAdminDelete extends React.Component {
    
    handleDeleteSubmit = event => {
        event.preventDefault()
        const exchangeObject = {
            name: this.props.exchange.name,
            id: this.props.exchange.id
        }
        this.props.deleteExchangeFetch(exchangeObject)
    }

    render() {
        const {id, name} = this.props.exchange
        return (
            <div id="commodity" className="row" onClick={this.handleDeleteSubmit}>
                <div className="row__intro">
                    <h1>{name}</h1>
                </div>
            </div>
        ) 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteExchangeFetch: (exchangeInfo) => dispatch(deleteExchangeFetch(exchangeInfo))
    }
}

export default connect(null, mapDispatchToProps)(ExchangeAdminDelete)