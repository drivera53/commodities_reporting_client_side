import React from 'react'
import './Currency.css'

export class CurrencyUser extends React.Component {
    render() {
        const {id, name, c_type, settlement_date, tenor, price, exchange_id, created_at, exchange} = this.props.currency
        return (
            <div id="commodity" className="row">
                {/* <div className="row__image">
                    <img key={id} src={image} alt={name} height={40}/>
                </div> */}
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p className="row_percentage">{exchange.name}</p>
                    <p>Settlement date: {settlement_date}</p>
                </div>
                <div className="row__mini_chart">
                <p className="row_percentage">Tenor: {tenor}</p>
                </div>
                <div className="row__numbers">
                    <p className="row__price">${price}</p>
                    <p className="row_percentage">{c_type}</p>
                </div> 
            </div>
        ) 
    }
}

export default CurrencyUser 