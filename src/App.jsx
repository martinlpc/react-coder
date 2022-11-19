import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

// Classes
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";

function App() {
    let userName = "invitado/a";
    let greetingTxt = "!Bienvenidx " + userName + "!";
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <main>
                <ItemListContainer greeting={greetingTxt} />
            </main>
        </div>
    );
}

export default App;
