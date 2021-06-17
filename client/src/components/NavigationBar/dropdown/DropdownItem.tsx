import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';
import {Dropdown} from 'react-bootstrap';

interface DropdownItemProps {
  url: string;
  cssClass?: string;
  DropdownIcon: typeof SvgIcon;
  children: React.ReactNode;
}

export default function DropdownItem({
  url,
  DropdownIcon,
  cssClass = 'text-secondary',
  children,
}: DropdownItemProps): JSX.Element {
  return (
    <Dropdown.Item href={url}>
      <p className={cssClass}>
        <DropdownIcon className="mr-3 my-2" />
        {children}
      </p>
    </Dropdown.Item>
  );
}
