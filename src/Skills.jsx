function Skills() {

    return(
        <section className="section">
            <h1 className="content mb-5 text-center">
                Skills
            </h1>
            
            <div className="flex gap-4 justify-center ">
            <div>
                    <img src="src\assets\react.svg" className="w-7 m-2.5"></img>
                    <img src="src\assets\Tailwind CSS.svg" className="w-7 m-5 mr-0 ml-2.5 mb-6"></img>
                    <img src="src\assets\vite-svgrepo-com.svg" className="w-7 m-4 ml-2.5"></img>
                    <img src="src\assets\html-1.svg" className="w-6 mb-4 mr-0 ml-3 pb-"></img>
                    <img src="src\assets\css-3.svg" className="w-6  ml-3"></img>
                    <img src="src\assets\logo-javascript.svg" className="w-[22px] mt-5 ml-[13.5px]"></img>
                    <img src="src\assets\pngegg.png" className="w-[40px] mt-4 ml-[8px]"></img>
                </div>
                <div>
                    <h3 className="skills hover:text-[#61DBFB] hover:bg-[rgb(27,45,71)] cursor-pointer rounded-lg">React</h3> 
                    <h3 className="skills hover:text-[#61DBFB] hover:bg-[rgb(27,45,71)] cursor-pointer rounded-lg">Tailwind CSS</h3>
                    <h3 className="skills hover:text-yellow-100 hover:bg-[rgb(27,45,71)] cursor-pointer rounded-lg">Vite</h3>
                    <h3 className="skills hover:text-orange-300 hover:bg-[rgb(27,45,71)] cursor-pointer rounded-lg">HTML</h3>
                    <h3 className="skills hover:text-blue-400 hover:bg-[rgb(27,45,71)] cursor-pointer rounded-lg">CSS</h3>
                    <h3 className="skills hover:text-yellow-100 hover:bg-[rgb(27,45,71)] cursor-pointer rounded-lg">Javascript</h3>
                    <h3 className="skills hover:text-pink-300 hover:bg-[rgb(27,45,71)] cursor-pointer rounded-lg">SASS</h3>
                </div>
                
            </div>
        </section>
    )
}

export default Skills