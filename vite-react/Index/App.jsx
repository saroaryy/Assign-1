import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

import React from "react";

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    
    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Main 
                darkMode={darkMode}
            />
        </div>
    )
}