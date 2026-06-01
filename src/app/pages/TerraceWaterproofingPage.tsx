import { Shield, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router';

export default function TerraceWaterproofingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Terrace Waterproofing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Terrace Waterproofing Services</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Expert terrace waterproofing to prevent leaks and extend the life of your property.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Professional Terrace Waterproofing</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Protect your home from terrace leaks and water damage with our specialized waterproofing solutions. We use advanced materials and proven techniques to create a long-lasting barrier against water infiltration.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=800&h=600&fit=crop&auto=format" alt="Terrace waterproofing" className="rounded-2xl shadow-2xl w-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Advanced Materials</h4>
              <p className="text-muted-foreground leading-relaxed">
                Premium waterproofing compounds and membranes for maximum protection.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Crack Repair & Sealing</h4>
              <p className="text-muted-foreground leading-relaxed">
                Complete crack treatment and sealing before waterproofing application.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Long-term Protection</h4>
              <p className="text-muted-foreground leading-relaxed">
                Durable solutions that protect your property for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Terrace Today</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">Get expert waterproofing solutions</p>
          <Link to="/contact" className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
