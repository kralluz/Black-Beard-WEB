import { z } from "zod";

export const signupSchema = z
    .object({
        name: z
            .string()
            .min(4, { message: "O nome deve ter no mínimo 6 caracteres" }),
        email: z
            .string()
            .email({
                message: "Por favor, insira um endereço de e-mail válido",
            }),
        company_name: z
            .string()
            .min(6, {
                message: "O nome da barbearia deve ter no mínimo 6 caracteres",
            }),
            tel: z
                .string()
                .min(11, {
                    message: "O telefone deve ter no mínimo 11 caracteres",
                })
                .refine((val) => /^\d+$/.test(val), {
                    message: "O telefone deve conter apenas números",
                }),
        password: z
            .string()
            .min(8, {
                message: "A senha precisa ter no mínimo oito caracteres.",
            })
            .refine((val) => /[A-Z]/.test(val), {
                message: "A senha deve ter pelo menos uma letra maiúscula.",
            })
            .refine((val) => /[a-z]/.test(val), {
                message: "A senha deve ter pelo menos uma letra minúscula.",
            })
            .refine((val) => /[0-9]/.test(val), {
                message: "A senha deve ter pelo menos um número.",
            })
            .refine((val) => /[!@#$%^&*()_+\[\]{};':"\\|,.<>\/?]/.test(val), {
                message: "A senha deve ter pelo menos um caractere especial.",
            }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"],
    });
