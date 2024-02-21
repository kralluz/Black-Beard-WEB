import React, { useEffect } from "react";
import SessionForm from "../components/forms/SessionForm";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Session = () => {
    return (
        <>
            <div className="container mt-5">
                <SessionForm />
            </div>
        </>
    );
};

export default Session;
