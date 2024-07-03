// src/components/navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesBadge from '../favoritesBadge/FavoritesBadge';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-4 '>
            <nav>
                <div className="container mx-auto flex h-[80px] items-center justify-between">
                    <Link to="/" className="font-semibold flex gap-2 items-center text-xl">
                    <img src={logo} className='w-[80px] ' alt="" />
                    Mango market</Link>
                    <Link to="/favorites" className="font-medium text-xl relative">
                        Favorites
                        <FavoritesBadge />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
