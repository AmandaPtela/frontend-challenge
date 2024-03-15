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
    font-size: 79px;
    font-weight: 500;
    letter-spacing: -5px;
    width: 95px;
`

export const DateInfo = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    line-height: 32px;
    letter-spacing: 0px;
`

export const DisplayDateMonth = styled.span`
    font-size: 32px;
    font-weight: 400;
    width: 32px;
`

export const DisplayDateYear = styled.span`
    font-size: 32px;
    font-weight: 300;
    width: 53px;
`

export const DisplayWeekDay = styled.span`
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0px;
`