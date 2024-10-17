function Reviews() {
    return (
        <section id="reviews" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">Customer Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="review bg-white p-6 shadow-lg rounded-lg">
                        <p className="text-gray-600">"Amazing experience, love my nails!"</p>
                        <h3 className="text-lg font-semibold mt-4">- Jane Doe</h3>
                    </div>
                    <div className="review bg-white p-6 shadow-lg rounded-lg">
                        <p className="text-gray-600">"Professional and friendly service."</p>
                        <h3 className="text-lg font-semibold mt-4">- Sarah Lee</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
