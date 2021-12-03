import React from 'react'
import './Commodity.css'
import { createCommodityFetch } from '../actions/exchangeActions'
import { connect } from 'react-redux'

import {
    Link
} from 'react-router-dom'

export class CommodityAddAdmin extends React.Component {

    state = {
        name: "",
        unit: "",
        price: "",
        exchange_id: this.props.exchange.id
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleUnitChange = event => {
        this.setState({
            unit: event.target.value
        })
    }

    handlePriceChange = event => {
        this.setState({
            price: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createCommodityFetch(this.state)
        this.setState({
            name: "",
            unit: "",
            price: ""
        })
    }

    render() {
        // const {id, name, unit, price, exchange_id, created_at} = this.props.commodity
        const {id, name} = this.props.exchange
        return (
            <div className="cryptoList">
                <Link to="/admin">
                    <a>Back</a>
                </Link>
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h1>{name}</h1>
                    </div>
                    <div className="crypto__content">
                        <form onSubmit={this.handleSubmit}>
                            <h3>Create new commodity</h3>
                            <label>Name:</label>
                            <br></br>
                            <input
                                name="name"
                                placeholder="Name"
                                onChange={this.handleNameChange}
                                value={this.state.name}
                            />
                            <br></br>
                            <label>Unit:</label>
                            <br></br>
                            <input
                                name="unit"
                                placeholder="Unit"
                                onChange={this.handleUnitChange}
                                value={this.state.unit}
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
        createCommodityFetch: (commodityInfo) => dispatch(createCommodityFetch(commodityInfo))
    }
}

export default connect(null, mapDispatchToProps)(CommodityAddAdmin)