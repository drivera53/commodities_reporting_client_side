import React from 'react'
import CurrencyAdminDelete from './CurrencyAdminDelete'
// import './Exchange.css'

class CurrencyListAdminDelete extends React.Component {

    render() {
        const currencies = this.props.currencyData.map(c => <CurrencyAdminDelete currency={c} />)
        return (
            <div className="cryptoList">
                {/* <h1>Select an Exchange or create a one:</h1> */}
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