import styled from 'styled-components'
import doneImg from "./Assets/done-icon.png";
import undoImg from "./Assets/undo-icon.png";
import deleteImg from "./Assets/trash-icon.png";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #FFFFFF;
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  height: 5vmin;
  pointer-events: none;
`

export const Calendar = styled.header`
  width: 80%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 0;
  font-size: calc(15px + 2vmin);
  color: #848484;
  `

export const DisplayDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 79px;
  max-width: 145px;
  min-width: 140px;
`

export const DisplayDay = styled.h1`
  width: 68px;
  letter-spacing: 0px;
  font: normal normal 60px;
  font-weight: 400;
`

export const DateInfo = styled.div`
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const DisplayDateMonth = styled.span`
  width: 32px;
  font-size: 24px;
  letter-spacing: 0px;
  font: normal normal normal;
  font-weight: 300;
`

export const DisplayDateYear = styled.span`
  width: 53px;
  font-size: 24px;
  letter-spacing: 0px;
  font: normal normal normal;
  font-weight: 100;
`

export const DisplayWeekDay = styled.span`
  font-size: 24px;
  letter-spacing: 0px;
  font: normal normal normal;
  font-weight: 400;
`

export const DisplayProgressBar = styled.div`
  width: 80%;
  background-color: #E4E4E4;
`

export const DisplayFilters = styled.div`
  @media (min-width: 890px) {
    width: 80%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 890px) {
    width: 80%;
    height: 115px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`

export const DisplayFiltersBtn = styled.div`
  min-width: 250px;
  max-width: 280px;
  width: 180px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 550px) {
    justify-content: space-evenly;
    min-width: 250px;
    max-width: 280px;
    width: 100%;
  }

  @media (min-width: 550px) and (max-width: 890px) {
    align-self: flex-end;
    justify-content: space-evenly;
    min-width: 250px;
    max-width: 280px;
    width: 55%;
  }

  @media (min-width: 890px) {
    justify-content: space-evenly;
    min-width: 250px;
    max-width: 280px;
    width: 300px;
  }
`

export const Filter = styled.button`
  width: 83px;
  height: 33px;
  border: solid 1px #DBDBDB;
  border-radius: 20px;
  background-color: #FFFFFF;
  color: #848484;

  ${(props) => props.name === "all" && `
  width: 70px;
`}

  ${(props) => props.className?.includes("active") && `
  border: solid 0.1ch #4DA6B3;
  color: #4DA6B3;
`}
`

export const FilterInput = styled.input`
  @media (max-width: 890px) {
    background-color: #FFFFFF;
    border: solid 1px #DBDBDB;
    border-radius: 4px;
    width: 98%;
    height: 40px;
    font-size: 14px;
    letter-spacing: 0px;
    font: normal normal normal;
    padding-left: 10px;
    outline: none;
    color: #848484;
  }

  @media (min-width: 890px) {
    background-color: #FFFFFF;
    border: solid 1px #DBDBDB;
    border-radius: 4px;
    width: 70%;
    height: 40px;
    font-size: 14px;
    letter-spacing: 0px;
    font: normal normal normal;
    padding-left: 10px;
    outline: none;
    color: #848484;
  }
`

export const DisplayTarefas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 300px;
  width: 80%;
`

export const InputAdd = styled.input`
  background-color: #FFFFFF;
  border: solid 1px #DBDBDB;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  font-size: 14px;
  letter-spacing: 0px;
  font: normal normal normal;
  padding-left: 15px;
  outline: none;
  z-index: 0;
  color: #848484;
`

export const Table = styled.table`
    margin-top: 10px;
    height: 95%;
    width: 100%;
`

export const TBody = styled.tbody`
  height: 230px;
  font-size: 14px;
  letter-spacing: 0px;
  overflow-y: scroll;
  outline: none;
  text-align: left;
  color: #848484;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const TRow = styled.tr`
  height: 48px;
  display: flex;
  justify-content: space-between;
  background-color: #F4F4F4;
  border: solid 1px #DBDBDB;
  align-items: center;
  font: normal normal normal;
  padding-left: 10px;
  opacity: 100%;
  margin: 3px 0 3px 0;

${(props) => props.id?.includes("done") && `
  opacity: 60%;
  border: solid 1px #5DE290;
  color: #5DE290;
`}
`

export const StyledImage = styled.div`
    background-image: url(${undoImg});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 40px;
    width: 25px;
    opacity: 60%;
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