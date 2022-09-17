import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from '../App';
import { Login } from "../Pages/Authentication/Login";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { TransactionForm } from "../Pages/Transactions/TransactionForm"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App children={<Dashboard />} />} />
                <Route path="/transaction/form" element={<App children={<TransactionForm />} />} />

                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
