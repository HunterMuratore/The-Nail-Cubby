import hand_1 from '../assets/images/hand_1.jpg'
import hand_2 from '../assets/images/hand_2.jpg'
import hand_3 from '../assets/images/hand_3.jpg'
import abstract_nails from '../assets/images/abstract_nails.jpg'
import flower_nails from '../assets/images/flower_nails.jpg'
import halloween_nails from '../assets/images/halloween_nails.jpg'

function Services() {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">Our Services</h2>

                {/* Service Cards with Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="service bg-white p-6 shadow-lg rounded-lg">
                        <img
                            src={hand_2}
                            alt="Manicure Example"
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-4">Service 1</h3>
                        <p className="text-gray-600">This is a short description of Service 1.</p>
                    </div>
                    
                    <div className="service bg-white p-6 shadow-lg rounded-lg">
                        <img
                            src={abstract_nails}
                            alt="Pedicure Example"
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-4">Service 2</h3>
                        <p className="text-gray-600">This is a short description of Service 2.</p>
                    </div>

                    <div className="service bg-white p-6 shadow-lg rounded-lg">
                        <img
                            src={halloween_nails}
                            alt="Nail Art Example"
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-4">Service 3</h3>
                        <p className="text-gray-600">This is a short description of Service 3.</p>
                    </div>
                </div>

                {/* Book Now Button */}
                <div className="mt-16">
                    <a
                        href="https://book.squareup.com/appointments/bxdvedvw9r8mmg/location/LD7J0PN0TJV3Y/services?buttonTextColor=ffffff&color=274b3a&locale=en&referrer=so"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-btn font-bold"
                    >
                        Book Now!
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;

