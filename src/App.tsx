import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Cover from "./Cover";
import Gallery from "./PreviousEvents";
import Navbar from "./Navbar";
import NextEvent from "./NextEvent";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";
import './SocialMedia.css'
import './Navbar.css'

function App() {
	return (
		<div>
			<div className='vh-100'>
				<Navbar id='mainNavbar' hrefs={[
					{ href: '#about-us', text: 'O NAS' },
					{ href: '#next-event', text: 'GALA' },
					{ href: '#gallery', text: 'GALERIA' },
					{ href: '#contact', text: 'KONTAKT' },
				]} />
				<Cover learnMoreHref="#social-media" />
				<div className='container'>
					<SocialMedia id='social-media' />
					<AboutUs id='about-us' className='' />
					<NextEvent id='next-event' />
					<Gallery id='gallery' />
					<hr />
					<Contact id='contact' />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
