import styled from "styled-components";
import doneImg from "../Assets/done-icon.png";
import undoImg from "../Assets/undo-icon.png";
import deleteImg from "../Assets/trash-icon.png";
import addTask from "../Assets/add-task.png";

export const DisplayTarefas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 300px;
  width: 80%;
`

export const NewTaskArea = styled.div`
  display: flex;
  alignItems: center;
  flexDirection: row;
  width: 100%;
`

export const InputAdd = styled.input`
@media (max-width: 800px) {
  background-color: #FFFFFF;
  color: #848484;
  border: solid 1px #DBDBDB;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  font: normal normal normal;
  letter-spacing: 0px;
  padding-left: 15px;
  outline: none;
  height: 47px;
  width: 100%;
  z-index: 0;
  opacity: 1;
  
  ${(props) => props.id === "edit" && `
    background-color: transparent;
    border: none;
    width: 100%;
  `}
}

@media (min-width: 800px) {
  background-color: #FFFFFF;
  color: #848484;
  border: solid 1px #DBDBDB;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  font: normal normal normal;
  letter-spacing: 0px;
  padding-left: 15px;
  outline: none;
  height: 46.5px;
  width: 100%;
  z-index: 0;
  opacity: 1;
  
  ${(props) => props.id === "edit" && `
    background-color: transparent;
    border: none;
    width: 100%;
  `}
}`

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
  z-index: 999;

  ${(props) => props.id?.includes("-done") && `
    color: #5DE290;
    border: solid 1px #5DE290;
  `}
`

export const TaskTitle = styled.span`
@media (max-width: 800px) {
  font-size: 14px;

  &:hover .info {
    display: none;
    background-color: red;
  }

  ${(props) => props.id?.includes("-done") && `
  text-decoration: line-through;
  `}
}

@media (min-width: 800px) {
  font-size: 19px;

  ${(props) => props.id?.includes("-done") && `
  text-decoration: line-through;
  `}

}
`

export const StyledImage = styled.div`
  ${(props) => props.id === "undo-item" && `
    background-image: url(${undoImg});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 30px;
    width: 25px;
    z-index: 2;
  `}
  ${(props) => props.id === "delete-item" && `
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${deleteImg});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 30px;
    width: 25px;
    z-index: 2;
`}

  ${(props) => props.id === "done-item" && `
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${doneImg});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 30px;
    width: 25px;
    z-index: 2;
  `}
`

export const AddButton = styled.button<{ width: number}>`
@media (max-width: 800px) {
  background-image: url(${addTask});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  height: 50px;
  max-height: 51px;
  width: 60px;
  max-width: 52px;
  z-index: 1;
}

@media (min-width: 800px) {
  background-image: url(${addTask});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  height: 100%;
  height: 50px;
  max-height: 51px;
  width: 10%;
  max-width: 52px;
  z-index: 1;
}
`

export const ActionButton = styled.button<{ width: number}>`
@media (max-width: 500px) {  
  background-color: transparent;
  font-size: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
  font-weight: 400;
    
  ${props => props.id === "mark-done-button" && `
    color: #848484;
    width: fit-content;
    }
  `}

  ${(props) => props.id === "undo-button" && `
    color: #FA5252;
  `}

  ${(props) => props.id === "edit" && `
    color: #848484;
  `}
}

@media (min-width: 500px) {  
  background-color: transparent;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
  font-weight: 400;
    
  ${props => props.id === "mark-done-button" && `
    color: #848484;
    width: 100px;
    }
  `}

  ${(props) => props.id === "undo-button" && `
    color: #FA5252;
  `}

  ${(props) => props.id === "edit" && `
    color: #848484;
  `}
}`