export const plans = [
    {
        id: 1,
        user_id: 101,
        name: "Plano Básico",
        description: "Inclui 3 cortes de cabelo por mês.",
        price: 90.0,
        service_quota: 3,
        expires_in: 30,
        created_at: new Date().toISOString(),
        updated_at: null,
    },
    {
        id: 2,
        user_id: 102,
        name: "Plano Mensal",
        description: "Inclui 3 cortes de cabelo e barba por mês.",
        price: 180.0,
        service_quota: 3,
        expires_in: 30,
        created_at: new Date().toISOString(),
        updated_at: null,
    },
    {
        id: 3,
        user_id: 103,
        name: "Plano Anual Básico",
        description: "Inclui 36 cortes de cabelo ao longo do ano.",
        price: 960.0,
        service_quota: 36,
        expires_in: 365,
        created_at: new Date().toISOString(),
        updated_at: null,
    },
    {
        id: 4,
        user_id: 104,
        name: "Plano Anual Completo",
        description: "Inclui 36 cortes de cabelo e barba ao longo do ano.",
        price: 1920.0,
        service_quota: 36,
        expires_in: 365,
        created_at: new Date().toISOString(),
        updated_at: null,
    },
];
