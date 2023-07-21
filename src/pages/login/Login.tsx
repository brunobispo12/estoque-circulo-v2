import { CirculoIcon } from "../../utils/constants/imagesPath";
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ISessionContext } from '../../utils/types/interfaces/ISessionContext'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useNavigate } from 'react-router'
import handleError from '../../utils/functions/handleErrors'
import ErrorDiv from '../../components/ErrorDiv'
import { useForm } from 'react-hook-form'

function Login() {
    const { setSessionInfos } = useContext(AuthContext)
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const key = ['auth']
    const { register, handleSubmit } = useForm()

    const { isLoading, data, isError, isFetching, refetch } = useQuery<ISessionContext | any>(key, async () => {
        console.log(user)
        const response = await axios.post(`http://localhost:3001/api/auth/login`, user) // the first request to api isnt getting the user for search in database
        return response.data;
    }, {
        enabled: false,
        onSuccess: (data) => {
            setSessionInfos(data)
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

    async function handleLogin(data: any) {
        setUser(data)
        console.log(user) // is returning {} the initial state
        await refetch()
    }

    return (
        <div className="col-center justify-center min-h-screen gap-8">
            <img src={CirculoIcon} alt="" className="w-56 lg:w-64" />
            <div className="col-center gap-8 p-5 w-[26rem] h-96 bg-white rounded-lg border border-princeton">
                <div className="flex flex-col gap-[2px]">
                    <h1 className="text-2xl text-center font-satoshi-bold">Bem-vindo</h1>
                    <p>Faça login para continuar</p>
                </div>
                <form className="col-center justify-center w-3/4" onSubmit={handleSubmit(handleLogin)}>
                    <label className="flex flex-col gap-1 w-full">
                        <p>Usuário:</p>
                        <input type="text" placeholder="Digite seu usuário" className="border border-gray-500 px-1 w-full rounded-md outline-none" {...register('user')} />
                    </label>
                    <label className="flex flex-col mt-3 gap-1 w-full">
                        <p>Senha:</p>
                        <input type="password" placeholder="Digite sua senha" className="border border-gray-500 px-1 rounded-md outline-none" {...register('password')} />
                    </label>
                    <label className="flex justify-center w-full mt-12">
                        <button className="border border-gray-500 w-full rounded-md py[2px] outline-none" type="submit">Entrar</button>
                    </label>
                </form>
                {isError && <ErrorDiv errorMessage={error} />}
            </div>
        </div>
    )
}

export default Login