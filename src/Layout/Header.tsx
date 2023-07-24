import { Link } from "react-router-dom"
import { CirculoIcon } from "../utils/constants/imagesPath"
import { useState } from "react"
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import UserModal from "./components/UserModal"
import useSessionInfos from "../hooks/useSessionInfos"

function Header() {

  const [modalIsOpen, setmodalIsOpen] = useState(false)
  const { userInfos } = useSessionInfos()

  return (
    <header className="px-3 py-2 shadow-lg h-14 flex items-center justify-between bg-raisin text-white">
      <div className="flex items-center space-x-10">
        <div>
          <img src={CirculoIcon} alt="" className="h-10" />
        </div>
        <div>
          <ul className="flex items-center space-x-4 text-lg font-satoshi-bold">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/items">Itens</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="self-start text-sm px-2">
        <button onClick={() => setmodalIsOpen((prevState) => !prevState)} className="flex gap-1 items-center ">
          {userInfos?.name}
          {modalIsOpen ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
        </button>
        {modalIsOpen && <UserModal />}
      </div>
    </header>
  )
}

export default Header