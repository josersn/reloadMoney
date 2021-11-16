import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import { Home } from "./pages/Home";
import { App } from "./pages/App";


function RouterAPP() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RouterAPP };
