import styled from "styled-components";
import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import ModalBase from "../modals/BasedModal";

const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
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

    const servicePlans = [
        { name: "Corte de Cabelo", price: 50, description: "Corte moderno e estilizado" },
        { name: "Barba", price: 30, description: "Barba bem feita e aparada" },
        { name: "Sobrancelha", price: 20, description: "Design de sobrancelha perfeito" },
        { name: "Pigmentação", price: 80, description: "Coloração de cabelo personalizada" },
        { name: "Hidratação", price: 40, description: "Tratamento para cabelos secos" },
        { name: "Corte Afro", price: 60, description: "Corte especializado para cabelos afro" },
        { name: "Corte Social", price: 45, description: "Corte clássico e elegante" },
        { name: "Coloração", price: 70, description: "Coloração de cabelo em diferentes tons" },
    ];

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Meus Planos</h2>
                <h3>Planos de Serviço:</h3>
                {servicePlans.map((plan, index) => (
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
