import { plans } from "../../responses/plans";
import styled from "styled-components";
import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import ModalBase from "../modals/BasedModal";
import { useForm } from "react-hook-form";

const ContentScreen = styled.div`
    background: #f7f7f7; /* Cor de fundo mais suave */
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    overflow-y: auto;
    max-height: 80vh;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); /* Sombra mais suave */
`;

const PlanDetails = styled.div`
    background: #fff; /* Fundo branco para os cards */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    padding: 15px; /* Padding interno para os cards */
    border-radius: 8px; /* Bordas arredondadas para os cards */
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave para os cards */
`;

const PlanName = styled.h4`
    font-size: 18px; /* Ajuste no tamanho da fonte */
    color: #333; /* Cor mais escura para o texto */
    margin-bottom: 8px;
`;

const PlanInfo = styled.p`
    font-size: 14px;
    color: #666; /* Cor mais suave para o texto */
    margin-bottom: 4px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 10px; /* Espaçamento para os botões na parte inferior */
`;

const ServiceButton = styled.button`
    background: #007bff; /* Cor de fundo para os botões */
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px; /* Padding para os botões */
    border-radius: 5px; /* Bordas arredondadas para os botões */
    color: white; /* Cor do texto para os botões */
    margin-left: 10px;

    &:first-child {
        margin-left: 0;
    }

    svg {
        margin-right: 5px; /* Espaçamento entre o ícone e o texto, se necessário */
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
        // Aqui você implementaria a lógica para atualizar os dados do plano
        // Após a atualização, você pode resetar o estado de edição
        setEditingId(null);
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>Meus Planos</h2>
                {plans.map((plan) => (
                    <PlanDetails key={plan.id} as="form" onSubmit={handleSubmit(submitEdit)}>
                        {editingId === plan.id ? (
                            <>
                                <EditableInput defaultValue={plan.name} {...register("name")} />
                                <EditableInput defaultValue={plan.description} {...register("description")} />
                                <EditableInput type="number" defaultValue={plan.price} {...register("price")} />
                                <EditableInput type="number" defaultValue={plan.service_quota} {...register("service_quota")} />
                                <EditableInput type="number" defaultValue={plan.expires_in} {...register("expires_in")} />
                                <ButtonsContainer>
                                    <ServiceButton type="submit">Salvar</ServiceButton>
                                    <ServiceButton type="button" onClick={() => setEditingId(null)}>Cancelar</ServiceButton>
                                </ButtonsContainer>
                            </>
                        ) : (
                            <>
                                <PlanName>{plan.name}</PlanName>
                                <PlanInfo>Descrição: {plan.description}</PlanInfo>
                                <PlanInfo>Preço: R${plan.price.toFixed(2)}</PlanInfo>
                                <PlanInfo>Cotas de serviço: {plan.service_quota}</PlanInfo>
                                <PlanInfo>Validade: {plan.expires_in} dias</PlanInfo>
                                <PlanInfo>Criado em: {new Date(plan.created_at).toLocaleDateString()}</PlanInfo>
                                <PlanInfo>Última atualização: {plan.updated_at ? new Date(plan.updated_at).toLocaleDateString() : 'N/A'}</PlanInfo>
                                <ButtonsContainer>
                                    <ServiceButton type="button" onClick={() => startEditing(plan)}>
                                        <RiEdit2Line size={20} /> Editar
                                    </ServiceButton>
                                    <ServiceButton type="button">
                                        <RiDeleteBinLine size={20} /> Excluir
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