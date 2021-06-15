import React from 'react';

import {Desktop, Mobile, Tablet} from '../../utils/DeviceSizes';
import QuestionListDesktop from './QuestionListDesktop';
import {QuestionListMobile} from './QuestionListMobile';
import {QuestionListTablet} from './QuestionListTablet';

const QuestionListComponent = (): React.JSXElement => (
  <div>
    <Desktop>
      <QuestionListDesktop />
    </Desktop>
    <Tablet>
      <QuestionListTablet />
    </Tablet>
    <Mobile>
      <QuestionListMobile />
    </Mobile>
  </div>
);

export default QuestionListComponent;
