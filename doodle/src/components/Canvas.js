import React from "react";

import { CanvasContainer } from "./common-game";

import { Toolbar } from "./Toolbar";

export function Canvas(props) {
  return (
    <CanvasContainer>
      <canvas
        height="200px"
        width="600px"
        style={{ border: "thick solid black" }}
      ></canvas>
      <Toolbar></Toolbar>
    </CanvasContainer>
  );
}
