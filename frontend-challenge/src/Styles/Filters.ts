import styled from "styled-components";

export const DisplayFilters = styled.div`
  @media (min-width: 890px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    width: 80%;
  }

  @media (max-width: 890px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column-reverse;
    height: 115px;
    width: 80%;
  }
`

export const DisplayFiltersBtn = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 250px;
  max-width: 280px;
  width: 180px;

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

export const FilterInput = styled.input`
  @media (max-width: 890px) {
    background-color: #FFFFFF;
    color: #848484;
    border: solid 1px #DBDBDB;
    border-radius: 4px;
    font-size: 14px;
    letter-spacing: 0px;
    padding-left: 10px;
    outline: none;
    height: 40px;
    width: 98%;
  }

  @media (min-width: 890px) {
    background-color: #FFFFFF;
    color: #848484;
    border: solid 1px #DBDBDB;
    border-radius: 4px;
    font-size: 18px;
    letter-spacing: 0px;
    padding-left: 10px;
    outline: none;
    height: 40px;
    width: 70%;
  }
`

export const Filter = styled.button`
  background-color: #FFFFFF;
  color: #848484;
  border: solid 1px #DBDBDB;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  height: 33px;
  width: 70px;

  ${(props) => props.className?.includes("active") && `
  border: solid 0.1ch #4DA6B3;
  color: #4DA6B3;
`}

}`