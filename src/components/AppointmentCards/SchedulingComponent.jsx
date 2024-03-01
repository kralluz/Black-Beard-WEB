import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import HorarioDisponivelModal from "./HorarioDisponivelModal.jsx";

const FormContainer = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #d4edda;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const ServiceTag = styled.div`
    display: inline-flex;
    background-color: #f9e79f;
    align-items: center;
    font-weight: 600;
    color: #17202a;
    padding: 5px 10px;
    border-radius: 15px;
    margin: 5px;

    cursor: pointer;
    transition: background-color 0.3s;

    ${({ $isSelected }) =>
        $isSelected &&
        css`
            background-color: #d4ac0d;
            color: #ffffff;
            &:hover {
                background-color: #f4d03f;
            }
        `}
`;

const SchedulingComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
    } = useForm();
    const [selectedServices, setSelectedServices] = React.useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ContactDetailsNameError, setContactDetailsNameError] = React.useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e) => {
        const localDate = new Date(e.target.value + 'T00:00:00');
        setSelectedDate(localDate.toISOString());
        setIsModalOpen(true);
    };
    const [showPhoneNumberError, setShowPhoneNumberError] =
        React.useState(false);
    const [showDateError, setShowDateError] = React.useState(false);
    const [showTimeError, setShowTimeError] = React.useState(false);
    const [showServiceError, setShowServiceError] = React.useState(false);


    React.useEffect(() => {
        const timer = 3000;
        if (errors.clientName) {
            setContactDetailsNameError(true);
            setTimeout(() => setContactDetailsNameError(false), timer);
        }
        if (errors.phoneNumber) {
            setShowPhoneNumberError(true);
            setTimeout(() => setShowPhoneNumberError(false), timer);
        }
        if (errors.date) {
            setShowDateError(true);
            setTimeout(() => setShowDateError(false), timer);
        }
        if (errors.time) {
            setShowTimeError(true);
            setTimeout(() => setShowTimeError(false), timer);
        }
    }, [errors.clientName]);

    const handleServiceChange = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const handleReset = () => {
        reset();
        setIsModalOpen(false)
    };

    const onSubmit = async (data) => {
        if (selectedServices.length === 0) {
            setShowServiceError(true);
            return;
        }
        setShowServiceError(false);
        try {
            toast.success(
                `Agendamento do ${data.clientName} realizado com sucesso!`,
                {
                    onClick: () => toast.dismiss(),
                }
            );
            reset();
            setSelectedServices([]);
        } catch (error) {
            toast.error("Ocorreu um erro ao tentar realizar o agendamento.");
        }
    };

    return (
        <>
            <FormContainer>
                <h2>Adicionar Agendamento</h2>
                <Toaster position="top-center" reverseOrder={false} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <FormInput
                            type="date"
                            {...register("date", {
                                required: "Data é obrigatória",
                            })}
                            onChange={handleDateChange} // Adiciona o manipulador de mudança
                        />
                        {errors.date && <p>{errors.date.message}</p>}
                    </FormGroup>
                </form>
            </FormContainer>
            {isModalOpen && (
                <HorarioDisponivelModal
                    isOpen={isModalOpen}
                    onClose={handleReset}
                    selectedDate={selectedDate}
                ></HorarioDisponivelModal>
            )}
        </>
    );
};

export default SchedulingComponent;
