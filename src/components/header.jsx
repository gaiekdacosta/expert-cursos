import React from 'react';
import logo from "../../public/logo.png";

const Header = () => {
    return (
        <>
            <header className="fixed top-0 w-full shadow-md p-4 bg-white z-50">
                <div className="flex items-center justify-between ml-28 mr-28">
                    <img src={logo} alt="Logo" className="h-10" />
                    <nav className="space-x-7">
                        <a className="cursor-pointer text-main font-semibold hover:text-second transition-colors duration-300">
                            INICIO
                        </a>
                        <a className="cursor-pointer text-main font-semibold hover:text-second transition-colors duration-300">
                            CURSOS
                        </a>
                        <a className="cursor-pointer text-main font-semibold hover:text-second transition-colors duration-300">
                            EVENTOS
                        </a>
                        <a className="cursor-pointer text-main font-semibold hover:text-second transition-colors duration-300">
                            DEPOIMENTOS
                        </a>
                        <a className="cursor-pointer text-main font-semibold hover:text-second transition-colors duration-300">
                            CONTATO
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
