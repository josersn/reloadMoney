import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import { Home } from "./pages/Home";
import { App } from "./pages/App";
import { Login } from "./pages/Login";


function RouterAPP() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RouterAPP };