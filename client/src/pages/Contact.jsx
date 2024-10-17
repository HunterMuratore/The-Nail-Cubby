import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-8">
                    <a
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link text-4xl"
                    >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a
                        href="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link text-4xl"
                    >
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link text-4xl"
                    >
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a
                        href="mailto:youremail@example.com?subject=The Nail Cubby Inquiry"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link text-4xl"
                    >
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </div>

                <p className="mt-6 text-lg">We’d love to hear from you! Reach out to us through social media or email us directly.</p>
            </div>
        </section>
    );
}

export default Contact;
