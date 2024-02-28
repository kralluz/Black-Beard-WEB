import React, { useState } from "react";
import ModalBase from "../modals/BasedModal";

const EscolhaClienteModal = ({
    isOpen,
    onClose,
    date,
}) => {
    const [modo, setModo] = useState("selecionar"); // 'selecionar' ou 'adicionar'

    const handleSubmit = (cliente) => {
        
        onClose(); // Fechar o modal após a seleção ou adição
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <div>
                <button onClick={() => setModo("selecionar")}>
                    Selecionar Cliente
                </button>
                <button onClick={() => setModo("adicionar")}>
                    Adicionar Cliente
                </button>
            </div>
            {modo === "adicionar" ? (
                <Form
                    onSubmit={handleSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            {/* Campos do formulário para adicionar um novo cliente */}
                            <Field
                                name="nome"
                                component="input"
                                placeholder="Nome"
                            />
                            <Field
                                name="telefone"
                                component="input"
                                placeholder="Telefone"
                            />
                            <Field
                                name="email"
                                component="input"
                                placeholder="E-mail"
                            />
                            <button type="submit">Adicionar Cliente</button>
                        </form>
                    )}
                />
            ) : (
                <div>
                    {/* Componente ou lógica para selecionar um cliente existente */}
                    {/* Exemplo: <SelectCliente onSelect={handleSubmit} /> */}
                </div>
            )}
        </ModalBase>
    );
};

export default EscolhaClienteModal;
