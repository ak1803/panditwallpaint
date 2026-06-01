import { Sparkles, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router';

export default function WallPaintingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Wall Painting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Wall Painting Services</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Specialized wall painting with textures, finishes, and decorative options to match your unique style.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Expert Wall Painting</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Transform your walls into stunning focal points with our specialized wall painting services. From smooth matte finishes to textured decorative patterns, we offer a wide range of options to suit your aesthetic preferences.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?w=800&h=600&fit=crop&auto=format" alt="Wall painting" className="rounded-2xl shadow-2xl w-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Textured Finishes</h4>
              <p className="text-muted-foreground leading-relaxed">
                Create depth and visual interest with professional textured wall finishes.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Decorative Patterns</h4>
              <p className="text-muted-foreground leading-relaxed">
                Unique decorative patterns and designs to personalize your space.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Premium Quality</h4>
              <p className="text-muted-foreground leading-relaxed">
                Best quality paints and materials for lasting beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Walls Today</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">Contact us for a free consultation</p>
          <Link to="/contact" className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
