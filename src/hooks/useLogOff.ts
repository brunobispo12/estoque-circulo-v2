import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { INITIAL_SESSION_STATE } from "../context/INITIAL_STATE"
import axios from "axios"

function useLogOff() {
    const { setSessionInfos } = useContext(AuthContext)

    async function LogOff() {
        await axios.post('http://localhost:8080/users/logout')
        localStorage.removeItem('sessionData')
        setSessionInfos(INITIAL_SESSION_STATE)
    }

    return { LogOff }
}

export default useLogOff