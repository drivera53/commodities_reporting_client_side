import React from 'react'
import './Commodity.css'

export class Commodity extends React.Component {
    render() {
        const {id, name, unit, price, exchange_id, created_at} = this.props.commodity
        return (
            <div id="commodity" className="row">
                {/* <div className="row__image">
                    <img key={id} src={image} alt={name} height={40}/>
                </div> */}
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p>Time of last trade: {created_at}</p>
                </div>
                {/* <div className="row__mini_chart">
                    <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                </div> */}
                <div className="row__numbers">
                    <p className="row__price">${price}</p>
                    <p className="row_percentage">{unit}</p>
                </div> 
            </div>
        ) 
    }
}

export default Commodity 