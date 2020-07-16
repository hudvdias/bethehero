import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Logon from "./pages/Logon"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import CreateIncident from "./pages/CreateIncident"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon} exact />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/create" component={CreateIncident} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes