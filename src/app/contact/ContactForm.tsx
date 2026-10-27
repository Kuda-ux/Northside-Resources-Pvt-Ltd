'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    enquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be configured with Formspree or similar service
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will be in touch shortly.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organisation: '',
      enquiryType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with Northside Resources for enquiries about our services, Follyjorne Estates, or investment opportunities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    placeholder="+263 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="organisation" className="block text-sm font-semibold text-charcoal mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    placeholder="Company or organisation name"
                  />
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-semibold text-charcoal mb-2">
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                  >
                    <option value="">Select enquiry type</option>
                    <option value="Follyjorne Estates">Follyjorne Estates</option>
                    <option value="Investment">Investment</option>
                    <option value="Property">Property</option>
                    <option value="Land Development">Land Development</option>
                    <option value="Mining">Mining</option>
                    <option value="Commodity Trading">Commodity Trading</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy resize-none"
                    placeholder="Please tell us about your enquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-white px-8 py-4 rounded font-semibold hover:bg-gold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="bg-light-grey p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Building className="text-gold" size={24} />
                    Northside Resources (Pvt) Ltd
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                      <div className="text-charcoal">
                        <p>1 Kwame Nkrumah Avenue</p>
                        <p>First Floor</p>
                        <p>Suite 6, Room 5</p>
                        <p>Harare</p>
                        <p>Zimbabwe</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-light-grey p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Phone className="text-gold" size={24} />
                    Phone
                  </h3>
                  <div className="space-y-2">
                    <a href="tel:+263777782801" className="block text-charcoal hover:text-navy transition-colors">
                      +263 77 778 2801
                    </a>
                    <a href="tel:+263718237810" className="block text-charcoal hover:text-navy transition-colors">
                      +263 71 823 7810
                    </a>
                  </div>
                </div>

                <div className="bg-light-grey p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Mail className="text-gold" size={24} />
                    Email
                  </h3>
                  <a
                    href="mailto:northsideresources@gmail.com"
                    className="text-charcoal hover:text-navy transition-colors"
                  >
                    northsideresources@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-10 bg-navy p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 12:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Connect with Us
          </h2>
          <p className="text-lg text-charcoal mb-8 max-w-2xl mx-auto">
            Have questions about Follyjorne Estates or our investment opportunities? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+263777782801"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded font-semibold hover:bg-gold transition-colors duration-200"
            >
              <Phone size={20} />
              Call Us
            </a>
            <a
              href="mailto:northsideresources@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy border-2 border-navy px-8 py-4 rounded font-semibold hover:bg-navy hover:text-white transition-colors duration-200"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
