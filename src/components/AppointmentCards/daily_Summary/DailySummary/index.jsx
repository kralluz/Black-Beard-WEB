import React, { useState } from "react";
import { receitaTotal } from "../../../../responses/appointments";
import CardComponent from "../../CardComponent";
import DailyScreen from "../DailyScreen";
import {
    ClientList,
    Data,
    DataKey,
    DataValue,
    ClientName,
    ServicesContainer,
    ServiceTag,
    AppointmentsList,
} from "./styles.js";
import appointments from "../../../../responses/appointments";

const DailySummary = () => {
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
            <DailyScreen isOpen={dayModal} onClose={() => setDayModal(false)} />
            <CardComponent
                headerContent={headerText}
                buttonText="Ver Mais"
                onButtonClick={() => setDayModal(true)}
            >
                <Data>
                    const
                    <DataKey>Agendamentos para hoje: </DataKey>
                    <DataValue>{appointments.length}</DataValue>
                </Data>
                <Data>
                    <DataKey>Receita: </DataKey>
                    <DataValue>{`R$ ${receitaTotal},00`}</DataValue>
                </Data>
                <ClientList>
                    {appointments.slice(0, 4).map((appointment, index) => (
                        <AppointmentsList key={index}>
                            <ClientName>{appointment.client.name}</ClientName>
                            <ServicesContainer className="fullWidth">
                                <ServiceTag>
                                    {appointment.service.length === 1
                                        ? appointment.service[0].name
                                        : `${appointment.service[0].name} e + ${
                                              appointment.service.length - 1
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

export default DailySummary;
