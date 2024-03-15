import styled from "styled-components";
import doneImg from "../Assets/done-icon.png";
import undoImg from "../Assets/undo-icon.png";
import deleteImg from "../Assets/trash-icon.png";

export const DisplayTarefas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 300px;
  width: 80%;
`

export const InputAdd = styled.input`
  background-color: #FFFFFF;
  color: #848484;
  border: solid 1px #DBDBDB;
  border-radius: 4px;
  font-size: 19px;
  font: normal normal normal;
  letter-spacing: 0px;
  padding-left: 15px;
  outline: none;
  height: 48px;
  width: 100%;
  z-index: 0;
  opacity: 1;

  ${(props) => props.id === "edit" && `
  background-color: transparent;
  border: none;
  width: 100%;
`}
`

export const Table = styled.table`
  margin-top: 10px;
  color: #848484;
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  height: 95%;
  width: 100%;
`

export const TBody = styled.tbody`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    outline: none;
    height: 230px;
    width: 100%;
    overflow-y: scroll;
`

export const TRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F4F4F4;
  opacity: 100%;
  border: solid 1px #DBDBDB;
  padding-left: 10px;
  margin: 3px 0 3px 0;
  height: 48px;
  cursor: pointer;
  z-index: 0;

${(props) => props.id?.includes("done") && `
  color: #5DE290;
  opacity: 70%;
  border: solid 1px #5DE290;
`}
`

export const StyledImage = styled.div`
    background-image: url(${undoImg});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 60%;
    height: 40px;
    width: 25px;
    z-index: 2;
  ${(props) => props.id === "delete-item" && `
    background-image: url(${deleteImg});
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 100%;
    height: 40px;
    width: 25px;
    z-index: 2;
`}

  ${(props) => props.id === "item-done" && `
    background-image: url(${doneImg});
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 60%;
    height: 40px;
    width: 25px;
    z-index: 2;
  `}
`