import React from 'react'
import Exchange from './Exchange'
// import './Exchange.css'

class ExchangeList extends React.Component {

    render() {
        const exchanges = this.props.exchangeData.map(c => <Exchange exchange={c} />)
        return (
            <div>
                <h1>Welcome User</h1>
                <h2>Exchanges:</h2>
                <div>{exchanges}</div>
            </div>
        )
    }
}

export default ExchangeList