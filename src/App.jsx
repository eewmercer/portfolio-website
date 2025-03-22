import { useState } from 'react';
import './styles/PortfolioStyles.css'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import TV from '/TV_Selector.png'
import freqWave from '/Freq_Wave.png'

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showExp, setShowExp] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <main>
        <nav>
          <ul className='navigation--bar'>
            <li onClick={() => {
              setShowHome(true) 
              setShowExp(false) 
              setShowProjects(false)}}>home</li>
            <li onClick={() =>{
              setShowHome(false) 
              setShowExp(true) 
              setShowProjects(false)}}>experience</li>
            <li onClick={() => {
              setShowHome(false) 
              setShowExp(false) 
              setShowProjects(true)}}>projects</li>
          </ul>
          <img src={TV} className='navigation--TV'/>
          <img src={freqWave} className='navigation--wave' />
        </nav>
        {showHome && <Home/>}
        {showExp && <Experience showProjects={showProjects} setShowProjects={setShowProjects} />}
        {showProjects && <Projects/>}
      </main>
    </>
  )
}

export default App
