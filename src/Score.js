import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Circle from "./Circle";

const Score = (props) => {
    let history = useHistory();
    const dayName = props.match.params.day_name;

    const [abc, setabc] = React.useState(0);
    // const [isScore, setIsScore] = useState(true);

    const point = React.useRef(null);

    return (
        <Container>
            <div>{dayName}요일 평점 남기기</div>
            <ScoreBox>
                <Circle abc={abc} />

                {/* <Abc>★</Abc> */}
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
    width: 60vw;
    max-width: 350px;
    height: 150px;
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
    justify-content: space-evenly;
`;

const Save = styled.button`
    background-color: #ffc802;
    width: 100px;
    height: 50px;
    margin: 20px auto 0px auto;
    border: 2px solid transparent;
    border-radius: 20px;

    &:hover {
        cursor: pointer;
        border: 3px solid #ddd;
        border-radius: 20px;
    }
`;

const Abc = styled.span`
    font-size: 30px;
    cursor: default;
    color: yellow;
    // height: 25px;
    // background-color: lightgray;
    // border-radius: 50px;
`;

export default Score;
