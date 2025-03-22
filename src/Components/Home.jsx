import '../styles/PortfolioStyles.css'
import profile from "/profile-pic.jpeg"
import introBubbles from "/Bubbles.svg"
import bsu from "/bsu_logo.png"
import descBubbles1 from "/Bubbles_2.png"
import descBubbles2 from "/Bubbles_3.png"

function Home() {
 
  return (
    <>
      <main className='home--main'>
        <section className='home--intro'>
          <div>
            <img className='bubbles' src={introBubbles}/>
            <img className="profile" src={profile}/>
          </div>
          <h1>I'm Emmaline Mercer, a front-end and back-end web developer</h1>
        </section>
        <section className='home--description'>
          <img src={descBubbles1} className='bubbles-desc-1'/>
          <p>Currently an undergraduate at Ball State University, 
            I am pursuing a BS in Computer Science 
            with a concentration in Web and Mobile 
            App Development and a minor in 
            Computer Information and Technology.</p>
          <img src={bsu}/>
          <img src={descBubbles2} className='bubbles-desc-2'/>
        </section>
      </main>
    </>
  )
}

export default Home
