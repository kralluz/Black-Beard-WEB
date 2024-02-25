import services from "../../responses/services";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ModalBase from "./BasedModal";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Input = styled.input`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    &:disabled {
        background-color: #f2f2f2;
        cursor: not-allowed;
    }
`;

const TextArea = styled.textarea`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    &:disabled {
        background-color: #f2f2f2;
        cursor: not-allowed;
    }
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

const FormLabel = styled.label`
    margin-bottom: 0.5rem;
    display: inline-block;
`;

const DataDisplay = styled.p`
    padding: 8px;
    background-color: #f2f2f2;
    border-radius: 4px;
`;

const ServiceTag = styled.div`
    display: inline-flex;
    background-color: #f9e79f;
    align-items: center;
    font-weight: 600;
    color: #17202a;
    padding: 5px 10px;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: #f4d03f;
    }
`;

const AppointmentCRUD = ({ isOpen, onClose }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [showServiceError, setShowServiceError] = useState(false);

    const defaultValues = {
        id: 1,
        user_id: 101,
        client: {
            id: 1,
            user_id: 101,
            plan_id: 1,
            name: "João Silva",
            email: "joao.silva@email.com",
            phone: "11987654321",
            description: "Cliente do Plano Básico.",
            created_at: new Date().toISOString(),
            updated_at: null,
        },
        service: [
            {
                id: 1,
                user_id: 101,
                name: "Corte de Cabelo",
                price: 35.0,
                description: "Corte tradicional masculino.",
                created_at: new Date().toISOString(),
                updated_at: null,
            },
        ],
        appointment_time: "2024-02-24T08:00:00.000Z",
        description: "Agendamento de corte de cabelo.",
        created_at: new Date().toISOString(),
        updated_at: null,
    };
    const [selectedServices, setSelectedServices] = useState(
        defaultValues.service.map((service) => service.name)
    );

    const { register, handleSubmit, reset, watch } = useForm({ defaultValues });

    const handleServiceChange = (serviceName) => {
        if (selectedServices.includes(serviceName)) {
            setSelectedServices(
                selectedServices.filter((service) => service !== serviceName)
            );
        } else {
            setSelectedServices([...selectedServices, serviceName]);
        }
    };

    const onSubmit = (data) => {
        if (selectedServices.length === 0) {
            setShowServiceError(true);
            return;
        }
        console.log(data, selectedServices);
        setIsEditable(false); // Desabilita a edição após o submit
    };

    const handleEdit = () => {
        setIsEditable(true);
    };

    const handleDelete = () => {
        console.log("Deletar agendamento");
        onClose(); // Fechar o modal após deletar, opcional
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <h1>CRUD APPOINTMENT</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {isEditable ? (
                    <>
                        <FormGroup>
                            <FormLabel>Cliente</FormLabel>
                            <Input {...register("client.name")} />
                            <Input {...register("client.email")} />
                            <Input {...register("client.phone")} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Descrição</FormLabel>
                            <TextArea {...register("description")} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Serviços</FormLabel>
                            <div
                                style={{
                                    border: showServiceError
                                        ? "1px solid red"
                                        : "none",
                                    padding: "10px",
                                    borderRadius: "5px",
                                }}
                            >
                                {services.map((service) => (
                                    <ServiceTag
                                        key={service.id}
                                        onClick={() =>
                                            handleServiceChange(service.name)
                                        }
                                        style={{
                                            backgroundColor:
                                                selectedServices.includes(
                                                    service.name
                                                )
                                                    ? "#f4d03f"
                                                    : "#f9e79f",
                                        }}
                                    >
                                        {service.name}
                                    </ServiceTag>
                                ))}
                            </div>
                            {showServiceError && (
                                <p style={{ color: "red" }}>
                                    Ao menos um serviço deve ser selecionado
                                </p>
                            )}
                        </FormGroup>
                    </>
                ) : (
                    <>
                        <DataDisplay>{watch("client.name")}</DataDisplay>
                        <DataDisplay>{watch("client.email")}</DataDisplay>
                        <DataDisplay>{watch("client.phone")}</DataDisplay>
                        <DataDisplay>{watch("description")}</DataDisplay>
                        <FormGroup>
                            <FormLabel>Serviços Selecionados</FormLabel>
                            <div>
                                {selectedServices.map((serviceName) => (
                                    <ServiceTag key={serviceName}>
                                        {serviceName}
                                    </ServiceTag>
                                ))}
                            </div>
                        </FormGroup>
                    </>
                )}
                <Button
                    type="button"
                    onClick={handleEdit}
                    disabled={isEditable}
                >
                    Editar
                </Button>
                <Button type="submit" disabled={!isEditable}>
                    Salvar
                </Button>
                <Button type="button" onClick={handleDelete}>
                    Excluir
                </Button>
            </Form>
        </ModalBase>
    );
};

export default AppointmentCRUD;
