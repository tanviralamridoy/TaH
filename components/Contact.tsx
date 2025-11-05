
import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, TwitchIcon } from './icons';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
    <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
    >
        {icon}
    </a>
);


const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Connect
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out on any of these platforms!
            </p>
            <div className="flex justify-center space-x-6 md:space-x-8">
                <SocialLink href="#" label="GitHub" icon={<GithubIcon className="w-8 h-8" />} />
                <SocialLink href="#" label="LinkedIn" icon={<LinkedinIcon className="w-8 h-8" />} />
                <SocialLink href="#" label="Twitter" icon={<TwitterIcon className="w-8 h-8" />} />
                <SocialLink href="#" label="YouTube" icon={<YoutubeIcon className="w-8 h-8" />} />
                <SocialLink href="#" label="Twitch" icon={<TwitchIcon className="w-8 h-8" />} />
            </div>
        </section>
    );
};

export default Contact;
