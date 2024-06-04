import React, { useState, useRef } from 'react';
import imobilizacao from '../assets/imobilização2.0.jpeg';
import CardCourses from './cardCourses';
import { MdArrowForwardIos, MdCircle, MdOutlineArrowBackIosNew } from 'react-icons/md';

const coursesData = [
    {
        image: imobilizacao,
        title: "IMOBILIZAÇÃO",
        starts: "5.0",
        value: "297,99",
        resume: `
            O Curso de Imobilização capacita profissionais de saúde e resgate a 
            aplicar técnicas eficazes de imobilização em vítimas de traumas.`,
        classes: "12",
        hours: "1200",
        student: "1000"
    },
    {
        image: imobilizacao,
        title: "POSICIONAMENTO",
        starts: "4.5",
        value: "107,99",
        resume: `
            O Curso de Imobilização capacita profissionais de saúde e resgate a 
            aplicar técnicas eficazes de imobilização em vítimas de traumas.`,
        classes: "12",
        hours: "1200",
        student: "1000"
    },
    {
        image: imobilizacao,
        title: "TOMOGRAFIA",
        starts: "4.7",
        value: "257,99",
        resume: `
            O Curso de Imobilização capacita profissionais de saúde e resgate a 
            aplicar técnicas eficazes de imobilização em vítimas de traumas.`,
        classes: "12",
        hours: "1200",
        student: "1000"
    },
    {
        image: imobilizacao,
        title: "ANATOMIA",
        starts: "5.0",
        value: "297,99",
        resume: `
            O Curso de Imobilização capacita profissionais de saúde e resgate a 
            aplicar técnicas eficazes de imobilização em vítimas de traumas.`,
        classes: "12",
        hours: "1200",
        student: "1000"
    },
];

const Courses = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const coursesPerPage = 3;
    const totalPages = Math.ceil(coursesData.length / coursesPerPage);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
        if (currentPage === totalPages - 1) {
            setCurrentPage(0)
        }
    };

    const handlePageClick = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const currentCourses = coursesData.slice(
        currentPage * coursesPerPage,
        (currentPage + 1) * coursesPerPage
    );

    return (
        <>
            <section className="flex flex-col items-center text-center mb-7">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-second text-lg font-semibold">FAÇA SUA MATRICULA</h3>
                    <h1 className="text-main font-bold text-4xl">CURSOS EM ALTA</h1>
                </div>
                <div className="flex m-5 gap-16">
                    {currentCourses.map((course, index) => (
                        <CardCourses
                            key={index}
                            image={course.image}
                            title={course.title}
                            starts={course.starts}
                            value={course.value}
                            resume={course.resume}
                            classes={course.classes}
                            hours={course.hours}
                            student={course.student}
                        />
                    ))}
                </div>
                <div className="flex items-center text-lg">
                    <button
                        onClick={handlePrevPage}
                        className={currentPage === 0 ? 'text-slate-600' : 'text-main'}>
                        <MdOutlineArrowBackIosNew style={{ fontSize: '17px' }} />
                    </button>
                    <div className="mx-4 flex space-x-5">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageClick(index)}
                                className={`${currentPage === index ? 'text-main' : 'text-slate-400'}`}
                            >
                                <MdCircle style={{ fontSize: '12px' }} />
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleNextPage}
                        className={currentPage === totalPages - 1 ? 'text-slate-600' : 'text-main'}>
                        <MdArrowForwardIos style={{ fontSize: '17px' }} />
                    </button>
                </div>
            </section>
        </>
    );
}

export default Courses;
