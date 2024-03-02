import styled from "styled-components";

export const NewServiceCard = styled.div`
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

export const ContentScreen = styled.div`
    background: transparent;
    padding: 20px;
    border-radius: 10px;
    overflow-y: auto;
    max-height: 80vh;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

export const ServiceDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
`;

export const ServiceButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    background-color: #007bff;
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    margin-bottom: 20px;
`;

export const PlanName = styled.h4`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const PlanPrice = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
`;

export const PlanDescription = styled.p`
    font-size: 14px;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: calc(100% - 16px);
`;
