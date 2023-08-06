import { ReactNode } from "react"
import { Item } from "./itemTypes"

export type PropsChildren = {
    children: ReactNode
}

export type ModalType = {
    children: ReactNode
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modalTitle: string
}

export type DetailsProps = {
    item: Item
}