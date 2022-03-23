import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Circle from "./Circle";
import { Redirect } from "react-router-dom";

const Week = (props) => {
    let history = useHistory();

    const [abc, setabc] = React.useState(1);

    const day_list = ["월", "화", "수", "목", "금", "토", "일"];

    return day_list.map((list, index) => {
        return (
            <>
                <WeekBox>
                    <Day>{list}</Day>
                    <Circle
                        abc={abc}
                        // style={{
                        //     backgroundColor: "red",
                        // }}
                    />

                    <Triangle
                        onClick={() => {
                            history.push(`/score/${list}`);
                        }}
                    ></Triangle>
                </WeekBox>
            </>
        );
    });
};

const WeekBox = styled.div`
    height: 40px;
    width: 80vw;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Day = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Triangle = styled.div`
    width: 0px;
    height: 0px;
    border-bottom: 20px solid #007fff;
    border-left: 12.5px solid transparent;
    border-right: 12.5px solid transparent;
    background-color: transparent;
    transform: rotate(90deg);
    cursor: pointer;

    &:hover {
        transform: rotate(-10deg);
    }
`;

export default Week;
