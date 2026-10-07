import '../styles/PortfolioStyles.css'
import descBubbles1 from "/Bubbles_2.png"
import descBubbles2 from "/Bubbles_3.png"
import oTel from "/otel.png"
import newRelic from "/newRelic.png"
import jenkins from "/jenkins.jpeg"
import Projects from './Projects'

function Experience(props) {
  return (
    <>
      {!props.showProjects && (
        <main className='exp--main'>

          {/* Page heading */}
          <section className='exp--intro'>
            <img src={descBubbles1} className='bubbles-desc-1'/>
            <div>
              <p className='exp--eyebrow'>MY JOURNEY</p>
              <h1>WORK EXPERIENCE</h1>
              <p className='exp--subtitle'>
                A collection of places I've learned, built, collaborated,
                and grown as a developer.
              </p>
            </div>
            <img src={descBubbles2} className='bubbles-desc-2'/>
          </section>


          {/* Experience timeline */}
          <section className='experience-timeline'>

            {/* Genesys */}
            <article className='experience-card genesys-card'>

              <div className='experience-number'>01</div>

              <div className='experience-card-content'>

                <div className='experience-header'>
                  <div>
                    <p className='experience-type'>SOFTWARE DEVELOPMENT</p>
                    <h2>Genesys</h2>
                  </div>

                  <span className='experience-date'>
                    Current · Part-Time
                  </span>
                </div>

                <p className='experience-summary'>
                  Building software alongside experienced developers while
                  working with real-world applications, deployment pipelines,
                  and observability systems.
                </p>

                <div className='experience-highlights'>

                  <div className='highlight'>
                    <span>01</span>
                    <h3>Development</h3>
                    <p>
                      Contributed to projects and feature implementations
                      using Java.
                    </p>
                  </div>

                  <div className='highlight'>
                    <span>02</span>
                    <h3>Observability</h3>
                    <p>
                      Worked with OpenTelemetry and New Relic to understand
                      application behavior and performance.
                    </p>
                  </div>

                  <div className='highlight'>
                    <span>03</span>
                    <h3>Deployment</h3>
                    <p>
                      Gained experience with Jenkins and real-world
                      development pipelines.
                    </p>
                  </div>

                </div>

                <div className='experience-tools'>
                  <span>Java</span>
                  <span>TypeScript</span>
                  <span>OpenTelemetry</span>
                  <span>New Relic</span>
                  <span>Jenkins</span>
                </div>

                <div className='genesys-tools'>
                  <img src={oTel} />
                  <img src={newRelic} />
                  <img src={jenkins} />
                </div>

              </div>
            </article>


            {/* Digital Corps */}
            <article className='experience-card digital-card'>

              <div className='experience-number'>02</div>

              <div className='experience-card-content'>

                <div className='experience-header'>
                  <div>
                    <p className='experience-type'>WEB DEVELOPMENT</p>
                    <h2>Digital Corps</h2>
                  </div>

                  <span className='experience-date'>
                    Ball State University
                  </span>
                </div>

                <p className='experience-summary'>
                  Creating web applications for Ball State University and
                  local businesses while working directly with clients and
                  multidisciplinary teams.
                </p>

                <div className='experience-stats'>
                  <div>
                    <strong>React</strong>
                    <span>Frontend</span>
                  </div>

                  <div>
                    <strong>APIs</strong>
                    <span>Data</span>
                  </div>

                  <div>
                    <strong>Teams</strong>
                    <span>Collaboration</span>
                  </div>
                </div>

                <div className='experience-tools'>
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Sass</span>
                  <span>APIs</span>
                  <span>JSON</span>
                </div>

              </div>
            </article>


            {/* Office Depot */}
            <article className='experience-card smaller-card'>

              <div className='experience-number'>03</div>

              <div className='experience-card-content'>

                <div className='experience-header'>
                  <div>
                    <p className='experience-type'>CUSTOMER EXPERIENCE</p>
                    <h2>Office Depot</h2>
                  </div>
                </div>

                <div className='compact-highlights'>
                  <span>Technology consultation</span>
                  <span>Customer relationships</span>
                  <span>Team coordination</span>
                  <span>Print services</span>
                </div>

              </div>
            </article>


            {/* Culver's */}
            <article className='experience-card smaller-card'>

              <div className='experience-number'>04</div>

              <div className='experience-card-content'>

                <div className='experience-header'>
                  <div>
                    <p className='experience-type'>CUSTOMER SERVICE</p>
                    <h2>Culver's</h2>
                  </div>
                </div>

                <div className='compact-highlights'>
                  <span>Communication</span>
                  <span>Conflict resolution</span>
                  <span>Multitasking</span>
                  <span>Team leadership</span>
                </div>

              </div>
            </article>

          </section>


          {/* Transition to projects */}
          <section className='experience-ending'>
            <p>Want to see what I've built?</p>

            <button
              onClick={() => props.setShowProjects(true)}
            >
              Explore My Projects →
            </button>
          </section>

        </main>
      )}

      {props.showProjects !== false ? <Projects /> : null}
    </>
  )
}

export default Experience