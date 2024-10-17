import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import headerImage from '../assets/images/hand_1.jpg';
import logo from '../assets/logos/the_nail_cubby_img.jpg';

function Home() {
    return (
        <section id="home" className="home flex flex-col text-center pb-20">
            <div className="relative">
                <img
                    src={headerImage}
                    alt="Nail Art"
                    className="w-full h-screen object-cover shadow-lg opacity-70"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <h1 className="lg:text-[96px] md:text-[80px] sm:text-[64px] text-[50px]">The Nail Cubby</h1>
                    <h2 className="mb-2 lg:text-[64px] md:text-[48px] sm:text-[32px] text-[24px]">Your beauty, our passion</h2>
                    <img className="max-h-[86px] lg:max-h-[120px] absolute bottom-4 right-4" src={logo} alt="The Nail Cubby Logo" />
                </div>

                {/* Bouncing Arrow */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white text-4xl">
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
            </div>
        </section>
    );
}

export default Home;

