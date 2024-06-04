import sideImage from '../assets/img7.jpg'

const Podcast = () => {
    return ( 
        <>
            <section className="flex flex-col items-center justify-between mb-7">
                <h3 class="font-semibold text-lg text-second">CONHEÇA NOSSO PODCAST</h3>
                <h1 class="font-bold text-main text-4xl">CONVERSAS COM AS MAIORE REFERÊNCIAS DA ÁREA</h1>
                <div className="flex justify-between mt-5 gap-5">
                    <div className='text-left w-[600px]'>
                        <h4 className='font-bold text-second text-lg'>Podcast Expert</h4>
                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Incidunt, ipsam! Voluptates minus animi sequi rerum eveniet sit tempore. 
                            Dolores facere esse ducimus consequuntur, ipsum porro molestiae error pariatur, 
                            tempora rerum dignissimos amet illo deserunt praesentium, 
                            earum maxime odit aliquam culpa sequi sunt eum. Sapiente, aliquam!
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae aliquid totam vero perspiciatis tempore consequatur veniam explicabo eius quos modi 
                            laudantium, quibusdam iusto enim dolorem voluptas eum itaque a nisi eveniet repudiandae omnis. 
                            Pariatur repellat consequuntur veritatis? Dolorem repellendus deserunt vitae, 
                            nulla fugit quidem laboriosam suscipit nam, unde impedit veniam at corporis 
                            ipsum necessitatibus labore provident placeat facere quia aspernatur accusantium in quis et animi. 
                            Est saepe magni iusto? Possimus.
                        </p>
                        <button 
                            className='border-2
                                border-second
                                text-second 
                                font-medium 
                                rounded-full 
                                hover:bg-second ease-in duration-300
                                hover:text-white 
                                p-1 
                                w-44
                                mt-2'>
                            Assista ao podcast
                        </button>
                    </div>
                    <img 
                        className="h-[700px] w-[550px]"
                        src={sideImage}
                    />
                </div>
            </section>
        </>
    );
}

export default Podcast;