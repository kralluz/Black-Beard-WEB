import React from "react";
import { useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    const barberData = {
        id: 1,
        name: " Albarino",
        company_name: "Cabeçalho",
        email: "Albarino@example.com",
        tel: "62123456789",
        admin: false,
        last_access: "2024-02-18T12:34:56Z",
        created_at: "2024-02-18T12:34:56Z",
        updated_at: null,
        deleted_at: null,
    };
    return (
        <header className=" index_adjust navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">
                    {barberData.company_name}
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
        </header>
    );
};

export default Header;
