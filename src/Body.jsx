import emailIcon from './assets/emailIcon.png'
import profilePicture from './assets/picture.jpg'
import logoLinkedin from './assets/icons8-linkedin (1).svg'

function Body() {

    return(
        <body className=" bg-bgColor pt-[50px]">
            <section className="flex justify-center text-center">
                <h2 className="section
                               laptop:flex justify-center laptop:pr-[0px]
                               ">
                <div className="flex justify-center mb-6
                                lg:float-right ">
                    <a href="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" target="blank" 
                       className="">
                        <img
                            className="rounded-full opacity-70 w-[200px] flex
                                       lg:flex justify-end"
                            src={profilePicture}
                            alt="picture"
                        >
                        </img>
                        <div className='flex justify-center mt-3
                                          l'>
                            <img
                                className='w-[20px] h-full mr-2 rounded-lg '
                                src={emailIcon}
                                alt='emailIcon'
                            >
                            </img>
                            <h3 className="text-fontColor text-sm mb-4
                                 lg:"
                                 >alysteragno@gmail.com
                            </h3>
                        </div>
                    </a>
                </div>
                
                    <div className="laptop:w-[800px]">
                
                        <h1 
                            className="content
                                       lg:mr-[310px]"> 
                            Hi there! I'm <a href="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" 
                            target="_blank" 
                                className="text-purple-400 hover:text-purple-300">
                                Alyster</a>,
                         </h1> 
                        <div className='md:px-[80px] padding-x
                                        lg:text-start '>
                            a Front-end <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="blank" className="text-green-200 font-bold hover:text-green-100">React</a> Developer 
                            from the city of Manila, Philippines. 
                            I specialize in developing captivating, responsive, and intuitive web and 
                            mobile applications that not only look great but also 
                            offer seamless user experiences. I started my tech 
                            journey at
                        <span 
                            className="text-green-200
                                        font-bold text-[1.49rem] hover:text-green-100"> <a href="https://www.feutech.edu.ph/">Far Eastern University - Institute of Technology,  
                        </a> </span> 
                        <span className="text-purple-300 font-bold hover:text-purple-200"> <a href="https://www.feutech.edu.ph/academics/bsitwma" target="bl
                        ">Bachelor of Science in Information Technology
                        with Specialization in Web and Mobile Applications </a></span>
                        </div>
                        <div className="flex justify-center p-8 
                                        laptop:justify-start lg:pl-[80px]">
                            <button 
                                className="flex text-green-200 font-bold p-3 font-logoFont text-xl 
                                         hover:bg-[rgb(27,45,71)] rounded-lg border-[1px]
                                           laptop:m">
                                        <a href ="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" target="blank">
                                            Contact me
                                        </a>
                                    <a href ="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" target="blank">
                                        <img  
                                            className="w-[1.1em] mt-0.5 ml-2"
                                            src={logoLinkedin}
                                            alt="linked logo"
                                        >
                                        </img>
                                    </a>
                             </button>
                        </div>
                    </div>
                </h2>
            </section>
        </body>
    )
}

export default Body