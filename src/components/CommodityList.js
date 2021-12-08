import React from 'react'
import CommodityUser from './CommodityUser'
import './Exchange.css'
import {
    Link
} from 'react-router-dom'

class CommodityList extends React.Component {

    render() {
        const commodities = this.props.commodityData.map(c => <CommodityUser commodity={c} />)
        return (
            <div>
                <h1>Welcome User</h1>
                <div className="cryptoList">
                    <Link to={"/"}>
                        <div id="commodities" className="row">
                            <div className="row__intro">
                                <h1>Exchanges</h1>
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
                <h2>Commodities:</h2>
                <div className="cryptoList__container">
                    <div className="crypto__content">
                        <div className="crypto__rows">
                            <div>{commodities}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommodityList