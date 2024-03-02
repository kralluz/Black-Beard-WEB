import React from "react";
import ModalBase from "../../../BasedModal";
import {
    WeeklyPerformanceCard,
    PerformanceDetail,
    ServiceList,
    FeedbackList,
    ImprovementTip,
} from "./styles.js";
const formatCurrency = (value) => `R$ ${value.toFixed(2).replace(".", ",")}`;

const ScreenWeekly = ({ isOpen, onClose }) => {
    // Dados de exemplo internos
    const weeklyData = {
        weekRange: "20-26 Dezembro",
        totalRevenue: 3486.45,
        totalAppointments: 285,
        mostProvidedServices: [
            { name: "Corte de cabelo", count: 150 },
            { name: "Barba", count: 100 },
            { name: "Hidratação", count: 35 },
        ],
        occupancyRate: 75,
        customerFeedbacks: [
            { rating: 5, comment: "Excelente serviço!" },
            { rating: 4, comment: "Muito bom, mas a espera foi longa." },
        ],
        improvementTips: [
            "Considere oferecer serviços combinados para aumentar a receita.",
            "Promova agendamentos online para reduzir tempos de espera.",
        ],
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <WeeklyPerformanceCard>
                <h2>Desempenho Semanal: {weeklyData.weekRange}</h2>
                <PerformanceDetail>
                    <h3>Receita Total</h3>
                    <p>{formatCurrency(weeklyData.totalRevenue)}</p>
                </PerformanceDetail>
                <PerformanceDetail>
                    <h3>Agendamentos Totais</h3>
                    <p>{weeklyData.totalAppointments}</p>
                </PerformanceDetail>
                <PerformanceDetail>
                    <h3>Serviços Mais Prestados</h3>
                    <ServiceList>
                        {weeklyData.mostProvidedServices.map(
                            (service, index) => (
                                <li
                                    key={index}
                                >{`${service.name}: ${service.count} vezes`}</li>
                            )
                        )}
                    </ServiceList>
                </PerformanceDetail>
                <PerformanceDetail>
                    <h3>Taxa de Ocupação</h3>
                    <p>{`${weeklyData.occupancyRate}%`}</p>
                </PerformanceDetail>
            </WeeklyPerformanceCard>
        </ModalBase>
    );
};

export default ScreenWeekly;
