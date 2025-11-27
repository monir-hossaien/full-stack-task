
import {createContext, useContext} from "react";
import {useAuthQuery} from "../hooks/useAuthQuery.jsx";
import {authStore} from "../store/auth.store.js";

const AuthContext = createContext();



export const AuthProvider = ({children}) => {

    const {logOutRequest} = authStore();
    const { data: user, isLoading, refetch } = useAuthQuery();
    const isLogin = !!user;


    const logout = async () => {
        const result = await logOutRequest()
        refetch(); // reset user state
        return result;
    };


    return (
        <AuthContext.Provider value={{user, loading: isLoading , isLogin, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);