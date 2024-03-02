import ClientContact from "../../../globalComponents/ClientContact";
import clients from "../../../../responses/clients";
import React, { useState, useEffect } from "react";
import ModalBase from "../../../BasedModal";
import {
    FaUserAlt,
    FaWhatsapp,
    FaSearch,
    FaPhoneAlt,
    FaPhone,
} from "react-icons/fa";

import {
    ContentScreen,
    ClientSection,
    ClientDetails,
    ClientName,
    ClientInfo,
    LetterHeader,
    Button,
    Form,
    Input,
    SearchContainer,
    SearchInput,
} from "./styles";

const ClientsScreen = ({ isOpen, onClose }) => {
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

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
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
                                <React.Fragment key={client.id}>
                                    <ClientContact
                                        key={client.id}
                                        client={client}
                                    />
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ClientsScreen;
