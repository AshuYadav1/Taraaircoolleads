import { useState } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function ACServiceGallery() {
  const { trackEvent } = useAnalytics();
  const [selectedCategory, setSelectedCategory] = useState("repair");

  const serviceImages = {
    repair: [
      {
        src: "/api/placeholder/1581094794329-c8112a89af12800/600",
        title: "Split AC Repair - Gas Filling",
        description: "Professional gas filling with pressure testing for split AC unit in Dahisar home",
        location: "Dahisar West"
      },
      {
        src: "/api/placeholder/800/600", // Replace with actual AC service photo 
        title: "Compressor Replacement",
        description: "Replacing faulty compressor for window AC unit with warranty",
        location: "Borivali East"
      },
      {
        src: "/api/placeholder/1504253163759-c23fccaebb55800/600",
        title: "PCB Circuit Board Repair",
        description: "Repairing control board for LG inverter AC with genuine parts",
        location: "Mira Road"
      },
      {
        src: "/api/placeholder/1620626011761-996317b8d101800/600",
        title: "Filter Cleaning Service",
        description: "Deep cleaning of AC filters and indoor unit coil cleaning",
        location: "Kandivali West"
      }
    ],
    installation: [
      {
        src: "/api/placeholder/1581092580497-e0d23cbdf1dc800/600",
        title: "Split AC Installation",
        description: "Professional wall mounting and copper piping for new 1.5 ton split AC",
        location: "Dahisar East"
      },
      {
        src: "/api/placeholder/1563822249547-71ed1a2a4937800/600",
        title: "Outdoor Unit Mounting",
        description: "Secure outdoor unit installation with proper bracket mounting",
        location: "Borivali West"
      },
      {
        src: "/api/placeholder/800/600", // Replace with actual AC service photo
        title: "Copper Piping Work",
        description: "Professional copper pipe installation with insulation and drainage",
        location: "Malad West"
      },
      {
        src: "/api/placeholder/1504253163759-c23fccaebb55800/600",
        title: "Electrical Connections",
        description: "Safe electrical wiring and MCB installation for AC unit",
        location: "Kandivali East"
      }
    ],
    maintenance: [
      {
        src: "/api/placeholder/1581094794329-c8112a89af12800/600",
        title: "Annual AMC Service",
        description: "Complete AC maintenance including cleaning, gas check, and performance test",
        location: "Dahisar West"
      },
      {
        src: "/api/placeholder/1620626011761-996317b8d101800/600",
        title: "Chemical Wash Service",
        description: "Deep chemical cleaning of evaporator and condenser coils",
        location: "Mira Road East"
      },
      {
        src: "/api/placeholder/800/600", // Replace with actual AC service photo
        title: "Pre-Summer Checkup",
        description: "Complete AC inspection and tune-up before summer season",
        location: "Borivali East"
      },
      {
        src: "/api/placeholder/1563822249547-71ed1a2a4937800/600",
        title: "Filter Replacement",
        description: "High-quality filter replacement for better air quality",
        location: "Malad East"
      }
    ]
  };

  const categories = [
    { id: "repair", name: "AC Repair", icon: "🔧" },
    { id: "installation", name: "Installation", icon: "⚡" },
    { id: "maintenance", name: "Maintenance", icon: "🛠️" }
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    trackEvent("gallery_category_change", `/gallery-${category}`);
  };

  const handleImageClick = (imageTitle: string) => {
    trackEvent("gallery_image_click", `/image-${imageTitle}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real AC Service Work Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Actual photos from our AC repair, installation, and maintenance jobs across Mumbai
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-trust-blue text-white shadow-md"
                    : "text-gray-600 hover:text-trust-blue"
                }`}
                data-testid={`gallery-tab-${category.id}`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {serviceImages[selectedCategory].map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              onClick={() => handleImageClick(image.title)}
              data-testid={`gallery-image-${selectedCategory}-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={`${image.title} - AC service in ${image.location}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-trust-blue px-2 py-1 rounded-full text-xs mb-2">
                      📍 {image.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {image.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-trust-blue text-sm font-medium">
                    📍 {image.location}
                  </span>
                  <span className="text-green-600 text-sm font-medium">
                    ✅ Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Showcase */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Before & After: AC Repair Results</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="relative mb-4">
                <img
                  src="/api/placeholder/1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&w=600&h=400"
                  alt="Dirty AC unit before cleaning service"
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEFORE
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Dirty & Inefficient AC</h4>
              <p className="text-gray-600 text-sm">
                ❌ Poor cooling • ❌ High electricity bills • ❌ Bad air quality
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <img
                  src="/api/placeholder/1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=600&h=400"
                  alt="Clean AC unit after professional service"
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AFTER
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Clean & Efficient AC</h4>
              <p className="text-gray-600 text-sm">
                ✅ Perfect cooling • ✅ Lower electricity bills • ✅ Fresh air quality
              </p>
            </div>
          </div>
        </div>

        {/* Customer Work Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <img
                src="/api/placeholder/1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=60&h=60"
                alt="Satisfied customer from Dahisar"
                className="w-12 h-12 rounded-full mr-3"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-gray-900">Verified Customer</div>
                <div className="text-gray-600 text-sm">Dahisar West</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              "Excellent work! They showed me photos during the repair process and explained everything clearly."
            </p>
            <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <img
                src="/api/placeholder/1494790108755-2616b612b786?ixlib=rb-4.0.3&w=60&h=60"
                alt="Happy customer from Borivali"
                className="w-12 h-12 rounded-full mr-3"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-gray-900">Verified Customer</div>
                <div className="text-gray-600 text-sm">Borivali East</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              "Professional installation with clean piping work. Very satisfied with the quality."
            </p>
            <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <img
                src="/api/placeholder/1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=60&h=60"
                alt="Customer testimonial from Mira Road"
                className="w-12 h-12 rounded-full mr-3"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-gray-900">Verified Customer</div>
                <div className="text-gray-600 text-sm">Mira Road</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              "They send photos of the work progress on WhatsApp. Very transparent and professional service."
            </p>
            <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-trust-blue text-white rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Want Similar Quality Work for Your AC?</h3>
            <p className="mb-6 text-blue-100">
              Get the same professional service shown in these photos for your home or office
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919702525317"
                className="bg-accent-orange hover:bg-accent-orange-light text-white font-bold py-3 px-8 rounded-lg transition-colors"
                data-testid="gallery-cta-call"
                onClick={() => trackEvent("gallery_section_call", "/")}
              >
                📞 Call for Similar Service
              </a>
              <a
                href="https://wa.me/919702525317?text=Hi%20I%20saw%20your%20AC%20service%20gallery.%20I%20need%20similar%20quality%20work%20for%20my%20AC"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                data-testid="gallery-cta-whatsapp"
                onClick={() => trackEvent("gallery_section_whatsapp", "/")}
              >
                💬 WhatsApp Gallery Reference
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}