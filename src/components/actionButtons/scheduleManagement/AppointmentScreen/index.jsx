import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/en-gb";
import "dayjs/locale/pt-br";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "react-calendar/dist/Calendar.css";
import { RiEyeLine } from "react-icons/ri";
import AppointmentPanel from "../AppointmentPanel/index.jsx";
import ModalBase from "../../../BasedModal.jsx";
import { ptBR } from "@mui/x-date-pickers/locales";
import slots from "../../../../responses/slots.js";

import {
    Container,
    ViewButton,
    AppointmentSection,
    AppointmentList,
    AppointmentItem,
    AppointmentInfo,
    DeleteButton,
    EditButton,
} from "./styles";
const AppointmentScreen = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [showAppointmentPanel, setShowAppointmentPanel] = useState(false);

    const slotsForSelectedDate = slots.filter(
        (slot) =>
            dayjs(slot.appointment_date).format("YYYY-MM-DD") ===
            selectedDate.format("YYYY-MM-DD")
    );

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <Container>
                <h3>Agendamentos para dia {selectedDate.format("DD")} de </h3>
                <LocalizationProvider
                    adapterLocale="pt-br"
                    dateAdapter={AdapterDayjs}
                >
                    <div style={{ padding: "0px", width: "100%" }}>
                        <DateCalendar
                            sx={{
                                width: "100%", // Define a largura para 100%
                                maxWidth: "100%",
                                ".MuiPickersCalendarHeader-dayLabel": {
                                    backgroundColor: "green", // Cor de fundo dos dias da semana
                                    color: "red", // Altera a cor das letras
                                    fontWeight: "bold", // Torna o texto em negrito
                                    fontSize: "1rem", // Aumenta o tamanho da fonte
                                },
                                // Estilização do calendário
                                ".MuiPickersDay-root": {
                                    color: "blue",
                                    width: "100%", // Cor dos dias
                                },
                                ".Mui-selected": {
                                    borderRadius: "10%",
                                    color: "white", // Cor do texto para o dia selecionado
                                    "&:hover": {
                                        backgroundColor: "darkred", // Cor de fundo ao passar o mouse
                                    },
                                },
                                "& .MuiPickersCalendarHeader-iconButton": {
                                    // Estilização dos botões de navegação do calendário
                                    color: "red", // Cor dos ícones de navegação
                                },
                            }}
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            renderInput={(params) => <div {...params} />}
                        />
                    </div>
                </LocalizationProvider>
                <AppointmentSection>
                    <AppointmentList>
                        {slotsForSelectedDate.map((slot, index) => {
                            return (
                                <AppointmentItem
                                    key={index}
                                    y={"green"}
                                    x={slot.ocupado ? true : false}
                                >
                                    <AppointmentInfo>
                                        <div style={{ width: "100%" }}>
                                            Horário:
                                            <strong>
                                                {dayjs(
                                                    slot.appointment_date
                                                ).format("HH:mm")}
                                            </strong>
                                        </div>
                                        <div>
                                            Status:
                                            {slot.ocupado ? "Ocupado" : "Vazio"}
                                        </div>
                                        {slot.ocupado && (
                                            <div>
                                                <AppointmentPanel
                                                    isOpen={
                                                        showAppointmentPanel
                                                    }
                                                    client={slot.client}
                                                    onClose={() =>
                                                        setShowAppointmentPanel(
                                                            false
                                                        )
                                                    }
                                                />
                                            </div>
                                        )}
                                    </AppointmentInfo>
                                    {slot.ocupado && (
                                        <ViewButton
                                            onClick={() =>
                                                setShowAppointmentPanel(true)
                                            }
                                        >
                                            <RiEyeLine />
                                        </ViewButton>
                                    )}
                                </AppointmentItem>
                            );
                        })}
                    </AppointmentList>
                </AppointmentSection>
            </Container>
        </ModalBase>
    );
};

export default AppointmentScreen;
