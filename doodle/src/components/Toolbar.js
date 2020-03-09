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
      <ToolbarButton onClick={c => clearAll()}>Clear All</ToolbarButton>
      <ToolbarButton onClick={e => draw()}>Draw</ToolbarButton>
      <ToolbarButton onClick={d => erase()}>Eraser</ToolbarButton>
      {/* <CompactPicker /> */}
    </ToolbarContainer>
  );
}
