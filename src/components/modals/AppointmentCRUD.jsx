// Importações necessárias para o componente
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import services from "../../responses/services";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ModalBase from "./BasedModal";
import CardInfoClient from "../actionButtonsScreens/CardInfoClient";

// Estilos dos componentes utilizando styled-components
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Input = styled.input`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    &:disabled {
        cursor: not-allowed;
    }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })``;

const Button = styled.button`
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    background-color: ${({ buttonType }) => {
        switch (buttonType) {
            case "negative":
                return "#e74c3c"; // Vermelho para ações negativas/destrutivas
            case "positive":
                return "#3498db"; // Verde para salvar, criar, concluir
            case "neutral":
                return "#2ecc71"; // Azul para ligar, conversar, acessar
            default:
                return "#002842"; // Cinza como cor padrão
        }
    }};
`;

const FormGroup = styled.div`
`;
const ButtonsContainer = styled.div`
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const FormLabel = styled.label`
    margin-bottom: 0.5rem;
    display: inline-block;
`;
const FormDescriptionKey = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
`;

const DataDisplay = styled.p`
    font-weight: 600;
    padding: 8px;
    border-radius: 4px;
`;

const ServiceTag = styled.div`
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: #17202a;
    padding: 5px 10px;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? "#f4d03f" : "#f9e79f")};
    &:hover {
        background-color: #f4d03f;
    }
`;
const TotalValue = styled.p`
    padding-top: 1rem;
    font-weight: bold;
    font-size: 24px;
    color: #2c3e50;
`;

const ServicesContainer = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;

`;

// Componente principal: AppointmentCRUD
const AppointmentCRUD = ({ isOpen, onClose, client }) => {
    console.log("🚀 ~ AppointmentCRUD ~ client:", client);
    // Estado do componente
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

    // Configuração do useForm do react-hook-form
    const { register, handleSubmit, reset, watch } = useForm({ defaultValues });

    // Manipulação dos serviços selecionados
    const handleServiceChange = (serviceName) => {
        if (selectedServices.includes(serviceName)) {
            setSelectedServices(
                selectedServices.filter((service) => service !== serviceName)
            );
        } else {
            setSelectedServices([...selectedServices, serviceName]);
        }
    };

    // Função para submeter o formulário
    const onSubmit = (data) => {
        if (selectedServices.length === 0) {
            setShowServiceError(true);
            return;
        }
        console.log(data, selectedServices);
        setIsEditable(false);
    };

    // Funções para manipulação do estado de edição
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

    // Formatação da data do agendamento
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

    // Renderização do formulário com condicionais para edição e visualização
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
                        <CardInfoClient client={client} />
                        <FormDescriptionKey>
                            Descrição do agendamento:{" "}
                        </FormDescriptionKey>
                        <p>{defaultValues.description}</p>
                        <FormGroup>
                            <FormDescriptionKey>
                                Serviços Agendados:
                            </FormDescriptionKey>
                            <ServicesContainer>
                                <div style={{width: "100%"}}>
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

export default AppointmentCRUD;
