import React from "react";

export default function MainContent() {
    return (
        <div className="main-content">
            <h1 className="main-content__title">Fun facts about React</h1>
            <ul className="main-content__list-items">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, 
                    including mobile apps</li>
            </ul>
        </div>
    )
}