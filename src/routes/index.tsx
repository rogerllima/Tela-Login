import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SingUp from '../pages/SignUp';
import Private from '../pages/Private';
import { RequireAuth } from '../contexts/RequireAuth';
import { Login } from '../pages/Login';

const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<SingUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
                    <Route path="*" element={<SingUp />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;