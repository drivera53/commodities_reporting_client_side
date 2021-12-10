import React from 'react'
import ExchangeAdminDelete from './ExchangeAdminDelete'
// import './Exchange.css'

import {
    Link
} from 'react-router-dom'

class ExchangeListAdminDelete extends React.Component {

    render() {
        const exchanges = this.props.exchangeData.map(c => <ExchangeAdminDelete exchange={c} />)
        return (
            <div className="cryptoList">
                <Link to="/admin/delete">
                    <a>Back</a>
                </Link>
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h3>Click to delete an Exchange:</h3>
                        <p>This will also delete all its commodities and currencies.</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {exchanges}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExchangeListAdminDelete