import React from "react";
import * as S from "./style";
import { Context } from "../../context/Context.jsx";
import { useContext } from "react";

function HalfPage(props) {
  let { navigate } = useContext(Context);
  return (
    <S.HalfPage className="halfpage" gap={props.gap} height={props.height}>
      {props.children}
    </S.HalfPage>
  );
}

export default HalfPage;
