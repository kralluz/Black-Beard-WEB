import styled from "styled-components";

export const ContentScreen = styled.div`
    padding: 20px;
    border-radius: 10px;
    margin: 0;
    overflow-y: auto;
    max-height: 80vh;
    width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
`;

export const PlanDetails = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PlanName = styled.h4`
    font-size: 24px;
    color: #333;
    margin: 4px 0px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
`;

export const DescriptionContainer = styled.div`
    width: 100%;
`;
export const DescriptionKey = styled.p``;
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
    min-height: 100px;
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

export const MainContent = styled.p`
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
`;
export const FooterContent = styled.p`
    font-size: 12px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 10px;
`;

export const ServiceButton = styled.button`
    background: #007bff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    border-radius: 5px;
    color: white;
    margin-left: 10px;

    &:first-child {
        margin-left: 0;
    }

    svg {
        margin-right: 5px;
    }
`;

export const DeleteButton = styled.button`
    background: #ff0000;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    border-radius: 5px;
    color: white;
    margin-left: 10px;

    &:first-child {
        margin-left: 0;
    }

    svg {
        margin-right: 5px;
    }
`;

export const EditableContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: transparent;
    align-items: center;

    &:focus-within label {
        display: block;
    }
`;

export const PlanNameLabel = styled.label`
    display: none;
    font-size: 14px;
    color: #181818;
    font-family: "Roboto", sans-serif;
    padding: 0px;
    margin: 0px;
    flex-wrap: rap;
`;
export const PlanNameInput = styled.input`
    border-radius: 4px;
    margin: 0px;
    padding: 0px;
    border: none;
    width: 100%;
    background-color: transparent;
    margin-bottom: 8px;
    font-size: 24px;
    color: #333;
    font-family: "Roboto", sans-serif;
    font-weight: bold;

    &:focus {
        outline: none;
        border-bottom: 1px solid #000000;
    }
`;
export const EditableInput = styled.input`
    border: none;
    width: 20%;
    background-color: transparent;
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;

    &:focus {
        outline: none;
        border-bottom: 1px solid #007bff;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    color: #181818;
    font-family: "Roboto", sans-serif;
    padding: 0px;
    margin: 0px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: rap;
    white-space: nowrap;
    font-family: "Roboto", sans-serif;
`;

export const TextareaContainer = styled.div`
    width: 100%;
`;
export const TextareaLabel = styled.label`
    font-size: 16px;
    color: #181818;
    font-family: "Roboto", sans-serif;
    padding: 0px;
    margin: 0px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: rap;
    white-space: nowrap;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
    padding: 0px;
`;

export const TextareaInput = styled.textarea`
    border: none;
    width: 100%;
    background-color: transparent;
    font-size: 16px;
    color: #181818;
    margin-bottom: 4px;
    font-family: "Roboto", sans-serif;
    padding: 10px;
    box-sizing: border-box;
    resize: vertical;
    min-height: 100px;
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
