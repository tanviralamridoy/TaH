import React from 'react';
import { TwitchIcon, YoutubeIcon } from './icons';

const Gaming: React.FC = () => {
    const favoriteGames = [
        { name: "Cyberpunk 2077", imageUrl: "https://placehold.co/300x400/1a202c/facc15?text=Cyberpunk" },
        { name: "Elden Ring", imageUrl: "https://placehold.co/300x400/1a202c/facc15?text=Elden+Ring" },
        { name: "Valorant", imageUrl: "https://placehold.co/300x400/1a202c/facc15?text=Valorant" },
        { name: "The Witcher 3", imageUrl: "https://placehold.co/300x400/1a202c/facc15?text=Witcher+3" },
    ];

    return (
        <section id="gaming" className="py-20 bg-gray-900/50 rounded-lg">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    My Gaming <span className="text-cyan-400">World</span>
                </h2>
                <p className="text-gray-400 mt-2">Where I conquer virtual realms.</p>
                <div className="flex justify-center gap-6 mt-6">
                    <a href="#" className="flex items-center gap-2 bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                        <TwitchIcon className="w-5 h-5" />
                        <span>Twitch</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                        <YoutubeIcon className="w-5 h-5" />
                        <span>YouTube Gaming</span>
                    </a>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-center mb-8">Favorite Games</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {favoriteGames.map((game) => (
                        <div key={game.name} className="relative rounded-lg overflow-hidden group">
                            <img src={game.imageUrl} alt={game.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <h4 className="text-white text-lg font-bold">{game.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gaming;