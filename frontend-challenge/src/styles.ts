import styled from 'styled-components'

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

export const DisplayDate = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 79px;
  max-width: 145px;
  min-width: 140px;
`
  
export const DisplayDay = styled.h1 `
  width: 68px;
  letter-spacing: 0px;
  font: normal normal 60px;
  font-weight: 400;
`

export const DateInfo = styled.div `
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const DisplayDateMonth = styled.span `
  width: 32px;
  font-size: 24px;
  letter-spacing: 0px;
  font: normal normal normal;
  font-weight: 300;
`

export const DisplayDateYear = styled.span `
  width: 53px;
  font-size: 24px;
  letter-spacing: 0px;
  font: normal normal normal;
  font-weight: 100;
`

export const DisplayWeekDay = styled.span `
  font-size: 24px;
  letter-spacing: 0px;
  font: normal normal normal;
  font-weight: 400;
`

export const Bar = styled.span `
  width: 80%;
  background-color: #E4E4E4;
`

export const DisplayFilters = styled.div `
  width: 80%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const DisplayFiltersBtn = styled.div `
  width: 180px;
  display: flex;
  justify-content: space-between;

`

export const Filter = styled.button`
  width: 83px;
  height: 33px;
  border: solid 1px #DBDBDB;
  border-radius: 20px;
  background-color: #FFFFFF;
  color: #848484;

  ${(props) => props.className?.includes("active") && `
  border: solid 0.1ch #4DA6B3;
  color: #4DA6B3;
`}
`

export const FilterInput = styled.input`
  background-color: #FFFFFF;
  border: solid 1px #DBDBDB;
  border-radius: 4px;
  width: 450px;
  height: 40px;
  font-size: 14px;
  letter-spacing: 0px;
  font: normal normal normal;
  padding-left: 10px;
  outline: none;
`

export const DisplayTarefas = styled.div`
  width: 80%;
`

export const InputAdd = styled.input`
background-color: #FFFFFF;
border: solid 1px #DBDBDB;
border-radius: 4px;
width: 94%;
height: 48px;
font-size: 14px;
letter-spacing: 0px;
font: normal normal normal;
padding-left: 10px;
outline: none;
`

export const Table = styled.table`
  width: 100%;
`

export const TBody = styled.tbody`
  background-color: #F4F4F4;
  border: solid 1px #DBDBDB;
  height: 48px;
  font-size: 14px;
  letter-spacing: 0px;
  font: normal normal normal;
  padding-left: 10px;
  outline: none;
  text-align: left;
  display: flex;
  align-items: center;
`