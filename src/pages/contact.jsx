import React from 'react';
import Container from '../components/Container';

const Contact = () => {
  return (
    <Container>
      <main className="max-w-7xl mx-auto px-4 py-24 pt-28">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">School Address</h2>
          <p>Pachma, Jamui Pandit, Maharajganj</p>
          <p>Phone: +91 12345 67890</p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
          <div className="map-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1234567890123!2d86.1234567890123!3d24.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1234567890123%3A0x123456789abcdef!2sSahid%20Pandit%20Ramprasad%20Bismil%20Smarak%20Balika%20Inter%20College!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            ></iframe>
          </div>
        </section>
        <section>
          <div className="max-w-lg mx-auto space-y-6 bg-indigo-50 p-6 rounded-md shadow-md text-center text-lg font-semibold">
            <p>अधिक जानकारी के लिए:–</p>
            <p>8887581023, 9161892075</p>
            <p>हमसे जुड़ें:</p>
            <div className="flex justify-center space-x-6 mt-2">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-indigo-600 hover:text-indigo-800 font-bold">Instagram</a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-indigo-600 hover:text-indigo-800 font-bold">Facebook</a>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Contact;
