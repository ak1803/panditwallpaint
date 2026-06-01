import { Link } from 'react-router';

export default function PhotoGalleryPage() {
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=600&h=600&fit=crop&auto=format', title: 'Modern Residential Interior', category: 'Interior Painting' },
    { id: 2, url: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&h=600&fit=crop&auto=format', title: 'Luxury Living Space', category: 'Interior Painting' },
    { id: 3, url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&h=600&fit=crop&auto=format', title: 'Contemporary Home', category: 'House Painting' },
    { id: 4, url: 'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=600&h=600&fit=crop&auto=format', title: 'Elegant Living Room', category: 'Wall Painting' },
    { id: 5, url: 'https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=600&h=600&fit=crop&auto=format', title: 'Quality Materials', category: 'Our Process' },
    { id: 6, url: 'https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?w=600&h=600&fit=crop&auto=format', title: 'Complete Home Makeover', category: 'Exterior Painting' },
    { id: 7, url: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=600&h=400&fit=crop&auto=format', title: 'Professional Interior Work', category: 'Interior Painting' },
    { id: 8, url: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&h=400&fit=crop&auto=format', title: 'Modern Design', category: 'Interior Painting' },
    { id: 9, url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&h=400&fit=crop&auto=format', title: 'Cozy Living Space', category: 'House Painting' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Photo Gallery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Photo Gallery</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Explore our completed projects and see the quality of our work. All projects of Pandit Painting Services have achieved milestones.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-2xl h-80 bg-muted">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="font-bold text-xl text-white mb-1">{photo.title}</h3>
                    <p className="text-white/80 text-sm">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let us transform your space like we did for these clients
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
