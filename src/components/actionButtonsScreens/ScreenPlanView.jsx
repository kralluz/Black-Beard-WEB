import React from "react";
import { plans } from "../../responses/plans";
import ModalBase from "../modals/BasedModal";
import {
    ContentScreen,
    PlanDetails,
    PlanName,
    MainContent,
    FooterContent,
    ButtonsContainer,
    ServiceButton,
    DescriptionContainer,
    DescriptionKey,
    DescriptionValue,
} from "./StyledComponents.js"; // Assumindo que você extraiu os estilos para um arquivo separado

const ScreenPlanView = ({ isOpen, onClose, onEdit }) => {
    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2 style={{ color: "#333", marginBottom: "20px" }}>
                    Meus Planos
                </h2>
                {plans.map((plan) => (
                    <PlanDetails key={plan.id}>
                        <PlanName>{plan.name}</PlanName>
                        <MainContent>
                            Valor: R${plan.price.toFixed(2)}
                        </MainContent>
                        <MainContent>
                            Cotas de serviço: {plan.service_quota}
                        </MainContent>
                        <MainContent>
                            Validade: {plan.expires_in} dias
                        </MainContent>
                        <DescriptionContainer>
                            <DescriptionKey>Descrição:</DescriptionKey>
                            <DescriptionValue>
                                {plan.description}
                            </DescriptionValue>
                        </DescriptionContainer>
                        <FooterContent>
                            Criado em:{" "}
                            {new Date(plan.created_at).toLocaleDateString()}
                        </FooterContent>
                        <FooterContent>
                            Última atualização:{" "}
                            {plan.updated_at
                                ? new Date(plan.updated_at).toLocaleDateString()
                                : "N/A"}
                        </FooterContent>
                        <ButtonsContainer>
                            <ServiceButton
                                type="button"
                                onClick={() => onEdit(plan)}
                            >
                                Editar
                            </ServiceButton>
                        </ButtonsContainer>
                    </PlanDetails>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenPlanView;
