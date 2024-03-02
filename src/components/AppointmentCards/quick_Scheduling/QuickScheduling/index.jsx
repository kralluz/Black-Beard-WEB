import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import SelectTime from "../SelectTime";
import { FormContainer, FormGroup, FormInput } from "./styles";

const QuickScheduling = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
    } = useForm();
    const [selectedServices, setSelectedServices] = React.useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ContactDetailsNameError, setContactDetailsNameError] =
        React.useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e) => {
        const localDate = new Date(e.target.value + "T00:00:00");
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
        setIsModalOpen(false);
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
                <SelectTime
                    isOpen={isModalOpen}
                    onClose={handleReset}
                    selectedDate={selectedDate}
                ></SelectTime>
            )}
        </>
    );
};

export default QuickScheduling;
