import React, {useEffect, useState} from 'react';

import {default as _} from 'lodash';
import FadeIn from 'react-fade-in';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import AsyncSpinner from 'utils/AsyncSpinner';

import Error404Component from '../Error404/Error404';
import {Desktop, Tablet} from '../../utils/DeviceSizes';
import {getProblemDetails} from './CodeEditorBaseComponent';
import CodeEditorDesktop from './CodeEditorDesktop';

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams>;

/**
 *
 */
function CodeEditorComponent(props: Props) {
  const [isLoading, setLoadingStatus] = useState(true);
  const [problemDetails, setProblemDetails] = useState();

  useEffect(() => {
    const loadDetails = async () => {
      const problemDetails = await getProblemDetails(props.match.params.id);
      setProblemDetails(problemDetails);
      setLoadingStatus(false);
    };
    loadDetails();
  }, [props.match.params.id]);

  if (isLoading) {
    return <AsyncSpinner />;
  } else if (!isLoading && _.isEmpty(problemDetails)) {
    // TODO: Add meaningful missing problem component
    return <Error404Component />;
  }
  return (
    <div>
      <FadeIn delay={250} transitionDuration={450}>
        <Desktop>
          <CodeEditorDesktop problemDetails={problemDetails} />
        </Desktop>
        <Tablet>
          <CodeEditorDesktop problemDetails={problemDetails} />
        </Tablet>
      </FadeIn>
    </div>
  );
}

export default withRouter(CodeEditorComponent);
