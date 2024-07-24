import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
    'src/assets/image1.png',
    'src/assets/image2.png',
    'src/assets/image3.png',
    'src/assets/image4.png'
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Função de clique para navegar entre os banners
    const handleEllipseClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-96 bg-gray-100 overflow-hidden flex justify-center items-center px-4 sm:px-8">
            <div className="absolute top-14 left-24">
                {/* Elementos de texto e botão */}
                <div className="flex-col space-y-1.5">
                    <p className="text-yellow-500 text-sm font-bold" style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '700', lineHeight: '20px', letterSpacing: '0.75px', textAlign: 'left' }}>
                        Melhores ofertas personalizadas
                    </p>

                    <p className="text-black text-5xl font-extrabold leading-tight" style={{ fontFamily: 'Inter', fontSize: '56px', fontWeight: '800', lineHeight: '60px', letterSpacing: '1px', textAlign: 'left', color: '#1F1F1F' }}>
                        Queima de <br /> stoque Nike 🔥
                    </p>

                    <p className="text-black text-base font-medium leading-8" style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '400', lineHeight: '28px', letterSpacing: '0.75px', textAlign: 'left' }}>
                        Consequat culpa exercitation mollit nisi excepteur do <br /> tempor laboris eiusmod irure consectetur.
                    </p>

                    <button
                        className="w-48 md:w-46 h-10 md:h-12 bg-pink-600 rounded-md flex items-center justify-center text-white font-bold cursor-pointer opacity-90 hover:opacity-100 hover:bg-pink-700 transition duration-300 ease-in-out"
                        onClick={() => console.log('Botão Ver Ofertas clicável')}
                    >
                        Ver Ofertas
                    </button>
                </div>
            </div>

            <img
                src="src/assets/Ornament.svg"
                alt="Ornamento"
                className="absolute top-14 right-9 w-24 sm:w-32 opacity-40%"
            />

            <img
                src="src/assets/TennisBanner.png"
                alt="Tênis Nike"
                className="absolute top-14 right-20 w-96 sm:w-auto h-64 sm:h-80 md:h-96 lg:h-108 xl:h-120 transform rotate-20"
                style={{ opacity: '0.9' }}
            />

            {/* Elipses para navegação */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleEllipseClick(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-pink-600' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
