import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SpecialHeading from '../component/SpecialHeading';
import contactImg from '../images/contactus.jpg'
import './Contact.css'


function Contact(){

	const form = useRef();

	function handleSubmit(e){
		e.preventDefault();
		
		emailjs.sendForm('service_qrhqit6', 'template_zfg541m', form.current, {
        publicKey: '_jtz3uo5BGhaOSSgy',
      })
      .then(
        () => {
			document.getElementById('uName').value = '';
			document.getElementById('email').value = '';
			document.getElementById('message').value = '';
        	console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
		
	}
return(
	<div id='contact' className='contact section section-space'>
		<SpecialHeading head='contact us' subText="How can i help you?"/>
		<div class="box-wave">
  			<div class="box-inner"></div>
		</div>
		<div className='container'>
			
			<div className='image'>
				<img alt='contact image' src={contactImg} />
			</div>

			<form ref={form} onSubmit={handleSubmit}>
				
				<input id='uName' type='text' name='fromName' className='input' placeholder='name' required />
				
				<input id='email' type='email' name='emailId' className='input' placeholder='email' required />
				
				<textarea id='message' name='message' className='input' placeholder='type your message' required />
				
				<button type='submit' className='section sub-text' >send</button>
			</form>
		</div>
	</div>
)
}
export default Contact;