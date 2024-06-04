import CardDepoiment from "./cardDepoiment";
import perfil from '../assets/perfil.webp'

const Depoiments = () => {
    return ( 
        <>
            <section className="flex justify-between items-center flex-col mb-6">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-second text-lg font-semibold">OPINIÃO DOS ALUNOS</h3>
                    <h1 className="text-main font-bold text-4xl">DEPOIMENTOS</h1>
                </div>
                <div className="flex gap-3">
                    <CardDepoiment 
                        perfil={perfil} 
                        name={"João da silva"}
                        description={`
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod possimus incidunt impedit tempora ducimus sit rerum."`
                        }
                    />
                    <CardDepoiment 
                        perfil={perfil} 
                        name={"João da silva"}
                        description={`
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod possimus incidunt impedit tempora ducimus sit rerum."`
                        }
                    />
                    <CardDepoiment 
                        perfil={perfil} 
                        name={"João da silva"}
                        description={`
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod possimus incidunt impedit tempora ducimus sit rerum."`
                        }
                    />
                    <CardDepoiment 
                        perfil={perfil} 
                        name={"João da silva"}
                        description={`
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod possimus incidunt impedit tempora ducimus sit rerum."`
                        }
                    />
                </div>
            </section>
        </>
    );
}

export default Depoiments;