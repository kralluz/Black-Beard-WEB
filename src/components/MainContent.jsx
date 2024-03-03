import React from "react";
import styled from "styled-components";
import QuickScheduling from "./AppointmentCards/quick_Scheduling/QuickScheduling";
import NextAppointment from "./AppointmentCards/next_Appointment/NextAppointment";
import ScheduleComponent from "./AppointmentCards/daily_Summary/DailySummary";
import WeeklySummaryComponent from "./AppointmentCards/weekly_Summary/CardWeekly";
import MonthSummaryComponent from "./AppointmentCards/monthly_Summary/MonthlyCard";

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

const MainContent = () => {
    return (
        <CardsContainer>
            <QuickScheduling />
            <NextAppointment />
            <ScheduleComponent />
            <WeeklySummaryComponent />
            <MonthSummaryComponent />
        </CardsContainer>
    );
};

export default MainContent;
