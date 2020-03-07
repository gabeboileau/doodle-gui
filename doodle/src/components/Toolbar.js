import React from "react";

import { ToolbarContainer } from "./common-game";

import { TwitterPicker } from "react-color";

export function Toolbar(props) {
  return (
    <ToolbarContainer>
      <button>Draw</button>
      <button>Erase</button>
      <button>ColorPicker</button>
      <TwitterPicker />
    </ToolbarContainer>
  );
}
