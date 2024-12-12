import React, { createContext, useState, useEffect } from "react";

// Create the AuthContext to store authentication data
export const AuthContext = createContext();

// The AuthProvider component will wrap the entire app and provide access to auth state
export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Track login state
    const [user, setUser] = useState(null); // Store user data

    // Check login state on initial load
    useEffect(() => {
        // Call the backend to check if the user is logged in
        fetch("http://localhost:4000/auth/status", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                if (data.loggedIn) {
                    setIsSignedIn(true); // Set the user as signed in
                    setUser(data.user); // Set the user data
                }
            })
            .catch((err) => console.error("Error checking auth status:", err));
    }, []);

    const login = (userData) => {
        setIsSignedIn(true);
        setUser(userData);
    };

    const logout = () => {
        fetch("http://localhost:4000/auth/logout", { credentials: "include" })
            .then(() => {
                setIsSignedIn(false); // Set signed-in state to false
                setUser(null); // Clear user data
            })
            .catch((err) => console.error("Error logging out:", err));
    };

    return (
        <AuthContext.Provider value={{ isSignedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
