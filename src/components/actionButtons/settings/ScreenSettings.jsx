import styled from "styled-components";
import React, { useState } from "react";
import ModalBase from "../../BasedModal";

const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
`;

const ScreenSettings = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Configurações</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Nome de usuário:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenSettings;
