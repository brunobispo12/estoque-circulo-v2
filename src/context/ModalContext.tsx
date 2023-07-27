import { useState, createContext } from "react";
import { PropsChildren } from "../utils/types/genericTypes";

export const ModalContext = createContext<any>({})

export const ModalProvider = ({ children }: PropsChildren) => {

    const [openModals, setOpenModals] = useState({});

    const openModal = (modalId: string) => {
        setOpenModals((prevModals) => ({
            ...prevModals,
            [modalId]: true,
        }));
    };

    const closeModal = (modalId: string) => {
        setOpenModals((prevModals) => ({
            ...prevModals,
            [modalId]: false,
        }));
    };

    return (
        <ModalContext.Provider value={{ openModals, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

