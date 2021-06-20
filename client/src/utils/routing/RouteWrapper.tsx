import React from 'react';

import {RouteComponentProps, RouteProps} from 'react-router';
import {Route} from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
  layout: React.ComponentType<{children: React.ReactChild}>;
}

/**
 *
 */
function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}: Props): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default RouteWrapper;
