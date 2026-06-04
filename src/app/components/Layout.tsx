import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Paintbrush, Phone, Mail, ChevronDown, Menu, X, Facebook, Twitter, Youtube, MessageCircle } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setServicesOpen(false);
    setGalleryOpen(false);
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileGalleryOpen(false);
  };

  // WhatsApp configuration
  const whatsappNumber = '918668415858';
  const whatsappMessage = encodeURIComponent('Hi, I am interested in your painting services.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <a href="tel:+918668415858" className="flex items-center gap-2 hover:text-accent transition-colors text-xs md:text-sm">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span>+91 8668415858</span>
            </a>
            <a href="mailto:contact@gurupaintingservices.in" className="flex items-center gap-2 hover:text-accent transition-colors text-xs md:text-sm">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">contact@gurupaintingservices.in</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-3 h-3 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-3 h-3 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Youtube className="w-3 h-3 md:w-4 md:h-4" /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Paintbrush className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              <span className="font-bold text-lg md:text-xl text-primary">Guru Painting Services</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors font-medium">
                About Us
              </Link>

              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                  className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1"
                >
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-card shadow-xl rounded-lg py-2 min-w-[220px] border border-border">
                    <Link to="/services/exterior-painting" onClick={() => setServicesOpen(false)} className="block px-4 py-2 hover:bg-secondary transition-colors text-sm">Exterior Painting</Link>
                    <Link to="/services/interior-painting" onClick={() => setServicesOpen(false)} className="block px-4 py-2 hover:bg-secondary transition-colors text-sm">Interior Painting</Link>
                    <Link to="/services/wall-painting" onClick={() => setServicesOpen(false)} className="block px-4 py-2 hover:bg-secondary transition-colors text-sm">Wall Painting</Link>
                    <Link to="/services/waterproof-painting" onClick={() => setServicesOpen(false)} className="block px-4 py-2 hover:bg-secondary transition-colors text-sm">Waterproof Painting</Link>
                    <Link to="/services/house-painting" onClick={() => setServicesOpen(false)} className="block px-4 py-2 hover:bg-secondary transition-colors text-sm">House Painting</Link>
                    <Link to="/services/terrace-waterproofing" onClick={() => setServicesOpen(false)} className="block px-4 py-2 hover:bg-secondary transition-colors text-sm">Terrace Waterproofing</Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setGalleryOpen(!galleryOpen)}
                  onBlur={() => setTimeout(() => setGalleryOpen(false), 200)}
                  className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1"
                >
                  Gallery <ChevronDown className="w-4 h-4" />
                </button>
                {galleryOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-card shadow-xl rounded-lg py-2 min-w-[220px] border border-border">
                    <Link to="/gallery/photos" onClick={() => setGalleryOpen(false)} className="block px-4 py-2 hover:bg-secondary transition-colors text-sm">Painting Photo Gallery</Link>
                    <Link to="/gallery/videos" onClick={() => setGalleryOpen(false)} className="block px-4 py-2 hover:bg-secondary transition-colors text-sm">Painting Video Gallery</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-2">
                <Link to="/" onClick={closeMobileMenu} className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium">
                  Home
                </Link>
                <Link to="/about" onClick={() => { scrollToSection('about'); closeMobileMenu(); }} className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium">
                  About Us
                </Link>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium flex items-center justify-between"
                  >
                    Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      <Link to="/services/exterior-painting" onClick={closeMobileMenu} className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors">Exterior Painting</Link>
                      <Link to="/services/interior-painting" onClick={closeMobileMenu} className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors">Interior Painting</Link>
                      <Link to="/services/wall-painting" onClick={closeMobileMenu} className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors">Wall Painting</Link>
                      <Link to="/services/waterproof-painting" onClick={closeMobileMenu} className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors">Waterproof Painting</Link>
                      <Link to="/services/house-painting" onClick={closeMobileMenu} className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors">House Painting</Link>
                      <Link to="/services/terrace-waterproofing" onClick={closeMobileMenu} className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors">Terrace Waterproofing</Link>
                    </div>
                  )}
                </div>

                {/* Mobile Gallery Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
                    className="w-full px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium flex items-center justify-between"
                  >
                    Gallery <ChevronDown className={`w-4 h-4 transition-transform ${mobileGalleryOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileGalleryOpen && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      <Link to="/gallery/photos" onClick={closeMobileMenu} className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors">Painting Photo Gallery</Link>
                      <Link to="/gallery/videos" onClick={closeMobileMenu} className="px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors">Painting Video Gallery</Link>
                    </div>
                  )}
                </div>

                <Link to="/contact" onClick={closeMobileMenu} className="mx-4 mt-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Paintbrush className="w-8 h-8 text-accent" />
                <span className="font-bold text-2xl">Guru Painting Services</span>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                Guru Painting Services is a one stop destination offering you end to end solution to design and create spaces you can cherish. A startup assuring you hassle free deals with best quality material and Skillful Craftsman to make your home into heaven.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/70 hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" onClick={() => scrollToSection('about')} className="text-white/70 hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/services/interior-painting" className="text-white/70 hover:text-accent transition-colors">Services</Link></li>
                <li><Link to="/gallery/photos" className="text-white/70 hover:text-accent transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/interior-painting" className="text-white/70 hover:text-accent transition-colors">Interior Painting</Link></li>
                <li><Link to="/services/exterior-painting" className="text-white/70 hover:text-accent transition-colors">Exterior Painting</Link></li>
                <li><Link to="/services/wall-painting" className="text-white/70 hover:text-accent transition-colors">Wall Painting</Link></li>
                <li><Link to="/services/waterproof-painting" className="text-white/70 hover:text-accent transition-colors">Waterproof Painting</Link></li>
                <li><Link to="/services/terrace-waterproofing" className="text-white/70 hover:text-accent transition-colors">Terrace Waterproofing</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© 2020 GPS | Design By: BigHost India Private Limited</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
