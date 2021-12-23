import {css} from 'styled-components';
import {LIGHT_BLUE} from './Colors';

export const FadeInCSS = css`
  -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1.5s; /* Firefox < 16 */
  -ms-animation: fadein 1.5s; /* Internet Explorer */
  -o-animation: fadein 1.5s; /* Opera < 12.1 */
  animation: fadein 1.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const BLUE_UNDER_LINE_CSS = css`
  :after {
    display: block;
    content: '';
    border-bottom: 3px solid ${LIGHT_BLUE};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  :hover:after {
    transform: scaleX(1);
  }
`;
