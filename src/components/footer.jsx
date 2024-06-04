import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex justify-around bg-white p-10 font-medium text-main">
            <div>
                <h3 className=" text-2xl">Intitucional</h3>
                <div className="w-11 h-0.5 bg-second mb-4" />
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Fundadores</p>
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Nossos Serviços</p>
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Progama de Bolsas</p>
            </div>
            <div>
                <h3 className=" text-2xl">A expert</h3>
                <div className="w-11 h-0.5 bg-second mb-4" />
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Nossa Metodologia</p>
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Depoimentos</p>
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Todos os cursos</p>
            </div>
            <div>
                <h3 className=" text-2xl">Contúdos</h3>
                <div className="w-11 h-0.5 bg-second mb-4" />
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Artigos</p>
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Aulões</p>
                <p className="cursor-pointer transition transform hover:text-second hover:translate-x-1 duration-500">Eventos</p>
            </div>
            <div className=" text-2xl" >
                <h3>Redes Socias</h3>
                <div className="w-11 h-0.5 bg-second mb-4" />
                <div className="flex justify-around">
                    <a 
                        href="https://www.instagram.com/exp.cursos/" 
                        target="_blank"
                        className="p-2 bg-main rounded-full">
                        <FaInstagram style={{ color: 'white' }} />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC-cKIIGsroQqpH91A7nQGgg"
                        target="_blank" 
                        className="p-2 bg-main rounded-full">
                        <FaWhatsapp style={{ color: 'white' }} />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=5513997422340&text=Olá%20Expert%20Cursos%2C"
                        target="_blank"
                        className="p-2 bg-main rounded-full">
                        <FaYoutube style={{ color: 'white' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
