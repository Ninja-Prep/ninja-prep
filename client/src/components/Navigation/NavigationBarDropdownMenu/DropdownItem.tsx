import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';

import * as Styled from './styled';
import Link from '@mui/material/Link';

interface DropdownItemProps {
  to?: string;
  DropdownIcon: typeof SvgIcon;
  children: React.ReactNode;
  href?: string;
  component?: React.ElementType;
  isTextOnly?: boolean;
}

export default function DropdownItem({DropdownIcon, children, isTextOnly, ...linkProps}: DropdownItemProps): JSX.Element {
  if (isTextOnly) {
    return (
      <Styled.Link>
        <Styled.Container>
          <Styled.DropdownIcon>
            <DropdownIcon />
          </Styled.DropdownIcon>
          {children}
        </Styled.Container>
      </Styled.Link>
    );
  }
  return (
    <Styled.Link>
      <Link {...linkProps}>
        <Styled.Container>
          <Styled.DropdownIcon>
            <DropdownIcon />
          </Styled.DropdownIcon>
          {children}
        </Styled.Container>
      </Link>
    </Styled.Link>
  );
}
