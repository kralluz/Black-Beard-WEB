import React from "react";
import CardComponent from "./CardComponent";
import { Data, DataKey, DataValue } from "./styles";

const WeeklyCard = () => {
    const weeklySummary = {
        totalServices: 48,
        comparison: "+5%",
        busiestDay: "Quinta-feira",
        occupancyRate: "85%",
        customerSatisfaction: "92%",
    };

    return (
        <CardComponent
            headerContent="Resumo Semanal"
            buttonText="Detalhes"
            onButtonClick={() => alert("Detalhes da Semana")}
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
    );
};

export default WeeklyCard;
