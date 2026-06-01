import { Shield, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router';

export default function WaterproofPaintingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Waterproof Painting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Waterproof Painting Services</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Advanced waterproofing solutions to protect your property from moisture damage and leakage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Professional Waterproofing</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Protect your property from water damage with our advanced waterproofing solutions. We use the latest technology and premium materials to ensure complete protection against moisture, leaks, and seepage.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=600&fit=crop&auto=format" alt="Waterproof painting" className="rounded-2xl shadow-2xl w-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Complete Protection</h4>
              <p className="text-muted-foreground leading-relaxed">
                Advanced waterproofing for terraces, bathrooms, and all vulnerable areas.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Premium Materials</h4>
              <p className="text-muted-foreground leading-relaxed">
                High-quality waterproofing compounds and sealants.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Long-term Solution</h4>
              <p className="text-muted-foreground leading-relaxed">
                Durable protection that lasts for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Property Today</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">Get expert waterproofing solutions</p>
          <Link to="/contact" className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
