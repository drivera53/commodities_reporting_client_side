import React from 'react'
import './Commodity.css'
import { deleteCommodityFetch } from '../actions/exchangeActions'
import { connect } from 'react-redux'

export class CommodityAdminDelete extends React.Component {

    handleDeleteSubmit = event => {
        event.preventDefault()
        const commodityObject = {
            name: this.props.commodity.name,
            id: this.props.commodity.id
        }
        this.props.deleteCommodityFetch(commodityObject)
    }

    render() {
        const {id, name, unit, price, exchange_id, created_at, exchange} = this.props.commodity
        return (
            <div id="commodity" className="row" onClick={this.handleDeleteSubmit}>
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p className="row_percentage">{exchange.name}</p>
                </div>
                <div className="row__numbers">
                    <p className="row__price">${price}</p>
                    <p className="row_percentage">{unit}</p>
                </div> 
            </div>
        ) 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCommodityFetch: (commodityInfo) => dispatch(deleteCommodityFetch(commodityInfo))
    }
}

export default connect(null, mapDispatchToProps)(CommodityAdminDelete) 