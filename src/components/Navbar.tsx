import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-black via-transparent to-black py-2 md:py-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-2xl md:text-3xl">
                        MovieApp
                    </div>
                    <ul className="hidden md:flex space-x-4">
                        <li>
                            <a href="/" className="text-white hover:text-red-600 font-semibold text-lg">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/movies" className="text-white hover:text-red-600 font-semibold text-lg">
                                Movies
                            </a>
                        </li>
                        <li>
                            <a href="/series" className="text-white hover:text-red-600 font-semibold text-lg">
                                Series
                            </a>
                        </li>
                        <li>
                            <a href="/my-list" className="text-white hover:text-red-600 font-semibold text-lg">
                                My List
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
