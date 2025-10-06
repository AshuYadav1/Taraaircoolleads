import { useState } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function VideoGallery() {
  const { trackEvent } = useAnalytics();
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: "ac-repair-demo",
      title: "AC Repair Process - Split AC Gas Filling",
      thumbnail: "/Ac Emergency Gas filling.jpg", 
      videoUrl: "https://www.youtube.com/embed/YpnQUqJLeVA",
      description: "Watch our certified technician demonstrate AC gas filling and leak detection process",
      duration: "3:45"
    },
    {
      id: "ac-installation-timelapse",
      title: "Split AC Installation - Complete Process",
      thumbnail: "/Ac Installation.jpg",
      videoUrl: "https://www.youtube.com/embed/9bKXffBC7uU",
      description: "Complete AC installation from wall mounting to final testing in Dahisar home",
      duration: "8:20"
    },
    {
      id: "customer-testimonial",
      title: "Happy Customer Review - Borivali",
      thumbnail: "/home.jpg",
      videoUrl: "https://www.youtube.com/embed/8_3-2_7b4wU",
      description: "Real customer from Borivali shares experience with our AC repair service",
      duration: "2:15"
    }
  ];

  const handleVideoClick = (index: number) => {
    setActiveVideo(index);
    trackEvent("video_gallery_click", `/video-${videos[index].id}`);
  };

  const handleVideoPlay = (videoId: string) => {
    trackEvent("video_play", `/video-${videoId}`);
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See Our AC Service Work in Action</h2>
          <p className="text-gray-300 text-lg">
            Real videos from actual AC repair and installation jobs in Mumbai
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="relative bg-black rounded-xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={videos[activeVideo].videoUrl}
                  title={videos[activeVideo].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => handleVideoPlay(videos[activeVideo].id)}
                ></iframe>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold mb-2">{videos[activeVideo].title}</h3>
                <p className="text-gray-300 text-sm">{videos[activeVideo].description}</p>
              </div>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">More AC Service Videos</h3>
            {videos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => handleVideoClick(index)}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                  activeVideo === index ? 'ring-2 ring-accent-orange' : 'hover:scale-105'
                }`}
                data-testid={`video-thumbnail-${index}`}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-24 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/70 text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-3 bg-gray-800">
                  <h4 className="font-medium text-sm line-clamp-2">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-accent-orange rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready for Professional AC Service?</h3>
            <p className="mb-6">Get the same quality work shown in these videos for your home</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919702525317"
                className="bg-white text-accent-orange font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                data-testid="video-cta-call"
                onClick={() => trackEvent("video_section_call", "/")}
              >
                📞 Call for Video Consultation
              </a>
              <a
                href="https://wa.me/919702525317?text=Hi%20I%20saw%20your%20AC%20service%20videos.%20I%20need%20AC%20service%20in%20Mumbai"
                className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors"
                data-testid="video-cta-whatsapp"
                onClick={() => trackEvent("video_section_whatsapp", "/")}
              >
                💬 WhatsApp for Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}