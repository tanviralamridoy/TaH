
import React from 'react';
import { YoutubeIcon, ExternalLinkIcon } from './icons';

interface ContentItem {
    title: string;
    type: 'Video' | 'Article';
    thumbnailUrl: string;
    url: string;
    duration?: string;
}

const content: ContentItem[] = [
    {
        title: "Building a React App from Scratch in 2024",
        type: "Video",
        thumbnailUrl: "https://picsum.photos/seed/reacttut/400/225",
        url: "#",
        duration: "45:12"
    },
    {
        title: "Top 5 VS Code Extensions for Web Developers",
        type: "Article",
        thumbnailUrl: "https://picsum.photos/seed/vscode/400/225",
        url: "#"
    },
    {
        title: "My Gaming PC Build & Setup Tour",
        type: "Video",
        thumbnailUrl: "https://picsum.photos/seed/pcbuild/400/225",
        url: "#",
        duration: "15:30"
    }
];

const ContentCard: React.FC<{ item: ContentItem }> = ({ item }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden group border border-gray-700">
            <div className="relative">
                <img src={item.thumbnailUrl} alt={item.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        {item.type === 'Video' ? <YoutubeIcon className="w-16 h-16 text-white/80" /> : <ExternalLinkIcon className="w-16 h-16 text-white/80" />}
                    </a>
                </div>
                {item.duration && <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">{item.duration}</span>}
            </div>
            <div className="p-4">
                <span className={`text-xs font-semibold ${item.type === 'Video' ? 'text-red-400' : 'text-blue-400'}`}>{item.type}</span>
                <h3 className="text-md font-bold mt-1 text-white">{item.title}</h3>
            </div>
        </div>
    );
};

const Content: React.FC = () => {
    return (
        <section id="content" className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My Creative <span className="text-cyan-400">Content</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.map((item, index) => (
                    <ContentCard key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Content;
