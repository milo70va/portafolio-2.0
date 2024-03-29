import React from 'react';
import styles from './Page.module.css';

const HomePage = () => {
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

                {/* Contenido de la página de inicio */}
                <div className="container mx-auto py-8 px-4">
                    <h1 className="text-3xl font-bold">EMILIO VIEIRA ANGEL</h1>
                    <div className="mt-4">
                        <p className="font-montserrat">
                            <strong>ESTUDIANTE INGENIERIA DE SISTEMAS Y COMPUTACIÓN</strong>
                        </p>

                        {/* Agregar la imagen aquí */}
                        <img src="/images/foto.jpg" alt="Foto de perfil" className="mx-auto border-4 border-blue-800 rounded-full w-60 h-60 mt-4" />

                        <div className="mt-4">
                            <h2 className="text-xl font-bold text-center">OBJETIVO</h2>
                            <p className={`text-justify mt-2 ${styles.textJustify}`}>
                                Mi objetivo es aplicar mis conocimientos en ingeniería de sistemas y computación en la formulación, evaluación y gestión de proyectos tecnológicos.
                                Busco contribuir en equipos multidisciplinarios, impulsando la innovación y el desarrollo de soluciones efectivas en el ámbito tecnológico.
                                Mi meta es alcanzar resultados significativos y agregar valor con mi pasión por la resolución de problemas y la excelencia técnica.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-center">IDIOMAS</h2>
                            <div className="mt-2 text-center">
                                <p><strong>Español</strong> - Nativo</p>
                                <p><strong>Inglés</strong> - C1 (Aptis 2023)</p>
                                <p><strong>Alemán</strong> - B2/C1 (Bachillerato Internacional 2018)</p>
                            </div>
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

export default HomePage;
