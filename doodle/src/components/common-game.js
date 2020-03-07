import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  border: thin solid black;
  width: 150px;
  height: 80px;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: thin solid black;
`;

export const CanvasContainer = styled.div`
  display: flex;
  width: 700px;
  height: 500px;
  border: thin solid red;
`;

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: thin solid orange;
`;

// ./src/components/Player.js
// Attempted import error: 'PlayerCard' is not exported from './common-game'.
