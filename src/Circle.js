import React from "react";
import styled from "styled-components";

const Circle = (props) => {
    const [points, setPoints] = React.useState(-1);
    //score페이지에서 원을 채울 때 삼항연산자에 활용하기 위해 state를 선언했다.
    const getRandom = (min, max) =>
        Math.floor(Math.random() * (max - min) + min);

    const num_list = [
        getRandom(1, 10),
        getRandom(1, 10),
        getRandom(1, 10),
        getRandom(1, 10),
        getRandom(1, 10),
    ].sort();
    //main의 평점이 무작위로 주어저야 하기 때문에 1~9까지의 난수를 생성해 배열을 만든다.
    //sort는 무작위 평점이라도 낮은 쪽 부터 색이 바뀌도록 하기 위해서이다.
    //무작위 배열 짧게 고칠 수 있을까?
    //if문으로 참, else를 나눠 참인 경우(week에서 props를 받는다.(이것도props인지?) )
    // 7미만일 때와 7이상일 때 원의 색을 다르게 했다. (랜덤이라도 평점이 너무 낮으면 좀 그렇다.)
    // else인 경우 원 배열의 index와 state의 값을 비교해 각각의 원의 색이 결정된다.
    // state는 onclick을 사용해 클릭하면 클릭한 index의 값으로 setState하도록 했다.
    //if문 삼항연산자로 못 바꾸나? return뒤로는 안 먹는다.

    if (props.WeekIs === true) {
        return num_list.map((num, index) => {
            if (num < 7) {
                return (
                    <Score
                        key={index * 537}
                        style={{ backgroundColor: "#60e5b9" }}
                    >
                        {num}
                    </Score>
                );
            } else {
                return (
                    <Score
                        key={index + 12324}
                        style={{ backgroundColor: "lightgray" }}
                    >
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
                            index > points ? "lightgray" : "#60e5b9",
                    }}
                    onClick={() => setPoints(index)}
                    key={index + num}
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
    border-radius: 50px;
    font-size: 0;
`;

export default Circle;

// score페이지 구현 실패모음
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
