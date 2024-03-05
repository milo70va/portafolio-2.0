import React from 'react';

const ExperiencePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Contenido de la página */}
            <div style={{ flex: 1 }}>
                {/* Navbar */}
                <nav className="bg-blue-800 p-4 text-white">
                    <div className="container mx-auto flex justify-between items-center">
                        <div>
                            <p className="text-2xl font-bold">PORTAFOLIO</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="/" className="hover:underline">INICIO</a>
                            <a href="/experience" className="hover:underline">EXPERIENCIA</a>
                            <a href="/formation" className="hover:underline">FORMACIÓN</a>
                        </div>
                    </div>
                </nav>

                {/* Contenido de la página de experiencia */}
                <div className="container mx-auto py-8 px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">EXPERIENCIA LABORAL</h1>

                    <div>
                        <div className="text-center mb-8">
                            <img src="/images/dna.png" alt="Logo DNA Universe" className="mx-auto mb-4" style={{ width: '200px' }} />
                            <h2 className="text-2xl font-bold">Cofundador, CEO</h2>
                            <p className="italic">DNA Universe | 2021 - 2023</p>
                            <p className="mt-4">
                                Liderazgo de equipos de más de 50 personas bajo la metodología ágil SCRUM, priorizando la 
                                toma de decisiones y la evaluación de riesgos.
                            </p>
                            <p className="mt-4">
                                Implementación nuevas tecnologías en proyectos multidisciplinarios, optimizando la 
                                eficiencia operativa.
                            </p>
                            <p className="mt-4">
                                Dirección de la gestión de equipos diversos, fomentando la colaboración y la innovación en 
                                entornos dinámicos.
                            </p>
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold">INTERESES</h2>
                            <ul className="mt-4">
                                <li>- Blockchain</li>
                                <li>- Inteligencia Artificial</li>
                                <li>- Videojuegos</li>
                                <li>- Formulación, evaluación y gestión de proyectos</li>
                                <li>- Nuevas tecnologías</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-200 py-4 px-4 text-gray-800 mt-auto">
                <div className="container mx-auto">
                    <h2 className="text-lg font-bold">CONTACTO</h2>
                    <p className="mt-2">
                        <strong>Cel:</strong> <span className="italic">+57 3006624607</span><br />
                        <strong>E-mail:</strong> <span className="italic">milo70vieira@hotmail.com</span><br />
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/emilio-vieira-51a345232/" className="font-bold" target="_blank" rel="noopener noreferrer">www.linkedin.com</a><br />
                        <strong>Dirección:</strong> <span className="italic">Carrera 29a #3-146 Medellín, Colombia</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default ExperiencePage;

