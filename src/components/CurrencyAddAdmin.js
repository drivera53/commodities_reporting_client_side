import React from 'react'
import './Commodity.css'
import { createCurrencyFetch } from '../actions/exchangeActions'
import { connect } from 'react-redux'

import {
    Link
} from 'react-router-dom'

export class CurrencyAddAdmin extends React.Component {

    state = {
        name: "",
        c_type: "Spot",
        settlement_date: "",
        tenor: "",
        price: "",
        exchange_id: this.props.exchange.id
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleC_TypeChange = event => {
        this.setState({
            c_type: event.target.value
        })
    }

    handleSettlementDateChange = event => {
        this.setState({
            settlement_date: event.target.value
        })
    }

    handleTenorChange = event => {
        this.setState({
            tenor: event.target.value
        })
    }

    handlePriceChange = event => {
        this.setState({
            price: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createCurrencyFetch(this.state)
        this.setState({
            name: "",
            c_type: "",
            settlement_date: "",
            tenor: "",
            price: ""
        })
    }

    render() {
        // const {id, name, unit, price, exchange_id, created_at} = this.props.commodity
        const {id, name} = this.props.exchange
        return (
            <div className="cryptoList">
                <Link to="/admin/add">
                    <a>Back</a>
                </Link>
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <p>{name}</p>
                    </div>
                    <div className="crypto__content">
                        <form onSubmit={this.handleSubmit}>
                            <h3>Create new currency</h3>
                            <label>Name:</label>
                            <br></br>
                            <input
                                name="name"
                                placeholder="Name"
                                onChange={this.handleNameChange}
                                value={this.state.name}
                            />
                            <br></br>
                            <label>Type:</label>
                            <br></br>
                            <select id="c_type" onChange={this.handleC_TypeChange}>
                                <option value="Spot">Spot</option>
                                <option value="Forward">Forward</option>
                                <option value="Swap">Swap</option>
                            </select>
                            <br></br>
                            <label>Settlement Date:</label>
                            <br></br>
                            <input
                                name="settlement_date"
                                placeholder="Settlement Date"
                                onChange={this.handleSettlementDateChange}
                                value={this.state.settlement_date}
                            />
                            <br></br>
                            <label>Tenor:</label>
                            <br></br>
                            <input
                                name="tenor"
                                placeholder="Tenor"
                                onChange={this.handleTenorChange}
                                value={this.state.tenor}
                            />
                            <br></br>
                            <label>Price:</label>
                            <br></br>
                            <input
                                name="price"
                                placeholder="Price"
                                onChange={this.handlePriceChange}
                                value={this.state.price}
                            />
                            <br></br>
                            <input type='submit'/>
                        </form>
                    </div>
                </div>
            </div>
        ) 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCurrencyFetch: (currencyInfo) => dispatch(createCurrencyFetch(currencyInfo))
    }
}

export default connect(null, mapDispatchToProps)(CurrencyAddAdmin)