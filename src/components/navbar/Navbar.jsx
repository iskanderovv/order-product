import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';


const Navbar = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 ">
            <div className="flex justify-between items-center h-[80px] ">
                <Link to='/' className="flex gap-2 items-center">
                    <img src={logo} className="w-[80px] " alt="logo" />
                    <span className="text-2xl font-semibold ">Mango Market</span>
                </Link>
                <Link className="text-xl font-medium flex items-center gap-2 " to='/favorites'>
                    <MdFavoriteBorder className="text-xl" />
                    <span>Favorites</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
