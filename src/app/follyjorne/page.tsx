import { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, MapPin, Home, Shield, Building, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Follyjorne Estates - Premium Residential Development in Glen Lorne, Harare',
  description: 'Follyjorne Estates is a prestigious residential development in Glen Lorne, Harare, featuring approximately 41 premium double-storey homes with modern African architectural design.',
  keywords: ['Follyjorne Estates', 'Glen Lorne Property Development', 'Property Development Harare', 'Luxury Homes Zimbabwe', 'Gated Community Harare', 'Residential Development Zimbabwe'],
};

export default function Follyjorne() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/property-development.png"
            alt="Follyjorne Estates - Premium Residential Development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/85 to-charcoal/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Follyjorne Estates
          </h1>
          <p className="text-xl md:text-2xl text-gold font-semibold mb-4">
            Prestigious Living. Exceptional Location. Enduring Value.
          </p>
          <p className="text-lg text-gray-200 mb-8">
            Glen Lorne, Harare, Zimbabwe
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">The Development</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Follyjorne Estates is a flagship premium residential development by Northside Resources (Pvt) Ltd. Located in the prestigious Glen Lorne area of Harare, this development represents our vision for sophisticated, modern African living.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              The development is envisioned as a high-value modern residential estate featuring premium double-storey homes designed for comfortable family living. With approximately 41 residential stands, Follyjorne Estates offers an exclusive opportunity to be part of a carefully planned community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">The Residences</h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              Modern double-storey homes designed for premium African living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Home className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Double-Storey Architecture</h3>
              <p className="text-charcoal">Spacious two-level homes designed for modern family living with elegant proportions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg className="w-12 h-12 text-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h3 className="text-xl font-bold text-navy mb-3">4 Bedrooms</h3>
              <p className="text-charcoal">Generously sized bedrooms designed for comfort and privacy for the entire family.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg className="w-12 h-12 text-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="text-xl font-bold text-navy mb-3">Ensuite Bedrooms</h3>
              <p className="text-charcoal">All bedrooms feature ensuite bathrooms for added convenience and luxury.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg className="w-12 h-12 text-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-xl font-bold text-navy mb-3">Balconies</h3>
              <p className="text-charcoal">Private balconies offering outdoor living space and beautiful views.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg className="w-12 h-12 text-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <h3 className="text-xl font-bold text-navy mb-3">Modern Kitchens</h3>
              <p className="text-charcoal">Contemporary kitchen spaces designed for functionality and style.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <svg className="w-12 h-12 text-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="text-xl font-bold text-navy mb-3">Premium Finishes</h3>
              <p className="text-charcoal">High-quality materials and finishes throughout for a sophisticated look.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-charcoal text-lg mb-4">
              Modern African architectural character designed for comfortable family living
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Location</h2>
              <p className="text-lg text-charcoal leading-relaxed mb-6">
                Glen Lorne is one of Harare's most prestigious residential areas, known for its elevated position, scenic views, and serene environment. The area offers a perfect balance of tranquility and accessibility.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                Residents of Glen Lorne enjoy a peaceful suburban lifestyle while remaining connected to Harare's amenities. The area is sought after for its natural beauty, mature trees, and sense of community.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/modern-house.png"
                alt="Glen Lorne Location - Premium Residential Area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Development Vision</h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              Creating a premium residential community designed for the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <Building className="w-16 h-16 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Premium Architecture</h3>
              <p className="text-charcoal">Modern double-storey design with African character</p>
            </div>

            <div className="text-center">
              <svg className="w-16 h-16 text-navy mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-xl font-bold text-navy mb-2">Quality Infrastructure</h3>
              <p className="text-charcoal">Well-planned roads and utilities</p>
            </div>

            <div className="text-center">
              <Home className="w-16 h-16 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Modern Living</h3>
              <p className="text-charcoal">Spacious homes designed for comfort</p>
            </div>

            <div className="text-center">
              <Shield className="w-16 h-16 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Secure Environment</h3>
              <p className="text-charcoal">Gated community with enhanced security</p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Long-Term Value</h3>
              <p className="text-charcoal">Premium location with enduring appreciation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Gallery</h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              Conceptual visuals of the Follyjorne Estates development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/follyjorne-estate.png"
                alt="Follyjorne Estates - Conceptual Visual"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/modern-house.png"
                alt="Modern Double-Storey Residence - Conceptual Visual"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/property-development.png"
                alt="Premium Residential Development - Conceptual Visual"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/hero-image.png"
                alt="Luxury African Architecture - Conceptual Visual"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/follyjorne-estate.png"
                alt="Premium Finishes - Conceptual Visual"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/modern-house.png"
                alt="Landscaped Gardens - Conceptual Visual"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 italic">
            * Conceptual Visuals / Artist's Impression
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Follyjorne Estates?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Contact us to learn more about this premium residential development opportunity in Glen Lorne, Harare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:northsideresources@gmail.com"
              className="inline-block bg-gold text-white px-8 py-4 rounded font-semibold hover:bg-yellow-600 transition-colors duration-200"
            >
              Enquire Now
            </a>
            <a
              href="/investment"
              className="inline-block bg-white text-navy px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Investment Information
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
