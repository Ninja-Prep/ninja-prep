import React from 'react';
import FadeIn from 'react-fade-in';

import {RouteComponentProps, RouteProps} from 'react-router';
import {Route} from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
}

function RouteWrapper({component: Component, ...rest}: Props): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <FadeIn delay={200} transitionDuration={1500} key={props.location.pathname}>
            <Component {...props} />
          </FadeIn>
        );
      }}
    />
  );
}

export default RouteWrapper;
