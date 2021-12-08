import React from 'react'
import CommodityAdminDelete from './CommodityAdminDelete'
// import './Exchange.css'

class CommodityListAdminDelete extends React.Component {

    render() {
        const commodities = this.props.commodityData.map(c => <CommodityAdminDelete commodity={c} />)
        return (
            <div className="cryptoList">
                {/* <h1>Select an Exchange or create a one:</h1> */}
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h3>Click to delete a Commodity:</h3>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                            {commodities}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommodityListAdminDelete