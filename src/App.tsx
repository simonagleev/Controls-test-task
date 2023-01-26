import React, { useState } from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";
import ButtonsControl from "./components/ButtonsControl";
import { bothSidesButtons, rightSideButtons } from "./components/UI/Buttons";

function App() {

    const [buttons, setButtons] = useState(rightSideButtons)

    return (
        <div className="app">
            <div className="btns-switcher">
                <button className='app-btn' onClick={() => setButtons(bothSidesButtons)}>
                    Кнопки с обеих сторон
                </button>
                <button className='app-btn' onClick={() => setButtons(rightSideButtons)}>
                    2 кнопки справа
                </button>
            </div>
            <ButtonsControl buttons={buttons} />

            <div className="autocomplete-container">
                <Autocomplete count={3} />
                <Autocomplete count={10} />
            </div>
        </div>
    )
}

export default App
