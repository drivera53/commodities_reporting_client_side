import React from 'react'
import './Currency.css'

export class AdminInfo extends React.Component {
    render() {
        const current_user = this.props.current_user
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h2>Admin Info:</h2>
                        <h3>First name: </h3>
                        <p>{current_user.first_name}</p>
                        <h3>Last name: </h3>
                        <p>{current_user.last_name}</p>
                        <h3>Email: </h3>
                        <p>{current_user.email}</p>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default AdminInfo
