import React from "react";

import { Player } from "./Player";
import { Canvas } from "./Canvas";

import { PlayerContainer, GameContainer } from "./common-game";

export function Game(props) {
  return (
    <GameContainer>
      <PlayerContainer>
        <Player playerName="Gabe" points="100"></Player>
        <Player playerName="Gabe" points="100"></Player>
        <Player playerName="To me portal gun" points="100"></Player>
        <Player playerName="Some Science" points="120"></Player>
      </PlayerContainer>
      <Canvas></Canvas>
    </GameContainer>
  );
}
