import { plans } from "../../responses/plans";
import styled from "styled-components";
import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import ModalBase from "../modals/BasedModal";
import { useForm } from "react-hook-form";
import { MdFormatListBulletedAdd, MdDescription  } from "react-icons/md";
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

const ContentScreen = styled.div`
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    overflow-y: auto;
    max-height: 80vh;
    width: 100%;
    
    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
`;

const PlanDetails = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const PlanName = styled.h4`
    font-size: 24px;
    color: #333;
    margin-bottom: 8px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
`;

const MainContent = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
`;
const FooterContent = styled.p`
    font-size: 12px;
    color: #666;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 10px;
`;

const ServiceButton = styled.button`
    background: #007bff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    border-radius: 5px;
    color: white;
    margin-left: 10px;

    &:first-child {
        margin-left: 0;
    }

    svg {
        margin-right: 5px;
    }
`;

const EditableInput = styled.input`
    padding: 8px;
    margin-bottom: 4px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
`;

const ScreenPlan = ({ isOpen, onClose }) => {
    const [editingId, setEditingId] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const startEditing = (plan) => {
        setEditingId(plan.id);
        reset(plan); // Inicializa o formulário com os dados do plano
    };

    const submitEdit = (data) => {
        console.log(data);

        setEditingId(null);
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2 style={{ color: "#333", marginBottom: "20px" }}>
                    <FaCalendarAlt /> Meus Planos
                </h2>
                {plans.map((plan) => (
                    <PlanDetails
                        key={plan.id}
                        as="form"
                        onSubmit={handleSubmit(submitEdit)}
                    >
                        {editingId === plan.id ? (
                            <>
                                <EditableInput
                                    defaultValue={plan.name}
                                    {...register("name")}
                                />
                                <EditableInput
                                    defaultValue={plan.description}
                                    {...register("description")}
                                />
                                <EditableInput
                                    type="number"
                                    defaultValue={plan.price}
                                    {...register("price")}
                                />
                                <EditableInput
                                    type="number"
                                    defaultValue={plan.service_quota}
                                    {...register("service_quota")}
                                />
                                <EditableInput
                                    type="number"
                                    defaultValue={plan.expires_in}
                                    {...register("expires_in")}
                                />
                                <ButtonsContainer>
                                    <ServiceButton type="submit">
                                        Salvar
                                    </ServiceButton>
                                    <ServiceButton
                                        type="button"
                                        onClick={() => setEditingId(null)}
                                    >
                                        Cancelar
                                    </ServiceButton>
                                </ButtonsContainer>
                            </>
                        ) : (
                            <>
                                <PlanName>{plan.name}</PlanName>

                                <MainContent>
                                    <FaMoneyBillWave /> Valor: R$
                                    {plan.price.toFixed(2)}
                                </MainContent>
                                <MainContent>
                                    <FaHashtag /> Cotas de serviço: {plan.service_quota}
                                </MainContent>
                                <FooterContent>
                                    <MdDescription/> Descrição: {plan.description}
                                </FooterContent>
                                <FooterContent>
                                    <FaRegCalendarAlt /> Validade:{" "}
                                    {plan.expires_in} dias
                                </FooterContent>
                                <FooterContent>
                                    <MdFormatListBulletedAdd /> Criado em:{" "}
                                    {new Date(
                                        plan.created_at
                                    ).toLocaleDateString()}
                                </FooterContent>
                                <FooterContent>
                                    <FaHistory /> Última atualização:{" "}
                                    {plan.updated_at
                                        ? new Date(
                                              plan.updated_at
                                          ).toLocaleDateString()
                                        : "N/A"}
                                </FooterContent>
                                <ButtonsContainer>
                                    <ServiceButton type="button">
                                        <RiDeleteBinLine size={20} /> Excluir
                                    </ServiceButton>
                                    <ServiceButton
                                        type="button"
                                        onClick={() => startEditing(plan)}
                                    >
                                        <RiEdit2Line size={20} /> Editar
                                    </ServiceButton>
                                </ButtonsContainer>
                            </>
                        )}
                    </PlanDetails>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenPlan;
