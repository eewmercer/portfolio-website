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
      <main className='exp--main'>
        <section className='exp--intro'>
          <img src={descBubbles1} className='bubbles-desc-1'/>
          <h1>PROJECTS</h1>
          <img src={descBubbles2} className='bubbles-desc-2'/>
        </section>

        <section className='proj--container'>
          <div>
            <h2>Ball State Herbarium Website:</h2>
            <p>	As a developer at the Digital Corps, I have been given the 
              opportunity to create projects for various local businesses and 
              directly work with various Ball State University departments. Ball 
              State University’s biology department made a request to the Digital 
              Corps for a website that would contain all the current and previous 
              plant data that have been collected through the years. This produced 
              the Herbarium Database, a website that I have been working on for a 
              year. I collaborated with various development team members and 
              contributed to the production of this website by creating the frontend 
              as well as pulling data from the backend through requesting and writing 
              to an API that connected with the database that containerized the plant 
              data. I created the frontend of this website with React.js, JavaScript, 
              HTML, and Sass. The backend was containerized using Docker. </p>
          </div>
          <div className='proj--images-herbarium'>
            <img src={dashboard}/>
            <img src={activity}/>
            <img src={add}/>
            <img src={exportPage}/>
          </div>
        </section>

        <section className='proj--container'>
          <div>
            <h2>MyBallState Dining Hours Widget:</h2>
            <p>One of the first projects I worked on at the Digital Corps included a 
              widget for Ball State's dining schedule. Each food court contains various 
              restaurants and available food options, all while having different hours of 
              operation. My job was to create a widget to pull data from an API
              and connect it with the frontend. This widget was create with React, JS, HTML, 
              and CSS.
            </p>
          </div>
          <div className='proj--images-bsu'>
            <img src={start}/>
            <img src={end}/>
          </div>
        </section>

        <section className='proj--container'>
          <div>
            <h2>Portfolio Website:</h2>
            <p>The website your scrolling through right now was programmed by yours truly! 
              I created it as a React/Vite application using JS, HTML, and CSS, and utilized
              various hooks within React. The site itself is deployed on GitHub pages, and it's
              source code can be viewed directly through GitHub.
            </p>
          </div>
          <img src={profile} />
        </section>

        <section className='proj--container'>
          <div>
            <h2>Cupcake Database:</h2>
            <p>This project included the use of Node.js, MongoDB, Express, EJS, and JS to 
              produce a user login system and database. A user can sign up with an account,
              login, and then view the current cupcakes listed in the database; they can also 
              add to or delete from the database. The source code for this project is found in 
              GitHub.
            </p>
          </div>
          <div className='proj--images-cupcake'>
            <div className='xtra-images'>
              <img src={login}/>
              <img src={home}/>
            </div>
            <img src={database}/>
          </div>
        </section>
      </main>
    </>
  )
}

export default Projects
