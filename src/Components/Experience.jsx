import { useState } from 'react'
import '../styles/PortfolioStyles.css'
import descBubbles1 from "/Bubbles_2.png"
import descBubbles2 from "/Bubbles_3.png"
import bubbleBullet from "/bubbles_bullets.png"
// import projectButton from "/view_projects.svg"
import Projects from './Projects'

function Experience(props) {
 
  console.log(props.showProjects)
  return (
    <>
      {!props.showProjects && <main className='exp--main'>
        <section className='exp--intro'>
          <img src={descBubbles1} className='bubbles-desc-1'/>
          <h1>WORK EXPERIENCE</h1>
          <img src={descBubbles2} className='bubbles-desc-2'/>
        </section>

        <section className='exp--work-section'>
          <section className='exp--digital-corps'>
            <div className='exp--work'>
              <img src={bubbleBullet} className='bubble-size'/>
              <div className='work'>
                <h2>Digital Corps: </h2>
                <p>Built Web Apps for Ball State University, as well as Muncie businesses, 
                  utilizing various programming tools and languages including React.js, JavaScript, HTML, 
                  CSS, Sass, API requests, and JSON file implementation.
                  Engaged with clients to understand their requirements for websites and applications, 
                  managing timelines, and collaborating effectively to ensure project completion.
                  Collaborated with various specialization teams such as Video, Communication, Design, 
                  and Project Management groups.</p>
              </div>
            </div>

            {/* <div className='project-button-container'>
              <button onClick={() => props.setShowProjects('hi')}>View <br />Projects</button>
              <img src={projectButton} className='project-button'/>
            </div>   */}
          </section>

          <section className='exp--work'>
            <img src={bubbleBullet} className='bubble-size'/>
            <div className='work'>
              <h2>Office Depot: </h2>
              <p>Used active listening and relationship-building skills to assess customer 
                needs relating to technology products, build rapport, and connect with viable solutions.
                Coordinated team efforts and streamlined processes in a print shop setting, enhancing order 
                management and facilitating smooth transitions between tasks.</p>
            </div>
          </section>

          <section className='exp--work'>
            <img src={bubbleBullet} className='bubble-size'/>
            <div className='work'>
              <h2>Culver's: </h2>
              <p>Utilized strong communication skills to resolve conflicts with dissatisfied customers, 
                ensuring that they left the establishment feeling valued and satisfied.
                Gained extensive multitasking experience by operating effectively in a low-staffing 
                environment, demonstrating flexibility by managing multiple stations while concurrently 
                delegating tasks to team members.</p>
            </div>
          </section>
        </section>
      </main>}

      {props.showProjects !== false ? <Projects /> : null}

    </>
  )
}

export default Experience
