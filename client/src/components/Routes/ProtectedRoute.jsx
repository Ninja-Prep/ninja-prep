import React from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'

class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
        }
    }

    async getAuthStatus() {
        const authStatus = await Axios.get('/auth/authenticationStatus')
        this.setState({ isAuthenticated: authStatus.data })
    }

    componentDidMount() {
        this.getAuthStatus()
    }

    render() {
        const Component = this.props.component
        const AuthComponent = this.props.authComponent
        if (this.state.isAuthenticated && AuthComponent) {
            return <AuthComponent />
        } else if (Component) {
            return <Component />
        }
        return <Redirect to={{ pathname: '/login' }} />
    }
}

export default ProtectedRoute
