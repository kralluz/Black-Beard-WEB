import React from "react";
import styled from "styled-components";

const ScheduleCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 16px;
    background-color: #e2c07d;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const Day = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;

const Date = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #f90;
`;

const AppointmentList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const AppointmentItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 16px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const Name = styled.span`
    font-size: 16px;
    color: #333;
`;

const Time = styled.span`
    font-size: 16px;
    color: #333;
`;

const DetailsButton = styled.button`
    background-color: transparent;
    border: none;
    color: #00f;
    padding: 10px 0;
    text-decoration: underline;
    cursor: pointer;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    display: block;
`;

const ScheduleComponent = () => {
    return (
        <ScheduleCard>
            <Header>
                <Day>segunda-feira</Day>
                <Date>18 de dezembro</Date>
            </Header>
            <AppointmentList>
                <AppointmentItem>
                    <Name>Carlos Henrique</Name>
                    <Time>cabelo</Time>
                </AppointmentItem>
                <AppointmentItem>
                    <Name>Vitor Santos</Name>
                    <Time>cabelo + barba</Time>
                </AppointmentItem>
                <AppointmentItem>
                    <Name>Igor Henrique</Name>
                    <Time>barba</Time>
                </AppointmentItem>
                <AppointmentItem>
                    <Name>Pedro Lacerda</Name>
                    <Time>barba</Time>
                </AppointmentItem>
            </AppointmentList>
            <DetailsButton>ver mais detalhes</DetailsButton>
        </ScheduleCard>
    );
};

export default ScheduleComponent;
