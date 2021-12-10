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
            <div className="app__body"> 
                <div className="app__container">
                    <div>
                        <h1>Currencies:</h1>
                        <div className="cryptoList__container">
                            <div className="crypto__content">
                                <div className="crypto__rows">
                                    <div>{currencies}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrencyList