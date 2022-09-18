import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../Services/Store/auth";

export function PublicRoute({ children }) {
    const { auth } = useRecoilValue(authState);
    return auth ? <Navigate to="/" /> : children;
}