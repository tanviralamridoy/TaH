
import React from 'react';
import { CodeIcon, GamepadIcon, VideoIcon } from './icons';

const AboutCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cyan-900/50 text-cyan-400">
            {icon}
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Who I Am
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AboutCard icon={<CodeIcon className="w-8 h-8" />} title="Developer">
                    As a passionate developer, I craft elegant and efficient solutions to complex problems. From front-end interfaces to back-end logic, I love bringing ideas to life with code.
                </AboutCard>
                <AboutCard icon={<GamepadIcon className="w-8 h-8" />} title="Gamer">
                    Gaming is my escape and my challenge. I thrive in competitive environments and love exploring vast, story-rich worlds. You can often find me streaming my adventures.
                </AboutCard>
                <AboutCard icon={<VideoIcon className="w-8 h-8" />} title="Content Creator">
                    I share my passions for tech and gaming through engaging videos and tutorials. My goal is to build a community where we can learn, laugh, and grow together.
                </AboutCard>
            </div>
        </section>
    );
};

export default About;
