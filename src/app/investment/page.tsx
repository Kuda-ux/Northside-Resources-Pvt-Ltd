import { Metadata } from 'next';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investment Opportunities - Follyjorne Estates, Glen Lorne, Harare',
  description: 'Investment opportunities in Follyjorne Estates, a premium residential development in Glen Lorne, Harare. Northside Resources seeks strategic investors and development partners.',
  keywords: ['Property Investment Zimbabwe', 'Real Estate Investment Harare', 'Follyjorne Estates Investment', 'Glen Lorne Property Investment', 'Property Development Investment', 'Investment Partners Zimbabwe'],
};

export default function Investment() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investment Opportunity
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Participate in the development of a premium Glen Lorne residential project
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">About the Opportunity</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Northside Resources (Pvt) Ltd is seeking strategic investors and development partners for Follyjorne Estates, our flagship premium residential development in Glen Lorne, Harare.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              This opportunity represents participation in a carefully planned development project in one of Harare's most prestigious residential areas. We are committed to executing this development through construction and completion, followed by the disposal/sale of the completed residential units.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Follyjorne Estates?</h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              A premium development opportunity in a sought-after location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Prestigious Glen Lorne Location</h3>
              <p className="text-charcoal leading-relaxed">
                One of Harare's most sought-after residential areas, known for its elevated position and scenic views.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Premium Residential Positioning</h3>
              <p className="text-charcoal leading-relaxed">
                High-value modern double-storey homes designed for the premium market segment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Planned Development</h3>
              <p className="text-charcoal leading-relaxed">
                A carefully structured development approach from planning through to completion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Approximately 41 Stands</h3>
              <p className="text-charcoal leading-relaxed">
                Manageable scale allowing for focused development and quality execution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Modern Housing Concept</h3>
              <p className="text-charcoal leading-relaxed">
                Contemporary double-storey design with modern African architectural character.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Development-to-Completion Strategy</h3>
              <p className="text-charcoal leading-relaxed">
                Northside Resources will develop through construction and completion before disposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Development Process</h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              A structured approach from planning to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">01</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Planning & Development</h3>
              <p className="text-charcoal text-sm">Comprehensive planning and approvals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">02</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Infrastructure</h3>
              <p className="text-charcoal text-sm">Roads, utilities and site preparation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">03</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Residential Construction</h3>
              <p className="text-charcoal text-sm">Building premium double-storey homes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">04</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Project Completion</h3>
              <p className="text-charcoal text-sm">Final touches and quality assurance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">05</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Property Disposal / Sales</h3>
              <p className="text-charcoal text-sm">Marketing and sale of completed units</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-navy p-10 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Important Investment Note
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Specific investment details including ROI projections, investment amounts, development costs, and selling prices will be provided to qualified investors during direct discussions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe in transparent, direct communication with potential investors and partners. All financial projections and investment terms will be discussed confidentially with interested parties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Request Investor Information
          </h2>
          <p className="text-lg text-charcoal mb-10 max-w-3xl mx-auto">
            Contact us to discuss investment opportunities in Follyjorne Estates and learn more about this premium development project.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:northsideresources@gmail.com"
              className="flex items-center gap-3 bg-navy text-white px-8 py-4 rounded font-semibold hover:bg-gold transition-colors duration-200"
            >
              <Mail size={20} />
              Request Information
            </a>
            <a
              href="tel:+263777782801"
              className="flex items-center gap-3 bg-white text-navy border-2 border-navy px-8 py-4 rounded font-semibold hover:bg-navy hover:text-white transition-colors duration-200"
            >
              <Phone size={20} />
              +263 77 778 2801
            </a>
          </div>

          <div className="max-w-xl mx-auto bg-light-grey p-8 rounded-lg">
            <h3 className="text-xl font-bold text-navy mb-4">Speak to Northside Resources</h3>
            <p className="text-charcoal mb-4">
              For investment enquiries, please contact us directly:
            </p>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span className="text-charcoal">+263 77 778 2801</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span className="text-charcoal">+263 71 823 7810</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <a href="mailto:northsideresources@gmail.com" className="text-charcoal hover:text-navy">
                  northsideresources@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Investment?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            We welcome conversations with strategic investors and development partners who share our vision for creating premium residential developments in Zimbabwe.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-white px-8 py-4 rounded font-semibold hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
          >
            Contact Us
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
