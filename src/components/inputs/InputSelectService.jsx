import React, { useState } from "react";
import styled from "styled-components";

const ServiceTag = styled.div`
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: #17202a;
    padding: 5px 10px;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? "#3f63f4" : "#f9e79f")};
    color: black;
`;

const ServicesContainer = styled.div`
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    border: ${({ showError }) => (showError ? "1px solid red" : "none")};
`;

const ServiceSelector = ({ services, showError, onSelectedServicesChange }) => {
    const [selectedServices, setSelectedServices] = useState([]);

    const handleServiceClick = (serviceName) => {
        const isSelected = selectedServices.includes(serviceName);
        const updatedSelectedServices = isSelected
            ? selectedServices.filter((service) => service !== serviceName)
            : [...selectedServices, serviceName];

        setSelectedServices(updatedSelectedServices);

        if (onSelectedServicesChange) {
            onSelectedServicesChange(updatedSelectedServices);
        }
    };

    return (
        <ServicesContainer showError={showError}>
            {services.map((service) => (
                <ServiceTag
                    key={service.id}
                    onClick={() => handleServiceClick(service.name)}
                    selected={selectedServices.includes(service.name)}
                >
                    {service.name}
                </ServiceTag>
            ))}
        </ServicesContainer>
    );
};

export default ServiceSelector;
