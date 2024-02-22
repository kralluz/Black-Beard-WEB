import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./providers/userProvider";
import Layout from './components/Layout';

function App() {
    useEffect(() => {
        const intervalId = setInterval(() => {
            toast("Aqui vai sua mensagem!", {});
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Toaster
                position="bottom-right"
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
