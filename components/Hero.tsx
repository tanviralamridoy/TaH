import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center -mt-16">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                    <span className="block">Hi, I'm N. Ridoy</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Full-Stack Developer
                    </span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
                    I build immersive digital experiences with a focus on performance and user experience. Welcome to my personal corner of the internet.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="#projects"
                        className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="inline-block bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transform hover:scale-105 transition-all duration-300"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;