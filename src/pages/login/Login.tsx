import { CirculoEscritaLogo } from "../../utils/constants/imagesPath";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ISessionContext } from '../../utils/types/interfaces/ISessionContext'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useNavigate } from 'react-router'
import handleError from '../../utils/functions/handleErrors'
import ErrorDiv from '../../components/ErrorDiv'
import LoadingDiv from "../../components/LoadingDiv";
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'


function Login() {
    const { setSessionInfos, sessionContextValue } = useContext(AuthContext)
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [shouldRefetch, setShouldRefetch] = useState(false)
    const navigate = useNavigate()
    const key = ['auth']
    const { register, handleSubmit } = useForm()

    const { isLoading, isError, refetch } = useQuery<ISessionContext | any>(key, async () => {
        const response = await axios.post(`http://localhost:3001/api/auth/login`, user)
        return response.data;
    }, {
        enabled: false,
        onSuccess: (data) => {
            setSessionInfos(data)
            localStorage.setItem('sessionData', JSON.stringify(data))
            if (data.isAuth) {
                navigate('/home')
            }
        },
        onError: (error: any) => {
            const errorStatus: number = error.response.status
            const errorMessage = handleError(errorStatus)
            setError(errorMessage)
        },
        retry: 1
    })

    useEffect(() => {
        if (shouldRefetch) {
            refetch();
            setShouldRefetch(false)
        }
    }, [shouldRefetch, user])

    async function handleLogin(data: any) {
        setUser(data)
        setShouldRefetch(true)
    }

    return (
        <div className="col-center justify-center min-h-screen gap-8 color-gradient-header">
            <img src={CirculoEscritaLogo} alt="" className="w-56 lg:w-64" />
            <div className="col-center gap-8 p-5 w-80 min-h-[22.5rem] bg-white rounded-lg border border-raisin">
                <div className="flex flex-col gap-[2px]">
                    <h1 className="text-xl text-center font-satoshi-bold">Bem-vindo</h1>
                    <p className="text-lg">Faça login para continuar</p>
                </div>
                <form className="col-center justify-center w-3/4 text-base" onSubmit={handleSubmit(handleLogin)}>
                    <label className="flex flex-col gap-1 w-full">
                        <p>Usuário:</p>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="text" placeholder="Digite seu usuário" className="border border-gray-500 px-1 w-full rounded-md outline-princeton" {...register('user')} />
                    </label>
                    <label className="flex flex-col mt-3 gap-1 w-full">
                        <p>Senha:</p>
                        <motion.input whileFocus={{ borderColor: '#FF9400' }} type="password" placeholder="Digite sua senha" className="border border-gray-500 px-1 rounded-md outline-princeton" {...register('password')} />
                    </label>
                    <label className="flex justify-center w-full mt-12">
                        <motion.button
                            className="border border-gray-500 w-full rounded-md py[2px] outline-none" type="submit"
                            whileHover={{ backgroundColor: 'rgba(245, 129, 51, 0.75)', }}
                        >
                            Entrar
                        </motion.button>
                    </label>
                </form>
                {isLoading && <LoadingDiv />}
                {isError && <ErrorDiv errorMessage={error} />}
            </div>
        </div >
    )
}

export default Login