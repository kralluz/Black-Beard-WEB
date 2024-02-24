import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalBase from '../modals/BasedModal';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

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

const ScreenAddClient = ({ isOpen, onClose }) => {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        // Aqui você poderia buscar os clientes existentes de uma API ou armazenamento local
    }, []);
    

    const handleAddOrUpdateClient = (e) => {
        e.preventDefault();
        const newClient = { id: editingId ?? Date.now(), name, email, phone };

        if (editingId) {
            setClients(clients.map(client => client.id === editingId ? newClient : client));
        } else {
            setClients([...clients, newClient].sort((a, b) => a.name.localeCompare(b.name)));
        }

        setName('');
        setEmail('');
        setPhone('');
        setEditingId(null);
    };

    const handleEdit = (client) => {
        setName(client.name);
        setEmail(client.email);
        setPhone(client.phone);
        setEditingId(client.id);
    };

    const handleDelete = (id) => {
        setClients(clients.filter(client => client.id !== id));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedClients = filteredClients.reduce((acc, client) => {
        const firstLetter = client.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(client);
        return acc;
    }, {});

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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <Input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Telefone"
                        required
                    />
                    <Button type="submit">{editingId ? 'Atualizar' : 'Adicionar'}</Button>
                </Form>
                {Object.keys(groupedClients).sort().map((letter) => (
                    <React.Fragment key={letter}>
                        <LetterHeader>{letter}</LetterHeader>
                        {groupedClients[letter].map((client) => (
                            <ClientSection key={client.id}>
                                <ClientDetails>
                                    <ClientName>{client.name}</ClientName>
                                    <ClientInfo>Email: {client.email}</ClientInfo>
                                    <ClientInfo>Telefone: {client.phone}</ClientInfo>
                                </ClientDetails>
                                <Button onClick={() => handleEdit(client)}><RiEdit2Line /></Button>
                                <Button onClick={() => handleDelete(client.id)}><RiDeleteBinLine /></Button>
                            </ClientSection>
                        ))}
                    </React.Fragment>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenAddClient;
