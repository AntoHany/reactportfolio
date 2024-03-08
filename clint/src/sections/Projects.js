import { useEffect, useState } from 'react';
import SpecialHeading from '../component/SpecialHeading';
import Dots from '../component/Dots'
import './Projects.css'

function SearchBar(){
  return(
    <div id='searchBar' className='bar'>
      <span datatype='all' className='active'>all</span>
      <span datatype='landing' >landing page</span>
      <span datatype='portfolio'>portfolio</span>
      <span datatype='web-app'>web application</span>
    </div>
  )
}

function Card(){
  
  const [project, setProject] = useState([])
  useEffect(() => {
    async function projectFetch(){
      const response = await fetch('/get/projects');
      const data = await response.json(); 
      setProject(data);
    }
    projectFetch();
  }, [])

  const [projectType, setProjectType] = useState('all')
  let mySpans = document.querySelectorAll('#searchBar span')
  mySpans.forEach((ele)=>{
    // get active class after click
    document.addEventListener('click', function(e){
      if (e.target === ele){
        mySpans.forEach((eles) => {
        eles.classList.remove('active');
      })
        ele.classList.add('active');
        let type = ele.getAttribute('datatype');
        setProjectType(type);
      }
    })
  })

  if(projectType !== "all"){
    return (
    <div className='cards'>
      {project.map((item) => ( item.type === projectType ?
        <div key={item.id} className={`${item.type} section card`}>
          <div className='image'>
            <img src={item.image} alt='project image'/>
          </div>
          <h3 className='main-text'>{item.head}</h3>
          <p className='sub-text'>{item.subtext}</p>
          <a className='sub-text' href={item.link} target='_blank'>take a look</a>
        </div>
        : null
      ))}
    </div>
    );
  }
  return (
    <div className='cards'>
      {project.map((item) => (
        <div key={item.id} className={`${item.type} section card`}>
          <div className='image'>
            <img src={item.image} alt='project image'/>
          </div>
          <h3 className='main-text'>{item.head}</h3>
          <p className='sub-text'>{item.subtext}</p>
          <a className='sub-text' href={item.link} target='_blank'>take a look</a>
        </div>
      ))}
    </div>
  ); 
}

function Projects(){
	return(
		<div id='projects' className='projects section-space'>
      <Dots class={'dots-top'} />
      <Dots class={'dots-bottom'} />
			<SpecialHeading head='projects' subText="Don't be busy, be productive"/>
      <div className='container'>
        <SearchBar />
      </div>
        <Card />
		</div>
	)
}
export default Projects;