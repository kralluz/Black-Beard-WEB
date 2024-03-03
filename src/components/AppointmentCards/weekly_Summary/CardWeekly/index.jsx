import React, { useState } from "react";
import CardComponent from "../../CardComponent";
import WeeklyScreenModal from "../WeeklyScreen";
import { Data, DataKey, DataValue } from "./styles.js";

const WeeklyCard = () => {
    const weeklySummary = {
        totalServices: 48,
        comparison: "+5%",
        busiestDay: "Quinta-feira",
        occupancyRate: "85%",
        customerSatisfaction: "92%",
    };

    const [showWeekly, setShowWeekly] = useState(false);

    return (
        <>
            <WeeklyScreenModal
                isOpen={showWeekly}
                onClose={() => setShowWeekly(false)}
            />
            <CardComponent
                headerContent="Resumo Semanal"
                buttonText="Detalhes"
                onButtonClick={() => setShowWeekly(true)}
            >
                <Data>
                    <DataKey>Serviços na Semana:</DataKey>
                    <DataValue>{weeklySummary.totalServices}</DataValue>
                </Data>
                <Data>
                    <DataKey>Comparativo Semanal:</DataKey>
                    <DataValue>{weeklySummary.comparison}</DataValue>
                </Data>
                <Data>
                    <DataKey>Dia Mais Movimentado:</DataKey>
                    <DataValue>{weeklySummary.busiestDay}</DataValue>
                </Data>
                <Data>
                    <DataKey>Taxa de Ocupação:</DataKey>
                    <DataValue>{weeklySummary.occupancyRate}</DataValue>
                </Data>
            </CardComponent>
        </>
    );
};

export default WeeklyCard;
