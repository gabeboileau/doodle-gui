import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1000px;
  padding: 50px;
`;

export const PlayerCard = styled.div`
  display: flex;
  margin: 5px;
  height: 50px;
  background: rgb(46, 45, 52);
  background: linear-gradient(
    90deg,
    rgba(46, 45, 52, 1) 0%,
    rgba(109, 109, 120, 1) 49%,
    rgba(57, 73, 77, 1) 100%
  );
  color: white;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: thin solid black;
  height: 700px;
  width: 275px;
  border-width: 1px 0px 1px 1px;
  background-color: white;
`;

export const CanvasContainer = styled.div`
  display: flex;
  height: 700px;
  min-width: 200px;
  border: thin solid;
  background-color: white;
`;

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100px;
  border: thin solid;
  border-width: 0px 0px 0px 1px;
`;

export const ToolbarButton = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #36899e;
  color: white;
  :hover {
    background-color: #255e6c;
  }
  align-items: center;
  padding: 2px;
`;

export const TopbarContainer = styled.div`
  display: flex;
  height: 60px;
  vertical-align: center;
  background-color: #36899e;

  /* background: linear-gradient(
    90deg,
    rgba(46, 45, 52, 1) 0%,
    rgba(109, 109, 120, 1) 49%,
    rgba(57, 73, 77, 1) 100%
  ); */
  color: white;
`;

export const TopbarTitle = styled.div`
  font-size: 30px;
  margin: 5px;
  align-self: center;
`;

// ./src/components/Player.js
// Attempted import error: 'PlayerCard' is not exported from './common-game'.
