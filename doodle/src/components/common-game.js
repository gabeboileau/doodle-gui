import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1000px;
  padding: 50px;
`;

export const PlayerCard = styled.div`
  display: flex;
  width: 150px;
  margin: 5px;
  color: white;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: thin solid black;
  background-color: #4e4e50;
  height: 500px;
  width: 200px;
`;

export const CanvasContainer = styled.div`
  display: flex;
  width: 700px;
  height: 500px;
  border: thin solid;
  background-color: white;
`;

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: thin solid;
  background-color: #4e4e50;
`;

export const ToolbarButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 2px;
  width: 80px;
  height: 50px;
  background-color: #6f2232;
  color: white;
  border: thin solid;
  :hover {
    border: thin solid blue;
  }
  outline: none;
`;

export const TopbarContainer = styled.div`
  background-color: #4e4e50;
  display: flex;
  height: 60px;
  color: white;
  vertical-align: center;
`;

export const TopbarTitle = styled.div`
  font-size: 20px;
  margin: 5px;
  align-self: center;
`;

// ./src/components/Player.js
// Attempted import error: 'PlayerCard' is not exported from './common-game'.
