import React from "react";

import { ToolbarContainer, ToolbarButton } from "./common-game";

import { CompactPicker } from "react-color";

export function Toolbar(props) {
  function clearAll() {
    console.log("Something");
  }

  function draw() {
    console.log("Something");
  }

  function erase() {
    console.log("Something");
  }

  return (
    <ToolbarContainer>
      <ToolbarButton onClick={c => clearAll()}>
        <img width="40px" height="40px" src="../images/pencil.svg"></img>
      </ToolbarButton>
      <ToolbarButton onClick={e => draw()}>Draw</ToolbarButton>
      <ToolbarButton onClick={d => erase()}>
        <img width="40px" height="40px" src="../images/eraser.svg"></img>
      </ToolbarButton>
      {/* <CompactPicker /> */}
    </ToolbarContainer>
  );
}
