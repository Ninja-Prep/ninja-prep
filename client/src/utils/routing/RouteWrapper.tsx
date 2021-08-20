import React from 'react';
import FadeIn from 'react-fade-in';

import {RouteComponentProps, RouteProps} from 'react-router';
import {Route} from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
  layout: React.ComponentType<{children: React.ReactChild}>;
}

/**
 *
 */
function RouteWrapper({component: Component, layout: Layout, ...rest}: Props): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout {...props} key={props.location.pathname}>
            <FadeIn delay={200} transitionDuration={1500}>
              <Component {...props} />
            </FadeIn>
          </Layout>
        );
      }}
    />
  );
}

export default RouteWrapper;
