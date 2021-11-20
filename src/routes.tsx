import {
    BrowserRouter,
    Route,
    Switch as Routes
} from "react-router-dom";

import { Home } from "./pages/Home";
import { App } from "./pages/App";
import { Login } from "./pages/Login";
import { Users } from "./pages/Users";

function RouterAPP() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/app" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/users" component={Users} />
            </Routes>
        </BrowserRouter>
    )
}

export { RouterAPP };