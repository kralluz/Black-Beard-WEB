import { nextAppointment } from "../../../../responses/appointments";
import React, { useState } from "react";
import ScreenNextAppointmentModal from "../NextScreen";
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
} from "./styles.js";
import appointments from "../../../../responses/appointments";

const NextAppointment = () => {
    const [nextModal, setNextModal] = useState(false);
    const services =
        nextAppointment && nextAppointment.service
            ? nextAppointment.service
            : [];
    const calculateTotal = (services) =>
        services.reduce((total, service) => total + service.price, 0);
    const totalValue = calculateTotal(services);
    const formattedTime = new Date(
        nextAppointment && nextAppointment.appointment_time
            ? nextAppointment.appointment_time
            : new Date()
    )
        .toISOString()
        .substr(11, 5);

    const isAppointmentValid =
        nextAppointment && nextAppointment.id && services.length > 0;

    return (
        <>
            {isAppointmentValid ? (
                <>
                    <ScreenNextAppointmentModal
                        isOpen={nextModal}
                        onClose={() => setNextModal(false)}
                        nextAppointment={nextAppointment}
                    />
                    <NextAppointmentCard>
                        <CardHeader>
                            <div>{`O próximo Agendamento será às ${formattedTime}`}</div>
                        </CardHeader>
                        <Content>
                            <ClientName>
                                {nextAppointment.client.name}
                            </ClientName>

                            <ServiceSection>
                                <ServicesContainer>
                                    {services.map((service, index) => (
                                        <ServiceTag key={index}>
                                            {service.name}
                                        </ServiceTag>
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
            ) : (
                <NextAppointmentCard>
                    <CardHeader>
                        <div>Nenhum agendamento próximo para hoje</div>
                    </CardHeader>
                </NextAppointmentCard>
            )}
        </>
    );
};

export default NextAppointment;
