import React from 'react'
import ExchangeAdminDelete from './ExchangeAdminDelete'
// import './Exchange.css'

class ExchangeListAdminDelete extends React.Component {

    render() {
        const exchanges = this.props.exchangeData.map(c => <ExchangeAdminDelete exchange={c} />)
        return (
            <div className="cryptoList">
                {/* <h1>Select an Exchange or create a one:</h1> */}
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h3>Click an Exchange to delete:</h3>
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