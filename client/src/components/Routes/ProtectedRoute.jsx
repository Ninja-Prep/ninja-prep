import React from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import RouteWrapper from './RouteWrapper'

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
        const Layout = this.props.layout
        if (this.state.isAuthenticated && AuthComponent) {
            return <RouteWrapper component={AuthComponent} layout={Layout} />
        } else if (Component) {
            return <RouteWrapper component={Component} layout={Layout} />
        }
        return <Redirect to={{ pathname: '/login' }} />
    }
}

export default ProtectedRoute
