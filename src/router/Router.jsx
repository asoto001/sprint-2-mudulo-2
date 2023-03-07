import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import SelectFlight from "../components/selectFlight/SelectFlight";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/selectFlight" element={<SelectFlight />}>
                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router