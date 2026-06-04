import { Calendar, Eye, Palette, Award, Users, Shield, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white z-10">
            <p className="text-lg md:text-xl mb-4 text-accent font-semibold">Welcome to Guru Painting Services</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              India's Trusted Painting Services
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90 leading-relaxed">
              Looking for the best painters?
            </p>
            <p className="text-lg mb-4 text-white/80 leading-relaxed">
              Guru Painting Services is a one stop destination offering you end to end solution to design and create spaces you can cherish.
            </p>
            <p className="text-lg mb-8 text-white/80 leading-relaxed">
              A startup assuring you hassle free deals with best quality material and Skillful Craftsman to make your home into heaven.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('contact')} className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Ready to Start Your Project!
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-colors">
                How It Works
              </button>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=600&h=400&fit=crop&auto=format" alt="Professional interior painting" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=600&h=300&fit=crop&auto=format" alt="Quality painting materials" className="rounded-2xl shadow-2xl w-full h-48 object-cover" />
            </div>
            <div className="space-y-4 mt-12">
              <img src="https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=600&h=300&fit=crop&auto=format" alt="Modern living room design" className="rounded-2xl shadow-2xl w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&h=400&fit=crop&auto=format" alt="Beautiful interior transformation" className="rounded-2xl shadow-2xl w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple three-step process to transform your space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="bg-accent/5 rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-background">
                <span className="font-bold text-lg text-accent">1</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Plan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Schedule a free onsite consultation by giving us a call
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <div className="bg-accent/5 rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-background">
                <span className="font-bold text-lg text-accent">2</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Preview</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get personalized design & color assistance to your living space
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <div className="bg-accent/5 rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-background">
                <span className="font-bold text-lg text-accent">3</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Paint</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch our expert painters beautifully transform your space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Guru Painting Services is a one stop destination offering you end to end solution to design and create spaces you can cherish. A startup assuring you hassle free deals with best quality material and Skillful Craftsman to make your home into heaven.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Our painters are certified from Asian Paint academy - top rated, local house painters with 100% accountability. We are committed to delivering excellence in every project.
              </p>

              <div className="bg-primary text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Why Do We Do It?</h3>
                <p className="leading-relaxed text-white/90">
                  Our mission is to simplify the process of finding trusted painting contractors. We eliminate the hassle of endless searches, negotiations, and compromises that come with traditional painting services.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Who We Are?</h3>
                <p className="text-foreground leading-relaxed">
                  We are a team of engineers and problem solvers dedicated to transforming the home painting industry. Our vision is to streamline processes and empower skilled painters with technology and support.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?w=800&h=600&fit=crop&auto=format"
                  alt="Modern living room interior transformation"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Best Quality Material</h4>
                  <p className="text-sm text-muted-foreground">Premium paints and supplies</p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Certified Craftsmen</h4>
                  <p className="text-sm text-muted-foreground">Asian Paints trained professionals</p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">100% Accountability</h4>
                  <p className="text-sm text-muted-foreground">Trusted local painters</p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Customer Satisfaction</h4>
                  <p className="text-sm text-muted-foreground">All projects achieve milestones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your space? Contact us for a free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918668415858" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
              Call: +91 8668415858
            </a>
            <a href="mailto:contact@gurupaintingservices.in" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
