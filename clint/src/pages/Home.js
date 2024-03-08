import Header from '../component/Header';
import HiSection from '../sections/HiSection';
import About from '../sections/About';
import Qute from '../sections/Qute';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../component/Footer';

function Home() {
  return (
    <>
      <Header logo='antonhany' links={['home', ' about', ' projects', ' contact']} gitHub={'https://github.com/AntoHany'}/>
      <HiSection name='anton' titleJob='frontend developer' /> 
      <About /> 
      <Qute />
      <Projects />
      <Contact />
      <Footer text={'made by anton hany'}/>
    </>
  );
}
export default Home;
