import Settings from "@/Pages/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/Layout/Layout";
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
import FormWallets from "@/Pages/Wallets/Forms/FormWallets";
import Transactions from "@/Pages/Transactions/Transactions";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route element={<Layout />}>
                        {/* Dashboard Routes */}
                        <Route
                            index
                            element={
                                <Dashboard />
                            }
                        />

                        {/* Transaction Routes */}
                        <Route
                            path="/transaction"
                            element={
                                <Transactions />
                            }
                        />
                        <Route
                            path="/transaction/create"
                            element={
                                <TransactionForm />
                            }
                        />
                        <Route
                            path="/transaction/edit/:id"
                            element={
                                <TransactionForm />
                            }
                        />

                        {/* Wallets Routes */}
                        <Route
                            path="/wallets"
                            element={
                                <Wallets />
                            }
                        />
                        <Route
                            path="/wallets/create"
                            element={
                                <FormWallets />
                            }
                        />
                        <Route
                            path="/wallets/edit/:id"
                            element={
                                <FormWallets />
                            }
                        />

                        {/* Settings Routes */}
                        <Route
                            path="/settings"
                            element={
                                <Settings />
                            }
                        />
                    </Route>
                </Route>

                <Route element={<PublicRoute />}>
                    <Route
                        path="/login"
                        element={
                            <Login />
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Register />
                        }
                    />
                </Route>

                {/* just added -> will need to be Private */}
                <Route path="/account-detail" element={
                    <PublicRoute>
                        <AccountDetails />
                    </PublicRoute>
                }
                />

                <Route path="/choose-edit" element={
                    <PublicRoute>
                        <ChooseEdit />
                    </PublicRoute>
                }
                />

                <Route path="/edit-identitas-diri" element={
                    <PublicRoute>
                        <ProfileEdit />
                    </PublicRoute>
                }
                />

                <Route path="/edit-password" element={
                    <PublicRoute>
                        <PasswordEdit />
                    </PublicRoute>
                }
                />

                <Route path="/edit-pin" element={
                    <PublicRoute>
                        <PINEdit />
                    </PublicRoute>
                }
                />

            </Routes>
        </BrowserRouter>
    )
}
