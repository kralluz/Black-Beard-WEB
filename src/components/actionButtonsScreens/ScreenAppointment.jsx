import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styled from "styled-components";
import ModalBase from "../modals/BasedModal";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Estilo padrão do calendário

const Container = styled.div`
    padding: 20px 0;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AppointmentSection = styled.div`
    margin-top: 20px;
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

const DeleteButton = styled.button`
    background: transparent;
    border: none;
    color: #ff6347;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
`;

const EditButton = styled.button`
    background: transparent;
    border: none;
    color: #1e90ff;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
`;

const sampleAppointments = [
    {
        id: 1,
        name: "João Silva",
        date: "2024-02-20T10:00:00.000Z",
        service: "Corte de Cabelo",
        total: 50,
    },
    {
        id: 2,
        name: "Maria Santos",
        date: "2024-02-20T11:30:00.000Z",
        service: "Manicure",
        total: 30,
    },
    {
        id: 3,
        name: "Pedro Oliveira",
        date: "2024-02-21T14:00:00.000Z",
        service: "Barba",
        total: 25,
    },
    {
        id: 4,
        name: "Ana Costa",
        date: "2024-02-22T16:30:00.000Z",
        service: "Coloração",
        total: 80,
    },
    {
        id: 5,
        name: "Lucas Pereira",
        date: "2024-02-23T09:00:00.000Z",
        service: "Hidratação",
        total: 60,
    },
    {
        id: 6,
        name: "Carolina Almeida",
        date: "2024-02-24T13:45:00.000Z",
        service: "Pedicure",
        total: 35,
    },
    {
        id: 7,
        name: "Rafael Souza",
        date: "2024-02-25T15:15:00.000Z",
        service: "Corte e Barba",
        total: 70,
    },
    {
        id: 8,
        name: "Juliana Lima",
        date: "2024-02-26T10:30:00.000Z",
        service: "Sobrancelha",
        total: 20,
    },
    {
        id: 9,
        name: "Fernando Santos",
        date: "2024-02-27T12:00:00.000Z",
        service: "Limpeza de Pele",
        total: 90,
    },
    {
        id: 10,
        name: "Mariana Costa",
        date: "2024-02-28T14:30:00.000Z",
        service: "Massagem Relaxante",
        total: 100,
    },
    {
        id: 11,
        name: "Tiago Nunes",
        date: "2024-03-01T09:00:00.000Z",
        service: "Corte de Cabelo",
        total: 50,
    },
    {
        id: 12,
        name: "Fábio Costa",
        date: "2024-03-02T11:30:00.000Z",
        service: "Barba",
        total: 25,
    },
    {
        id: 13,
        name: "Patrícia Mendes",
        date: "2024-03-03T14:00:00.000Z",
        service: "Manicure",
        total: 30,
    },
    {
        id: 14,
        name: "Cláudia Souza",
        date: "2024-03-04T16:30:00.000Z",
        service: "Hidratação",
        total: 60,
    },
    {
        id: 15,
        name: "Eduardo Lima",
        date: "2024-03-05T09:00:00.000Z",
        service: "Corte e Barba",
        total: 70,
    },
    {
        id: 16,
        name: "Sandra Gomes",
        date: "2024-03-06T13:45:00.000Z",
        service: "Coloração",
        total: 80,
    },
    {
        id: 17,
        name: "Roberto Silva",
        date: "2024-03-07T15:15:00.000Z",
        service: "Massagem Relaxante",
        total: 100,
    },
    {
        id: 18,
        name: "Camila Rocha",
        date: "2024-03-08T10:30:00.000Z",
        service: "Pedicure",
        total: 35,
    },
    {
        id: 19,
        name: "Leonardo Martins",
        date: "2024-03-09T12:00:00.000Z",
        service: "Limpeza de Pele",
        total: 90,
    },
    {
        id: 20,
        name: "Isabela Freitas",
        date: "2024-03-10T14:30:00.000Z",
        service: "Sobrancelha",
        total: 20,
    },
];

const ScreenAppointment = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState(sampleAppointments);

    const appointmentsForSelectedDate = appointments.filter((appointment) => {
        return (
            format(parseISO(appointment.date), "yyyy-MM-dd") ===
            format(selectedDate, "yyyy-MM-dd")
        );
    });

    const handleDelete = (id) => {
        setAppointments(
            appointments.filter((appointment) => appointment.id !== id)
        );
    };

    const handleEdit = (id) => {
        console.log("Editando agendamento", id);
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <Container>
                <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    locale="pt-BR"
                />
                <AppointmentSection>
                    <h3>
                        Agendamentos para{" "}
                        {format(selectedDate, "dd/MM/yyyy", { locale: ptBR })}
                    </h3>
                    <AppointmentList>
                        {appointmentsForSelectedDate.map((appointment) => (
                            <AppointmentItem key={appointment.id}>
                                <AppointmentInfo>
                                    <div>
                                        <strong>{appointment.name}</strong>
                                    </div>
                                    <div>
                                        {format(
                                            parseISO(appointment.date),
                                            "HH:mm",
                                            { locale: ptBR }
                                        )}{" "}
                                        - {appointment.service} - R${" "}
                                        {appointment.total}
                                    </div>
                                </AppointmentInfo>
                                <EditButton
                                    onClick={() => handleEdit(appointment.id)}
                                >
                                    <RiEditBoxLine />
                                </EditButton>
                                <DeleteButton
                                    onClick={() => handleDelete(appointment.id)}
                                >
                                    <RiDeleteBinLine />
                                </DeleteButton>
                            </AppointmentItem>
                        ))}
                    </AppointmentList>
                </AppointmentSection>
            </Container>
        </ModalBase>
    );
};

export default ScreenAppointment;
