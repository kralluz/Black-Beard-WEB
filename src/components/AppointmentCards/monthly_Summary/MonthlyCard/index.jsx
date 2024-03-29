import React, { useState } from "react";
import CardComponent from "../../CardComponent/index.jsx";
import ScreenMonthModal from "../MonthlyScreen/index.jsx";
import { Data, DataKey, DataValue } from "./styles.js";

const MonthlyCard = () => {
    const monthlySummary = {
        totalRevenue: "R$ 12.000,00",
        totalServices: 320,
        mostFrequentClient: "João Silva",
        mostPopularService: "Corte Masculino",
        growthComparison: "+8%",
    };

    const month = new Date().toLocaleDateString("pt-BR", { month: "long" });
    const headerText = `Resumo Mensal:  ${month}`;

    const [showMonth, setShowMonth] = useState(false);

    return (
        <>
            <ScreenMonthModal
                isOpen={showMonth}
                onClose={() => setShowMonth(false)}
            />
            <CardComponent
                headerContent={headerText}
                buttonText="Mais Detalhes"
                onButtonClick={() => setShowMonth(true)}
            >
                <Data>
                    <DataKey>Receita Total: </DataKey>
                    <DataValue>{monthlySummary.totalRevenue}</DataValue>
                </Data>
                <Data>
                    <DataKey>Total de Serviços: </DataKey>
                    <DataValue>{monthlySummary.totalServices}</DataValue>
                </Data>
                <Data>
                    <DataKey>Cliente Mais Frequente:</DataKey>
                    <DataValue>{monthlySummary.mostFrequentClient}</DataValue>
                </Data>
                <Data>
                    <DataKey>Serviço Mais Procurado: </DataKey>
                    <DataValue>{monthlySummary.mostPopularService}</DataValue>
                </Data>
                <Data>
                    <DataKey>Crescimento: </DataKey>
                    <DataValue>{monthlySummary.growthComparison}</DataValue>
                </Data>
            </CardComponent>
        </>
    );
};

export default MonthlyCard;
