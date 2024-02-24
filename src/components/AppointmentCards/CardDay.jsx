import React, { useState } from "react";
import CardComponent from "./CardComponent";
import ScreenDayModal from "../SchedulingScreens/ScreenDay";
import {
    SummaryInfo,
    ClientList,
    Data,
    DataKey,
    DataValue,
    ClientName,
    ServicesContainer,
    ServiceTag,
    AppointmentsList,
} from "./styles";
import { agenda } from "../../providers/agendamento";
import { color } from "react-magic-motion";
const DailyCard = () => {
    const dailySummary = {
        totalAppointments: 12,
        estimatedRevenue: "R$ 1.200,00",
        nextClients: [
            { name: "João Silva", service: "Corte" },
            { name: "Maria Oliveira", service: ["Coloração", "hidratação"] },
            { name: "Carlos Andrade", service: "Hidratação" },
            { name: "Ana Júlia", service: "Escova" },
        ],
    };
    const day = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    const headerText = `Resumo Diário:  ${day}`;

    const [dayModal, setDayModal] = useState(false);
    return (
        <>
            <ScreenDayModal
                isOpen={dayModal}
                onClose={() => setDayModal(false)}
            />
            <CardComponent
                headerContent={headerText}
                buttonText="Ver Mais"
                onButtonClick={() => setDayModal(true )}
            >
                <Data>
                    <DataKey>Agendamentos para hoje: </DataKey>
                    <DataValue>{agenda.length}</DataValue>
                </Data>
                <Data>
                    <DataKey>Receita: </DataKey>
                    <DataValue>{dailySummary.estimatedRevenue}</DataValue>
                </Data>
                <ClientList>
                    {agenda.slice(0, 4).map((appointment, index) => (
                        <AppointmentsList key={index}>
                            <ClientName>{appointment.client.name}</ClientName>
                            <ServicesContainer className="fullWidth">
                                <ServiceTag>
                                    {appointment.services.length === 1
                                        ? appointment.services[0].service_name
                                        : `${
                                            appointment.services[0]
                                                .service_name
                                        } e + ${
                                            appointment.services.length - 1
                                        }`}
                                </ServiceTag>
                            </ServicesContainer>
                        </AppointmentsList>
                    ))}
                </ClientList>
            </CardComponent>
        </>
    );
};

export default DailyCard;
