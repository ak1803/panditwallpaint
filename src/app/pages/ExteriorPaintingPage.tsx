import { Home, CheckCircle, Award, Shield } from 'lucide-react';
import { Link } from 'react-router';

export default function ExteriorPaintingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Exterior Painting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Exterior Painting Services</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Protect and beautify your property with weather-resistant exterior painting solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Professional Exterior Painting</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Your home's exterior is its first impression. Our expert exterior painting services not only enhance curb appeal but also protect your property from weather damage with premium quality, long-lasting finishes.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                We use specialized weather-resistant paints and advanced application techniques to ensure your exterior looks beautiful and stays protected for years to come.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&h=600&fit=crop&auto=format"
                alt="Exterior house painting"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">What We Offer</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Home className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Complete Exterior Painting</h4>
                <p className="text-muted-foreground leading-relaxed">
                  House facades, walls, trim, and all exterior surfaces painted with weather-resistant materials.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Weather Protection</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced coatings that protect against rain, sun, humidity and temperature changes.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Long-lasting Finish</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Premium quality exterior paints designed to withstand harsh weather conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">Why Choose Our Exterior Painting Service?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Weather-Resistant Materials</h4>
                  <p className="text-muted-foreground">Specially formulated paints for exterior durability</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Expert Craftsmen</h4>
                  <p className="text-muted-foreground">Asian Paints certified professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Home's Exterior?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">Get a free consultation and quote today!</p>
          <Link to="/contact" className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
