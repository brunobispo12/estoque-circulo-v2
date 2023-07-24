import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { INITIAL_SESSION_STATE } from "../context/INITIAL_STATE"

function useLogOff() {
    const { setSessionInfos, sessionContextValue } = useContext(AuthContext)

    function LogOff() {
        console.log(sessionContextValue)
        localStorage.removeItem('sessionData')
        setSessionInfos(INITIAL_SESSION_STATE)
    }

    return { LogOff }
}

export default useLogOff