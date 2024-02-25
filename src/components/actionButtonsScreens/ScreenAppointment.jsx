import AppointmentCRUD from "../../components/modals/AppointmentCRUD";
import { sampleAppointments } from "../../responses/sampleAppointments";
import { RiEyeLine } from "react-icons/ri";
import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styled from "styled-components";
import ModalBase from "../modals/BasedModal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Container = styled.div`
    padding: 20px 0;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const ViewButton = styled.button`
    background: transparent;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
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

const ScreenAppointment = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate);
    const [appointments, setAppointments] = useState(sampleAppointments);
    const [showAppointmentCRUD, setShowAppointmentCRUD] = useState(false);

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

    function getMonthName(isoDateString) {
        const months = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ];

        const date = new Date(isoDateString);
        const monthIndex = date.getMonth();

        return months[monthIndex];
    }

    const isoDateString = selectedDate;
    console.log(isoDateString);
    const monthName = getMonthName(isoDateString);

    console.log("🚀 ~ ScreenAppointment ~ monthName:", monthName);

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <AppointmentCRUD
                isOpen={showAppointmentCRUD}
                onClose={() => setShowAppointmentCRUD(false)}
            />
            <Container>
                <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    locale="pt-BR"
                />
                <AppointmentSection>
                    <h3>
                        Agendamentos para dia{" "}
                        {format(selectedDate, "dd", { locale: ptBR })} de{" "}
                        {getMonthName(selectedDate)}
                    </h3>
                    <AppointmentList>
                        {appointmentsForSelectedDate.map((appointment) => (
                            <AppointmentItem key={appointment.id}>
                                <AppointmentInfo>
                                    <div>
                                        <strong>{appointment.name}</strong>
                                    </div>
                                    <div>
                                        {appointment.service} - R$
                                        {appointment.total}
                                    </div>
                                </AppointmentInfo>
                                <ViewButton
                                    onClick={() => setShowAppointmentCRUD(true)}
                                >
                                    <RiEyeLine />
                                </ViewButton>
                            </AppointmentItem>
                        ))}
                    </AppointmentList>
                </AppointmentSection>
            </Container>
        </ModalBase>
    );
};

export default ScreenAppointment;
