import styled from "styled-components";
import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import ModalBase from "../modals/BasedModal";

const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    overflow-y: auto;
    max-height: 80vh;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
`;

const PlanDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
`;

const PlanName = styled.h4`
    font-size: 20px;
    margin-bottom: 10px;
`;

const PlanPrice = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
`;

const PlanDescription = styled.p`
    font-size: 14px;
`;

const PlanContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const ServiceButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

const ScreenPlan = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para adicionar o plano de serviço
    };

    const planOptions = [
        { name: "Plano Básico", price: 50, description: "Acesso aos serviços básicos por 30 dias" },
        { name: "Plano Premium", price: 100, description: "Acesso ilimitado aos serviços" },
        { name: "Plano Empresarial", price: 200, description: "Acesso aos serviços para empresas" },
    ];

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Meus Planos</h2>
                <h3>Planos Disponíveis:</h3>
                {planOptions.map((plan, index) => (
                    <PlanDetails key={index}>
                        <PlanContainer>
                            <div>
                                <PlanName>{plan.name}</PlanName>
                                <PlanDescription>{plan.description}</PlanDescription>
                            </div>
                            <PlanPrice>R${plan.price}</PlanPrice>
                            <div>
                                <ServiceButton>
                                    <RiEdit2Line />
                                </ServiceButton>
                                <ServiceButton>
                                    <RiDeleteBinLine />
                                </ServiceButton>
                            </div>
                        </PlanContainer>
                    </PlanDetails>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenPlan;
