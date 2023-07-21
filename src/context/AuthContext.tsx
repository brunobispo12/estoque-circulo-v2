import { createContext, useState } from "react";
import { PropsChildren } from "../utils/types/genericTypes";
import { INITIAL_SESSION_STATE } from "./INITIAL_STATE";
import { ISessionContext } from "../utils/types/interfaces/ISessionContext";

export const AuthContext = createContext<any>(null)

export function AuthProvider({ children }: PropsChildren) {

    const [sessionInfos, setSessionInfos] = useState<ISessionContext | null>(INITIAL_SESSION_STATE)

    const sessionContextValue: ISessionContext = {
        userLogged: sessionInfos?.userLogged || { name: '', user: '' },
        isAuth: sessionInfos?.isAuth || false,
    }

    return (
        <AuthContext.Provider value={{sessionContextValue, setSessionInfos}}>{children}</AuthContext.Provider>
    )
}