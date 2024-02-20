import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [client, setClient] = useState();
    const [isLoading, setIsLoading] = useState();

    const readClient = async (id) => {
        
    };
    useEffect(() => {
        
    }, []);

    const clientRegister = async (formData) => {

    };

    const clientLogin = async (formData) => {
        
    };

    const updateClient = async (id, formData) => {
        
    };

    return (
        <UserContext.Provider
            value={{
                client,
                setClient,
                isLoading,
                setIsLoading,
                clientRegister,
                clientLogin,
                updateClient,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
