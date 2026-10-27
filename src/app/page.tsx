import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.png"
            alt="Northside Resources - Premium Property Development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-charcoal/85" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Value. Developing Futures.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Northside Resources (Pvt) Ltd is a diversified Zimbabwean company focused on land development, property, mining and commodity trading — creating sustainable opportunities and long-term value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/follyjorne"
              className="bg-gold text-white px-8 py-4 rounded font-semibold hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Explore Follyjorne Estates
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/investment"
              className="bg-white text-navy px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Investment Opportunities
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              About Northside Resources
            </h2>
            <p className="text-lg text-charcoal leading-relaxed">
              Based in Zimbabwe, Northside Resources (Pvt) Ltd is building opportunities across property development, mining, property sales and commodity trading. We are committed to creating sustainable value through strategic investments and responsible development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Business
            </h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              Creating value across diverse sectors in Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Land Development</h3>
              <p className="text-charcoal leading-relaxed">
                Transforming strategically located land into valuable and well-planned developments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Property Sales</h3>
              <p className="text-charcoal leading-relaxed">
                Connecting quality property opportunities with homeowners, investors and partners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Mining</h3>
              <p className="text-charcoal leading-relaxed">
                Exploring and participating in Zimbabwe's resource and mining opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Commodity Trading</h3>
              <p className="text-charcoal leading-relaxed">
                Building commercial opportunities through strategic commodity trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Flagship Development</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                Follyjorne Estates
              </h2>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                A prestigious residential development in Glen Lorne, Harare. Follyjorne Estates is envisioned as a high-value modern residential estate featuring premium double-storey homes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-charcoal">
                  <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Glen Lorne, Harare
                </li>
                <li className="flex items-center text-charcoal">
                  <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Approximately 41 stands
                </li>
                <li className="flex items-center text-charcoal">
                  <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Double-storey residences
                </li>
                <li className="flex items-center text-charcoal">
                  <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  4 bedrooms with ensuite
                </li>
                <li className="flex items-center text-charcoal">
                  <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Balconies and premium design
                </li>
              </ul>
              <Link
                href="/follyjorne"
                className="inline-flex items-center text-navy font-semibold hover:text-gold transition-colors duration-200"
              >
                Discover the Development
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/follyjorne-estate.png"
                alt="Follyjorne Estates - Premium Residential Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Invest in a Vision Designed for Long-Term Value
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Join us in creating premium residential developments that deliver lasting value to investors and homeowners.
          </p>
          <Link
            href="/investment"
            className="inline-block bg-gold text-white px-8 py-4 rounded font-semibold hover:bg-yellow-600 transition-colors duration-200"
          >
            Discuss Investment Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
