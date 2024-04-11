import './ContactPage.scss';
import Banner from '../../components/Banner/Banner';
import ContactForm from '../../components/ContactForm/ContactForm';

function ContactPage () {
  return(
    <main>
      <Banner title='CONTACT US'/>
      <div className='topText'>
        Having some troubles or want to know more? Send us a message!
      </div>
      <div className='contactForm'>
        <ContactForm/>
      </div>
    </main>
  )
}

export default ContactPage;
