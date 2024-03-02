import React, { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import ModalBase from "../../BasedModal";
import ContactEditor from "../ContactEditor";
import {
    DescriptionContainer,
    DescriptionKey,
    DescriptionValue,
    ContentScreen,
    CardHeader,
    ClientName,
    DateContainer,
    ClientDateKey,
    ClientDateValue,
    ClientInfoKey,
    ClientInfoValue,
    ClientSection,
    ClientInfoContainer,
    ContactClientContainer,
    ClientInfo,
    ClientPlanInfo,
    PlanContainer,
    PlanClientInfo,
    PlanTag,
    ActionButtons,
    Panel,
    buttonStyles,
    CallButton,
    ChatButton,
    DeleteButton,
    EditButton,
} from "./styles";
const ClientModal = ({ isOpen, onClose, client }) => {
    const [showContactEditor, setShowContactEditor] = useState(false);
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
            <ContactEditor
                isOpen={showContactEditor}
                onClose={() => setShowContactEditor(false)}
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
                        <EditButton onClick={() => setShowContactEditor(true)}>
                            <RiEdit2Line /> Editar
                        </EditButton>
                    </Panel>
                </ClientSection>
            </ContentScreen>
        </ModalBase>
    );
};

export default ClientModal;
