import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Circle from "./Circle";
//week페이지와 연결을 위해 usehistory를 쓴다.
// dayname은 app에서 받은 파라미터 값으로 값은 week에서 버튼을 클릭할 때 생성된다.
const Score = (props) => {
    let history = useHistory();
    const dayName = props.match.params.day_name;
    //onclick으로 Week로 다시 연결된다.
    return (
        <Container>
            <div>
                <span style={{ color: "deepskyblue", fontSize: "20px" }}>
                    {dayName}요일
                </span>{" "}
                평점 남기기
            </div>
            <ScoreBox>
                <Circle />
            </ScoreBox>
            <Save
                onClick={() => {
                    history.push("/");
                }}
            >
                평점 남기기 !
            </Save>
        </Container>
    );
};

const Container = styled.div`
    width: 50vw;
    max-width: 350px;
    height: 200px;
    margin: 10px auto;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ScoreBox = styled.div`
    height: 40px;
    width: 80vw;
    max-width: 200px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Save = styled.button`
    background-color: #ffc802;
    width: 100px;
    height: 40px;
    margin: 20px auto 0px auto;
    border: 2px solid transparent;
    border-radius: 20px;
    font-family: "Noto Sans KR", sans-serif;

    &:hover {
        cursor: pointer;
        border: 3px solid #ddd;
        border-radius: 20px;
    }
`;

export default Score;
