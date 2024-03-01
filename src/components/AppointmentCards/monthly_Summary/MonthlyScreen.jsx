import styled from "styled-components";
import React from "react";
import ModalBase from "../../BasedModal"; // Assumindo que o nome correto é ModalBase

const MonthlyPerformanceCard = styled.div`
    background: #f0f0f0; // Um fundo mais claro para destaque
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adicionando sombra para um efeito elevado
`;

const PerformanceDetails = styled.div`
    margin-top: 20px;
`;

const SectionTitle = styled.h3`
    color: #333; // Cor mais escura para melhor leitura
`;

const PerformanceData = styled.p`
    color: #181818; // Cor suave para os detalhes
`;

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
