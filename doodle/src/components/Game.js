import React from "react";

import { Player } from "./Player";
import { Canvas } from "./Canvas";

import { PlayerContainer } from "./common-game";

export function Game(props) {
  return (
    <div className="Game">
      <PlayerContainer>
        <Player></Player>
        <Player></Player>
        <Player></Player>
        <Player></Player>
      </PlayerContainer>
      <Canvas></Canvas>
    </div>
  );
}
