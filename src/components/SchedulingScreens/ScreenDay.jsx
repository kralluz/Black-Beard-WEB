import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ModalBase from "../modals/BasedModal";
import appointments from "../../responses/appointments";
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

const ScreenDayModal = ({ isOpen, onClose }) => {

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
                        <AppointmentInfo>Horário: {appointment.appointment_time}</AppointmentInfo>
                        <AppointmentInfo>Nome: {appointment.client.name}</AppointmentInfo>
                        <AppointmentInfo>Serviços: 
                        {appointment.service.map((service) => (
                            <div key={service.id}>
                                <span>{service.name}</span>
                                <span>R$ {service.price}</span>
                            </div>
                        ))}
                        </AppointmentInfo>
                        <AppointmentInfo>Valor Total: R$ 10,00</AppointmentInfo>
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