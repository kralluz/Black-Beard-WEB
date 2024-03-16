import React from "react";
import styled from "styled-components";
import QuickScheduling from "./AppointmentCards/quick_Scheduling/QuickScheduling";
import NextAppointment from "./AppointmentCards/next_Appointment/NextAppointment";
import ScheduleComponent from "./AppointmentCards/daily_Summary/DailySummary";
import WeeklySummaryComponent from "./AppointmentCards/weekly_Summary/CardWeekly";
import MonthSummaryComponent from "./AppointmentCards/monthly_Summary/MonthlyCard";
import EditableParagraph from "../EditableParagraph";
import { z } from "zod";
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


const validationSchema = z
    .string()
    .min(1, { message: "Este campo é obrigatório" });


const MainContent = () => {
    const handleSubmit = (data) => {
        console.log("Dados editados:", data.editedValue);
    };
    return (
        <CardsContainer>
            {/* <div style={{border: '1px solid black', margin: "50px auto", maxWidth: '548px', padding: "60px", borderRadius:"16px"}}>
                <EditableParagraph
                    initialValue="Texto inicial"
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                />
            </div> */}
            <QuickScheduling />
            <NextAppointment />
            <ScheduleComponent />
            <WeeklySummaryComponent />
            <MonthSummaryComponent />
        </CardsContainer>
    );
};

export default MainContent;
