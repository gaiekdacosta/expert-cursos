import sideImage from '../assets/img1.jpg'

const Congress = () => {
    return ( 
        <>
            <section className="flex flex-col items-center justify-between mb-7">
                <h3 class="font-semibold text-lg text-second">SAIBA MAIS SOBRE</h3>
                <h1 class="font-bold text-main text-4xl">O CONGRESSO EXPERT 2024</h1>
                <div className="flex justify-between mt-5 gap-5">
                    <img    
                        className="h-[750px] w-[550px]"
                        src={sideImage} />
                    <div className='text-left w-[600px]'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint totam aspernatur deleniti adipisci id, 
                            laboriosam iusto sapiente architecto quos illum repellat debitis modi praesentium eum ipsa sunt. 
                            Aut, autem repudiandae esse iusto, commodi mollitia nemo minus inventore perferendis velit nesciunt aliquam ipsam. 
                            <br />
                            <br />
                            Sit aliquid ratione natus labore, quo fugiat odio? Odio unde culpa ipsam, ipsa quo iure eaque repellat?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Minima mollitia asperiores delectus eveniet fugit laborum dolorum, 
                            ad modi sed! Odit natus laudantium voluptates omnis. 
                            Quam quis laboriosam rerum. 
                            <br />
                            <br />
                            Excepturi nemo soluta aspernatur, aut tempora dolore, architecto temporibus minus quia debitis, 
                            esse rem illum deserunt repellat quisquam vel alias praesentium corrupti modi? Inventore fugit eveniet, 
                            similique impedit esse error, magni illo debitis neque deleniti aliquid alias, 
                            culpa officia provident fuga libero architecto ab in repellendus? Fugit, libero. Harum, 
                            dolorum accusantium nihil officiis nostrum suscipit aliquid illum labore veniam, voluptatem eos vero.
                        </p>
                        <button 
                            className='
                                border-2
                                border-second
                                text-second 
                                font-medium 
                                rounded-full 
                                hover:bg-second ease-in duration-300
                                hover:text-white 
                                p-1 
                                w-32
                                mt-2'>
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Congress;