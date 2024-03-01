import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalBase from "../../BasedModal.jsx";
import { services } from "../../../responses/services.js";
import EditServiceScreen from "./EditServiceScreen.jsx";
import { RiEdit2Line } from "react-icons/ri";
import ServiceForm from "./ServiceForm.jsx";

const NewServiceCard = styled.div`
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
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

const ServiceDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
`;

const ServiceButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    background-color: #007bff;
`;

const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    margin-bottom: 20px;
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

const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: calc(100% - 16px);
`;

const ServicesScreen = ({ isOpen, onClose }) => {
    const [localServices, setLocalServices] = useState(services);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showEditService, setShowEditService] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (data) => {
        const newService = { ...data, id: Date.now() };
        setLocalServices([...localServices, newService]);
        setShowCreateForm(false);
        reset();
    };

    const handleDelete = (id) => {
        setLocalServices(localServices.filter((service) => service.id !== id));
    };

    const toggleCreateForm = () => {
        setShowCreateForm(!showCreateForm);
        reset();
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Meus Serviços</h2>
                {showCreateForm && (
                    <NewServiceCard>
                        <ServiceForm
                            onSubmit={handleFormSubmit}
                            onCancel={() => setShowCreateForm(false)}
                        />
                    </NewServiceCard>
                )}
                {!showCreateForm && (
                    <Button onClick={toggleCreateForm}>
                        Criar Novo Serviço
                    </Button>
                )}
                {localServices.map((service) => (
                    <React.Fragment key={service.id}>
                        <EditServiceScreen
                            isOpen={showEditService}
                            onClose={() => setShowEditService(false)}
                            service={service}
                        />
                        <ServiceDetails>
                            <div>
                                <PlanName>{service.name}</PlanName>
                                <PlanPrice>Valor R${service.price}</PlanPrice>
                                <PlanDescription>
                                    {service.description}
                                </PlanDescription>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                }}
                            >
                                <ServiceButton
                                    style={{
                                        color: "white",
                                        width: "100%",
                                        padding: "8px 16px",
                                        borderRadius: "5px",
                                        backgroundColor: "#F44336",
                                    }}
                                    onClick={() => handleDelete(service.id)}
                                >
                                    <RiDeleteBinLine />
                                </ServiceButton>
                                <ServiceButton
                                    onClick={() => setShowEditService(true)}
                                    style={{
                                        width: "100%",
                                        padding: "8px 16px",
                                        borderRadius: "5px",
                                        backgroundColor: "#FFEB3B",
                                        color: "#000000",
                                    }}
                                >
                                    <RiEdit2Line />
                                </ServiceButton>
                            </div>
                        </ServiceDetails>
                    </React.Fragment>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ServicesScreen;
