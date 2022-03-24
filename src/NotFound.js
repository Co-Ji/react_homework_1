import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NotFound = (props) => {
    const history = useHistory();

    return (
        <>
            <h1 style={{ fontSize: "20px" }}>url 주소를 확인해 주세요!</h1>
            <GoBack
                onClick={() => {
                    history.push("/");
                }}
            >
                CLICK !
            </GoBack>
        </>
    );
};

const GoBack = styled.button`
    background-color: lavender;
    width: 80px;
    height: 40px;
    margin: 20px auto 0px auto;
    border: 2px solid transparent;
    border-radius: 10px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;

    &:hover {
        cursor: pointer;
        border: 1px solid deepskyblue;
        border-radius: 15px;
    }
`;

export default NotFound;
