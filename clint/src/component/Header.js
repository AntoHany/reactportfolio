import { useState } from "react";
import './Header.css'


// create logo componant return logo take prop from app.js 
export function Logo(prop){
  return <h2><a className="main-text" href="/">{prop.text}</a></h2>
}

export function List(prop){
  let linkArray = prop.links;
  let lis = linkArray.map(link => <a className="sub-text" href={"#"+link.trim()}>{link}</a>);
  return(
    <>
      <ul className="links">{lis}</ul>
    </>
  )
}

// create links componant return (link, github link, dark mode btn) take prop from app.js 
function AllList(prop){
  
  // CHECK IF  USER HAVE MODE IN LOCAL STORAGE
  function checkMode(){
    if (window.localStorage.getItem('mode') == 'light') {
      return false;
    } else if (window.localStorage.getItem('mode') == 'dark'){
      return true;
    }else{
      window.localStorage.setItem('mode', 'light');
      return false;
    }
  }

  const [isDark, setIsDark] = useState(checkMode);

  function handleModeClick(){
    setIsDark(()=>{
      isDark? window.localStorage.setItem('mode', 'light'): window.localStorage.setItem('mode', 'dark')
      return !isDark;
    });
  }

  isDark ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
  
  let gitHub = prop.gitHub;
  let linkArray = prop.links;

  function handeleClickBruBtn(){
    document.getElementById('burBtn').classList.toggle('click');
    let myUlLink = document.querySelector('header .link ul')
    myUlLink.style.display == "block" ? myUlLink.style.display = "none" : myUlLink.style.display = "block";
  }


  return (
    <div className="link">
      <span className="sub-text mode" onClick={handleModeClick}>
        {isDark == true ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
      </span>

      <List links={linkArray}/>

      <a className="git-hub sub-text" href={gitHub} target="_blank"><i class="fa-brands fa-github"></i></a>
    
      <div onClick={handeleClickBruBtn} id="burBtn" className="burg-btn">
        <span className="icon"></span>
        <span className="icon"></span>
        <span className="icon"></span>
      </div>
    </div>
  )
}

function Header(props){
  let logoText = props.logo;
  let links = props.links;
  let gitHubLink = props.gitHub
  return(
    <header> 
      <div className="container">
        <Logo text={logoText} />
        <AllList links={links} gitHub={gitHubLink} />
      </div>
    </header>
  )
} 

export default Header;