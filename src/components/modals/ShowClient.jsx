import React from "react";
import styled, { css } from "styled-components";
import ModalBase from "../modals/BasedModal";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContentScreen = styled.div`
    border-radius: 10px;
    margin: 0 auto;
    overflow-y: auto;
    width: 100%;
    padding: 20px;
    max-width: 600px;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const ClientSection = styled.div`
    background: #ffffff;
    border-radius: 6px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

const ClientName = styled.h4`
    margin: 0 0 10px 0;
    font-size: 24px;
    color: #333;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const ClientPlanInfo = styled.p`
    margin: 5px 0;
    font-size: 16px;
    color: #666;
    display: flex;
    align-items: start;
    flex-direction: column;
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.1);


    @media (max-width: 768px) {
        font-size: 14px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;
const ClientInfo = styled.p`
    margin: 5px 0;
    font-size: 16px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        font-size: 14px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;

const PlanTag = styled.span`
    display: inline-block;
    background-color: #9b27b0b1;
    color: #ffffff;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: 400;
`;

const ActionButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }
`;

const buttonStyles = css`
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin: 10px;
    svg {
        margin-right: 5px;
    }
    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        padding: 6px 10px;
        margin: 5px;
        font-size: 14px;
    }
`;

const CallButton = styled.button`
    ${buttonStyles}
    background-color: #4CAF50;
`;

const ChatButton = styled.button`
    ${buttonStyles}
    background-color: #008cffc9;
`;

const DeleteButton = styled.button`
    ${buttonStyles}
    background-color: #F44336;
`;

const EditButton = styled.button`
    ${buttonStyles}
    background-color: #FFEB3B;
    color: #333;
    font-weight: 500;
`;
const ClientModal = ({ isOpen, onClose, client }) => {
    const clientPlan = {
        id: 2,
        user_id: 102,
        name: "Plano Mensal",
        description: "Inclui cortes de cabelo e barba por mês.",
        price: 180.0,
        service_quota: 5,
        expires_in: 30,
        created_at: "2023-01-02T00:00:00Z",
        updated_at: null,
    };

    const handleMakeCall = () => {
        window.location.href = `tel:${client.phone}`;
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/${client.phone}`;
        window.open(url, "_blank");
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <ClientSection>
                    <ClientName>{client.name}</ClientName>
                    <ClientInfo>
                        <strong>Email:</strong> {client.email}
                    </ClientInfo>
                        <ClientInfo>
                            <strong>Telefone:</strong> {client.phone}
                        </ClientInfo>
                            <ActionButtons>
                                <ChatButton onClick={openWhatsApp}>
                                    <FaWhatsapp /> Conversar
                                </ChatButton>
                                <CallButton onClick={handleMakeCall}>
                                    <FaPhoneAlt /> Ligar
                                </CallButton>
                            </ActionButtons>
                    <ClientInfo>
                        <strong>Descrição:</strong> {client.description}
                    </ClientInfo>
                    <ClientPlanInfo>
                        <strong>Planos cadastrados</strong>
                        <PlanTag>{clientPlan.name}</PlanTag>{" "}
                        <strong>
                            Adicionado em:{" "}
                            {new Date(
                                clientPlan.created_at
                            ).toLocaleDateString()}
                        </strong>{" "}
                    </ClientPlanInfo>
                    <ClientInfo>
                        <strong>Data de Expiração do Plano: 2/2023</strong>{" "}
                    </ClientInfo>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            gap: "20%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <DeleteButton>
                            <RiDeleteBinLine /> Excluir
                        </DeleteButton>
                        <EditButton>
                            <RiEdit2Line /> Editar
                        </EditButton>
                    </div>
                </ClientSection>
            </ContentScreen>
        </ModalBase>
    );
};

export default ClientModal;
