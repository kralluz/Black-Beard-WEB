import services from '../../responses/services';
import React, { useState } from 'react';
import styled from 'styled-components';
import ModalBase from '../modals/BasedModal';
import { RiEdit2Line, RiDeleteBinLine, RiAddLine } from 'react-icons/ri';

const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    overflow-y: auto;
    max-height: 80vh;
`;

const PlanDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
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

const PlanContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const ServiceButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
`;

const ScreenAddService = ({ isOpen, onClose }) => {
    const [service, setService] = useState(services);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleAddService = (e) => {
        e.preventDefault();
        const newService = { id: Date.now(), name, price: Number(price), description };
        setService([...service, newService]);
        setName('');
        setPrice('');
        setDescription('');
    };

    const handleEdit = (service) => {
        setName(service.name);
        setPrice(service.price);
        setDescription(service.description);
        setEditingId(service.id);
    };

    const handleUpdateService = (e) => {
        e.preventDefault();
        setService(service.map(service => service.id === editingId ? { ...service, name, price: Number(price), description } : service));
        setName('');
        setPrice('');
        setDescription('');
        setEditingId(null);
    };

    const handleDelete = (id) => {
        setService(service.filter(service => service.id !== id));
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Meus Serviços</h2>
                <Form onSubmit={editingId ? handleUpdateService : handleAddService}>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do Serviço" required />
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" required />
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" required />
                    <Button type="submit">{editingId ? 'Atualizar Serviço' : 'Adicionar Serviço'}</Button>
                </Form>
                {service.map((plan) => (
                    <PlanDetails key={plan.id}>
                        <PlanContainer>
                            <div>
                                <PlanName>{plan.name}</PlanName>
                                <PlanDescription>{plan.description}</PlanDescription>
                            </div>
                            <PlanPrice>R${plan.price}</PlanPrice>
                            <div>
                                <ServiceButton onClick={() => handleEdit(plan)}>
                                    <RiEdit2Line />
                                </ServiceButton>
                                <ServiceButton onClick={() => handleDelete(plan.id)}>
                                    <RiDeleteBinLine />
                                </ServiceButton>
                            </div>
                        </PlanContainer>
                    </PlanDetails>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenAddService;