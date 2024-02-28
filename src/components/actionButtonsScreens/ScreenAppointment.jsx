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

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

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
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const [showAppointmentCRUD, setShowAppointmentCRUD] = useState(false);

    const slots = [
        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T08:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
        },
        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T08:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T09:00:00.000Z",
            ocupado: true,
            client: {
                id: 1,
                name: "client A",
                phone: "62548778459",
                description: "descrição 123123123 lorem inpsum",
                plan: 1,
                created_at: "2024-2-20T12:00:00Z",
                updated_at: "2024-2-20T12:00:00Z",
            },
            service: [
                {
                    service_name: "Corte Americano",
                    description: "exemplo de descrição",
                    price: 50.0,
                },
                {
                    service_name: "Pigmentação na Barba",
                    description: "exemplo de descrição",
                    price: 30.0,
                },
            ],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },
        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T09:30:00.000Z",
            ocupado: true,
            client: {
                id: 1,
                name: "client A",
                phone: "62548778459",
                plan: 2,
            },
            service: [
                {
                    id: 2,
                    descricao: "Barba",
                    duracao: 30,
                },
            ],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },
        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T10:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
        },
        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T10:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T19:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },
        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T19:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T20:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },
        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T20:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T21:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T21:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T22:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T22:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T23:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-02-28T23:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T00:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T00:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T01:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T01:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T02:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T02:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T03:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T03:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T04:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T04:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T05:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T05:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T06:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T06:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T07:00:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },

        {
            id: 1,
            user_id: 1,
            appointment_date: "2024-03-02T07:30:00.000Z",
            ocupado: false,
            client: null,
            service: [],
            description: "descrição 123123123 lorem inpsum",
            created_at: "2024-2-20T12:00:00Z",
            updated_at: "2024-2-20T12:00:00Z",
        },
    ];

    const slotsForSelectedDate = slots.filter((slot) => {
        return (
            dayjs(slot.appointment_date).format("YYYY-MM-DD") ===
            selectedDate.format("YYYY-MM-DD")
        );
    });

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <AppointmentCRUD
                isOpen={showAppointmentCRUD}
                onClose={() => setShowAppointmentCRUD(false)}
            />
            <h3>
                Agendamentos para dia {selectedDate.format("DD")} de{" "}
                {selectedDate.format("MMMM", { locale: ptBR })}
            </h3>
            <Container>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div>
                        <DateCalendar
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            renderInput={(params) => <div {...params} />}
                        />
                    </div>
                </LocalizationProvider>
                <AppointmentSection>
                    <AppointmentList>
                        {slotsForSelectedDate.map((slot, index) => (
                            <AppointmentItem key={index}>
                                <AppointmentInfo>
                                    <div>
                                        Horário:{" "}
                                        <strong>
                                            {dayjs(
                                                slot.appointment_date
                                            ).format("HH:mm")}
                                        </strong>
                                    </div>
                                    <div>
                                        Status:{" "}
                                        {slot.ocupado ? "Ocupado" : "Vazio"}
                                    </div>
                                    {slot.ocupado && (
                                        <div>
                                            Cliente:{" "}
                                            <strong>{slot.client.name}</strong>
                                        </div>
                                    )}
                                </AppointmentInfo>
                                {slot.ocupado && (
                                    <ViewButton
                                        onClick={() =>
                                            setShowAppointmentCRUD(true)
                                        }
                                    >
                                        <RiEyeLine />
                                    </ViewButton>
                                )}
                            </AppointmentItem>
                        ))}
                    </AppointmentList>
                </AppointmentSection>
            </Container>
        </ModalBase>
    );
};

export default ScreenAppointment;
