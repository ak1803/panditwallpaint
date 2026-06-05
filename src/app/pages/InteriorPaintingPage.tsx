import { Home, CheckCircle, Award, Palette } from 'lucide-react';
import { Link } from 'react-router';

export default function InteriorPaintingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Interior Painting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Interior Painting Services</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Transform your indoor spaces with our professional interior painting services using premium quality materials and expert craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Professional Interior Painting</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Our interior painting services are designed to breathe new life into your home or office. We use only the finest quality paints and materials to ensure a beautiful, long-lasting finish that you'll love for years to come.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Our team of certified painters from Asian Paint academy brings expertise and attention to detail to every project, ensuring flawless results that exceed your expectations.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=800&h=600&fit=crop&auto=format"
                alt="Professional interior painting"
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
                <h4 className="text-xl font-bold text-primary mb-4">Complete Room Painting</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Walls, ceilings, trim, and all interior surfaces painted to perfection with your choice of colors and finishes.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Palette className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Color Consultation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Expert guidance in selecting the perfect color palette that complements your space and personal style.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Premium Quality Materials</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We use only the best quality paints and materials from trusted brands for durable, beautiful results.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">Why Choose Our Interior Painting Service?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Asian Paints Certified Professionals</h4>
                  <p className="text-muted-foreground">Our painters are trained and certified by Asian Paint academy</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Hassle-Free Process</h4>
                  <p className="text-muted-foreground">From consultation to completion, we handle everything</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Clean & Professional Work</h4>
                  <p className="text-muted-foreground">We protect your furniture and clean up thoroughly after each day</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">100% Customer Satisfaction</h4>
                  <p className="text-muted-foreground">All our projects have achieved milestones in customer satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Interior?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Schedule a free consultation today and let our experts help you create the perfect space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:7745871308"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-colors"
            >
              Call: +91 7745871308
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
