import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks"

type ProtectedRouteParams = {
    children: React.ReactNode,
}

export const ProtectedRoute = ({children}: ProtectedRouteParams) => {
    console.log('privateRoute')
    const { highestRank } = useAppSelector(state => state.image);

    return highestRank ? children : <Navigate to='/'/>;
}
