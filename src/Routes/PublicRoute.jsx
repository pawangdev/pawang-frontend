import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../Services/Store/auth";

export function PublicRoute() {
    const { auth } = useRecoilValue(authState);
    console.log(auth);
    return auth ? <Navigate to="/" /> : <Outlet />;
}