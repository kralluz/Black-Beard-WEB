import React, { useState } from "react";
import styled from "styled-components";

// Estilos para os botões
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #e2c07d; // Cor de fundo da barra onde os botões estão
    padding: 8px 16px; // Espaçamento interno da barra
`;

const Button = styled.button`
    background-color: ${(props) => (props.active ? "#000" : "transparent")};
    color: ${(props) => (props.active ? "#fff" : "#000")};
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0 4px; 
    cursor: pointer;
    outline: none;
    font-size: 16px;

    &:hover {
        background-color: ${(props) => (props.active ? "#000" : "#ddd")};
    }
`;


const ToggleDisplayComponent = ({ agendaComponent, estoqueComponent }) => {
    const [activeTab, setActiveTab] = useState("agenda");

    return (
        <div>
            <ButtonContainer>
                <Button
                    active={activeTab === "agenda"}
                    onClick={() => setActiveTab("agenda")}
                >
                    Agenda
                </Button>
                <Button
                    active={activeTab === "estoque"}
                    onClick={() => setActiveTab("estoque")}
                >
                    Estoque
                </Button>
            </ButtonContainer>
            {activeTab === "agenda" ? agendaComponent : estoqueComponent}
        </div>
    );
};

export default ToggleDisplayComponent;
