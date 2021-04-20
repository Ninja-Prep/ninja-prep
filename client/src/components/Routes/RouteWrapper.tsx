import React from 'react'
import { Route } from 'react-router-dom'
import { RouteComponentProps, RouteProps } from 'react-router'

interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps>
    layout: React.ComponentType<{ children: React.ReactChild }>
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }: Props) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}

export default RouteWrapper
