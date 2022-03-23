import React, { useState } from "react";
import styled from "styled-components";
import Week from "./Week";

const Circle = (props) => {
    const [points, setPoints] = React.useState(-1);

    const getRandom = (min, max) =>
        Math.floor(Math.random() * (max - min) + min);
    const randomnum = getRandom(1, 10);

    const num_list = [
        getRandom(1, 10),
        getRandom(1, 10),
        getRandom(1, 10),
        getRandom(1, 10),
        getRandom(1, 10),
    ].sort();

    // 스타일 바꿔주기
    // const [style, setStyle] = useState(Score);

    // console.log(style);
    // const changeColor = () => {
    //     setStyle(Score2);
    // };

    // useRef 이용하기
    // const my_circle = React.useRef(null);
    // console.log(my_circle.current);
    // const point = function () {
    //     my_circle.current.style.background = "yellow";
    //     setPoints(points + 1);
    // };

    if (props.abc === 1) {
        return num_list.map((num, index) => {
            if (num < 7) {
                return (
                    <Score key={index} style={{ backgroundColor: "#60e5b9" }}>
                        {num}
                    </Score>
                );
            } else {
                return (
                    <Score key={index} style={{ backgroundColor: "lightgray" }}>
                        {num}
                    </Score>
                );
            }
        });
    } else {
        return num_list.map((num, index) => {
            return (
                <Score
                    style={{
                        backgroundColor:
                            index >= points + 1 ? "lightgray" : "#60e5b9",
                    }}
                    // ref={my_circle}
                    onClick={() => setPoints(index)}
                    key={index}
                >
                    {num}
                </Score>
            );
        });
    }
};

const Score = styled.div`
    width: 25px;
    height: 25px;
    // background-color: lightgray;
    border-radius: 50px;
    font-size: 0;
`;

// const Score2 = styled.div`
//     width: 25px;
//     height: 25px;
//     // background-color: red;
//     border-radius: 50px;
//     font-size: 0;
// `;

export default Circle;
