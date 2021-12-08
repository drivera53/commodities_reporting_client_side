import React from 'react'
import './Commodity.css'

export class CommodityUser extends React.Component {
    render() {
        const {id, name, unit, price, exchange_id, created_at, exchange} = this.props.commodity
        return (
            <div id="commodity" className="row">
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p className="row_percentage">{exchange.name}</p>
                    <p>Time of last trade: {created_at}</p>
                </div>
                <div className="row__numbers">
                    <p className="row__price">${price}</p>
                    <p className="row_percentage">{unit}</p>
                </div> 
            </div>
        ) 
    }
}

export default CommodityUser 