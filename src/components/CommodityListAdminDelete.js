import React from 'react'
import CommodityAdminDelete from './CommodityAdminDelete'
// import './Exchange.css'

import {
    Link
} from 'react-router-dom'

class CommodityListAdminDelete extends React.Component {

    render() {
        const commodities = this.props.commodityData.map(c => <CommodityAdminDelete commodity={c} />)
        return (
            <div className="cryptoList">
                <Link to="/admin/delete">
                    <a>Back</a>
                </Link>
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