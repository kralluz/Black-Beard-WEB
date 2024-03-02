import styled from "styled-components";

export const Container = styled.div`
    padding: 12px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    max-height: 85vh;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
`;

export const ViewButton = styled.button`
    background: transparent;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
`;

export const AppointmentSection = styled.div`
    margin-top: 20px;
    width: 100%;
`;

export const AppointmentList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const AppointmentItem = styled.li`
    background: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => (props.x ? "#f8f8d7" : "#d4edda")};
`;

export const AppointmentInfo = styled.div`
    width: 100%;
`;

export const DeleteButton = styled.button`
    background: transparent;
    border: none;
    color: #ff6347;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
`;

export const EditButton = styled.button`
    background: transparent;
    border: none;
    color: #1e90ff;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
`;
