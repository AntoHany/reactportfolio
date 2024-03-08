import './SpecialHeading.css';

function SpecialHeading(prop){
  return(
    <div className='special-head'>
      <h3 className='main-text'>{prop.head}</h3>
      <p className='sub-text'>{prop.subText}</p>
    </div>
  )
}
export default SpecialHeading;