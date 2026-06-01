import { Play } from 'lucide-react';
import { Link } from 'react-router';

export default function VideoGalleryPage() {
  const videos = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=600&h=400&fit=crop&auto=format', title: 'Interior Painting Process', duration: '3:45' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&h=400&fit=crop&auto=format', title: 'Complete Home Transformation', duration: '5:20' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?w=600&h=400&fit=crop&auto=format', title: 'Exterior Painting Timelapse', duration: '4:15' },
    { id: 4, thumbnail: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&h=400&fit=crop&auto=format', title: 'Waterproofing Process', duration: '6:30' },
    { id: 5, thumbnail: 'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=600&h=400&fit=crop&auto=format', title: 'Wall Texture Application', duration: '4:50' },
    { id: 6, thumbnail: 'https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=600&h=400&fit=crop&auto=format', title: 'Our Quality Materials', duration: '2:30' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Video Gallery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Video Gallery</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Watch our skilled craftsmen at work and see the transformation process from start to finish.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group relative overflow-hidden rounded-2xl h-64 bg-muted cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                  <h3 className="font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-white/80 text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Impressed by Our Work?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Contact us today to start your painting project
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
