import styled from "styled-components";

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
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
  padding: 20px;
  margin: 5px;
  border: thin solid black;
`;

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: thin solid black;
`;

// ./src/components/Player.js
// Attempted import error: 'PlayerCard' is not exported from './common-game'.
