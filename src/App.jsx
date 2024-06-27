import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Hero from './Hero'
import Section from './Section'
import Education from './Education'
import Skills from './Skills'
import Portfolio from './Portfolio'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Body/>
        <div className="content__margin">
           <Section/>
        </div>
        
          <div className='bg-bgColor'>
            <Skills/>
          </div>
        <div className="content__margin">
          <Education/>
        </div>
        <div className='content_margin bg-bgColor'>
          <Portfolio/>
        </div>
        <Footer/>
    </>
  )
}

export default App;
