import React, { useState, useEffect, useRef } from "react";

import { CanvasContainer } from "./common-game";
import styled from "styled-components";

import { Toolbar } from "./Toolbar";
import biggestPencil from "../images/pencil.svg";

const CanvasFun = styled.canvas`
  cursor: url(${biggestPencil});
`;
export function Canvas(props) {
  const [drawing, setDrawing] = useState(false);

  console.log(biggestPencil);

  let canvasRefObject = useRef();

  // Different stroke styles to be used for user and guest
  let userStrokeStyle = "#EE92C2";
  let guestStrokeStyle = "#F0C987";
  let line = [];

  ///static/media/pencil.6cda1fcf.svg

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
      {/* <svg>
        <g>
          <g>
            <path
              d="M456.836,76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365,0.031L45.763,301.682
			c-1.271,1.282-2.188,2.857-2.688,4.587L0.409,455.73c-1.063,3.722-0.021,7.736,2.719,10.478c2.031,2.033,4.75,3.128,7.542,3.128
			c0.979,0,1.969-0.136,2.927-0.407l149.333-42.703c1.729-0.5,3.302-1.418,4.583-2.69l289.323-286.983
			c8.063-8.069,12.5-18.787,12.5-30.192S464.899,84.237,456.836,76.168z M285.989,89.737l39.264,39.264L120.257,333.998
			l-14.712-29.434c-1.813-3.615-5.5-5.896-9.542-5.896H78.921L285.989,89.737z M26.201,443.137L40.095,394.5l34.742,34.742
			L26.201,443.137z M149.336,407.96l-51.035,14.579l-51.503-51.503l14.579-51.035h28.031l18.385,36.771
			c1.031,2.063,2.708,3.74,4.771,4.771l36.771,18.385V407.96z M170.67,390.417v-17.082c0-4.042-2.281-7.729-5.896-9.542
			l-29.434-14.712l204.996-204.996l39.264,39.264L170.67,390.417z M441.784,121.72l-47.033,46.613l-93.747-93.747l46.582-47.001
			c8.063-8.063,22.104-8.063,30.167,0l64,64c4.031,4.031,6.25,9.385,6.25,15.083S445.784,117.72,441.784,121.72z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg> */}
      <CanvasFun
        height="700px"
        width="1000px"
        ref={r => (canvasRefObject = r)}
        onMouseMove={e => mouseMove(e)}
        onMouseDown={e => beginDraw(e)}
        onMouseUp={e => endDraw(e)}
        onMouseLeave={e => endDraw(e)}
        cursor={biggestPencil}
        // style={{
        //   border: "thin solid"
        // }}
      ></CanvasFun>
      <Toolbar />
    </CanvasContainer>
  );
}
