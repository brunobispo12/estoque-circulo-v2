import { User } from '../userTypes'

export interface ISessionContext {
    userLogged: User,
    isAuth: boolean,
}