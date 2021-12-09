import React from 'react'
import './Currency.css'
import { deleteCurrencyFetch } from '../actions/exchangeActions'
import { connect } from 'react-redux'

export class CurrencyAdminDelete extends React.Component {

    handleDeleteSubmit = event => {
        event.preventDefault()
        const currencyObject = {
            name: this.props.currency.name,
            id: this.props.currency.id
        }
        this.props.deleteCurrencyFetch(currencyObject)
    }

    render() {
        const {id, name, c_type, settlement_date, tenor, price, exchange_id, created_at, exchange} = this.props.currency
        return (
            <div id="commodity" className="row" onClick={this.handleDeleteSubmit}>
                {/* <div className="row__image">
                    <img key={id} src={image} alt={name} height={40}/>
                </div> */}
                <div className="row__intro">
                    <h1>{name}</h1>
                </div>
                <div className="row__mini_chart">
                <p className="row_percentage">{exchange.name}</p>
                </div>
                <div className="row__numbers">
                    <p className="row__price">${price}</p>
                    <p className="row_percentage">{c_type}</p>
                </div> 
            </div>
        ) 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCurrencyFetch: (currencyInfo) => dispatch(deleteCurrencyFetch(currencyInfo))
    }
}

export default connect(null, mapDispatchToProps)(CurrencyAdminDelete)
