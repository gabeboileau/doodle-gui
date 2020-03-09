import React, { useState, useEffect, useRef } from "react";

import { CanvasContainer } from "./common-game";

import { Toolbar } from "./Toolbar";

export function Canvas(props) {
  const [drawing, setDrawing] = useState(false);

  let canvasRefObject = useRef();

  // Different stroke styles to be used for user and guest
  let userStrokeStyle = "#EE92C2";
  let guestStrokeStyle = "#F0C987";
  let line = [];

  // v4 creates a unique id for each user. We used this since there's no auth to tell users apart
  let prevPos = { x: 0, y: 0 };

  function mouseMove(e) {
    if (!drawing) return;

    let rect = canvasRefObject.getBoundingClientRect();
    let context = canvasRefObject.getContext("2d");

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const pos = { offsetX, offsetY };

    // Set the start and stop position of the paint event.
    const positionData = {
      start: { ...prevPos },
      stop: { ...pos }
    };
    // Add the position to the line array
    line = line.concat(positionData);
    paint(pos, userStrokeStyle);
  }

  function paint(currPos, strokeStyle) {
    let context = canvasRefObject.getContext("2d");

    const { offsetX, offsetY } = currPos;
    const { offsetX: x, offsetY: y } = prevPos;

    context.beginPath();
    context.strokeStyle = strokeStyle;

    // Move the the prevPosition of the mouse
    context.moveTo(x, y);
    // Draw a line to the current position of the mouse
    context.lineTo(offsetX, offsetY);
    // Visualize the line using the strokeStyle
    context.stroke();

    prevPos = { offsetX, offsetY };
  }

  function beginDraw(e) {
    setDrawing(true);
  }

  function endDraw(e) {
    setDrawing(false);
    let context = canvasRefObject.getContext("2d");
    context.beginPath();

    // after we're done drawing - we're going to send the data
    sendPaintData();
  }

  function sendPaintData() {
    // send the paint data to the API
    const body = {
      line: line
    };
    console.log("Body to be sent");
    console.log(body);
    // We use the native fetch API to make requests to the server
    // const req = await fetch('http://localhost:4000/paint', {
    //   method: 'post',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // });
    // const res = await req.json();
    line = [];
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
        // style={{
        //   border: "thin solid"
        // }}
      ></canvas>
      <Toolbar />
    </CanvasContainer>
  );
}
