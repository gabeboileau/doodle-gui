import React from "react";

import PlayerIcon from "../images/player-icon.png";

import { PlayerCard } from "./common-game";

export function Player(props) {
  return (
    <PlayerCard>
      <img src={PlayerIcon} width="50px" height="50px" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2px"
        }}
      >
        <label style={{ fontWeight: "bold" }}>{props.playerName}</label>
        <label>{props.points + " pts"}</label>
      </div>
    </PlayerCard>
  );
}
