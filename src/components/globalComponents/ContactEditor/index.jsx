import React from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { FaWhatsapp, FaPhoneAlt, FaSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import ModalBase from "../../BasedModal";
import {
    CardHeader,
    DateContainer,
    ClientDateKey,
    ClientDateValue,
    ClientInfoKey,
    ClientInfoContainer,
    ContactClientContainer,
    DescriptionContainer,
    DescriptionKey,
    PlanContainer,
    PlanTag,
    ActionButtons,
    Panel,
    CallButton,
    ChatButton,
    DeleteButton,
    EditButton,
    ModalContainer,
    ModalContent,
    ModalForm,
    ModalFormGroup,
    ModalInputName,
    ModalInput,
    ModalTextarea,
} from "./styles";

const ContactEditor = ({ isOpen, onClose, client }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {};

    const handleMakeCall = () => {
        window.location.href = `tel:${client.phone}`;
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/${client.phone}`;
        window.open(url, "_blank");
    };

    const formattedDate = new Date(client.created_at).toLocaleDateString(
        "pt-BR",
        {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }
    );
    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ModalContainer>
                <ModalContent>
                    <ModalForm onSubmit={handleSubmit(onSubmit)}>
                        <ModalFormGroup>
                            <CardHeader>
                                <ModalInputName
                                    defaultValue={client.name}
                                    type="text"
                                    {...register("name")}
                                />
                                <DateContainer>
                                    <ClientDateKey>Adicionado em</ClientDateKey>
                                    <ClientDateValue>
                                        {formattedDate}
                                    </ClientDateValue>
                                </DateContainer>
                            </CardHeader>
                        </ModalFormGroup>
                        <ModalFormGroup>
                            <ContactClientContainer>
                                <ClientInfoContainer>
                                    <ClientInfoKey>Telefone:</ClientInfoKey>
                                    <ModalInput
                                        autoFocus
                                        defaultValue={client.phone}
                                        type="text"
                                        {...register("phone")}
                                    />
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
                        </ModalFormGroup>
                        <DescriptionContainer>
                            <DescriptionKey>Descrição:</DescriptionKey>
                            <ModalTextarea
                                defaultValue={client.description}
                                {...register("notes")}
                            />
                        </DescriptionContainer>
                        <PlanContainer>
                            <div>
                                <DescriptionKey>
                                    Plano Cadastrado:
                                </DescriptionKey>
                                <PlanTag>{client.plan.name}</PlanTag>{" "}
                            </div>
                            <div>
                                <DateContainer>
                                    <ClientDateKey>Vencerá dia:</ClientDateKey>
                                    <ClientDateValue>27/2/2023</ClientDateValue>
                                </DateContainer>
                            </div>
                        </PlanContainer>
                        <Panel>
                            <DeleteButton onClick={onClose}>
                                <RiDeleteBinLine /> Cancelar
                            </DeleteButton>
                            <EditButton onClick={onClose}>
                                <FaSave /> Salvar
                            </EditButton>
                        </Panel>
                    </ModalForm>
                </ModalContent>
            </ModalContainer>
        </ModalBase>
    );
};

export default ContactEditor;
