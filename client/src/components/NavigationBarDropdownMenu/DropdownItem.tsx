import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';
import {Dropdown} from 'react-bootstrap';
import {InlineBlockDropdownIcon} from './styled';

interface DropdownItemProps {
  to?: string;
  DropdownIcon: typeof SvgIcon;
  children: React.ReactNode;
  href?: string;
  as?: React.ElementType;
}

export default function DropdownItem({DropdownIcon, children, ...linkProps}: DropdownItemProps): JSX.Element {
  return (
    <Dropdown.Item {...linkProps}>
      <InlineBlockDropdownIcon>
        <DropdownIcon />
      </InlineBlockDropdownIcon>
      {children}
    </Dropdown.Item>
  );
}
