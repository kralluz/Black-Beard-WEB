import { Toaster, toast } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./providers/userProvider";
import "./styles.css";
import React from "react";


function App() {
    
    return (
        <>
            <Toaster
                position="bottom-left"
                toastOptions={{
                    className: "",
                    duration: 1000,
                    style: {
                        background: "#0000008b",
                        color: "#ffffff",
                    },
                }}
            />
            <UserProvider>
                <AppRoutes />
            </UserProvider>

        </>
    );
}

export default App;
