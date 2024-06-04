import { FaStar } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

const CardCourses = ({ image, title, starts, value, resume, classes, hours, student }) => {
    return (
        <div className="flex-col text-start rounded-md bg-white w-[350px] shadow-md">
            <div className="relative w-full h-40">
                <img
                    className="absolute w-full h-full object-cover rounded-t-md"
                    src={image} 
                    alt={title}
                />
            </div>
            <div className="p-2">
                <div className="flex justify-between mt-1 items-center font-semibold text-sm">
                    <p className="text-slate-700 text-lg">{title}</p>
                    <div className="flex whitespace-nowrap text-slate-500 bg-gray-200 rounded-md p-0.5">
                        <FaStar style={{ color: "yellow", margin: "1px 1px 0 0", fontSize: "16px" }} />
                        <p>{starts}</p>
                    </div>
                </div>
                <p className="font-semibold text-slate-800">
                    <span className="text-main">R$</span> {value}/MÊS
                </p>
                <p className="flex w-full text-sm text-slate-800 mt-1">{resume}</p>
                <div className="flex justify-between mt-5 font-medium">
                    <div className="flex items-center whitespace-nowrap">
                        <IoMdBook style={{ color: "orange", marginRight: '3px', fontSize: '18px' }} />
                        <p>{classes} aulas</p>
                    </div>
                    <div className="flex items-center whitespace-nowrap">
                        <MdAccessTime style={{ color: "orange", marginRight: '3px', fontSize: '18px' }} />
                        <p>{hours}h</p>
                    </div>
                    <div className="flex items-center whitespace-nowrap">
                        <PiStudentBold style={{ color: "orange", marginRight: '3px', fontSize: '18px' }} />
                        <p>+{student} alunos</p>
                    </div>
                </div>
                <button className="bg-main text-white p-1 font-semibold w-full rounded-sm hover:bg-second duration-500">
                    Inscreva-se
                </button>
            </div>
        </div>
    );
}

export default CardCourses;
