import React from "react";
import styled from "styled-components";
import NextAppointmentComponent from "./AppointmentCards/CardNextAppointment";
import ScheduleComponent from "./AppointmentCards/CardDay";
import WeeklySummaryComponent from "./AppointmentCards/CardWeekly";
import MonthSummaryComponent from "./AppointmentCards/CardMonth";

const CardsContainer = styled.div`
    padding: 16px;
`;

const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid #ccc;
`;

const CardTitle = styled.h3`
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
`;

const AgendaCards = () => {
    return (
        <CardsContainer>
            <NextAppointmentComponent/>
            <ScheduleComponent/>
            <WeeklySummaryComponent/>
            <MonthSummaryComponent/>
        </CardsContainer>
    );
};

export default AgendaCards;
