import styled from 'styled-components';

export const Calendar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #848484;
    font-size: calc(15px + 2vmin);
    line-height: 0;
    height: 160px;
    width: 80%;
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
    font: normal normal 60px;
    font-weight: 400;
    letter-spacing: 0px;
    width: 68px;
`

export const DateInfo = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    line-height: 25px;
`

export const DisplayDateMonth = styled.span`
    font-size: 24px;
    font: normal normal normal;
    font-weight: 300;
    letter-spacing: 0px;
    width: 32px;
`

export const DisplayDateYear = styled.span`
    font-size: 24px;
    font: normal normal normal;
    font-weight: 100;
    letter-spacing: 0px;
    width: 53px;
`

export const DisplayWeekDay = styled.span`
    font-size: 24px;
    font: normal normal normal;
    font-weight: 400;
    letter-spacing: 0px;
`