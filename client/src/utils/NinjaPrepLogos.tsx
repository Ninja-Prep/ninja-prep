import React from 'react';

interface Props {
  height: number;
  width: number;
}

export const LightNavbarNinjaPrepLogo = (props: Props): JSX.Element => {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 200 57">
      <g
        id="Group_120"
        data-name="Group 120"
        transform="translate(-1157 -10208)"
      >
        <text
          id="NinjaPrep"
          transform="translate(1157 10249)"
          fill="#f9fbfd"
          fontSize="40"
          fontFamily="SourceSansPro-Bold, Source Sans Pro"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            NinjaPrep
          </tspan>
        </text>
        <circle
          id="Ellipse_44"
          data-name="Ellipse 44"
          cx="7.5"
          cy="7.5"
          r="7.5"
          transform="translate(1342 10237)"
          fill="#25d0f3"
        />
      </g>
    </svg>
  );
};

export const DarkNavbarNinjaPrepLogo = (props: Props): JSX.Element => {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 201 58">
      <g
        id="Group_119"
        data-name="Group 119"
        transform="translate(-1157 -10129)"
      >
        <text
          id="NinjaPrep"
          transform="translate(1157 10171)"
          fill="#2a2a3a"
          fontSize="41"
          fontFamily="SourceSansPro-Bold, Source Sans Pro"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            NinjaPrep
          </tspan>
        </text>
        <circle
          id="Ellipse_44"
          data-name="Ellipse 44"
          cx="7.5"
          cy="7.5"
          r="7.5"
          transform="translate(1343 10158)"
          fill="#25d0f3"
        />
      </g>
    </svg>
  );
};
