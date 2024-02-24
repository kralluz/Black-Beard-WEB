import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./providers/userProvider";
import Layout from './components/Layout';

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
                <Layout>
                    <AppRoutes />
                </Layout>
            </UserProvider>
        </>
    );
}

export default App;
