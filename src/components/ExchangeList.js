import React from 'react'
import Exchange from './Exchange'
import './Exchange.css'
import {
    Link
} from 'react-router-dom'

class ExchangeList extends React.Component {

    render() {
        const exchanges = this.props.exchangeData.map(c => <Exchange exchange={c} />)
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
                    <Link to={"/currencies"}>
                        <div id="currencies" className="row">
                            <div className="row__intro">
                                <h1>Currencies</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <h2>Exchanges:</h2>
                <div>{exchanges}</div>
            </div>
        )
    }
}

export default ExchangeList