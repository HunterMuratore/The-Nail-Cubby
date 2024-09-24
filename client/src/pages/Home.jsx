import logo from '../assets/logos/the_nail_cubby.jpg'

function Home() {
    return (
        <section id="home" className="home flex flex-col text-center mt-5 py-20">
            <h1 className="mb-2 lg:text-[96px] md:text-[80px] sm:text-[64px] text-[50px]">The Nail Cubby</h1>

            <div className='mx-auto px-10 my-5'>
                <img src={logo} alt="The Nail Cubby Logo" />
            </div>
        </section>
    )
}

export default Home
