import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Input = styled.input`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    &:disabled {
        cursor: not-allowed;
    }
`;

export const TextArea = styled(Input).attrs({ as: "textarea" })``;

export const Button = styled.button`
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    background-color: ${({ buttonType }) => {
        switch (buttonType) {
            case "negative":
                return "#e74c3c"; // Vermelho para ações negativas/destrutivas
            case "positive":
                return "#3498db"; // Verde para salvar, criar, concluir
            case "neutral":
                return "#2ecc71"; // Azul para ligar, conversar, acessar
            default:
                return "#002842"; // Cinza como cor padrão
        }
    }};
`;

export const FormGroup = styled.div`
`;
export const ButtonsContainer = styled.div`
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const FormLabel = styled.label`
    margin-bottom: 0.5rem;
    display: inline-block;
`;
export const FormDescriptionKey = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const DataDisplay = styled.p`
    font-weight: 600;
    padding: 8px;
    border-radius: 4px;
`;

export const ServiceTag = styled.div`
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: #17202a;
    padding: 5px 10px;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? "#f4d03f" : "#f9e79f")};
    &:hover {
        background-color: #f4d03f;
    }
`;
export const TotalValue = styled.p`
    padding-top: 1rem;
    font-weight: bold;
    font-size: 24px;
    color: #2c3e50;
`;

export const ServicesContainer = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;

`;
