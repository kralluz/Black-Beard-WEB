import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormGroup,
    ServiceNameLabel,
    ServiceNameInput,
    Input,
    Label,
    TextareaContainer,
    TextareaLabel,
    TextareaInput,
    ButtonContainer,
    Button,
    CancelButton,
} from "./styles";

const ServiceForm = ({ onSubmit, onCancel, initialValues }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: initialValues,
    });

    useEffect(() => {
        if (initialValues) {
            Object.entries(initialValues).forEach(([key, value]) => {
                setValue(key, value);
            });
        }
    }, [initialValues, setValue]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ServiceNameLabel htmlFor="name">Nome:</ServiceNameLabel>
            <ServiceNameInput autoFocus {...register("name")} required />

            <FormGroup>
                <Label htmlFor="price">Valor R$ </Label>
                <Input {...register("price")} required />
            </FormGroup>

            <TextareaLabel htmlFor="description">
                Descrição do Serviço:
            </TextareaLabel>
            <TextareaInput {...register("description")} required />

            <ButtonContainer>
                <CancelButton type="button" onClick={onCancel}>
                    Cancelar
                </CancelButton>
                <Button type="submit">Salvar</Button>
            </ButtonContainer>
        </Form>
    );
};

export default ServiceForm;
