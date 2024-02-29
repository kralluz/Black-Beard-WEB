import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ModalBase from "../modals/BasedModal";
import {
    EditableContainer,
    PlanNameInput,
    EditableInput,
    TextareaInput,
    TextareaContainer,
    ServiceButton,
    ButtonsContainer,
    Label,
    TextareaLabel,
    
} from "./StyledComponents.js"; // Estilos compartilhados

const ScreenPlanEdit = ({ isOpen, onClose, plan }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: plan,
    });

    const submitEdit = (data) => {
        onClose(); // Feche o modal após salvar
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(submitEdit)}>
                <EditableContainer>
                    <PlanNameInput {...register("name")} />
                </EditableContainer>
                <EditableContainer>
                    <Label>Valor: R$</Label>
                    <EditableInput {...register("price")} />
                </EditableContainer>
                <EditableContainer>
                    <Label>Cotas de serviço:</Label>
                    <EditableInput {...register("service_quota")} />
                </EditableContainer>
                <EditableContainer>
                    <Label>Validade:</Label>
                    <EditableInput {...register("expires_in")} />
                </EditableContainer>
                <TextareaContainer>
                    <TextareaLabel>Descrição:</TextareaLabel>
                    <TextareaInput {...register("description")} />
                </TextareaContainer>
                <ButtonsContainer>
                    <ServiceButton type="submit">Salvar</ServiceButton>
                    <ServiceButton type="button" onClick={onClose}>
                        Cancelar
                    </ServiceButton>
                </ButtonsContainer>
            </form>
        </ModalBase>
    );
};

export default ScreenPlanEdit;
