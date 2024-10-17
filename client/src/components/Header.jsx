import { useState, useEffect } from 'react'

import logo from '../assets/logos/the_nail_cubby_img.jpg'

const links = [
    { name: 'About', to: '#about' },
    { name: 'Services', to: '#services' },
    { name: 'Reviews', to: '#reviews' },
]

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeSticky = window.scrollY > 0
            setIsSticky(shouldBeSticky)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
         <header className={`${isSticky ? 'sticky top-0 z-50 opacity-100' : 'absolute opacity-0'} w-full py-1`}>
            <nav className={`${(isSticky || isOpen) ? 'background' : 'background-transparent'} flex items-center justify-between py-1 pl-4 pr-4 text-sm sm:text-md lg:text-lg`}>
                <div className='logo'>
                    <a href="#">
                        <img className="max-h-[52px] lg:max-h-[64px]" src={logo} alt="The Nail Cubby Logo" />
                    </a>
                </div>
                <div>
                    {/* Hamburger menu icon for medium screens and below */}
                    <div className="lg:hidden py-3">
                        <button onClick={toggleMenu}>
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6 transition-transform duration-500 transform rotate-90"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6 transition-transform duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navigation links for large screens and above */}
                    <div className="hidden lg:flex lg:items-center font-semibold my-4 text-sm sm:text-md lg:text-xl">
                        {links.map((link, i) => (
                            <a key={i} href={link.to} className="ml-4">
                            {link.name}
                        </a>
                        ))}
                        <a href="https://book.squareup.com/appointments/bxdvedvw9r8mmg/location/LD7J0PN0TJV3Y/services?buttonTextColor=ffffff&color=274b3a&locale=en&referrer=so" target="_blank" rel="noopener noreferrer" className='ml-4'>Book Now <i className="fas fa-arrow-up-right-from-square ml-1"></i></a>
                    </div>
                </div>
            </nav>

            {/* Navigation links dropdown menu for medium screens and below */}
            <nav className={`${isOpen ? 'flex flex-col dropdown-background' : 'hidden'} dropdown lg:hidden p-3`}>
                {links.map((link, i) => (
                    <a key={i} href={link.to} className="ml-4">
                    {link.name}
                </a>
                ))}
                <a href="https://book.squareup.com/appointments/bxdvedvw9r8mmg/location/LD7J0PN0TJV3Y/services?buttonTextColor=ffffff&color=274b3a&locale=en&referrer=so" target="_blank" rel="noopener noreferrer" className='ml-4'>Book Now <i className="fas fa-arrow-up-right-from-square ml-1"></i></a>
            </nav>
        </header>
    )
}

export default Header
