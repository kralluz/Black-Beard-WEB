import React, { useState } from "react";
import NextAppointmentModal from "../SchedulingScreens/ScreenNextAppointment";
import {
    NextAppointmentCard,
    CardHeader,
    Content,
    ClientName,
    ServiceSection,
    ServicesContainer,
    ServiceTag,
    TotalValue,
    Button,
} from "./styles";

const NextAppointmentComponent = () => {
    const [nextModal, setNextModal] = useState(false);
    const time = "14:00";
    const clientName = "João Silva";
    const services = ["Barba", "Cabelo", "Pigmentação"];
    const totalValue = "R$ 120,00";

    return (
        <>
            <NextAppointmentModal
                isOpen={nextModal}
                onClose={() => setNextModal(false)}
            />
            <NextAppointmentCard>
                <CardHeader>
                    <div>{`O próximo Agendamento será às ${time}`}</div>
                </CardHeader>
                <Content>
                    <ClientName>{clientName}</ClientName>
                    
                        <ServiceSection>
                            <ServicesContainer>
                                {services.map((service, index) => (
                                    <ServiceTag key={index}>
                                        {service}
                                    </ServiceTag>
                                ))}
                            </ServicesContainer>
                            <TotalValue>{totalValue}</TotalValue>
                        </ServiceSection>
                    <Button onClick={() => setNextModal(true)}>
                        ver detalhes
                    </Button>
                </Content>
            </NextAppointmentCard>
        </>
    );
};

export default NextAppointmentComponent;
