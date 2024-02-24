import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ModalBase from "../modals/BasedModal";

const NextAppointmentCard = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    overflow: auto; /* Adicionado para permitir rolagem */
    max-height: 80vh; /* Define uma altura máxima para iniciar a rolagem */
`;

const AppointmentDetails = styled.div`
    margin-bottom: 20px;
`;

const AppointmentInfo = styled.p`
    margin: 5px 0;
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SummaryInfo = styled.div`
    margin-bottom: 20px;
    text-align: center;
`;


// Exemplo de dados de agendamentos
const appointments = [
    {
        id: 1,
        date: "2024-02-24",
        time: "09:00",
        name: "Carlos Henrique",
        services: ["Corte de Cabelo", "Barba"],
        totalValue: 150,
    },
    {
        id: 2,
        date: "2024-02-24",
        time: "11:00",
        name: "Vitor Santos",
        services: ["Corte de Cabelo"],
        totalValue: 50,
    },
    {
        id: 3,
        date: "2024-02-24",
        time: "14:00",
        name: "Igor Henrique",
        services: ["Barba", "Pedicure"],
        totalValue: 100,
    },
    {
        id: 4,
        date: "2024-02-24",
        time: "16:00",
        name: "Ana Silva",
        services: ["Manicure"],
        totalValue: 30,
    },
    {
        id: 5,
        date: "2024-02-24",
        time: "18:00",
        name: "Mariana Oliveira",
        services: ["Corte de Cabelo", "Barba"],
        totalValue: 120,
    },
    {
        id: 6,
        date: "2024-02-24",
        time: "10:00",
        name: "Juliana Santos",
        services: ["Pedicure"],
        totalValue: 40,
    },
    {
        id: 7,
        date: "2024-02-24",
        time: "13:00",
        name: "Rafaela Costa",
        services: ["Corte de Cabelo", "Barba", "Manicure"],
        totalValue: 180,
    },
    {
        id: 8,
        date: "2024-02-24",
        time: "15:00",
        name: "Lucas Oliveira",
        services: ["Barba"],
        totalValue: 50,
    },
    {
        id: 9,
        date: "2024-02-24",
        time: "17:00",
        name: "Pedro Almeida",
        services: ["Corte de Cabelo", "Pedicure"],
        totalValue: 90,
    },
    {
        id: 10,
        date: "2024-02-24",
        time: "19:00",
        name: "Fernanda Silva",
        services: ["Corte de Cabelo", "Barba", "Manicure"],
        totalValue: 170,
    },
];

const ScreenDayModal = ({ isOpen, onClose }) => {
    const renderServices = (services) => services.join(", ");

    // Função para obter o dia atual formatado e a quantidade de agendamentos
    const getCurrentDateInfo = () => {
        const now = new Date();
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('pt-BR', options);
        const totalAppointments = appointments.length;
        const totalRevenue = appointments.reduce((acc, curr) => acc + curr.totalValue, 0);

        return { formattedDate, totalAppointments, totalRevenue };
    };

    const { formattedDate, totalAppointments, totalRevenue } = getCurrentDateInfo();

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <NextAppointmentCard>
                <SummaryInfo>
                    <h2>Agendamentos para {formattedDate}</h2>
                    <p>{totalAppointments} agendamentos - Receita Total Esperada: R$ {totalRevenue},00</p>
                </SummaryInfo>
                {appointments.map((appointment) => (
                    <AppointmentDetails key={appointment.id}>
                        <AppointmentInfo>Horário: {appointment.time}</AppointmentInfo>
                        <AppointmentInfo>Nome: {appointment.name}</AppointmentInfo>
                        <AppointmentInfo>Serviços: {renderServices(appointment.services)}</AppointmentInfo>
                        <AppointmentInfo>Valor Total: R$ {appointment.totalValue},00</AppointmentInfo>
                        <IconsWrapper>
                            <FaEdit cursor="pointer" />
                            <FaTrashAlt cursor="pointer" />
                        </IconsWrapper>
                    </AppointmentDetails>
                ))}
            </NextAppointmentCard>
        </ModalBase>
    );
};

export default ScreenDayModal;