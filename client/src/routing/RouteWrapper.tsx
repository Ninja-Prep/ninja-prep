import React, {useEffect} from 'react';
import FadeIn from 'react-fade-in';

import {RouteComponentProps, RouteProps} from 'react-router';
import {Route} from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
  transitionOff?: boolean;
}

function RouteWrapper({component: Component, transitionOff, ...rest}: Props): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (transitionOff) {
          return <Component {...props} />;
        }
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
