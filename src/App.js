import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Week from "./Week";
import Score from "./Score";

// 총 4개의 컴포넌트로 구성:
// Circle: 각각의 작은 원을 모아 다음 컴포넌트로 보낸다.
// Week: 메인페이지. 원과 요일, Score페이지로 갈 수 있는 버튼이 보인다.
// Score: 메인에서 버튼을 누르면 각 요일별로 평점을 줄 수 있는 페이지로 연결된다.
// App: Week와 Score를 모아둔 상위 페이지. 컨테이너라는 큰 틀이 있다.

//score페이지에 요일을 넣기 위해 url파라미터를 사용한다.
const App = () => {
    return (
        <Container>
            <h2 style={{ textAlign: "center" }}>내 일주일은?</h2>
            <Route path="/" exact component={Week} />
            <Route path="/score/:day_name" component={Score} />
        </Container>
    );
};

const Container = styled.div`
    background: aliceblue;
    width: 80vw;
    max-width: 400px;
    height: 50vh;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Noto Sans KR", sans-serif;
`;

export default App;
