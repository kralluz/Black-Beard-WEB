import CardInfoClient from "./CardInfoClient.jsx";
import clients from "../../responses/clients";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalBase from "../modals/BasedModal";
import ShowClient from "../modals/ShowClient.jsx";
import {
    FaUserAlt,
    FaWhatsapp,
    FaSearch,
    FaPhoneAlt,
    FaPhone,
} from "react-icons/fa";

const ContentScreen = styled.div`
    padding: 10px;
    border-radius: 10px;
    margin: 0 auto;
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

const ClientSection = styled.div`
    background: #ffffff;
    border-radius: 6px;
    padding: px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
`;

const ClientDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.233);
`;

const ClientName = styled.h4`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #333;
    margin: 0 0 5px 0;
    svg {
        margin-right: 10px;
    }
`;

const ClientInfo = styled.p`
    color: #181818;
    font-size: 14px;
    margin: 0;
    display: flex;
    align-items: center;
    svg {
        margin-right: 10px;
    }
`;

const LetterHeader = styled.h3`
    margin-top: 20px;
    color: #444;
`;

const Button = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-size: 0.8rem;
    svg {
        margin-right: 5px;
    }
    &:hover {
        background-color: #45a049;
    }
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 4px;
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
`;

const ScreenClients = ({ isOpen, onClose }) => {
    const [clientes, setClientes] = useState(clients);
    const [searchTerm, setSearchTerm] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {}, []);

    const handleAddOrUpdateClient = (e) => {
        e.preventDefault();
        const newClient = { id: editingId ?? Date.now(), name, email, phone };

        if (editingId) {
            setClientes(
                clientes.map((client) =>
                    client.id === editingId ? newClient : client
                )
            );
        } else {
            setClientes(
                [...clientes, newClient].sort((a, b) =>
                    a.name.localeCompare(b.name)
                )
            );
        }

        setName("");
        setEmail("");
        setPhone("");
        setEditingId(null);
    };

    const handleCancel = () => {
        // Reseta o estado dos inputs e esconde o formulário sem salvar
        setName("");
        setEmail("");
        setPhone("");
        setEditingId(null);
        setShowForm(false);
    };

    const handleDelete = (id) => {
        setClientes(clientes.filter((client) => client.id !== id));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredClientes = clientes.filter((client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedClientes = filteredClientes.reduce((acc, client) => {
        const firstLetter = client.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(client);
        return acc;
    }, {});

    const handleMakeCall = () => {
        window.location.href = `tel:${"62985401969"}`;
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/${"62985401969"}`;
        window.open(url, "_blank");
    };

    const [openShowClient, setOpenShowClient] = useState(false);

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ShowClient
                isOpen={openShowClient}
                onClose={() => setOpenShowClient(false)}
                client={clients[0]}
            />
            <ContentScreen>
                <h2>Gerenciar Clientes</h2>
                <SearchContainer>
                    <FaSearch />
                    <SearchInput
                        type="text"
                        placeholder="Buscar cliente..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </SearchContainer>
                <Button onClick={() => setShowForm(true)}>
                    {showForm ? "Cancelar" : "Adicionar"}
                </Button>
                {showForm && (
                    <Form onSubmit={handleAddOrUpdateClient}>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome"
                            required
                        />
                        <Input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Telefone"
                            required
                        />
                        <Button type="submit">
                            {editingId ? "Atualizar" : "Salvar"}
                        </Button>
                        <Button type="button" onClick={handleCancel}>
                            Cancelar
                        </Button>
                    </Form>
                )}
                {Object.keys(groupedClientes)
                    .sort()
                    .map((letter) => (
                        <React.Fragment key={letter}>
                            <LetterHeader>{letter}</LetterHeader>
                            {groupedClientes[letter].map((client) => (
                                <>
                                    <CardInfoClient key={client.id} client={client} />
                                </>
                            ))}
                        </React.Fragment>
                    ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenClients;
