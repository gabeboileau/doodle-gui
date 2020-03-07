import React from "react";

import PlayerIcon from "../images/player-icon.png";

import { PlayerCard } from "./common-game";

export function Player(props) {
  return (
    <PlayerCard>
      <label>Player_1</label>
      <img src={PlayerIcon} width="50px" height="50px" />
      <label>200 pts</label>
    </PlayerCard>
  );
}
