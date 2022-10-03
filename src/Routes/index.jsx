import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from '../App';
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { AccountDetails } from "../Pages/Settings/AccountDetails";
import { ChooseEdit } from "../Pages/Settings/ChooseEdit";
import { TransactionForm } from "../Pages/Transactions/TransactionForm"
import Wallets from "../Pages/Wallets/Wallets";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={
                    <PrivateRoute>
                        <App children={<Dashboard />} />
                    </PrivateRoute>
                }
                />
                <Route path="/transaction/add/:type" element={
                    <PrivateRoute>
                        <App children={<TransactionForm />} />
                    </PrivateRoute>
                } />
                <Route path="/wallets" element={
                    <PrivateRoute>
                        <App children={<Wallets />} />
                    </PrivateRoute>
                } />

                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path="/register" element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                } />

                <Route path="/account-detail" element={
                    <PublicRoute>
                        <AccountDetails />
                    </PublicRoute>
                } />

                <Route path="/choose-edit" element={
                        <PublicRoute>
                            <ChooseEdit />
                        </PublicRoute>
                    } />
                </Routes>
        </BrowserRouter>
    )
}
