import React from 'react'
import './Currency.css'

export class WelcomeAdmin extends React.Component {
    render() {
        const current_user = this.props.current_user
        return (
            <h1>Welcome, {current_user.first_name}!</h1>
        ) 
    }
}

export default WelcomeAdmin
