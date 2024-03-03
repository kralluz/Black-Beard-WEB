import React, { useState } from "react";
import ModalBase from "../../../BasedModal.jsx";
import CreatePlanScreen from "../CreatePlanScreen/index.jsx";
import PlansScreenEdit from "../ScreenPlanEdit";
import { plans } from "../../../../responses/plans.js";

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
    DeleteButton,
} from "./styles";

import {
    RiEdit2Line,
    RiDeleteBinLine
} from "react-icons/ri";

import {
    MdFormatListBulletedAdd,
    MdDescription,
    MdOutlineEditNote,
} from "react-icons/md";

import {
    FaRegCalendarAlt,
    FaPlus,
    FaMoneyBillWave,
    FaHistory,
    FaSpa,
    FaCalendarAlt,
    FaRedo,
    FaShoppingCart,
    FaSortNumericDown,
    FaHashtag,
} from "react-icons/fa";

const PlansScreen = ({ isOpen, onClose }) => {
    const [isViewOpen, setViewOpen] = useState(true);
    const [isEditOpen, setEditOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isCreateOpen, setCreateOpen] = useState(false);

    const handleEdit = (plan) => {
        setSelectedPlan(plan);
        setEditOpen(true);
    };

    const handleDelete = (planId) => {};

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2 style={{ color: "#333", marginBottom: "20px" }}>
                    Meus Planos
                </h2>
                <ServiceButton
                    type="button"
                    onClick={() => setCreateOpen(true)} // Abre o modal de criação
                >
                    <FaPlus size={20} /> Adicionar um plano
                </ServiceButton>
                <CreatePlanScreen
                    isOpen={isCreateOpen}
                    onClose={() => setCreateOpen(false)}
                />
                {plans.map((plan) => (
                    <PlanDetails key={plan.id}>
                        {isEditOpen && selectedPlan === plan && (
                            <PlansScreenEdit
                                isOpen={isEditOpen}
                                onClose={() => setEditOpen(false)}
                                plan={selectedPlan}
                            />
                        )}
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
                            <DeleteButton
                                type="button"
                                onClick={() => handleDelete(plan.id)}
                            >
                                <RiDeleteBinLine size={20} /> Excluir
                            </DeleteButton>
                            <ServiceButton
                                type="button"
                                onClick={() => handleEdit(plan)}
                            >
                                <RiEdit2Line size={20} /> Editar
                            </ServiceButton>
                        </ButtonsContainer>
                    </PlanDetails>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default PlansScreen;
