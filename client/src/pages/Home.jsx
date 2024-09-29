import { useState } from 'react';
import logo from '../assets/logos/the_nail_cubby.jpg';

function Home() {
    const [theme, setTheme] = useState('');

    const switchTheme = (newTheme) => {
        setTheme(newTheme);
        document.body.className = newTheme; // Change body class based on the selected theme
    };

    return (
        <section id="home" className="home flex flex-col text-center mt-5 py-20">
            <h1 className="mb-2 lg:text-[96px] md:text-[80px] sm:text-[64px] text-[48px]">The Nail Cubby</h1>

            <div className='mx-auto px-10 my-5'>
                <img src={logo} alt="The Nail Cubby Logo" />
            </div>

            {/* Theme Switcher Buttons */}
            <div className="theme-switcher mx-auto grid md:grid-cols-4 grid-cols-2 gap-4 justify-center items-center font-bold my-5">
                <button className="theme-1" onClick={() => switchTheme('theme-1')}>
                    Theme 1
                </button>
                <button className="theme-2" onClick={() => switchTheme('theme-2')}>
                    Theme 2
                </button>
                <button className="theme-3" onClick={() => switchTheme('theme-3')}>
                    Theme 3
                </button>
                <button className="theme-4" onClick={() => switchTheme('theme-4')}>
                    Theme 4
                </button>
                <button className="theme-5" onClick={() => switchTheme('theme-5')}>
                    Theme 5
                </button>
                <button className="theme-6" onClick={() => switchTheme('theme-6')}>
                    Theme 6
                </button>
                <button className="theme-7" onClick={() => switchTheme('theme-7')}>
                    Theme 7
                </button>
                <button className="theme-8" onClick={() => switchTheme('theme-8')}>
                    Theme 8
                </button>
                <button className="theme-9" onClick={() => switchTheme('theme-9')}>
                    Theme 9
                </button>
                <button className="theme-10" onClick={() => switchTheme('theme-10')}>
                    Theme 10
                </button>
                <button className="theme-11" onClick={() => switchTheme('theme-11')}>
                    Theme 11
                </button>
                <button className="theme-12" onClick={() => switchTheme('theme-12')}>
                    Theme 12
                </button>
            </div>
        </section>
    );
}

export default Home;
