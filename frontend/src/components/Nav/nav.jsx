import React from "react"
import { useContext } from "react"
import "./../Home/home.css"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom"

export default function Nav() {
    const [signedIn, setSignedIn] = useContext(Context)
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate("/")
    }

    return (
        <nav className="navbar px-5 py-2">
            <div className="nav-left">
                <a className="navbar-brand" onClick={handleNavigation}>
                    <img className="logo" src="./logo/logo.png" alt="" />

                    <p className="nav-title">
                        Reserve Table From Anywhere!
                    </p>
                </a>
            </div>

            <div className="nav-right">
            {
                signedIn === "" ? "" :
                <p>Hello {signedIn}!</p> 
            }
            <button className="btn nav-btn">Reserve Now!</button>
            </div>
        </nav>
    )
}