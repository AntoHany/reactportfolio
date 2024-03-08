import SpecialHeading from '../component/SpecialHeading'
import antonPic from '../images/me.jpg'
import Dots from '../component/Dots'
import './About.css'

function About(){
  return(
    <div id='about' className="about section-space">
      <Dots class={'dots-top'}/>
      <Dots class={'dots-bottom'}/>
      <SpecialHeading head='about' subText='Creativity and quality' />
      <div className='container'>
        <div className='text'>
          <p className='sub-text'>
          My name is <span>Anton Hany</span>, 21 years old.
          <br />
          I have experience in <span>frontend</span>.
          <br />
          And ability to use many skills and tools that make the website attractive
          You can see my work <a href='#project' className='main-text'>here</a>.
          Feel free to contact me to start your own website.
          </p>
        </div>
        <div className='image'>
          <img alt='anton picture' src={antonPic}/>
        </div>
      </div>
    </div>
  )
}

export default About;