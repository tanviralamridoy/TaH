
import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800/50 border-t border-gray-800">
            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-white transition-colors"><GithubIcon className="w-6 h-6" /></a>
                    <a href="#" className="hover:text-white transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
                    <a href="#" className="hover:text-white transition-colors"><TwitterIcon className="w-6 h-6" /></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Alex Doe. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
