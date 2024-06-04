import { FaStar } from "react-icons/fa";

const CardDepoiment = ({ perfil, name, description }) => {
    return (
        <>
            <div 
                className="
                    flex 
                    flex-col 
                    rounded-md 
                    items-center
                    p-2 
                    pt-5
                    cursor-pointer        
                    w-72
                    h-80
                    bg-white 
                    text-black
                    shadow-md
                    mt-5
                    transition
                    duration-300
                    gap-1
                    hover:bg-orange-500
                    hover:text-white
                    hover:shadow-lg">
                <img
                    className="rounded-full w-28 h-28"
                    src={perfil}
                />
                <p className="font-semibold">{name}</p>
                <div className="w-16 h-0.5 bg-second" />
                <p className="text-sm font-medium text-center italic text-gray-700">{description}</p>
                <div className="flex text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className="font-semibold">5.0</p>
            </div>
        </>
    );
}

export default CardDepoiment;