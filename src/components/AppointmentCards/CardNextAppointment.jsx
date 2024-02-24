import { nextAppointment } from "../../responses/appointments";
import React, { useState } from "react";
import ScreenNextAppointmentModal from "../SchedulingScreens/ScreenNextAppointment";
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
import appointments from "../../responses/appointments";

const NextAppointmentComponent = () => {
    const [nextModal, setNextModal] = useState(false);
    const time = "14:00";
    const clientName = "João Silva";
    const services = nextAppointment.service
    console.log("🚀 ~ NextAppointmentComponent ~ services:", services)
    const calculateTotal = services => services.reduce((total, service) => total + service.price, 0);
    const totalValue = calculateTotal(services);
    console.log(nextAppointment.service[0].name);
    const formattedTime = new Date(nextAppointment.appointment_time)
        .toISOString()
        .substr(11, 5);

    return (
        <>
            <ScreenNextAppointmentModal
                isOpen={nextModal}
                onClose={() => setNextModal(false)}
            />
            <NextAppointmentCard>
                <CardHeader>
                    <div>{`O próximo Agendamento será às ${formattedTime}`}</div>
                </CardHeader>
                <Content>
                    <ClientName>{nextAppointment.client.name}</ClientName>

                    <ServiceSection>
                        <ServicesContainer>
                            {services.map((service, index) => (
                                <ServiceTag key={index}>{service.name}</ServiceTag>
                            ))}
                        </ServicesContainer>
                        <TotalValue>{`valor Total: ${totalValue},00`}</TotalValue>
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
