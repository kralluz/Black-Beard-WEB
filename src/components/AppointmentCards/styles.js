import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    max-width: 500px;
    width: 100%;
    margin: 20px auto;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding: 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;

export const Content = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: #00f;
    padding: 10px 0;
    text-decoration: underline;
    cursor: pointer;
    width: 100%;
    text-align: center;
    display: block;
    margin-top: 20px;
`;

export const SubmitButton = styled.button`
    border-radius: 16px;
    border: none;
    cursor: pointer;
    text-align: center;
`;

export const Data = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DataKey = styled.p`
font-size: 18;
font-weight: 600;
`;

export const DataValue = styled.p`
font-size: 18px;
font-weight: bold;
`;

export const ClientName = styled.span`
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
    width: 100%;
    text-align: left;
`;

export const ServiceSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const AppointmentsList = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
`;

export const ServiceTag = styled.span`
    background-color: #e2c07d;
    border-radius: 15px;
    padding: 5px 10px;
    font-size: 11px;
    color: #333;
    margin: 5px 0px ;
    font-weight: bold;
`;

export const ServicesContainer = styled.div`
    display: flex;
    justify-content: end;
`;

export const TotalValue = styled.span`
    font-size: 16px;
    color: #333;
    font-weight: bold;
`;

export const NextAppointmentCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    max-width: 500px;
    width: 100%;
    margin: 20px auto;
`;

export const SummaryInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const ClientList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ClientItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;