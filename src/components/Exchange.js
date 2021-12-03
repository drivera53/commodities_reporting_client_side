import React from 'react'
import Commodity from './Commodity'
import Currency from './Currency'
import './Exchange.css'

class Exchange extends React.Component {

    render() {
        const {id, name} = this.props.exchange
        const commodities = this.props.exchange.commodities.map(c => <Commodity commodity={c} />)
        const currencies = this.props.exchange.currencies.map(c => <Currency currency={c} />)
        return (
            <div className="cryptoList">
                <h2>{name}</h2>
                <div className="cryptoList__container">
                    <div className="crypto__header">
                    <h3>Commodities:</h3>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {commodities}
                        </div>
                    </div>
                    <div className="crypto__header">
                        <h3>Currencies:</h3>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {currencies}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exchange