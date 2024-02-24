import services from '../../responses/services'
import React from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import CardComponent from "./CardComponent";
import {
    FaRegCalendarPlus,
    FaUser,
    FaPhone,
    FaClock,
    FaCalendarAlt,
    FaTimes,
    FaCheck,
} from "react-icons/fa";

const FormContainer = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const FormLabel = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 30%;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const CancelButton = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #dc3545;
    color: white;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: #c82333;
    }
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

    const [showClientNameError, setShowClientNameError] = React.useState(false);
    const [showPhoneNumberError, setShowPhoneNumberError] =
        React.useState(false);
    const [showDateError, setShowDateError] = React.useState(false);
    const [showTimeError, setShowTimeError] = React.useState(false);
    const [showServiceError, setShowServiceError] = React.useState(false);

    React.useEffect(() => {
        const timer = 3000;
        if (errors.clientName) {
            setShowClientNameError(true);
            setTimeout(() => setShowClientNameError(false), timer);
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
        setSelectedServices([]);
    };

    const onSubmit = async (data) => {
        if (selectedServices.length === 0) {
            setShowServiceError(true);
            return;
        }
        setShowServiceError(false);
        try {
            console.log({ ...data, selectedServices });
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
                <h1>Criar Agendamento</h1>
                <Toaster position="top-center" reverseOrder={false} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <FormLabel>Cliente</FormLabel>
                        <FormInput
                            type="text"
                            {...register("clientName", {
                                required: "Nome do cliente é obrigatório",
                            })}
                        />
                        {errors.clientName && showClientNameError && (
                            <p>{errors.clientName.message}</p>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Telefone</FormLabel>
                        <FormInput
                            type="tel"
                            {...register("phoneNumber", {
                                required: "Número de telefone é obrigatório",
                            })}
                        />
                        {errors.phoneNumber && showPhoneNumberError && (
                            <p>{errors.phoneNumber.message}</p>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Data</FormLabel>
                        <FormInput
                            type="date"
                            {...register("date", {
                                required: "Data é obrigatória",
                            })}
                        />
                        {errors.date && showDateError && (
                            <p>{errors.date.message}</p>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Horário</FormLabel>
                        <FormInput
                            type="time"
                            {...register("time", {
                                required: "Horário é obrigatório",
                            })}
                        />
                        {errors.time && showTimeError && (
                            <p>{errors.time.message}</p>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Serviços</FormLabel>
                        <div
                            style={{
                                border: showServiceError ? "1px solid red" : "",
                                padding: "10px",
                                borderRadius: "5px",
                            }}
                        >
                            {services.map((service) => (
                                <ServiceTag
                                    key={service.name}
                                    $isSelected={selectedServices.includes(
                                        service.name
                                    )}
                                    onClick={() => {
                                        handleServiceChange(service.name);
                                        if (showServiceError)
                                            setShowServiceError(false);
                                    }}
                                >
                                    {service.name}
                                </ServiceTag>
                            ))}
                        </div>
                        {showServiceError && (
                            <p style={{ color: "red" }}>
                                Ao menos um serviço deve ser selecionado
                            </p>
                        )}
                    </FormGroup>
                    <ButtonContainer>
                        {isDirty && (
                            <CancelButton type="button" onClick={handleReset}>
                                <FaTimes />
                            </CancelButton>
                        )}
                        <SubmitButton type="submit">
                            <FaCheck />
                        </SubmitButton>
                    </ButtonContainer>
                </form>
            </FormContainer>
        </>
    );
};

export default SchedulingComponent;
