import styled from "styled-components";

export const wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const wrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 200px;

    div h1 {
        font-size: 32px;
        font-weight: bold;
    }
    div h3 {
        font-size: 18px;
        font-weight: bold;
    }
    div h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const wrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
`;

export const wrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3 {
        margin-right: 8px;
    }
    a{
        font-size: 18px;
        color: blue;
        font-weight: bold;
    }
`;

export const wrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin 8px;
`;