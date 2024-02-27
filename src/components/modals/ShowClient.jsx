import React, { useState } from "react";
import styled, { css } from "styled-components";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import ModalBase from "../modals/BasedModal";
import EditClientModal from "./EditClientModal.jsx";

const ContentScreen = styled.div`
    border-radius: 10px;
    margin: 0 auto;
    overflow-y: auto;
    @media (max-width: 768px) {
        padding: 0px;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
    padding-bottom: 10px;
`;

const ClientName = styled.h4`
    font-size: 32px;
    color: #333;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;
const ClientDateKey = styled.span`
    font-size: 14px;
    color: #181818;
    font-weight: 500;
`;
const ClientDateValue = styled.span`
    font-size: 14px;
    color: #181818;
`;
const ClientInfoKey = styled.span`
    font-size: 20px;
    color: #181818;
    font-weight: 600;
`;
const ClientInfoValue = styled.span`
    font-size: 20px;
    color: #181818;
`;

const ClientSection = styled.div`
    background: #ffffff;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const ClientInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

const ContactClientContainer = styled.div`
    display: flex;
`;

const ClientInfo = styled.div`
    font-size: 16px;
    color: #181818;

    @media (max-width: 768px) {
        font-size: 14px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;

export const DescriptionContainer = styled.div`
    width: 100%;
`;

export const DescriptionKey = styled.p`
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
`;

export const DescriptionValue = styled.p`
    border: none;
    width: 100%;
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
    padding: 10px;
    box-sizing: border-box;
    resize: vertical;
    min-height: 70px;
    line-height: 1.5;
    border-radius: 5px;
    resize: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &:focus {
        outline: none;
        border-bottom: 1px solid #007bff;
        box-shadow: 0 1px 3px rgba(0, 123, 255, 0.3);
    }

    &::placeholder {
        color: #181818;
    }
`;

const ClientPlanInfo = styled.p`
    margin: 5px 0;
    font-size: 16px;
    color: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 14px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;

const PlanContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
`;
const PlanClientInfo = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
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
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }
`;

const Panel = styled.div`
    display: flex;
    width: 100%;
    gap: 20%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const buttonStyles = css`
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    svg {
        margin-right: 5px;
    }
    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;

const CallButton = styled.button`
    ${buttonStyles}
    background-color: #4CAF50;
    @media (max-width: 768px) {
        padding: 8px 12px;
        margin: 5px;
    }
`;

const ChatButton = styled.button`
    ${buttonStyles}
    background-color: #008cffc9;
    @media (max-width: 768px) {
        padding: 8px 12px;
        margin: 5px;
    }
`;

const DeleteButton = styled.button`
    ${buttonStyles}
    background-color: #F44336;
    @media (max-width: 768px) {
        padding: 10px 16px;
    }
`;

const EditButton = styled.button`
    ${buttonStyles}
    background-color: #FFEB3B;
    color: #000000;
    font-weight: 600;
    @media (max-width: 768px) {
        padding: 10px 16px;
    }
`;

const ClientModal = ({ isOpen, onClose, client }) => {
    const [showEditClientModal, setShowEditClientModal] = useState(false);
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

    const formattedDate = new Date(client.created_at).toLocaleDateString(
        "pt-BR",
        {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }
    );
    const handleMakeCall = () => {
        window.location.href = `tel:${client.phone}`;
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/${client.phone}`;
        window.open(url, "_blank");
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <EditClientModal
                isOpen={showEditClientModal}
                onClose={() => setShowEditClientModal(false)}
                client={client}
            />
            <ContentScreen>
                <ClientSection>
                    <CardHeader>
                        <ClientName>{client.name}</ClientName>
                        <DateContainer>
                            <ClientDateKey>Adicionado em</ClientDateKey>
                            <ClientDateValue>{formattedDate}</ClientDateValue>
                        </DateContainer>
                    </CardHeader>

                    <ContactClientContainer>
                        <ClientInfoContainer>
                            <ClientInfoKey>Telefone:</ClientInfoKey>
                            <ClientInfoValue>{client.phone}</ClientInfoValue>
                        </ClientInfoContainer>
                        <ActionButtons>
                            <ChatButton onClick={openWhatsApp}>
                                <FaWhatsapp /> Conversar
                            </ChatButton>
                            <CallButton onClick={handleMakeCall}>
                                <FaPhoneAlt /> Ligar
                            </CallButton>
                        </ActionButtons>
                    </ContactClientContainer>
                    <DescriptionContainer>
                        <DescriptionKey>Descrição:</DescriptionKey>
                        <DescriptionValue>
                            {client.description}
                        </DescriptionValue>
                    </DescriptionContainer>
                    <PlanContainer>
                        <div>
                            <DescriptionKey>Plano Cadastrado:</DescriptionKey>
                            <PlanTag>{clientPlan.name}</PlanTag>{" "}
                        </div>
                        <div>
                            <DateContainer>
                                <ClientDateKey>Vencerá dia:</ClientDateKey>
                                <ClientDateValue>27/2/2023</ClientDateValue>
                            </DateContainer>
                        </div>
                    </PlanContainer>
                    <Panel>
                        <DeleteButton>
                            <RiDeleteBinLine /> Excluir
                        </DeleteButton>
                        <EditButton onClick={() =>setShowEditClientModal(true)}>
                            <RiEdit2Line /> Editar
                        </EditButton>
                    </Panel>
                </ClientSection>
            </ContentScreen>
        </ModalBase>
    );
};

export default ClientModal;
