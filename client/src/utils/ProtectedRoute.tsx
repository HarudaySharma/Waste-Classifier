import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks"
import React from "react";

type ProtectedRouteParams = {
    children: React.ReactNode,
}

export const ProtectedRoute = ({ children }: ProtectedRouteParams) => {
    const navigate = useNavigate();
    console.log('privateRoute')
    const { highestRank } = useAppSelector(state => state.image);

    if (!highestRank) {
        navigate('/');
    }
    return children;
}
