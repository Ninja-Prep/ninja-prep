import {Action} from 'utils/types/redux';
import {DISPLAY_FOOTER} from './actionTypes';

export const displayFooter = (shouldDisplay: boolean): Action<string, boolean> => ({
  type: DISPLAY_FOOTER,
  payload: shouldDisplay,
});
