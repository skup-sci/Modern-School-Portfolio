import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import Container from '../components/Container';

const Contact = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: isHindi ? 'आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।' : 'Your message has been sent successfully. We will contact you soon.'
    });
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container>
      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            {isHindi ? 'संपर्क करें' : 'Contact Us'}
          </h1>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            {isHindi 
              ? 'हमारी टीम से संपर्क करें या नीचे दिए गए फॉर्म के माध्यम से अपना संदेश भेजें। हम आपकी सहायता के लिए तत्पर हैं।' 
              : 'Get in touch with our team or send your message through the form below. We are ready to assist you.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-800 to-indigo-700 py-6 px-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {isHindi ? 'संपर्क जानकारी' : 'Contact Information'}
              </h2>
              <p className="text-indigo-100">
                {isHindi ? 'हमसे संपर्क करने के कई तरीके हैं।' : 'There are many ways to contact us.'}
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {isHindi ? 'पता' : 'Address'}
                    </h3>
                    <p className="text-gray-600">
                      {isHindi ? 'शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज' : 'Shahid Pandit Ram Prasad Bismil Smarak Balika Inter College'}
                    </p>
                    <p className="text-gray-600">
                      {isHindi ? 'पचमा, जमुई पंडित, महराजगंज, उत्तर प्रदेश' : 'Pachma, Jamui Pandit, Maharajganj, Uttar Pradesh'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {isHindi ? 'फोन' : 'Phone'}
                    </h3>
                    <p className="text-gray-600">+91 8887581023</p>
                    <p className="text-gray-600">+91 9161892075</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {isHindi ? 'ईमेल' : 'Email'}
                    </h3>
                    <p className="text-gray-600">info@example.com</p>
                    <p className="text-gray-600">admin@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {isHindi ? 'कार्यालय समय' : 'Office Hours'}
                    </h3>
                    <p className="text-gray-600">
                      {isHindi ? 'सोमवार - शुक्रवार: 8:00 AM - 3:00 PM' : 'Monday - Friday: 8:00 AM - 3:00 PM'}
                    </p>
                    <p className="text-gray-600">
                      {isHindi ? 'शनिवार: 8:00 AM - 12:00 PM' : 'Saturday: 8:00 AM - 12:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {isHindi ? 'हमें संदेश भेजें' : 'Send Us a Message'}
            </h2>
            
            {formStatus.submitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-green-700">{formStatus.message}</p>
              </div>
            ) : (              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    {isHindi ? 'नाम' : 'Name'} *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                      placeholder={isHindi ? 'अपना नाम दर्ज करें' : 'Enter your name'}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                      {isHindi ? 'ईमेल' : 'Email'} *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        placeholder={isHindi ? 'अपना ईमेल दर्ज करें' : 'Enter your email'}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                      {isHindi ? 'फोन' : 'Phone'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        placeholder={isHindi ? 'अपना फोन नंबर दर्ज करें' : 'Enter your phone number'}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="purpose" className="block text-gray-700 font-medium mb-1">
                    {isHindi ? 'संपर्क का उद्देश्य' : 'Purpose of Contact'} *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <select
                      id="purpose"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500 bg-white"
                    >
                      <option value="">{isHindi ? 'उद्देश्य चुनें' : 'Choose purpose'}</option>
                      <option value="admission">{isHindi ? 'प्रवेश पूछताछ' : 'Admission Inquiry'}</option>
                      <option value="feedback">{isHindi ? 'प्रतिक्रिया' : 'Feedback'}</option>
                      <option value="complaint">{isHindi ? 'शिकायत' : 'Complaint'}</option>
                      <option value="career">{isHindi ? 'नौकरी पूछताछ' : 'Career Inquiry'}</option>
                      <option value="other">{isHindi ? 'अन्य' : 'Other'}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                    {isHindi ? 'संदेश' : 'Message'} *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                      placeholder={isHindi ? 'अपना संदेश यहां लिखें...' : 'Write your message here...'}
                    ></textarea>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{isHindi ? 'हम 24-48 घंटों के भीतर जवाब देने का प्रयास करेंगे।' : 'We aim to respond within 24-48 hours.'}</p>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="privacy-policy" 
                    name="privacy-policy" 
                    type="checkbox" 
                    required
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    {isHindi 
                      ? 'मैं स्वीकार करता/करती हूँ कि मेरी जानकारी स्कूल की गोपनीयता नीति के अनुसार संसाधित की जाएगी।' 
                      : 'I accept that my information will be processed according to the school\'s privacy policy.'}
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  {isHindi ? 'संदेश भेजें' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
          {/* Enhanced Map Section with Direction & Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            {isHindi ? 'हमारा स्थान' : 'Our Location'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2 bg-white p-2 shadow-md rounded-lg">
              <div className="map-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.5rem' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1234567890123!2d86.1234567890123!3d24.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1234567890123%3A0x123456789abcdef!2sSahid%20Pandit%20Ramprasad%20Bismil%20Smarak%20Balika%20Inter%20College!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                ></iframe>
              </div>
            </div>
            
            {/* Directions & Info */}
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                {isHindi ? 'यहां कैसे पहुंचे' : 'How to Reach Us'}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {isHindi ? 'सार्वजनिक परिवहन' : 'Public Transport'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isHindi 
                        ? 'नजदीकी बस स्टॉप से 5 मिनट की पैदल दूरी पर' 
                        : '5 minutes walking distance from the nearest bus stop'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {isHindi ? 'पार्किंग की सुविधा' : 'Parking Available'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isHindi 
                        ? 'स्कूल परिसर में निःशुल्क पार्किंग उपलब्ध है' 
                        : 'Free parking available in the school premises'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {isHindi ? 'कार्यालय समय' : 'Office Hours'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isHindi 
                        ? 'सोमवार - शुक्रवार: 8:00 AM - 3:00 PM' 
                        : 'Monday - Friday: 8:00 AM - 3:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://www.google.com/maps/dir//Sahid+Pandit+Ramprasad+Bismil+Smarak+Balika+Inter+College" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {isHindi ? 'दिशा-निर्देश प्राप्त करें' : 'Get Directions'}
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Social Media Connection */}
        <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{isHindi ? 'सोशल मीडिया पर हमसे जुड़ें' : 'Connect With Us On Social Media'}</h2>
          <p className="mb-6">{isHindi ? 'सभी अपडेट और घोषणाओं के लिए हमें फॉलो करें।' : 'Follow us for all updates and announcements.'}</p>
          
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-700 hover:bg-indigo-100 p-3 rounded-full transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.48 10.51h-4.208v-2.739c0-1.034.703-1.275 1.198-1.275h3.037V2.775l-4.185-.019c-4.647 0-5.703 3.477-5.703 5.703v2.055H5.469v4.132h3.15V22h5.652v-7.354h3.811l.398-4.132z"/>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-700 hover:bg-indigo-100 p-3 rounded-full transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-2.714 0-3.055.012-4.121.06-1.066.049-1.791.217-2.428.465a4.88 4.88 0 00-1.77 1.153A4.897 4.897 0 002.525 5.45c-.247.636-.416 1.363-.465 2.428C2.012 8.945 2 9.286 2 12s.012 3.055.06 4.121c.049 1.066.217 1.791.465 2.428a4.88 4.88 0 001.153 1.77 4.897 4.897 0 001.772 1.152c.637.247 1.362.416 2.428.465 1.066.048 1.407.06 4.121.06s3.055-.012 4.121-.06c1.066-.049 1.791-.218 2.428-.465a4.88 4.88 0 001.77-1.153 4.897 4.897 0 001.152-1.77c.247-.637.416-1.362.465-2.428.048-1.066.06-1.407.06-4.121s-.012-3.055-.06-4.121c-.049-1.066-.218-1.791-.465-2.428a4.88 4.88 0 00-1.153-1.77 4.897 4.897 0 00-1.77-1.152c-.637-.247-1.362-.416-2.428-.465C15.055 2.012 14.714 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.345.466.182.8.399 1.15.748.35.35.566.684.748 1.15.138.353.3.882.344 1.857.048 1.055.058 1.37.058 4.04 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.345 1.858a3.1 3.1 0 01-.748 1.15 3.09 3.09 0 01-1.15.748c-.353.138-.882.3-1.857.345-1.054.048-1.37.058-4.04.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.345a3.098 3.098 0 01-1.15-.748 3.09 3.09 0 01-.748-1.15c-.138-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.04 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.345-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.138.882-.3 1.857-.344 1.054-.048 1.37-.058 4.04-.058zm0 11.531a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.538-.203a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-700 hover:bg-indigo-100 p-3 rounded-full transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"/>
              </svg>
              <span className="sr-only">YouTube</span>
            </a>
            
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-700 hover:bg-indigo-100 p-3 rounded-full transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868 4.66 4.66 0 001.442 6.22 4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 13.215 13.215 0 007.154 2.1c8.583 0 13.287-7.11 13.287-13.285 0-.202-.005-.404-.014-.605a9.472 9.472 0 002.323-2.42l.002-.003z"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Contact;
