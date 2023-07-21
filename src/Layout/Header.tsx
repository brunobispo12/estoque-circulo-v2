import { Link } from "react-router-dom"
import { CirculoEscritaLogo } from "../utils/constants/imagesPath"

function Header() {
  return (
    <header className="p-3 border-b-2 shadow-md bg-smoke h-20 flex items-center justify-between">
      <div>
        <img src={CirculoEscritaLogo} alt="" className="h-12 w-18" />
      </div>
      <div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header