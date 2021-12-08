import React from 'react'
import CurrencyUser from './CurrencyUser'
import './Exchange.css'
import {
    Link
} from 'react-router-dom'

class CurrencyList extends React.Component {

    render() {
        const currencies = this.props.currencyData.map(c => <CurrencyUser currency={c} />)
        return (
            <div>
                <h1>Welcome User</h1>
                <div className="cryptoList">
                    <Link to={"/commodities"}>
                        <div id="commodities" className="row">
                            <div className="row__intro">
                                <h1>Commodities</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/"}>
                        <div id="currencies" className="row">
                            <div className="row__intro">
                                <h1>Exchanges</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <h2>Currencies:</h2>
                <div className="cryptoList__container">
                    <div className="crypto__content">
                        <div className="crypto__rows">
                            <div>{currencies}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrencyList