import clients from "../../responses/clients";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalBase from "../modals/BasedModal";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { FaRegEye, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    overflow-y: auto;
    max-height: 80vh;
`;

const ClientSection = styled.div`
    margin-bottom: 20px;
    background: grey;
    border-radius: 6px;
    padding: 0.5em;
`;

const ClientDetails = styled.div`
    margin-bottom: 5px;
`;

const ClientName = styled.h4`
    margin: 0;
`;

const ClientInfo = styled.p`
    margin: 0;
    font-size: 14px;
`;

const LetterHeader = styled.h3`
    margin-top: 20px;
`;

const Button = styled.button`
    margin-left: 10px;
    cursor: pointer;
`;

const Form = styled.form`
    margin-bottom: 20px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    margin-right: 5px;
`;

const SearchBar = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const ScreenClients = ({ isOpen, onClose }) => {
    const [clientes, setClientes] = useState(clients);
    const [searchTerm, setSearchTerm] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [editingId, setEditingId] = useState(null);

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

    const handleEdit = (client) => {
        setName(client.name);
        setEmail(client.email);
        setPhone(client.phone);
        setEditingId(client.id);
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

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Gerenciar Clientes</h2>
                <SearchBar
                    type="text"
                    placeholder="Buscar cliente..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
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
                        {editingId ? "Atualizar" : "Adicionar"}
                    </Button>
                </Form>
                {Object.keys(groupedClientes)
                    .sort()
                    .map((letter) => (
                        <React.Fragment key={letter}>
                            <LetterHeader>{letter}</LetterHeader>
                            {groupedClientes[letter].map((client) => (
                                <ClientSection key={client.id}>
                                    <ClientDetails>
                                        <ClientName>{client.name}</ClientName>
                                        <ClientInfo>{client.phone}</ClientInfo>
                                    </ClientDetails>
                                    <Button onClick={() => handleEdit(client)}>
                                        <FaRegEye />
                                    </Button>
                                    <Button onClick={handleMakeCall}>
                                        <FaPhoneAlt />
                                    </Button>
                                    <Button onClick={() => openWhatsApp()}>
                                        <FaWhatsapp />
                                    </Button>
                                </ClientSection>
                            ))}
                        </React.Fragment>
                    ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenClients;
