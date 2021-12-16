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
}

export default function DropdownItem({DropdownIcon, children, ...linkProps}: DropdownItemProps): JSX.Element {
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
