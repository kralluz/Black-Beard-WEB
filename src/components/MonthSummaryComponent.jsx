import React from "react";
import styled from "styled-components";

const SummaryCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    width: 300px;
    margin: 0 auto;
`;

const CardHeader = styled.div`
    background-color: #e2c07d;
    padding: 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;

const Content = styled.div`
    padding: 16px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 20px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    font-size: 16px;
    color: #888;
`;

const Value = styled.span`
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
    width: 100%;
    text-align: center;
    display: block;
`;

const MonthSummaryComponent = () => {
    return (
        <SummaryCard>
            <CardHeader>dezembro</CardHeader>
            <Content>
                <Row>
                    <Column>
                        <Title>Resumo do mês</Title>
                        <Value>principais dias</Value>
                        <Value>1-2-3-4-5-6-7</Value>
                    </Column>
                    <Column>
                        <Title>receita total</Title>
                        <Value>R$3.486,45</Value>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Title>total de agendamentos</Title>
                        <Value>285</Value>
                    </Column>
                    <Column>
                        <Title>taxa de agendamentos</Title>
                        <Value>75%</Value>
                    </Column>
                </Row>
                <Button>ver mais detalhes</Button>
            </Content>
        </SummaryCard>
    );
};

export default MonthSummaryComponent;
