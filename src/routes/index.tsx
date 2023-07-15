import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/User/Home';
import SingUp from '../pages/User/SignUp';
import Private from '../pages/User/Private';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import { Login } from '../pages/User/Login';

const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Home />} />
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