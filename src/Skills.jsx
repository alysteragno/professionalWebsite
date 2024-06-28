import  reactLogo from './assets/REACT_LOGO.svg'
import  tailwindLogo from './assets/Tailwind CSS.svg'
import  viteLogo from './assets/vite-svgrepo-com.svg'
import  htmlLogo from './assets/html-1.svg'
import  cssLogo from './assets/css-3.svg'
import  javasciptLogo from './assets/logo-javascript.svg'
import  sassLogo from './assets/pngegg.png'
function Skills() {

    return(
        <section className="section">
            <h1 className="content mb-5 text-center">
                Skills
            </h1>
            
            <div className="flex gap-4 justify-center ">
            <div>
                    <img src={reactLogo} className="w-7 m-2.5"></img>
                    <img src={tailwindLogo} className="w-7 m-5 mr-0 ml-2.5 mb-6"></img>
                    <img src={viteLogo} className="w-7 m-4 ml-2.5"></img>
                    <img src={htmlLogo} className="w-6 mb-4 mr-0 ml-3 pb-"></img>
                    <img src={cssLogo} className="w-6  ml-3"></img>
                    <img src={javasciptLogo} className="w-[22px] mt-5 ml-[13.5px]"></img>
                    <img src={sassLogo} className="w-[40px] mt-4 ml-[8px]"></img>
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