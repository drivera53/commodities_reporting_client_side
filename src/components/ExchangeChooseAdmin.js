import React from 'react'
import './Exchange.css'
import {
    Link
} from 'react-router-dom'

export class ExchangeChooseAdmin extends React.Component {

    render() {
        const {id, name} = this.props.exchange
        return (
            <div className="cryptoList">
                <Link to="/admin">
                    <a>Back</a>
                </Link>
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h1>{name}</h1>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        </div>
                    </div>
                </div>
                <Link to={"/admin/add_commodity/" + id}>
                    <div id="commodity" className="row">
                        <div className="row__intro">
                            <h1>Add Commodity</h1>
                        </div>
                    </div>
                </Link>
                <Link to={"/admin/add_currency/" + id}>
                    <div id="commodity" className="row">
                        <div className="row__intro">
                            <h1>Add Currency</h1>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ExchangeChooseAdmin