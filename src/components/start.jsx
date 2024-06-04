import sideImage from '../assets/undraw_medicine_b-1-ol.svg';

const Start = () => {
    return (
        <>
            <section className="flex justify-around items-center m-20">
                <div className="flex flex-col gap-3">
                    <span className="text-second font-semibold text-lg">VENHA CONHECER A</span>
                    <h1 className="text-main font-extrabold text-6xl">Expert Cursos</h1>
                    <h2 className="text-second font-semibold mt-2 text-3xl">
                        CONHEÇA OS MELHORES CURSOS DE <br /> APERFEIÇOAMENTO DA ÁREA DA SAÚDE
                    </h2>
                    <button 
                        className="text-white h-10 w-40 bg-second rounded-full shadow-2xl hover:shadow-purple-800 ease-in duration-300">
                        Seja Expert
                    </button>
                </div>
                <div>
                    <img
                        className="h-96 animate-moveSideways"
                        src={sideImage}
                        alt="Imagem ao lado" />
                </div>
            </section>
            <style>
                {`
                @keyframes moveSideways {
                    0% {
                        transform: translateX(-15px);
                    }
                    50% {
                        transform: translateX(15px);
                    }
                    100% {
                        transform: translateX(-15px);
                    }
                }

                .animate-moveSideways {
                    animation: moveSideways 5s ease infinite;
                }
                `}
            </style>
        </>
    );
}

export default Start;
