/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../SharedComponents/Logo/Logo';




export default function LoginHeader() {


    const { pathname } = useLocation();

    return (
        <header className="py-3" style={{ backgroundColor: "#1d4354" }}>
            <div className="container d-flex justify-content-between">
                <Logo />
                <div>
                    {
                        pathname === `${process.env.REACT_APP_BASE_ROUTE}/sign-up` &&
                        <p className="text-white">Already have an account<Link to={`${process.env.REACT_APP_BASE_ROUTE}/login`}>{" "}"Log In</Link></p>
                    }
                </div>
            </div>
        </header>
    );
}
