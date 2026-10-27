import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Northside Resources - Land Development, Property, Mining & Commodity Trading',
  description: 'Learn about Northside Resources (Pvt) Ltd, a diversified Zimbabwean company building opportunities across property development, mining, property sales and commodity trading.',
  keywords: ['Northside Resources Zimbabwe', 'About Northside Resources', 'Land Development Zimbabwe', 'Property Development Harare', 'Mining Zimbabwe', 'Commodity Trading'],
};

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Northside Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Building opportunities across property development, mining, property sales and commodity trading in Zimbabwe.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">Who We Are</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Northside Resources (Pvt) Ltd is a Zimbabwean company committed to creating sustainable value through strategic investments and responsible development. We operate across four key business areas: land development, property sales, mining, and commodity trading.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Our approach is built on a foundation of integrity, excellence, and long-term partnership. We identify high-potential opportunities and develop them into valuable assets that deliver lasting benefits to our stakeholders and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Vision</h2>
            <p className="text-xl text-charcoal leading-relaxed italic">
              To build a respected African enterprise that creates sustainable value through strategic investments, responsible development and long-term partnerships.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
            <p className="text-xl text-charcoal leading-relaxed italic">
              To identify, develop and manage high-potential opportunities across property, resources and trade while delivering lasting value to our stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Integrity</h3>
              <p className="text-charcoal">We conduct business with honesty and transparency.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Excellence</h3>
              <p className="text-charcoal">We strive for the highest standards in all we do.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Partnership</h3>
              <p className="text-charcoal">We believe in collaborative success.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Innovation</h3>
              <p className="text-charcoal">We embrace creative solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Long-Term Value</h3>
              <p className="text-charcoal">We build for sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Business Areas</h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto">
              Diversified expertise creating value across Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-navy mb-4">Land Development</h3>
              <p className="text-charcoal leading-relaxed">
                We transform strategically located land into valuable and well-planned developments. Our expertise includes site selection, planning, infrastructure development, and creating sustainable communities that enhance value for all stakeholders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-navy mb-4">Property Sales</h3>
              <p className="text-charcoal leading-relaxed">
                We connect quality property opportunities with homeowners, investors and strategic partners. From residential developments to commercial properties, we facilitate transactions that create lasting value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-navy mb-4">Mining</h3>
              <p className="text-charcoal leading-relaxed">
                We explore and participate in Zimbabwe's resource and mining opportunities. Our approach prioritizes responsible resource development while contributing to the country's economic growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-navy mb-4">Commodity Trading</h3>
              <p className="text-charcoal leading-relaxed">
                We build commercial opportunities through strategic commodity trading. Our trading activities span multiple sectors, creating value through market expertise and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
