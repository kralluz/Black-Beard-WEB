import styled from "styled-components";
import ModalBase from "../../modals/BasedModal";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    font-size: 20px;
    gap: 4px;
`;

export const ServiceNameLabel = styled.label`
    font-size: 18px;
    font-weight: 700;
    color: #181818;
    font-family: "Roboto", sans-serif;
    padding: 0px;
    margin: 0px;
    flex-wrap: rap;
`;

export const ServiceNameInput = styled.input`
    border-radius: 4px;
    margin: 0px;
    padding: 0px;
    text-indent: 10px;
    border: none;
    width: 100%;
    background-color: transparent;
    margin-bottom: 8px;
    font-size: 28px;
    color: #333;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    box-shadow: 2px 3px 13px 0px #ccc;
    border-radius: 5px; /* Bordas levemente arredondadas para um visual moderno */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Sutil sombra para destaque */

    &:focus {
        outline: none;
    }
`;
export const Input = styled.input`
    border: none;
    font-size: 20px;
    color: #181818;
    padding: 0px;
    width: 10%;
    box-shadow: 2px 3px 13px 0px #ccc;
    border-radius: 4px;
    border: none; /* Remove a borda padrão */
    text-align: center;
    background-color: transparent; /* Fundo transparente para se integrar a qualquer fundo */
    border-radius: 5px; /* Bordas levemente arredondadas para um visual moderno */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Sutil sombra para destaque */

    &:focus {
        outline: none;
        box-shadow: 2px 3px 6px #ccc;
    }
`;

export const Label = styled.label`
    font-weight: bold;
`;

export const TextareaContainer = styled.div`
    width: 100%;
`;
export const TextareaLabel = styled.label`
    font-size: 16px;
    color: #181818;
    font-family: "Roboto", sans-serif;
    padding: 0px;
    margin: 0px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: rap;
    white-space: nowrap;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
    padding: 0px;
`;

export const TextareaInput = styled.textarea`
    border: none; /* Remove a borda padrão */
    width: 100%; /* Garante que ocupe toda a largura disponível */
    background-color: transparent; /* Fundo transparente para se integrar a qualquer fundo */
    font-size: 16px; /* Tamanho da fonte para legibilidade */
    color: #181818; /* Cor do texto */
    margin-bottom: 4px; /* Margem inferior para espaçamento */
    font-family: "Roboto", sans-serif; /* Família da fonte */
    padding: 10px; /* Adiciona um pouco de espaço interno para melhorar a legibilidade */
    box-sizing: border-box; /* Garante que o padding não adicione largura ao elemento */
    resize: vertical; /* Permite ao usuário redimensionar o textarea apenas verticalmente */
    min-height: 100px; /* Altura mínima para garantir espaço suficiente para o texto */
    line-height: 1.5; /* Espaçamento entre linhas para melhor legibilidade */
    border-radius: 5px; /* Bordas levemente arredondadas para um visual moderno */
    resize: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Sutil sombra para destaque */

    &:focus {
        outline: none; /* Remove o contorno padrão ao focar */
        box-shadow: 2px 3px 6px #ccc; /* Sutil sombra para destaque */
    }

    &::placeholder {
        color: #181818; /* Cor do texto do placeholder para contraste suave */
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
`;

export const CancelButton = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #dc3545;
    color: white;
`;
