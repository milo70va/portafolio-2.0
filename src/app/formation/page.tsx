import React from 'react';

const FormationPage = () => {
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

                {/* Contenido de la página de formación */}
                <div className="container mx-auto py-8 px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">FORMACIÓN ACADÉMICA</h1>

                    <div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Universidad EAFIT</h2>
                            <p className="italic">Diplomado 2024-1 | Virtual</p>
                            <p>- Formulación, evaluación y gestión de proyectos</p>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Universidad EIA</h2>
                            <p className="italic">Aspirante a grados 2025-1 | Envigado, Colombia</p>
                            <p>- Ingeniería de sistemas y computación</p>
                            <p>- Create-X Cohort 0, Georgia Institute of Technology</p>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold">100 Jahre Schule Bismark</h2>
                            <p className="italic">Intercambio estudiantil 2015 | Bismark, Alemania</p>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Colegio Alemán Medellín</h2>
                            <p className="italic">Egresado 2018 | Medellín, Colombia</p>
                            <p>- Representante olimpiadas de matemáticas de Antioquia de Antonio Nariño (2014, 2016)</p>
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

export default FormationPage;
