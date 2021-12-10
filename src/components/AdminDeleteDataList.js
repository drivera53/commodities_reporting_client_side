import React from 'react'
import './Currency.css'
import {
    Link
} from 'react-router-dom'

export class AdminDeleteDataList extends React.Component {
    render() {
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <Link to={"/admin/delete_exchange"}>
                        <div id="commodity" className="row">
                            <div className="row__intro">
                            <h1>Delete Exchange</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/admin/delete_commodity"}>
                        <div id="commodity" className="row">
                            <div className="row__intro">
                            <h1>Delete Commodity</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/admin/delete_currency"}>
                        <div id="commodity" className="row">
                            <div className="row__intro">
                            <h1>Delete Currency</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        ) 
    }
}

export default AdminDeleteDataList 