import React from "react";

import Slider from "@material-ui/core/Slider";

import { ToolbarContainer, ToolbarButton } from "./common-game";
import Tooltip from "@material-ui/core/Tooltip";

import { CompactPicker } from "react-color";

import eraseImage from "../images/eraser.svg";
import pencilImage from "../images/pencil.svg";

export function Toolbar(props) {
  function clearAll() {
    console.log("Something");
  }

  function draw() {
    console.log("Something");
  }

  function erase() {
    console.log("Erase");
  }

  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  return (
    <ToolbarContainer>
      <label style={{ margin: "5px", fontWeight: "bold" }}>Tools</label>
      <ToolbarButton onClick={c => clearAll()}>Clear</ToolbarButton>
      <ToolbarButton onClick={e => draw()}>
        <img width="70%" height="70%" src={pencilImage}></img>
      </ToolbarButton>
      <ToolbarButton onClick={d => erase()}>
        <img width="70%" height="70%" src={eraseImage}></img>
      </ToolbarButton>
      {/* <CompactPicker /> */}
      <label>Brush Width</label>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        defaultValue={20}
      />
    </ToolbarContainer>
  );
}
