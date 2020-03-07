import React from "react";

import { Player } from "./Player";
import { Canvas } from "./Canvas";

import { PlayerContainer, GameContainer } from "./common-game";

export function Game(props) {
  return (
    <GameContainer>
      <PlayerContainer>
        <Player></Player>
        <Player></Player>
        <Player></Player>
        <Player></Player>
      </PlayerContainer>
      <Canvas></Canvas>
    </GameContainer>
  );
}
