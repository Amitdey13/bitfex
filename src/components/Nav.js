import React from "react"
import "../App.css"
import { logo } from "../img"

export default function Nav() {
    return (
        <div className="navbar">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="links">
            <div className="link">Documentation</div>
            <div className="link">API</div>
            <div className="link border bold">Register</div>
                <div className="link bold">Login</div>
            </div>
        </div>
    )
}
