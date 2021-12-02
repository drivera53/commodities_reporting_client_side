import React from 'react'
import Exchange from './Exchange'
// import './Exchange.css'

class ExchangeList extends React.Component {

    render() {
        const exchanges = this.props.exchangeData.map(c => <Exchange exchange={c} />)
        return (
            <div>
                <h1>Exchanges</h1>
                <div>{exchanges}</div>
            </div>
        )
    }
}

export default ExchangeList