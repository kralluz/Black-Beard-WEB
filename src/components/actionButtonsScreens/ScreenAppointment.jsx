import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useState, useMemo } from "react";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import ModalBase from "../modals/BasedModal";
import styled from "styled-components";

const ContentScreen = styled.div`
    background: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
    max-width: 800px;
    height: calc(
        100vh - 100px
    ); /* Altura ajustada para evitar overflow da tela */
    overflow-y: auto; /* Barra de rolagem vertical conforme necessário */
`;

const DateSection = styled.div`
    margin-bottom: 20px;
`;

const DateHeading = styled.h3`
    margin-bottom: 10px;
    color: #333;
`;

const AppointmentList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const AppointmentItem = styled.li`
    background: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AppointmentInfo = styled.div`
    flex: 1;
`;

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: 10px;
`;

const DeleteButton = styled(Button)`
    color: #ff6347;
    font-size: 20px;
`;

const EditButton = styled(Button)`
    color: #1e90ff;
    font-size: 20px;
`;

const groupAppointmentsByMonthAndDay = (appointments) => {
    const grouped = {};

    appointments.forEach((appointment) => {
        const month = format(parseISO(appointment.date), "yyyy-MM", { locale: ptBR });
        const day = format(parseISO(appointment.date), "yyyy-MM-dd", { locale: ptBR });

        if (!grouped[month]) {
            grouped[month] = {};
        }

        if (!grouped[month][day]) {
            grouped[month][day] = [];
        }

        grouped[month][day].push(appointment);
    });

    return grouped;
};

const ScreenAppointment = ({ isOpen, onClose }) => {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            name: "João Silva",
            date: "2022-10-01",
            time: "10:00",
            service: "Corte de Cabelo",
            total: 50,
        },
        {
            id: 1,
            name: "João Silva",
            date: "2022-10-01",
            time: "10:00",
            service: "Corte de Cabelo",
            total: 50,
        },
        {
            id: 1,
            name: "João Silva",
            date: "2022-10-01",
            time: "10:00",
            service: "Corte de Cabelo",
            total: 50,
        },
        {
            id: 2,
            name: "Maria Santos",
            date: "2022-10-02",
            time: "11:30",
            service: "Manicure",
            total: 30,
        },
        {
            id: 3,
            name: "Pedro Oliveira",
            date: "2022-10-03",
            time: "14:00",
            service: "Barba",
            total: 25,
        },
        {
            id: 4,
            name: "Ana Costa",
            date: "2022-10-04",
            time: "16:30",
            service: "Coloração",
            total: 80,
        },
        {
            id: 5,
            name: "Lucas Pereira",
            date: "2022-10-05",
            time: "09:00",
            service: "Hidratação",
            total: 60,
        },
        {
            id: 6,
            name: "Carolina Almeida",
            date: "2022-10-06",
            time: "13:45",
            service: "Pedicure",
            total: 35,
        },
        {
            id: 7,
            name: "Rafael Souza",
            date: "2022-10-07",
            time: "15:15",
            service: "Corte e Barba",
            total: 70,
        },
        {
            id: 8,
            name: "Juliana Lima",
            date: "2022-10-08",
            time: "10:30",
            service: "Sobrancelha",
            total: 20,
        },
        {
            id: 9,
            name: "Fernando Santos",
            date: "2022-10-09",
            time: "12:00",
            service: "Limpeza de Pele",
            total: 90,
        },
        {
            id: 10,
            name: "Mariana Costa",
            date: "2022-10-10",
            time: "14:30",
            service: "Massagem Relaxante",
            total: 100,
        },
        {
            id: 11,
            name: "Gustavo Oliveira",
            date: "2022-10-11",
            time: "16:45",
            service: "Corte de Cabelo",
            total: 50,
        },
        {
            id: 12,
            name: "Camila Silva",
            date: "2022-10-12",
            time: "09:30",
            service: "Manicure e Pedicure",
            total: 60,
        },
        {
            id: 13,
            name: "Ricardo Almeida",
            date: "2022-10-13",
            time: "13:00",
            service: "Barba",
            total: 25,
        },
        {
            id: 14,
            name: "Amanda Souza",
            date: "2022-10-14",
            time: "15:45",
            service: "Escova Progressiva",
            total: 150,
        },
        {
            id: 15,
            name: "Bruno Lima",
            date: "2022-10-15",
            time: "10:15",
            service: "Corte de Cabelo",
            total: 50,
        },
        {
            id: 16,
            name: "Patrícia Santos",
            date: "2022-10-16",
            time: "12:30",
            service: "Coloração",
            total: 80,
        },
        {
            id: 17,
            name: "Rodrigo Costa",
            date: "2022-10-17",
            time: "14:45",
            service: "Hidratação",
            total: 60,
        },
        {
            id: 18,
            name: "Vanessa Oliveira",
            date: "2022-10-18",
            time: "16:15",
            service: "Manicure",
            total: 30,
        },
    ]);

    const appointmentsByDate = useMemo(() => {
        const groups = appointments.reduce((acc, appointment) => {
            const date = appointment.date; // Assumindo formato "YYYY-MM-DD"
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(appointment);
            return acc;
        }, {});
        return groups;
    }, [appointments]);

    const handleDelete = (id) => {
        setAppointments(
            appointments.filter((appointment) => appointment.id !== id)
        );
    };

    // Suponha que a função handleEdit apenas console.log por enquanto
    const handleEdit = (id) => {
        console.log("Editando agendamento", id);
    };

    const groupedAppointments = groupAppointmentsByMonthAndDay(appointments);

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ContentScreen>
                <h2>Gerenciar Agendamentos</h2>
                {Object.entries(groupedAppointments).map(([month, days]) => (
                    <div key={month}>
                        <h3>{format(parseISO(`${month}-01`), "MMMM yyyy", { locale: ptBR })}</h3>
                        {Object.entries(days).map(([day, appointments]) => (
                            <div key={day}>
                                <h4>{format(parseISO(day), "EEEE, d 'de' MMMM", { locale: ptBR })}</h4>
                                <AppointmentList>
                                    {appointments.map((appointment) => (
                                        <AppointmentItem key={appointment.id}>
                                            <AppointmentInfo>
                                                <div><strong>{appointment.name}</strong></div>
                                                <div>{format(parseISO(appointment.date), "HH:mm", { locale: ptBR })}</div>
                                                <div>{appointment.service} - R$ {appointment.total}</div>
                                            </AppointmentInfo>
                                            <EditButton onClick={() => handleEdit(appointment.id)}>
                                                <RiEditBoxLine />
                                            </EditButton>
                                            <DeleteButton onClick={() => handleDelete(appointment.id)}>
                                                <RiDeleteBinLine />
                                            </DeleteButton>
                                        </AppointmentItem>
                                    ))}
                                </AppointmentList>
                            </div>
                        ))}
                    </div>
                ))}
            </ContentScreen>
        </ModalBase>
    );
};

export default ScreenAppointment;
