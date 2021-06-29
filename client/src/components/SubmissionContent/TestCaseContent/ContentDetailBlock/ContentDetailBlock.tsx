import React from 'react';

import {HeaderText, ContentDetail} from './styled';

interface BlockProps {
  blockHeader: string;
  blockContent: string;
}

function ContentDetailBlock({
  blockHeader,
  blockContent,
}: BlockProps): JSX.Element {
  return (
    <div>
      <HeaderText>{blockHeader}</HeaderText>
      <ContentDetail>{blockContent}</ContentDetail>
    </div>
  );
}

export default ContentDetailBlock;
