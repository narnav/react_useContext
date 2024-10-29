import './App.css';
import Login from './Login';
import MyContext from './MyContext';
import { useState } from "react";
import MyColor from './MyColor';

function App() {
    const [sharedValue, setsharedValue] = useState("green")
    return (
        <div className="App">
            <MyContext.Provider value={{ sharedValue, setsharedValue }}>

                <div class="container">
                    {sharedValue}
                    <div class="main-content">
                        <h2>Main Content Area</h2>
                        <Login />
                        <p>This is where the main content goes.</p>
                    </div>
                    <div class="sidebar">
                        <h2>Sidebar</h2>
                        <p>This is a sidebar area with additional information.</p>
                    </div>

                    <div class="footer">
                        <p>Footer Content &copy; 2024</p>
                    </div>
                    <MyColor></MyColor>
                </div>
            </MyContext.Provider>

        </div>
    );
}

export default App;
