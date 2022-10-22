import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../Services/Store/auth";

export function PrivateRoute() {
    const { auth } = useRecoilValue(authState);
    return auth ? <Outlet /> : <Navigate to="/login" />;
}