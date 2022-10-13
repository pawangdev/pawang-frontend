import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from '../App';
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { AccountDetails } from "../Pages/Settings/AccountDetails";
import { ChooseEdit } from "../Pages/Settings/ChooseEdit";
import { EmailEdit } from "../Pages/Settings/EmailEdit";
import { PasswordEdit } from "../Pages/Settings/PasswordEdit";
import { PINEdit } from "../Pages/Settings/PinEdit";
import { ProfileEdit } from "../Pages/Settings/ProfileEdit";
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

                {/* just added -> will need to be Private */}
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

                <Route path="/edit-identitas-diri" element={
                    <PublicRoute>
                        <ProfileEdit />
                    </PublicRoute>
                } />

                <Route path="/edit-email" element={
                    <PublicRoute>
                        <EmailEdit />
                    </PublicRoute>
                } />

                <Route path="/edit-password" element={
                    <PublicRoute>
                        <PasswordEdit />
                    </PublicRoute>
                } />

                <Route path="/edit-pin" element={
                    <PublicRoute>
                        <PINEdit />
                    </PublicRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}
