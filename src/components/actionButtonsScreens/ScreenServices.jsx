import React, { useState } from "react";
import styled from "styled-components";
import ModalBase from "../modals/BasedModal";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { services } from "../../responses/services";


const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    overflow-y: auto;
    max-height: 80vh;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

const PlanDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
`;

const PlanName = styled.h4`
    font-size: 20px;
    margin-bottom: 10px;
`;

const PlanPrice = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
`;

const PlanDescription = styled.p`
    font-size: 14px;
`;

const PlanContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const ServiceButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: calc(100% - 16px); /* Adjust width to ensure it fits well */
`;
const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    margin-bottom: 20px; // Adicionei uma margem para separar do formulário
`;

const ScreenServices = ({ isOpen, onClose }) => {
    const [localServices, setLocalServices] = useState(services);
    const [editingId, setEditingId] = useState(null);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const { register, handleSubmit, reset, setValue } = useForm();

    const onSubmit = (data) => {
        if (editingId) {
            const updatedServices = localServices.map((service) =>
                service.id === editingId ? { ...service, ...data } : service
            );
            setLocalServices(updatedServices);
            setEditingId(null);
        } else {
            const newService = { ...data, id: Date.now() };
            setLocalServices([...localServices, newService]);
        }
        setShowCreateForm(false); // Fecha o formulário após a submissão
        reset();
    };

    const startEditing = (service) => {
        setEditingId(service.id);
        setValue("name", service.name);
        setValue("price", service.price);
        setValue("description", service.description);
        setShowCreateForm(false); // Fecha o formulário de criação ao começar a editar
    };

    const handleDelete = (id) => {
        setLocalServices(localServices.filter((service) => service.id !== id));
    };

    const cancelEditing = () => {
        setEditingId(null);
        reset();
    };

    const toggleCreateForm = () => {
        setShowCreateForm(!showCreateForm);
        setEditingId(null); // Cancela a edição ao abrir o formulário de criação
        reset(); // Reseta os campos do formulário
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Meus Serviços</h2>
                {showCreateForm ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            {...register("name")}
                            placeholder="Nome do Serviço"
                            required
                        />
                        <Input
                            type="number"
                            {...register("price")}
                            placeholder="Preço"
                            required
                        />
                        <Input
                            {...register("description")}
                            placeholder="Descrição"
                            required
                        />
                        <Button type="submit">Adicionar Serviço</Button>
                        <Button
                            type="button"
                            onClick={() => setShowCreateForm(false)}
                        >
                            Cancelar
                        </Button>
                    </form>
                ) : (
                    <Button onClick={toggleCreateForm}>
                        Criar Novo Serviço
                    </Button>
                )}
                {localServices.map((service) => (
                    <PlanDetails key={service.id}>
                        <PlanContainer>
                            <div>
                                <PlanName>{service.name}</PlanName>
                                <PlanPrice>R${service.price}</PlanPrice>
                                <PlanDescription>
                                    {service.description}
                                </PlanDescription>
                            </div>
                            <div>
                                <ServiceButton
                                    onClick={() => startEditing(service)}
                                >
                                    <RiEdit2Line />
                                </ServiceButton>
                                <ServiceButton
                                    onClick={() => handleDelete(service.id)}
                                >
                                    <RiDeleteBinLine />
                                </ServiceButton>
                            </div>
                        </PlanContainer>
                        {editingId === service.id && (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    {...register("name")}
                                    defaultValue={service.name}
                                />
                                <Input
                                    type="number"
                                    {...register("price")}
                                    defaultValue={service.price}
                                />
                                <Input
                                    {...register("description")}
                                    defaultValue={service.description}
                                />
                                <Button type="submit">Salvar</Button>
                                <Button type="button" onClick={cancelEditing}>
                                    Cancelar Edição
                                </Button>
                            </form>
                        )}
                    </PlanDetails>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};
export default ScreenServices;
