import { createContext, useContext, useEffect, useState } from "react";


const contextcreate = createContext();

export const useCustomContext = () => useContext(contextcreate);

const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
};

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(getUserFromLocalStorage);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    return (
        <contextcreate.Provider value={{ user, setUser }}>
            {children}
        </contextcreate.Provider>
    )
};


export default ContextProvider;