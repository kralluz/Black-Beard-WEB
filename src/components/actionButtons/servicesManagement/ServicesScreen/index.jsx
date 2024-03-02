import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalBase from "../../../BasedModal.jsx";
import { services } from "../../../../responses/services.js";
import EditServiceScreen from "../EditServiceScreen/index.jsx";
import { RiEdit2Line } from "react-icons/ri";
import ServiceForm from "../ServiceForm/index.jsx";
import {
    NewServiceCard,
    ContentScreen,
    ServiceDetails,
    ServiceButton,
    Button,
    PlanName,
    PlanPrice,
    PlanDescription,
    Input,
} from "./styles.js";

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
