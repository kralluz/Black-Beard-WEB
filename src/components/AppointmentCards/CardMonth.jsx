import React from "react";
import CardComponent from "./CardComponent";
import { Data, DataKey, DataValue } from "./styles";

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

    return (
        <CardComponent
            headerContent={headerText}
            buttonText="Mais Detalhes"
            onButtonClick={() => alert("Detalhes do Mês")}
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
    );
};

export default MonthlyCard;
