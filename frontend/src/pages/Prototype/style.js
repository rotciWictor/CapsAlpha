import Styled from "styled-components";

export const h1 = Styled.h1`
    font-size: 24px;
`

export const section = Styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 80vh;
  
    & > div {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 1px solid black;
      padding: 10px;
    }
    `