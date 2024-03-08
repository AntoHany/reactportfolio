import {List} from '../component/Header';
import './Footer.css'

function InTouch(){
	return(
		<div className='in-touch'>
      <p className='main-text'>get in touch:</p>
      <ul>
        <a target='_blank' href='https://www.facebook.com/profile.php?id=100089073655696' style={{color: "#0866ff"}}><i class="fa-brands fa-facebook"></i></a>
        <a target='_blank' href='https://www.instagram.com/anton_hany111' style={{color: "#fc1b6f"}}><i class="fa-brands fa-instagram"></i></a>
        <a target='_blank' href='https://t.me/anton_hany' style={{color: "#259fd7"}}><i class="fa-brands fa-telegram"></i></a>
        <a target='_blank' href='https://www.linkedin.com/in/anton-hany-96903918a/' style={{color: "#0a66c2"}}><i class="fa-brands fa-linkedin"></i></a>
        <a target='_blank' href='https://github.com/AntoHany' className='sub-text'><i class="fa-brands fa-github"></i></a>
        <a target='_blank' href='mailto:antonhany67@gmail.com' style={{color: "#c32320"}}><i class="fa-solid fa-envelope"></i></a>
      </ul>
	  </div>
	)
}

function Text(prop){
  let date = new Date();
  return(
    <p className=' text'>&#128150; {prop.text} at {date.getFullYear()-1} / {date.getFullYear()} &#128150;</p>
  )
}

function Footer(prop){
  let text = prop.text
  return(
    <footer>
      <div>
        <InTouch />
        <List links={['home', ' about', ' projects', ' contact']}/>
        <Text text={text}/>
      </div>
    </footer>
  )
}
export default Footer;
