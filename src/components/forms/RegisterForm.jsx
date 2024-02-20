import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../../providers/userProvider";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../InputField";
import PasswordInput from "../PasswordInput";
import { signupSchema } from "../../Zodrezolvers/register";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
    const navigate = useNavigate();

    const { clientRegister } = useContext(UserContext);
    const [isHidden, setIsHidden] = useState(true);
    const [isConfirmHidden, setIsConfirmHidden] = useState(true);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            navigate("/session");
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = async (data) => {
        clientRegister(data);
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="card mb-4" style={{ width: "400px" }}>
                <div className="card-body">
                    <h1 className="text-center mb-4">Crie sua conta</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputField
                            label="Nome"
                            id="name"
                            register={register}
                            errors={errors}
                            placeholder="Nome de usuário"
                        />

                        <InputField
                            label="Barbearia"
                            id="company_name"
                            register={register}
                            errors={errors}
                            placeholder="Nome de usuário"
                        />

                        <InputField
                            label="E-mail"
                            id="email"
                            type="email"
                            register={register}
                            errors={errors}
                            placeholder="Email de usuário"
                        />

                        <InputField
                            label="Telefone"
                            id="tel"
                            type="tel"
                            register={register}
                            errors={errors}
                            placeholder="Email de usuário"
                        />

                        <PasswordInput
                            label="Senha"
                            id="password"
                            register={register}
                            errors={errors}
                            isHidden={isHidden}
                            setIsHidden={setIsHidden}
                            placeholder="Senha de usuário"
                        />

                        <PasswordInput
                            label="Confirmar Senha"
                            id="confirmPassword"
                            register={register}
                            errors={errors}
                            isHidden={isConfirmHidden}
                            setIsHidden={setIsConfirmHidden}
                            placeholder="Confirmação de senha"
                        />

                        <div className="text-center">
                            <button
                                type="submit"
                                className={`btn ${
                                    isSubmitting
                                        ? "btn-secondary"
                                        : "btn-primary"
                                }`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                            </button>
                        </div>
                    </form>
                    <div className="mt-3 text-end">
                        <Link to="/session" className="btn btn-link">
                            Esqueceu a senha?
                        </Link>
                        <Link to="/session" className="btn btn-link">
                            Já tem uma conta? Faça login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
