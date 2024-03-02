import styled from "styled-components";

export const ClientSection = styled.div`
    background: #ffffff;
    border-radius: 6px;
    padding: px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
`;

export const ClientDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.233);
`;

export const ClientName = styled.h4`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #333;
    margin: 0 0 5px 0;
    svg {
        margin-right: 10px;
    }
`;

export const ClientInfo = styled.p`
    color: #181818;
    font-size: 14px;
    margin: 0;
    display: flex;
    align-items: center;
    svg {
        margin-right: 10px;
    }
`;

export const LetterHeader = styled.h3`
    margin-top: 20px;
    color: #444;
`;

export const Button = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-size: 0.8rem;
    svg {
        margin-right: 5px;
    }
    &:hover {
        background-color: #45a049;
    }
`;