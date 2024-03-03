import React from "react";
import { useForm } from "react-hook-form";
import ModalBase from "../../../BasedModal";

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
} from "./styles";

const CreatePlanScreen = ({ isOpen, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        onClose();
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <EditableContainer>
                    <PlanNameInput
                        {...register("name", { required: true })}
                        placeholder="Nome do Plano"
                    />
                </EditableContainer>
                {errors.name && <span>O nome do plano é obrigatório</span>}

                <EditableContainer>
                    <Label>Valor: R$</Label>
                    <EditableInput {...register("price", { required: true })} />
                </EditableContainer>
                {errors.price && <span>O preço é obrigatório</span>}

                <EditableContainer>
                    <Label>Cotas de serviço:</Label>
                    <EditableInput
                        {...register("service_quota", { required: true })}
                    />
                </EditableContainer>
                {errors.service_quota && (
                    <span>A cota de serviço é obrigatória</span>
                )}

                <EditableContainer>
                    <Label>Validade:</Label>
                    <EditableInput
                        {...register("expires_in", { required: true })}
                    />
                </EditableContainer>
                {errors.expires_in && <span>A validade é obrigatória</span>}

                <TextareaContainer>
                    <TextareaLabel>Descrição:</TextareaLabel>
                    <TextareaInput {...register("description")} />
                </TextareaContainer>
                {/* A descrição não é obrigatória, então não precisa de validação de erro */}

                <ButtonsContainer>
                    <ServiceButton type="submit">Criar Plano</ServiceButton>
                    <ServiceButton type="button" onClick={onClose}>
                        Cancelar
                    </ServiceButton>
                </ButtonsContainer>
            </form>
        </ModalBase>
    );
};

export default CreatePlanScreen;