import { Calendar, Home, Paintbrush, Shield, Award, Sparkles, Eye, Palette, Award, Users, Shield, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';



export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);


  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setServicesOpen(false);
    setGalleryOpen(false);
  };
  };


 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white z-10">
            <p className="text-lg md:text-xl mb-4 text-accent font-semibold">Welcome to Pandit Painting Services</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              India's Trusted Painting Services
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90 leading-relaxed">
              Looking for the best painters?
            </p>
            <p className="text-lg mb-4 text-white/80 leading-relaxed">
              Pandit Painting Services is a one stop destination offering you end to end solution to design and create spaces you can cherish.
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
              {/* <div className="bg-accent/5 rounded-full w-12 h-12 mt-10 flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-background">
                <span className="font-bold text-lg text-accent">1</span>
              </div> */}
              <h3 className="text-2xl font-bold text-primary mb-4">Plan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Schedule a free onsite consultation by giving us a call
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              {/* <div className="bg-accent/5 rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-background">
                <span className="font-bold text-lg text-accent">2</span>
              </div> */}
              <h3 className="text-2xl font-bold text-primary mb-4">Preview</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get personalized design & color assistance to your living space
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-10 h-10 text-white" />
              </div>
              {/* <div className="bg-accent/5 rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-background">
                <span className="font-bold text-lg text-accent">3</span>
              </div> */}
              <h3 className="text-2xl font-bold text-primary mb-4">Paint</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch our expert painters beautifully transform your space
              </p>
            </div>
          </div>
        </div>
      </section>

    


{/* services section */}
        <section id="services" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive painting solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Home className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Interior Painting</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Transform your indoor spaces with our professional interior painting services using premium quality materials.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Walls, Ceilings & Trim</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Asian Paints Certified Craftsmen</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Color Consultation Included</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Paintbrush className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Exterior Painting</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Protect and beautify your property with weather-resistant exterior painting solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>House & Building Facades</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Weather Protection Coatings</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Long-lasting Finishes</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Waterproof Painting</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Advanced waterproofing solutions to protect your property from moisture damage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Terrace Waterproofing</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Bathroom Waterproofing</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Leakage Prevention</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Wall Painting</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Specialized wall painting services with texture and finish options to suit your style.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Textured Finishes</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Decorative Patterns</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Premium Quality Paints</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Home className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">House Painting</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Complete house painting services covering all interior and exterior surfaces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Full Home Transformation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Room-by-Room Services</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Hassle-free Project Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Terrace Waterproofing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Expert terrace waterproofing to prevent leaks and extend the life of your property.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Advanced Waterproofing Materials</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Crack Repair & Sealing</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Long-term Protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



  {/* About Section */}
      <section id="about" className="py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Pandit Painting Services is a one stop destination offering you end to end solution to design and create spaces you can cherish. A startup assuring you hassle free deals with best quality material and Skillful Craftsman to make your home into heaven.
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

              <div className="bg-card p-8 rounded-2xl bg-secondary">
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



 {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              All projects of Pandit Painting Services have achieved milestones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img
                src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=600&h=600&fit=crop&auto=format"
                alt="Modern residential interior painting project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-bold text-xl mb-1">Modern Residential</h3>
                  <p className="text-white/80 text-sm">Complete interior transformation</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&h=600&fit=crop&auto=format"
                alt="Luxury living room painting project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-bold text-xl mb-1">Luxury Living Space</h3>
                  <p className="text-white/80 text-sm">Premium finishes & textures</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img
                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&h=600&fit=crop&auto=format"
                alt="Contemporary home interior design"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-bold text-xl mb-1">Contemporary Home</h3>
                  <p className="text-white/80 text-sm">Custom color consultation</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img
                src="https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=600&h=600&fit=crop&auto=format"
                alt="Elegant living space design"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-bold text-xl mb-1">Elegant Living Space</h3>
                  <p className="text-white/80 text-sm">Professional wall painting</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img
                src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=600&h=600&fit=crop&auto=format"
                alt="Quality painting materials and tools"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-bold text-xl mb-1">Best Quality Materials</h3>
                  <p className="text-white/80 text-sm">Premium paints & supplies</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img
                src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?w=600&h=600&fit=crop&auto=format"
                alt="Complete home transformation project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-bold text-xl mb-1">Complete Home Makeover</h3>
                  <p className="text-white/80 text-sm">Exterior & interior painting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>










{/* contact us */}
        <div className="min-h-screen bg-background bg-secondary">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Project Details</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your painting project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Phone</h4>
                      <a href="tel:+918668415858" className="text-muted-foreground hover:text-accent transition-colors">
                        +91 7745871308
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email</h4>
                      <a href="mailto:sanghapalpandit@gmail.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                        sanghapalpandit@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        B 15 sai shradha colony rajwade nagar kalewadi,<br />
                        pimpri chinchvad Rojas schoo! pune, Maharashtra, 411017.<br />
                        411033
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Schedule Free Consultation</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Call us today to schedule a free onsite consultation. Our experts will visit your property and provide personalized design & color assistance.
                </p>
                <a
                  href="tel:+918668415858"
                  className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Call Now: +91 7745871308
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



      {/* get in touch Section */}
      {/* <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your space? Contact us for a free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918668415858" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
              Call: +91 7745871308
            </a>
            <a href="mailto:sanghapalpandit@gmail.com" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
              Email Us
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}


