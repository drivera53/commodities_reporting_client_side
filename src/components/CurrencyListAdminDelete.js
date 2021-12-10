import React from 'react'
import CurrencyAdminDelete from './CurrencyAdminDelete'
// import './Exchange.css'

import {
    Link
} from 'react-router-dom'

class CurrencyListAdminDelete extends React.Component {

    render() {
        const currencies = this.props.currencyData.map(c => <CurrencyAdminDelete currency={c} />)
        return (
            <div className="cryptoList">
                <Link to="/admin/delete">
                    <a>Back</a>
                </Link>
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h3>Click to delete a Currency:</h3>
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

export default CurrencyListAdminDelete