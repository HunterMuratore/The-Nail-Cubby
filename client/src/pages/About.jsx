import sorya_headshot from '../assets/images/hand_3.jpg'

function About() {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* About Us Section */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8">About Us</h2>
                    <p className="lg:text-2xl md:text-xl text-lg max-w-2xl mx-auto">At The Nail Cubby, we believe in delivering a luxurious experience that makes every customer feel special. This is a placeholder, add a more detailed description of your shop and what a customer can expect when they come in for a service.</p>
                </div>

                {/* Meet Sorya Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-14">
                    <div className="text-start">
                        <h2 className="text-4xl font-bold mb-4">Meet Sorya</h2>
                        <p className="lg:text-2xl md:text-xl text-lg max-w-2xl">Add short biography here. Include why you're passionate about The Nail Cubby and maybe a history of your professional career as well as hobbies so people can learn a little about you. -- Add your headshot here --</p>
                    </div>

                    {/* Image of Sorya */}
                    <div className="flex justify-center">
                        <img
                            src={sorya_headshot} 
                            alt="Sorya"
                            className="w-64 h-64 object-cover rounded-full border-4 border-gray-300 shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
