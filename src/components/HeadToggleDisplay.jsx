import React, { useState } from "react";
import styled from "styled-components";

const SubHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e2c07d;
    padding: 4px 16px;
`;
const Container = styled.div`
    width: 100vw;
    max-width: 800px;
`;
const ButtonContainer = styled.div`
    width: "100vw";
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Underline = styled.div`
    background-color: #e2c07d;
    width: 100px;
    height: 2px;
`;

const Button = styled.button`
    background-color: ${(props) => (props.$active ? "#000" : "transparent")};
    color: ${(props) => (props.$active ? "#fff" : "#000")};
    border: none;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    outline: none;
    font-size: 16px;

    &:hover {
        background-color: ${(props) => (props.$active ? "#000" : "#ddd")};
    }
`;

const ToggleDisplayComponent = ({ agendaComponent, estoqueComponent }) => {
    const [activeTab, setActiveTab] = useState("agenda");

    return (
        <>
            <SubHeader>
                <Container>
                    <ButtonContainer>
                        <Button
                            $active={activeTab === "agenda"}
                            onClick={() => setActiveTab("agenda")}
                        >
                            Agenda
                            <Underline></Underline>
                        </Button>
                        <Button
                            $active={activeTab === "estoque"}
                            onClick={() => setActiveTab("estoque")}
                        >
                            Estoque
                            <Underline></Underline>
                        </Button>
                    </ButtonContainer>
                </Container>
            </SubHeader>
            {activeTab === "agenda" ? agendaComponent : estoqueComponent}
        </>
    );
};

export default ToggleDisplayComponent;
