import styled from "styled-components";
import React, { useState } from "react";
import ModalBase from "../modals/BasedModal";

const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
`;

const ScreenAddService = ({ isOpen, onClose }) => {
    const [serviceName, setServiceName] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [servicePrice, setServicePrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implementar lógica para adicionar o serviço
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Adicionar Serviço</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="serviceName">Nome do serviço:</label>
                        <input
                            type="text"
                            id="serviceName"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceDescription">Descrição do serviço:</label>
                        <input
                            type="text"
                            id="serviceDescription"
                            value={serviceDescription}
                            onChange={(e) => setServiceDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="servicePrice">Preço do serviço:</label>
                        <input
                            type="text"
                            id="servicePrice"
                            value={servicePrice}
                            onChange={(e) => setServicePrice(e.target.value)}
                        />
                    </div>
                    <button type="submit">Adicionar</button>
                </form>
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenAddService;
