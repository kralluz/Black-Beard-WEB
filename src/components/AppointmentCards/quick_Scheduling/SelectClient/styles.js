import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-top: 20px;
`;

export const StyledInput = styled.input`
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

export const SuggestionsContainer = styled.div`
    position: absolute;
    top: calc(100% + 5px); /* Posiciona a lista abaixo do campo de entrada */
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
    z-index: 999; /* Garante que a lista esteja acima dos outros elementos */
`;

export const SuggestionItem = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;
