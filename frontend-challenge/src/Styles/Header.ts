import styled from 'styled-components';

export const Calendar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #848484;
  height: 160px;
  width: 80%;
`

export const DisplayDate = styled.div`
@media (max-width: 800px) {
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 70px;
   max-width: 120px;
   min-width: 110px;
}

@media (min-width: 800px) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 79px;
  max-width: 145px;
  min-width: 140px;
}`

export const DisplayDay = styled.h1`
@media (min-width: 800px) {   
    font-size: 79px;
    font-weight: 500;
    letter-spacing: -5px;
    width: 95px;
}

@media (max-width: 800px) {   
    font-size: 60px;
    font-weight: 500;
    letter-spacing: -5px;
    width: 95px;
}`

export const DateInfo = styled.div`
   display: flex;
   align-items: start;
   flex-direction: column;
   line-height: 30px;
   letter-spacing: 0;
`

export const DisplayDateMonth = styled.span`
@media (min-width: 800px) { 
    font-size: 32px;
    font-weight: 400;
    width: 32px;
}
@media (max-width: 800px) {   
    font-size: 24px;
    font-weight: 400;
    width: 32px;
}`

export const DisplayDateYear = styled.span`
@media (min-width: 800px) {
    font-size: 32px;
    font-weight: 300;
    width: 53px;
}

@media (max-width: 800px) {  
    font-size: 24px;
    font-weight: 300;
    width: 53px;
}`

export const DisplayWeekDay = styled.span`
@media (min-width: 800px) {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0px;
}

@media (max-width: 800px) {  
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0px;
}`