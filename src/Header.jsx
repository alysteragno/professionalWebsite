import { useState } from "react";

function Header() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className="right-0">
        {!isOpen? 
            (
                <button 
                      onClick={() => setisOpen(!isOpen)}
                      className="absolute right-0 m-4 w-9 mt-[3.1em] mr-[1.4em]
                                 lg:hidden">
                                 
                <img>
                    
                </img>
                </button>
                
            ) :
            (
                <nav 
                    className={`fixed top-0 right-0 z-50 h-screen bg-navBg shadow-2xl dark:shadow-2xl-left
                            text-fontColor font-bold trans list-none text-right w-[40%] lg:hidden 
                               ${isOpen? 'translate-x-0' : 'translate-x-full'} 
                               transition ease-in-out duration-300`}>
            
                    <div className="top-0 justify-end pt-12 pr-5 mb-10 ">
                        <button
                            onClick={() => setisOpen(!isOpen)}
                        >
                        <img
                            className="w-10"
                            src="src/assets/icons8-macos-close-96.png"
                            alt="close nav"
                         />
                        </button>
                    </div>
                        <ul className="pr-4 text-lg text-fontColor font-logoFont">
                            <li><a href="#" className="hover:bg-[rgb(27,45,71)] p-1 rounded-lg">Education</a></li>  
                            <li><a href="#"  className="hover:bg-[rgb(27,45,71)] p-1 rounded-lg">Projects</a></li>
                            <li><a href="#" className="hover:bg-[rgb(27,45,71)] p-1 rounded-lg">Services</a></li>
                            <li><a href="#" className="hover:bg-[rgb(27,45,71)] p-1 rounded-lg">Contact</a></li>
                        </ul>
                </nav>
            )
        }
      
                   
              
        </div>
    );
}

export default Header;