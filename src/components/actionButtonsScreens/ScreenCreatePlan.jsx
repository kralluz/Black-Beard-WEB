import styled from "styled-components";
import React, { useState } from "react";
import ModalBase from "../modals/BasedModal";

const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
`;

const PlanDetails = styled.div``;

const ScreenAddPlan = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Adicionar Plano</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Preço:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="duration">Duração:</label>
                        <input
                            type="text"
                            id="duration"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <button type="submit">Adicionar</button>
                </form>
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenAddPlan;