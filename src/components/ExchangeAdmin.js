import React from 'react'
import './Currency.css'
import {
    Link
} from 'react-router-dom'

export class ExchangeAdmin extends React.Component {
    render() {
        const {id, name} = this.props.exchange
        return (
            <Link to={"/admin/add/" + id}>
                <div id="commodity" className="row">
                    <div className="row__intro">
                        <h1>{name}</h1>
                        {/* <p>ID: {id}</p> */}
                    </div>
                </div>
            </Link>
        ) 
    }
}

export default ExchangeAdmin 