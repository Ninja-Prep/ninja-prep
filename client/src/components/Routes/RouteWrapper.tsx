import React from 'react'
import { Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

interface Props {
    component: React.ComponentType<RouteComponentProps>
    layout: React.ComponentType
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
