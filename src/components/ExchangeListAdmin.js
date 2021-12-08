import React from 'react'
import ExchangeAdmin from './ExchangeAdmin'
import './Exchange.css'
import { createExchangeFetch } from '../actions/exchangeActions'
import { connect } from 'react-redux'

export class ExchangeListAdmin extends React.Component {
    state = {
        name: ""
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createExchangeFetch(this.state)
        this.setState({
            name: ""
        })
    }

    render() {
        const exchanges = this.props.exchangeData.map(c => <ExchangeAdmin exchange={c} />)
        return (
            <div className="cryptoList">
                {/* <h1>Select an Exchange or create a one:</h1> */}
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <p>Select an Exchange or create one:</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {exchanges}
                        </div>
                    </div>
                </div>
                <div className="cryptoList__container">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Create new exchange</h3>
                        <label>Name:</label>
                        <br></br>
                        <input
                            name="name"
                            placeholder="Name"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                        <br></br>
                        <input type='submit'/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createExchangeFetch: (exchangeInfo) => dispatch(createExchangeFetch(exchangeInfo))
    }
}

export default connect(null, mapDispatchToProps)(ExchangeListAdmin)