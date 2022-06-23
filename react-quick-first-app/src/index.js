import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import MainContent from "./components/MainContent"
import Header from "./components/Header"


function App() {
    return (
        <div> 
            <Header />
            <MainContent />
        </div>
       
    )
}

ReactDOM.render(<App />, document.getElementById('root'))