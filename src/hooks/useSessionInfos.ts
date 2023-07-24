import { AuthContext } from "../context/AuthContext"
import { useContext, useEffect, useState } from "react"
import { User } from '../utils/types/userTypes'

function useSessionInfos() {

    const { sessionContextValue } = useContext(AuthContext)
    const [userInfos, setUserInfos] = useState<User>()
    const [userIsAuth, setUserIsAuth] = useState(true)


    useEffect(() => {
        const userInfos: User = {
            user: sessionContextValue.userLogged.user,
            name: sessionContextValue.userLogged.name,
        }
        setUserInfos(userInfos)
    }, [sessionContextValue])

    useEffect(() => {
        const isAuth = sessionContextValue.isAuth
        setUserIsAuth(isAuth)
    }, [sessionContextValue])

    return {
        userInfos,
        userIsAuth,
    }

}

export default useSessionInfos