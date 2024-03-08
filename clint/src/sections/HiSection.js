import sectionImage from '../images/sectionImage.jpg';
import './HiSection.css'

function Text(props){
  let name = props.name;
  let titleJob = props.titleJob;
  return(
    <div className='title'>
      <h3 className="sub-text">hello! <br /> my name is {name} i'm a</h3>
      <h2 className="main-text">{titleJob}</h2>
    </div>
  )
}

function Button(){
  return(
    <div className='btn-link'>
      <a className="section sub-text" href="/contact">contact me</a>
      <a className="section sub-text" href="../../public/data/antonhany-cv.pdf" download> resume</a>
    </div>
  )
}

function Skills(){
  return(
    <div className='skill'>
      <p className="sub-text">my skils</p>
        <ul>
          <i class="fa-brands fa-html5" style={{color: '#dd4b24'}}></i>
          <i class="fa-brands fa-css3-alt" style={{color: '#254bdd'}}></i>
          <i class="fa-brands fa-sass" style={{color: '#c76494'}}></i>
          <i class="fa-brands fa-bootstrap" style={{color: '#8512f3'}}></i>
          <i class="fa-brands fa-js" style={{color: '#efd81d'}}></i>
          <i class="fa-brands fa-node-js" style={{color: '#4aaa4d'}}></i>
          <i class="fa-brands fa-react" style={{color: '#087a9f'}}></i>
          <i class="fa-solid fa-database" style={{color: '#aaaaaa'}}></i>
          <i class="fa-brands fa-git-alt" style={{color: '#e84e31'}}></i>
        </ul>
    </div>
  )
}

function HiSection(props){
  return(
    <div id='home' className="hi-section">
      <div className="container">
        <div className="text section">
          <Text name={props.name} titleJob={props.titleJob} />
          <Button />
          <Skills />
        </div>
        <div className='image section'>
          <img alt='section image' src={sectionImage}/>
        </div>
    </div>
    </div>
  )
}

export default HiSection;