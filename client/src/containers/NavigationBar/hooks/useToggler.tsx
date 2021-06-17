import {useState} from 'react';

export interface Toggler {
  isOn: boolean;
  readonly toggle: () => void;
}

export function useToggler(): Toggler {
  const [isOn, setStatus] = useState(false);
  const toggle = () => setStatus(!isOn);
  return {isOn, toggle};
}
