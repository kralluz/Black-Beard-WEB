import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import services from "../../../../responses/services";
import ModalBase from "../../../BasedModal";
import ClientContact from "../../../globalComponents/ClientContact";
import {
    Form,
    Input,
    TextArea,
    Button,
    FormGroup,
    ButtonsContainer,
    FormLabel,
    FormDescriptionKey,
    DataDisplay,
    ServiceTag,
    TotalValue,
    ServicesContainer,
} from "./styles";

const AppointmentPanel = ({ isOpen, onClose, client }) => {
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
            {
                id: 2,
                user_id: 101,
                name: "Lavagem de Cabelo",
                price: 20.0,
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
        setIsEditable(false);
    };

    const handleEdit = () => {
        setIsEditable(true);
    };
    const handleDelete = () => {
        alert("Deletar agendamento");
        onClose();
    };
    const toggleEdit = () => {
        setIsEditable(!isEditable);
    };

    const formattedDate = format(
        parseISO(watch("appointment_time")),
        "dd, iiii, 'de' MMMM",
        { locale: ptBR }
    );
    const calculateTotal = () => {
        return defaultValues.service.reduce(
            (acc, service) => acc + service.price,
            0
        );
    };

    const total = calculateTotal();
    const valorFormatado = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <h1>{formattedDate}</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {isEditable ? (
                    <>
                        <FormGroup>
                            <FormLabel>
                                Cliente
                                <Input {...register("client.name")} />
                            </FormLabel>
                            <FormLabel>
                                Cliente
                                <Input {...register("client.name")} />
                            </FormLabel>
                            <FormLabel>
                                Telefone:
                                <Input {...register("client.phone")} />
                            </FormLabel>
                            <FormLabel></FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Descrição do agendamento:
                                <TextArea {...register("description")} />
                            </FormLabel>
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
                        <ClientContact client={client} />
                        <FormDescriptionKey>
                            Descrição do agendamento:{" "}
                        </FormDescriptionKey>
                        <p>{defaultValues.description}</p>
                        <FormGroup>
                            <FormDescriptionKey>
                                Serviços Agendados:
                            </FormDescriptionKey>
                            <ServicesContainer>
                                <div style={{ width: "100%" }}>
                                    {selectedServices.map((serviceName) => (
                                        <>
                                            <ServiceTag key={serviceName}>
                                                {serviceName}
                                            </ServiceTag>
                                        </>
                                    ))}
                                </div>
                                <TotalValue>
                                    Valor total: {valorFormatado}
                                </TotalValue>
                            </ServicesContainer>
                        </FormGroup>
                    </>
                )}
                <ButtonsContainer style={{ display: "flex", gap: "10px" }}>
                    <Button
                        buttonType="negative"
                        type="button"
                        onClick={
                            isEditable
                                ? () => setIsEditable(false)
                                : handleDelete
                        }
                    >
                        {isEditable ? "Cancelar" : "Excluir"}
                    </Button>
                    <Button
                        buttonType="positive"
                        type="button"
                        onClick={toggleEdit}
                    >
                        {isEditable ? "Salvar" : "Editar"}
                    </Button>
                </ButtonsContainer>
            </Form>
        </ModalBase>
    );
};

export default AppointmentPanel;
