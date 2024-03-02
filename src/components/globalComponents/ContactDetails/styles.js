import styled, { css } from "styled-components";

export const ContentScreen = styled.div`
    border-radius: 10px;
    margin: 0 auto;
    overflow-y: auto;
    @media (max-width: 768px) {
        padding: 0px;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
    padding-bottom: 10px;
`;

export const ClientName = styled.h4`
    font-size: 32px;
    color: #333;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;
export const ClientDateKey = styled.span`
    font-size: 14px;
    color: #181818;
    font-weight: 500;
`;
export const ClientDateValue = styled.span`
    font-size: 14px;
    color: #181818;
`;
export const ClientInfoKey = styled.span`
    font-size: 20px;
    color: #181818;
    font-weight: 600;
`;
export const ClientInfoValue = styled.span`
    font-size: 20px;
    color: #181818;
`;

export const ClientSection = styled.div`
    background: #ffffff;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const ClientInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

export const ContactClientContainer = styled.div`
    display: flex;
`;

export const ClientInfo = styled.div`
    font-size: 16px;
    color: #181818;

    @media (max-width: 768px) {
        font-size: 14px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;

export const DescriptionContainer = styled.div`
    width: 100%;
`;

export const DescriptionKey = styled.p`
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
`;

export const DescriptionValue = styled.p`
    border: none;
    width: 100%;
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
    padding: 10px;
    box-sizing: border-box;
    resize: vertical;
    min-height: 70px;
    line-height: 1.5;
    border-radius: 5px;
    resize: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &:focus {
        outline: none;
        border-bottom: 1px solid #007bff;
        box-shadow: 0 1px 3px rgba(0, 123, 255, 0.3);
    }

    &::placeholder {
        color: #181818;
    }
`;

export const ClientPlanInfo = styled.p`
    margin: 5px 0;
    font-size: 16px;
    color: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 14px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;

export const PlanContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
`;
export const PlanClientInfo = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const PlanTag = styled.span`
    display: inline-block;
    background-color: #9b27b0b1;
    color: #ffffff;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: 400;
`;

export const ActionButtons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }
`;

export const Panel = styled.div`
    display: flex;
    width: 100%;
    gap: 20%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const buttonStyles = css`
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    svg {
        margin-right: 5px;
    }
    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;

export const CallButton = styled.button`
    ${buttonStyles}
    background-color: #4CAF50;
    @media (max-width: 768px) {
        padding: 8px 12px;
        margin: 5px;
    }
`;

export const ChatButton = styled.button`
    ${buttonStyles}
    background-color: #008cffc9;
    @media (max-width: 768px) {
        padding: 8px 12px;
        margin: 5px;
    }
`;

export const DeleteButton = styled.button`
    ${buttonStyles}
    background-color: #F44336;
    @media (max-width: 768px) {
        padding: 10px 16px;
    }
`;

export const EditButton = styled.button`
    ${buttonStyles}
    background-color: #FFEB3B;
    color: #000000;
    font-weight: 600;
    @media (max-width: 768px) {
        padding: 10px 16px;
    }
`;
