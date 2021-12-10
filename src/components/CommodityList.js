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
            <div className="app__body"> 
                <div className="app__container">
                    <div>
                        <h1>Commodities:</h1>
                        <div className="cryptoList__container">
                            <div className="crypto__content">
                                <div className="crypto__rows">
                                    <div>{commodities}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommodityList