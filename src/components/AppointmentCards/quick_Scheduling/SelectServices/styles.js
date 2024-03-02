import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-top: 20px;
`;

export const Select = styled.select`
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Button = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:first-child {
        background-color: #f44336; // Vermelho
        color: white;
    }

    &:last-child {
        background-color: #4caf50; // Verde
        color: white;
    }
`;