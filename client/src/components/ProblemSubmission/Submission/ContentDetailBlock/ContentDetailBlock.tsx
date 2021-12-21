import React from 'react';

import * as Styled from './styled';

interface BlockProps {
  blockHeader: string;
  blockContent: string;
}

function ContentDetailBlock({blockHeader, blockContent}: BlockProps): JSX.Element {
  return (
    <Styled.Container>
      <Styled.HeaderText>{blockHeader}</Styled.HeaderText>
      <Styled.ContentDetail>{blockContent}</Styled.ContentDetail>
    </Styled.Container>
  );
}

export default ContentDetailBlock;
