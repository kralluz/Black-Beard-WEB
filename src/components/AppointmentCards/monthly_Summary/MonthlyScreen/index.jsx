import React from "react";
import ModalBase from "../../../BasedModal"; // Assumindo que o nome correto é ModalBase
import {
    MonthlyPerformanceCard,
    PerformanceDetails,
    SectionTitle,
    PerformanceData,
} from "./styles.js";

const ScreenMonthlyModal = ({ isOpen, onClose }) => {
    const data = {
        revenueTotal: "8.450,00",
        totalAppointments: 320,
        occupationRate: 85,
        mostProvidedServices: [
            "Corte de Cabelo",
            "Barba",
            "Hidratação Capilar",
        ],
        newClients: 45,
        bestRevenueDay: "15 de Março - Sexta-Feira",
        averageRating: 4.8,
        dataDate: "1 de Abril de 2024",
    };
    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <MonthlyPerformanceCard>
                <h2>Desempenho Mensal</h2>
                <PerformanceDetails>
                    <SectionTitle>Resumo do Mês</SectionTitle>
                    <PerformanceData>
                        Receita Total: R${data.revenueTotal}
                    </PerformanceData>
                    <PerformanceData>
                        Total de Agendamentos: {data.totalAppointments}
                    </PerformanceData>
                    <PerformanceData>
                        Taxa de Ocupação: {data.occupationRate}%
                    </PerformanceData>
                    <PerformanceData>
                        Serviços Mais Prestados:{" "}
                        {data.mostProvidedServices.join(", ")}
                    </PerformanceData>
                </PerformanceDetails>
                <PerformanceDetails>
                    <SectionTitle>Informações Adicionais</SectionTitle>
                    <PerformanceData>
                        Clientes Novos: {data.newClients}
                    </PerformanceData>
                    <PerformanceData>
                        Melhor Dia de Receita: {data.bestRevenueDay}
                    </PerformanceData>
                    <PerformanceData>
                        Avaliação Média: {data.averageRating}/5
                    </PerformanceData>
                    <PerformanceData>
                        Dados obtidos em {data.dataDate}
                    </PerformanceData>
                </PerformanceDetails>
            </MonthlyPerformanceCard>
        </ModalBase>
    );
};

export default ScreenMonthlyModal;
