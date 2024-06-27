function PrimaryCTA() {

    return(
        <div className="flex justify-center">
            <button 
            className="flex text-green-200 font-bold p-3 font-logoFont text-xl
                    hover:bg-[rgb(27,45,71)] rounded-lg border-[1px] ">
                    <a href ="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" target="blank">
            
                Contact me
                </a>
                    <a href ="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" target="blank">
                        <img  
                            className="w-[1.1em] mt-0.5 ml-2"
                            src="src\assets\icons8-linkedin (1).svg"
                            alt="linked logo"
                        >
                        </img>
                    </a>
                    
            </button>
            
        </div>
    )
} 

export default PrimaryCTA;