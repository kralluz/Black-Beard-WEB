import styled from "styled-components";

export const AppointmentSection = styled.div`
    margin-top: 20px;
    width: 100%;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const Item = styled.li`
    background: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => (props.ocupado ? "#f8f8d7" : "#d4edda")};
`;

export const Info = styled.div`
    width: 100%;
`;

export const ViewButton = styled.button`
    background: transparent;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 20px;
    margin-left: 10px;
`;
