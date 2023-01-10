import React from 'react';
import {Provider} from "react-redux";
import Home from "./components/Home";
import store from "./rootReducer";
import {Container} from "@mui/material";
import "./assets/css/style.css";
function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Home/>
            </Container>
        </Provider>
    );
}

export default App;
