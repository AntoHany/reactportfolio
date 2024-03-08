import { useState } from 'react';
import {wallPapers} from '../data/data';
import './Landing.css';

function Wallpaper(){

  const [index, setIndex] = useState(0);

  function handleCLick(){
    console.log(index)
    if (index != 11){
      setIndex(index + 1);
    }
  }

  function handleCLickBefore(){
    if (index != 0){
      setIndex(index - 1);
    }
  }

  let wallPaper = wallPapers[index];
  return(
    <div className='landing'>
      <button className='before-btn' onClick={handleCLickBefore}> &lt; </button>
      <button className='after-btn' onClick={handleCLick}> &gt; </button>
      <br />
      <img className='image'
        src={require(`../images/${wallPaper.url}.jpg`)}
        alt={wallPaper.alt}
      />
    </div>
  )
}
export default Wallpaper;