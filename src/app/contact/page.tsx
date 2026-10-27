import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Northside Resources - Land Development, Property, Mining & Commodity Trading',
  description: 'Contact Northside Resources (Pvt) Ltd in Harare, Zimbabwe for enquiries about land development, property sales, mining, commodity trading, and Follyjorne Estates.',
  keywords: ['Contact Northside Resources', 'Northside Resources Harare', 'Follyjorne Estates Contact', 'Property Developers Zimbabwe Contact'],
};

export default function Contact() {
  return <ContactForm />;
}
