import { useEffect, useState, useContext } from "react";
import { ModalContext } from "../context/ModalContext";

function useModal() {

    const { modalIsOpen, setModalIsOpen } = useContext(ModalContext)

    const [modaNewItem, setModalNewItem] = useState(false)

    return { modalIsOpen, setModalIsOpen }
}

export default useModal