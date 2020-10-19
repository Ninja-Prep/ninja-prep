import { useDispatch } from "react-redux";
import { changeTheme, changeMode } from "../../actions";
import React, { Fragment } from "react";
import Select from "react-select";
import { themeOptions, modeOptions } from "./data";

const selectorCSS = {
  width: "10%",
  float: "right",
  position: "relative",
  zIndex: "10",
};

function EditorNav() {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div style={selectorCSS}>
        <Select
          placeholder="Theme"
          options={themeOptions}
          onChange={(e) => dispatch(changeTheme(e.value))}
        />
      </div>
      <div style={selectorCSS}>
        <Select
          placeholder="Language"
          options={modeOptions}
          onChange={(e) => dispatch(changeMode(e.value))}
        />
      </div>
    </Fragment>
  );
}

export default EditorNav;
