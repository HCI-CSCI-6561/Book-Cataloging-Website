import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
    const { isSignedIn } = useContext(AuthContext);

    // If the user is not signed in, redirect to the home page
    if (!isSignedIn) {
        return <Navigate to="/home" />;
    }

    // If the user is signed in, render the children components
    return children;
}
