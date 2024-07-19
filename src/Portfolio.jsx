import mcdoClone from './assets/mcdonaldsWebclone.png'
import projCatFood from './assets/catFood.png';
import container from './assets/emptyContainer.png'
import professionalWebsite from './assets/profWeb.png'
import htmlIcon from './assets/html-1.svg';
import cssIcon from './assets/css-3.svg';
import jsIcon from './assets/logo-javascript.svg'; 
import reactIcon from './assets/react.svg';
import tailwindCssIcon from './assets/Tailwind CSS.svg';
import viteIcon  from './assets/vite-svgrepo-com.svg';
import burnelleStudio from './assets/burnelleStudio.png'

function Portfolio(props) {
    const cardContainer = [
           {
            image: projCatFood,
            projectName: 'Cat food product brand',
            technologyUsed: 'Technology used:',
            techIcons: [
                { icon: htmlIcon, text: 'HTML' },
                { icon: cssIcon, text: 'CSS' },
                { icon: jsIcon, text: 'JavaScript' }
            ],
            tech: 'HTML, CSS, JavaScript',
            button: 'View',
        },
        {
            image: mcdoClone,
            projectName: "Mcdonald's Clone",
            technologyUsed: 'Technology used:',
            techIcons: [
                { icon: htmlIcon, text: 'HTML' },
                { icon: cssIcon, text: 'CSS' },
                { icon: jsIcon, text: 'JavaScript' }
            ],
            tech: 'HTML, CSS, JavaScript',
            button: 'View',
        },
     
        {
            image: professionalWebsite,
            projectName: 'Personal Professional Website',
            technologyUsed: 'Technology used:',
            techIcons: [
                { icon: reactIcon, text: 'React'},
                { icon: tailwindCssIcon, text: 'Tailwind CSS'},
                { icon: viteIcon, text: 'Vite'},
            ],
            tech: 'React, Tailwind CSS Vite',
            button: 'View',
        },
        {
            image: burnelleStudio,
            projectName: 'Burnelle Studio',
            technologyUsed: 'Technology used:',
            techIcons: [
                { icon: htmlIcon, text: 'HTML' },
                { icon: cssIcon, text: 'CSS' },
                { icon: jsIcon, text: 'JavaScript' }
            ],
            tech: 'HTML, CSS, Javascipt',
            link: 'https://burnellestudio.netlify.app', 
            button: 'View' ,
        },
        {
            image: container,
            projectName: 'Project 5',
            technologyUsed: 'Technology used:',
            tech: 'React, Tailwind CSS Vite',
            button: 'View',
        },
        {
            image: container,
            projectName: 'Project 5',
            technologyUsed: 'Technology used:',
            tech: 'React, Tailwind CSS Vite',
            button: 'View',
        },
    ];

    const handleViewButtonClick = (link) => {
        window.open(link, '_blank'); // Open link in a new tab/window
    };

    return (
        <div className="section">
            <h1 className="content text-center">
                Portfolio
            </h1>
            <div className="lg:grid gap-6 max-w-[1500px] mx-auto
                            md:grid-cols-2 
                            xl:grid-cols-3 xl:gap-3
                            ">
                {cardContainer.map((card, index) => (
                    <div key={index} 
                         className="bg-[rgb(27,45,71)] p-4 rounded-2xl mt-5 shadow-xl">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={card.image}
                                alt={card.projectName}
                                className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                            />
                        </div>
                        <h3 className="pl-1 pb-3 text-[#a8b6e2]">
                        {card.projectName}
                        </h3>
                        <h3 className="p-1 text-lg">
                        {card.technologyUsed}
                        </h3>
                        <div className="flex items-center pl-1 text-lg">
                            {card.techIcons && card.techIcons.map((tech, index) => (
                                <div key={index} 
                                     className="flex items-center mr-2">
                                    <img
                                        src={tech.icon}
                                        alt={`${tech.text} Icon`}
                                        className="w-6 h-6 mr-1"
                                    />
                                    <span>
                                     {tech.text}
                                    </span>
                                </div>
                            ))}
                           
                        </div>
                        
                        <button className="flex text-green-100 p-1 font-logoFont text-lg hover:bg-[rgb(41,69,108)] rounded-lg border-[1px] w-[80px] m-3 justify-center" onClick={() => handleViewButtonClick(card.link)}>
                        
                            {card.button} 
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
