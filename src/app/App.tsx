import { useState } from 'react';
import { Paintbrush, Home, Users, Mail, CheckCircle, Sparkles, Shield, Award, Phone, MapPin, ChevronDown, Calendar, Eye, Palette, Facebook, Twitter, Youtube } from 'lucide-react';

import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import InteriorPaintingPage from './pages/InteriorPaintingPage';
import ExteriorPaintingPage from './pages/ExteriorPaintingPage';
import WallPaintingPage from './pages/WallPaintingPage';
import WaterproofPaintingPage from './pages/WaterproofPaintingPage';
import HousePaintingPage from './pages/HousePaintingPage';
import TerraceWaterproofingPage from './pages/TerraceWaterproofingPage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import VideoGalleryPage from './pages/VideoGalleryPage';
import ContactPage from './pages/ContactPage';


export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setServicesOpen(false);
    setGalleryOpen(false);
  };

  return (
  

      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />

          {/* Service Pages */}
          <Route path="/services/interior-painting" element={<InteriorPaintingPage />} />
          <Route path="/services/exterior-painting" element={<ExteriorPaintingPage />} />
          <Route path="/services/wall-painting" element={<WallPaintingPage />} />
          <Route path="/services/waterproof-painting" element={<WaterproofPaintingPage />} />
          <Route path="/services/house-painting" element={<HousePaintingPage />} />
          <Route path="/services/terrace-waterproofing" element={<TerraceWaterproofingPage />} />

          {/* Gallery Pages */}
          <Route path="/gallery/photos" element={<PhotoGalleryPage />} />
          <Route path="/gallery/videos" element={<VideoGalleryPage />} />

          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}