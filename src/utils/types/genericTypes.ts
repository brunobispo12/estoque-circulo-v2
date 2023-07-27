import { ReactNode } from "react"

export type PropsChildren = {
    children: ReactNode
}

export type ModalType = {
    children: ReactNode
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modalTitle: string
}