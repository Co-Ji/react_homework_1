import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Circle from "./Circle";
//score로 연결할 수 있도록 useHistory를 사용했다.
//WeekIS를 Circle에 보내 true/false로 Week컴포넌트에 와야 하는 원 임을 식별한다.(useState안써도 되나? )
//onClick으로 Score로 넘어갈 때 파라미터값을 같이 넘겨준다. (이건 props는 아닌가?)
//오늘에 맞춰 요일이 배치되도록 바꿀 수 있나?
const Week = (props) => {
    let history = useHistory();

    //추가 기능 (요일 순 정렬)
    const today = new Date().getDay();

    const day_name = (num) => {
        const names = ["일", "월", "화", "수", "목", "금", "토"];
        return names[num];
    };

    const day_list = [];

    for (let i = 0; i < 7; i++) {
        today + i < 7
            ? day_list.push(day_name(today + i))
            : day_list.push(day_name(today + i - 7));
    }
    //추가 기능 (요일 순 정렬 끝)

    return day_list.map((list, index) => {
        return (
            <WeekBox key={index + list}>
                <Day>{list}</Day>
                <Circle WeekIs />

                <Triangle
                    onClick={() => {
                        history.push(`/score/${list}`);
                    }}
                ></Triangle>
            </WeekBox>
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
