import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ModalBase from "../../../BasedModal";
import appointments from "../../../../responses/appointments";

import {
    NextAppointmentCard,
    AppointmentDetails,
    AppointmentInfo,
    IconsWrapper,
    SummaryInfo,
} from "./styles";

const DailyScreen = ({ isOpen, onClose }) => {
    const getCurrentDateInfo = () => {
        const now = new Date();
        const options = { weekday: "long", month: "long", day: "numeric" };
        const formattedDate = now.toLocaleDateString("pt-BR", options);
        const totalAppointments = appointments.length;
        const totalRevenue = appointments.reduce(
            (acc, curr) => acc + curr.totalValue,
            0
        );

        return { formattedDate, totalAppointments, totalRevenue };
    };

    const { formattedDate, totalAppointments, totalRevenue } =
        getCurrentDateInfo();

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <NextAppointmentCard>
                <SummaryInfo>
                    <h2>Agendamentos para {formattedDate}</h2>
                    <p>
                        {totalAppointments} agendamentos - Receita Total
                        Esperada: R$ {totalRevenue},00
                    </p>
                </SummaryInfo>
                {appointments.map((appointment) => (
                    <AppointmentDetails key={appointment.id}>
                        <AppointmentInfo>
                            Horário: {appointment.appointment_time}
                        </AppointmentInfo>
                        <AppointmentInfo>
                            Nome: {appointment.client.name}
                        </AppointmentInfo>
                        <AppointmentInfo>
                            Serviços:
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

export default DailyScreen;
