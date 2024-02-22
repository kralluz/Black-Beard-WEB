import React, { useState } from "react";
import styled from "styled-components";
import ScreenWeekly from "../SchedulingScreens/ScreenWeekly";

const SummaryCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    border: 1px solid #ccc;
    margin: 0 auto;
`;

const CardHeader = styled.div`
    padding: 16px;
    background-color: #f8e1b6;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-weight: bold;
    color: #333;
    text-align: center;
`;

const Content = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Section = styled.div`
    margin-bottom: 10px;
`;

const Title = styled.div`
    font-size: 18px;
    color: #333;
    margin-bottom: 5px;
`;

const Value = styled.div`
    font-size: 16px;
    color: #333;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: #00f;
    padding: 10px 0;
    text-decoration: underline;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    width: 100%;
`;

const WeeklySummaryComponent = () => {
    const [weeklyModal, setWeeklyModal] = useState(false);
    return (
        <>
        <ScreenWeekly isOpen={weeklyModal} onClose={() => setWeeklyModal(false)} />
        <SummaryCard>
            <CardHeader>15 serviços esta semana</CardHeader>
            <Content>
                <Section>
                    <Title>Comparativo semanal</Title>
                    <Value>semana atual</Value>
                    <Value>receita estimada: R$ 350,00</Value>
                    <Value>serviços agendados: 15</Value>
                </Section>
                <Section>
                    <Value>semana anterior</Value>
                    <Value>receita total: R$ 478,60</Value>
                    <Value>serviços agendados: 19</Value>
                </Section>
                <Section>
                    <Value>Dia mais movimentado:</Value>
                    <Value>Quinta-Feira</Value>
                </Section>
                <Button  onClick={() => setWeeklyModal(true)}>ver mais detalhes</Button>
            </Content>
        </SummaryCard>
        </>
    );
};

export default WeeklySummaryComponent;
