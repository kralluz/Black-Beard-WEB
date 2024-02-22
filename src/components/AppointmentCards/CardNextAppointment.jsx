import React, { useState } from "react";
import styled from "styled-components";
import NextAppointmentModal from '../SchedulingScreens/ScreenNextAppointment';

const NextAppointmentCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    width: 300px;
    margin: 20px auto;
`;

const CardHeader = styled.div`
    background-color: #e2c07d;
    padding: 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: center;
`;

const Content = styled.div`
    padding: 16px;
`;

const AppointmentDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const AppointmentTitle = styled.span`
    font-size: 16px;
    color: #888;
    margin-bottom: 8px;
`;

const AppointmentValue = styled.span`
    font-size: 16px;
    color: #333;
    font-weight: bold;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: #00f;
    padding: 10px 0;
    text-decoration: underline;
    cursor: pointer;
    width: 100%;
    text-align: center;
    display: block;
`;

const NextAppointmentComponent = () => {
    const date = "20 de dezembro";
    const time = "14:00";
    const clientName = "João Silva";
    const service = "corte de cabelo";

    const [nextModal, setNextModal] = useState(false);

    return (
        <>
            <NextAppointmentModal isOpen={nextModal} onClose={() => setNextModal(false)} />
            <NextAppointmentCard>
                <CardHeader>Próximo Agendamento</CardHeader>
                <Content>
                    <AppointmentDetails>
                        <AppointmentTitle>Data</AppointmentTitle>
                        <AppointmentValue>{date}</AppointmentValue>
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <AppointmentTitle>Horário</AppointmentTitle>
                        <AppointmentValue>{time}</AppointmentValue>
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <AppointmentTitle>Cliente</AppointmentTitle>
                        <AppointmentValue>{clientName}</AppointmentValue>
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <AppointmentTitle>Serviço</AppointmentTitle>
                        <AppointmentValue>{service}</AppointmentValue>
                    </AppointmentDetails>
                    <Button onClick={ ()=>setNextModal(true)}>ver detalhes</Button>
                </Content>
            </NextAppointmentCard>
        </>
    );
};

export default NextAppointmentComponent;
