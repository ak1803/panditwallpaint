import { Home, CheckCircle, Palette,  } from 'lucide-react';
import { Link } from 'react-router';

export default function HousePaintingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>House Painting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">House Painting Services</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Complete house painting services covering all interior and exterior surfaces for a full home transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Complete House Painting</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Transform your entire home with our comprehensive house painting services. We handle everything from interior rooms to exterior facades, delivering a cohesive, beautiful result throughout your property.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?w=800&h=600&fit=crop&auto=format" alt="Complete house painting" className="rounded-2xl shadow-2xl w-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Full Home Transformation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Complete interior and exterior painting for your entire property.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Room-by-Room Services</h4>
              <p className="text-muted-foreground leading-relaxed">
                Flexible options to paint individual rooms or your entire house.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Hassle-Free Management</h4>
              <p className="text-muted-foreground leading-relaxed">
                We handle all aspects of your painting project professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">Schedule your free consultation today</p>
          <Link to="/contact" className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
