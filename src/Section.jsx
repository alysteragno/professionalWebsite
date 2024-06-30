import sectionImg from './assets/reactTailwind.png'
function Section() {

    return(
        <section className="section bg-bgColormb-[200px] 
                            md:flex flex-row justify-center ">
            <div>
                <h1 className="content"> About me </h1>
                <h2 className="md:w-[100%] max-w-[800px]    ">
                    As of 2024, I am currently working on completing my 
                    Bachelor's degree. I'm currently focusing on Web Development and Web Design with Figma, 
                    utilizing frameworks like <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="blank" className="text-green-200 font-bold">React</a> and <a href="https://en.wikipedia.org/wiki/Tailwind_CSS" target="blank" className="text-purple-300 font-bold">Tailwind CSS</a>. 
                    I stay updated on the latest trends in front-end development, 
                    consistently exploring new frameworks, refining responsive 
                    designs, and optimizing performance to deliver solutions that 
                    exceed expectations.
                </h2>
            </div>
            <div className='mt-[50px] md:ml-[10px] lg:mt-[0px]'>
                <img
                    className='w-full shadow-xl transition-transform 
                    duration-300 ease-in-out transform hover:scale-105
                    '
                    src={sectionImg}
                    alt='react and tailwind'
                >
                </img>
            </div>
        </section>
    )
}

export default Section;