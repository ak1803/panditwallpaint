import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('2X8F6Y43F1P8EAMFA7CBJ629', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your interest! We will contact you soon.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try calling us directly at +91 8668415858'
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-accent text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ready to start your project! Get in touch with us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

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
                  disabled={isSubmitting}
                  className={`w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
  );
}
