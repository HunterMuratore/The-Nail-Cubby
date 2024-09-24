import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logos/the_nail_cubby_img.jpg'

const links = [
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Reviews', to: '/reviews' },
    { name: 'Contact', to: '/contact' },
]

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeSticky = window.scrollY > 50
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
        <header className={`${isSticky ? 'sticky top-0 z-101' : 'absolute'} w-full`}>
            <nav className={`${(isSticky || isOpen) ? 'background' : 'background-transparent'} flex items-center justify-between py-1 pl-4 pr-4 text-sm sm:text-md lg:text-lg`}>
                <div className='logo'>
                    <NavLink to="/">
                        <img className="max-h-[52px] lg:max-h-[64px]" src={logo} alt="HMM Logo" />
                    </NavLink>
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
                    <div className="hidden lg:flex lg:items-center font-semibold my-4 text-sm sm:text-md lg:text-lg">
                        {links.map((link, i) => (
                            <NavLink key={i} to={link.to} className="ml-4">
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Navigation links dropdown menu for medium screens and below */}
            <nav className={`${isOpen ? 'flex flex-col dropdown-background' : 'hidden'} dropdown lg:hidden p-3`}>
                {links.map((link, i) => (
                    <NavLink key={i} to={link.to} className="ml-4">
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header
