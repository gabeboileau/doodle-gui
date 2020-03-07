import React, { useState, useEffect, useRef } from "react";

import { CanvasContainer } from "./common-game";

import { Toolbar } from "./Toolbar";

export function Canvas(props) {
  const [drawing, setDrawing] = useState(false);

  let canvasRefObject = useRef();

  function mouseMove(e) {
    if (!drawing) return;
    let rect = canvasRefObject.getBoundingClientRect();
    let context = canvasRefObject.getContext("2d");

    context.lineWidth = 2;
    context.lineCap = "round";

    const xPosition = e.clientX - rect.left;
    const yPosition = e.clientY - rect.top;

    context.lineTo(xPosition, yPosition);

    context.stroke();
    context.beginPath();

    context.moveTo(xPosition, yPosition);
  }

  function beginDraw(e) {
    setDrawing(true);
  }

  function endDraw(e) {
    setDrawing(false);
    let context = canvasRefObject.getContext("2d");
    context.beginPath();
  }

  useEffect(() => {}, []);

  useEffect(() => {}, [drawing]);

  return (
    <CanvasContainer>
      <canvas
        height="500px"
        width="700px"
        ref={r => (canvasRefObject = r)}
        onMouseMove={e => mouseMove(e)}
        onMouseDown={e => beginDraw(e)}
        onMouseUp={e => endDraw(e)}
        onMouseLeave={e => endDraw(e)}
        style={{
          border: "thick solid purple"
        }}
      ></canvas>
      <Toolbar />
    </CanvasContainer>
  );
}
