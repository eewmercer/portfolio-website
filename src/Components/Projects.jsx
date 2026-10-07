import '../styles/PortfolioStyles.css'
import descBubbles1 from "/Bubbles_2.png"
import descBubbles2 from "/Bubbles_3.png"
import dashboard from "/dashboard.png"
import activity from "/activity.png"
import add from "/add.png"
import exportPage from "/export.png"
import start from "/bsuStart.png"
import end from "/bsuEnd.png"
import profile from "/profile-pic.jpeg"
import login from "/login.png"
import database from "/database.png"
import home from "/homePage.png"

function Projects() {
  return (
    <>
      <main className='projects--main'>

        {/* PAGE HEADER */}
        <section className='projects--intro'>
          <img src={descBubbles1} className='bubbles-desc-1'/>

          <div>
            <p className='projects--eyebrow'>WHAT I'VE BUILT</p>
            <h1>PROJECTS</h1>
            <p className='projects--subtitle'>
              A collection of projects I've worked on through school,
              professional experience, and my own development.
            </p>
          </div>

          <img src={descBubbles2} className='bubbles-desc-2'/>
        </section>


        {/* HERBARIUM */}
        <section className='project-card featured-project'>

          <div className='project-number'>01</div>

          <div className='project-content'>

            <div className='project-header'>
              <div>
                <p className='project-type'>WEB APPLICATION</p>
                <h2>Ball State Herbarium</h2>
              </div>

              <span className='project-label'>
                Digital Corps
              </span>
            </div>

            <p className='project-summary'>
              A full-stack web application created for Ball State University's
              biology department to manage and explore decades of collected
              plant data. I contributed heavily to the frontend while working
              with backend APIs and a containerized database.
            </p>

            <div className='project-highlights'>

              <div>
                <span>01</span>
                <h3>Frontend</h3>
                <p>
                  Built responsive interfaces using React, JavaScript,
                  HTML, and Sass.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>API Integration</h3>
                <p>
                  Connected the frontend to backend APIs to retrieve,
                  filter, and export plant data.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Collaboration</h3>
                <p>
                  Worked with development team members and Ball State
                  stakeholders throughout development.
                </p>
              </div>

            </div>

            <div className='project-tools'>
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>Sass</span>
              <span>APIs</span>
              <span>Docker</span>
            </div>

            <div className='project-gallery herbarium-gallery'>
              <img src={dashboard}/>
              <img src={activity}/>
              <img src={add}/>
              <img src={exportPage}/>
            </div>

          </div>
        </section>


        {/* DINING WIDGET */}
        <section className='project-card'>

          <div className='project-number'>02</div>

          <div className='project-content'>

            <div className='project-header'>
              <div>
                <p className='project-type'>WEB WIDGET</p>
                <h2>MyBallState Dining Hours</h2>
              </div>

              <span className='project-label'>
                Digital Corps
              </span>
            </div>

            <p className='project-summary'>
              An interactive dining schedule widget created for Ball State's
              MyBallState website. The widget pulls dining information from
              an API and presents restaurant hours in an easy-to-use interface.
            </p>

            <div className='project-tools'>
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>APIs</span>
              <span>JSON</span>
            </div>

            <div className='project-gallery dining-gallery'>
              <img src={start}/>
              <img src={end}/>
            </div>

          </div>
        </section>


        {/* PORTFOLIO */}
        <section className='project-card'>

          <div className='project-number'>03</div>

          <div className='project-content'>

            <div className='project-header'>
              <div>
                <p className='project-type'>PERSONAL PROJECT</p>
                <h2>Portfolio Website</h2>
              </div>

              <span className='project-label'>
                You're here!
              </span>
            </div>

            <div className='portfolio-project-layout'>

              <div>
                <p className='project-summary'>
                  The website you're scrolling through right now! I designed
                  and developed this portfolio as a React/Vite application
                  to showcase my work, experience, and development skills.
                </p>

                <div className='project-tools'>
                  <span>React</span>
                  <span>Vite</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/eewmercer/portfolio-website'
                  className='project-link'
                >
                  View on GitHub →
                </a>
              </div>

              <img
                src={profile}
                className='portfolio-project-image'
              />

            </div>

          </div>
        </section>


        {/* CUPCAKE DATABASE */}
        <section className='project-card'>

          <div className='project-number'>04</div>

          <div className='project-content'>

            <div className='project-header'>
              <div>
                <p className='project-type'>FULL-STACK APPLICATION</p>
                <h2>Cupcake Database</h2>
              </div>

              <span className='project-label'>
                School Project
              </span>
            </div>

            <p className='project-summary'>
              A full-stack application featuring user authentication and
              a database-driven cupcake inventory. Users can create accounts,
              log in, view cupcakes, and add or remove items from the database.
            </p>

            <div className='project-tools'>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>EJS</span>
              <span>JavaScript</span>
            </div>

            <div className='cupcake-gallery'>

              <div className='cupcake-small-images'>
                <img src={login}/>
                <img src={home}/>
              </div>

              <img src={database}/>

            </div>

            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/eewmercer/cupcake_site_node.js'
              className='project-link'
            >
              View on GitHub →
            </a>

          </div>
        </section>


        {/* ENDING */}
        <section className='projects-ending'>
          <p>More projects coming soon...</p>
          <span>✦</span>
        </section>

      </main>
    </>
  )
}

export default Projects