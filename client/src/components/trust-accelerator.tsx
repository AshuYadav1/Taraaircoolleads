export default function TrustAccelerator() {
  return (
    <section className="bg-white py-6 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex text-yellow-400">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="text-sm">
              <div className="font-semibold" data-testid="google-rating">4.8 Google Rating</div>
              <div className="text-gray-600">200+ Reviews</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <div className="bg-green-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="text-sm">
              <div className="font-semibold">Licensed Technicians</div>
              <div className="text-gray-600">Trained Professionals</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <div className="text-sm">
              <div className="font-semibold">Warranty Included</div>
              <div className="text-gray-600">On All Repairs</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="text-sm">
              <div className="font-semibold">Same-Day Service</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
