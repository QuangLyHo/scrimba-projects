import React from "react";
import reactIcon from "../images/react-icon-small.png"

export default function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img className="header-icon" src={ reactIcon } alt="react logo" />
                <h2 className="icon-title">ReactFacts</h2>
            </div>
            
            <div className="header-right">
                <p className="header-title">React Course - Project 1</p>
            </div>

        </header>
    )
}
