import React from "react";

import { ToolbarContainer } from "./common-game";

export function Toolbar(props) {
  return (
    <ToolbarContainer>
      <button>Draw</button>
      <button>Erase</button>
      <button>ColorPicker</button>
    </ToolbarContainer>
  );
}
