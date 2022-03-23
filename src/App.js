import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Week from "./Week";
import Score from "./Score";

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
    height: 90vh;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default App;
