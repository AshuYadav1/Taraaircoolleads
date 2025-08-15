const reviews = [
  {
    rating: 5,
    text: "Excellent service! AC was not cooling properly. Tara AC team came the same day and fixed it in 30 minutes. Very reasonable pricing and professional work.",
    name: "Rajesh Sharma",
    location: "Dahisar West",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    rating: 5,
    text: "Got my new AC installed by Tara team. Clean installation, proper pipe work. They also explained how to use it properly. Highly recommended!",
    name: "Priya Patel",
    location: "Borivali East",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    rating: 5,
    text: "Amazing service during monsoon season. AC was making noise and not cooling. Fixed within 2 hours of calling. Fair pricing and quality work.",
    name: "Amit Kumar",
    location: "Mira Road",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Real reviews from real customers in Mumbai</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6" data-testid={`review-${index}`}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">Google Review</span>
              </div>
              <p className="text-gray-700 mb-4">"{review.text}"</p>
              <div className="flex items-center">
                <img 
                  src={review.image} 
                  alt={`Satisfied customer from ${review.location}`}
                  className="w-10 h-10 rounded-full mr-3"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-sm" data-testid={`reviewer-name-${index}`}>
                    {review.name}
                  </div>
                  <div className="text-xs text-gray-600">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
