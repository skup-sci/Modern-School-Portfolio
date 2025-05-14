import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import { useLanguage } from '../LanguageContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Admissions page with form for prospective students.
 * Uses the Container component for consistent layout with other pages.
 */
const Admissions = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  const [activeTab, setActiveTab] = useState('process');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    grade: '',
    dob: '',
    gender: '',
    previousSchool: '',
    message: '',
    agreeTerms: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is modified
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.studentName) errors.studentName = isHindi ? 'छात्र का नाम आवश्यक है' : 'Student name is required';
    if (!formData.parentName) errors.parentName = isHindi ? 'अभिभावक का नाम आवश्यक है' : 'Parent name is required';
    if (!formData.email) errors.email = isHindi ? 'ईमेल आवश्यक है' : 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = isHindi ? 'अमान्य ईमेल पता' : 'Invalid email address';
    if (!formData.phone) errors.phone = isHindi ? 'फोन नंबर आवश्यक है' : 'Phone number is required';
    if (!formData.grade) errors.grade = isHindi ? 'कृपया कक्षा चुनें' : 'Please select a grade';
    if (!formData.dob) errors.dob = isHindi ? 'जन्म तिथि आवश्यक है' : 'Date of birth is required';
    if (!formData.gender) errors.gender = isHindi ? 'लिंग चुनें' : 'Please select gender';
    if (!formData.agreeTerms) errors.agreeTerms = isHindi ? 'कृपया नियमों और शर्तों से सहमत हों' : 'Please agree to the terms and conditions';
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Form is valid
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // In a real application, you would submit the form data to a server here
    } else {
      setFormErrors(errors);
    }
  };

  // Admission process steps
  const admissionSteps = [
    {
      title: isHindi ? 'आवेदन पत्र जमा करें' : 'Submit Application',
      description: isHindi 
        ? 'ऑनलाइन प्रवेश फॉर्म भरें और आवश्यक दस्तावेज अपलोड करें।'
        : 'Fill out the online admission form and upload required documents.'
    },
    {
      title: isHindi ? 'प्रवेश परीक्षा' : 'Entrance Assessment',
      description: isHindi 
        ? 'छात्रों के लिए प्रवेश परीक्षा आयोजित की जाएगी।'
        : 'Students will take an entrance assessment test.'
    },
    {
      title: isHindi ? 'साक्षात्कार' : 'Interview',
      description: isHindi 
        ? 'छात्र और अभिभावकों के साथ एक साक्षात्कार आयोजित किया जाएगा।'
        : 'An interview will be conducted with the student and parents.'
    },
    {
      title: isHindi ? 'प्रवेश पत्र' : 'Admission Letter',
      description: isHindi 
        ? 'सफल आवेदकों को प्रवेश पत्र जारी किया जाएगा।'
        : 'Successful applicants will be issued an admission letter.'
    },
    {
      title: isHindi ? 'शुल्क भुगतान' : 'Fee Payment',
      description: isHindi 
        ? 'प्रवेश की पुष्टि के लिए निर्धारित समय के भीतर शुल्क का भुगतान करें।'
        : 'Pay the fees within the stipulated time to confirm admission.'
    }
  ];

  // Required documents
  const requiredDocuments = [
    isHindi ? 'जन्म प्रमाण पत्र' : 'Birth Certificate',
    isHindi ? 'पिछले विद्यालय से स्थानांतरण प्रमाण पत्र' : 'Transfer Certificate from previous school',
    isHindi ? 'पिछली कक्षा की मार्कशीट' : 'Report Card of previous class',
    isHindi ? 'आधार कार्ड' : 'Aadhar Card',
    isHindi ? 'पासपोर्ट आकार के फोटो (4 प्रतियां)' : 'Passport size photographs (4 copies)',
    isHindi ? 'अभिभावक का पहचान प्रमाण' : 'Parent\'s ID proof'
  ];

  // FAQ items
  const faqItems = [
    {
      question: isHindi ? 'प्रवेश प्रक्रिया कब शुरू होती है?' : 'When does the admission process start?',
      answer: isHindi 
        ? 'प्रवेश प्रक्रिया हर वर्ष जनवरी में शुरू होती है और मार्च तक चलती है।' 
        : 'The admission process starts in January each year and continues until March.'
    },
    {
      question: isHindi ? 'क्या प्रवेश परीक्षा अनिवार्य है?' : 'Is entrance assessment mandatory?',
      answer: isHindi 
        ? 'हां, कक्षा 2 और उससे ऊपर के सभी छात्रों के लिए प्रवेश परीक्षा अनिवार्य है।' 
        : 'Yes, entrance assessment is mandatory for all students applying for Class 2 and above.'
    },
    {
      question: isHindi ? 'क्या स्कूल में कोई छात्रवृत्ति उपलब्ध है?' : 'Are there any scholarships available?',
      answer: isHindi 
        ? 'हां, मेधावी छात्रों के लिए छात्रवृत्ति उपलब्ध है। अधिक जानकारी के लिए स्कूल कार्यालय से संपर्क करें।' 
        : 'Yes, scholarships are available for meritorious students. Contact the school office for more information.'
    },
    {
      question: isHindi ? 'क्या मध्य सत्र में प्रवेश संभव है?' : 'Is mid-session admission possible?',
      answer: isHindi 
        ? 'मध्य सत्र में प्रवेश सीटों की उपलब्धता और छात्र की योग्यता के आधार पर संभव है।' 
        : 'Mid-session admission is possible based on seat availability and the student\'s eligibility.'
    }
  ];

  // Fees structure
  const feesStructure = [
    {
      category: isHindi ? 'प्राथमिक (कक्षा 1-5)' : 'Primary (Class 1-5)',
      tuitionFee: isHindi ? '₹8,000 प्रति तिमाही' : '₹8,000 per quarter',
      admissionFee: isHindi ? '₹15,000 (एक बार)' : '₹15,000 (one time)'
    },
    {
      category: isHindi ? 'माध्यमिक (कक्षा 6-8)' : 'Middle (Class 6-8)',
      tuitionFee: isHindi ? '₹10,000 प्रति तिमाही' : '₹10,000 per quarter',
      admissionFee: isHindi ? '₹18,000 (एक बार)' : '₹18,000 (one time)'
    },
    {
      category: isHindi ? 'हाई स्कूल (कक्षा 9-10)' : 'High School (Class 9-10)',
      tuitionFee: isHindi ? '₹12,000 प्रति तिमाही' : '₹12,000 per quarter',
      admissionFee: isHindi ? '₹20,000 (एक बार)' : '₹20,000 (one time)'
    },
    {
      category: isHindi ? 'इंटर कॉलेज (कक्षा 11-12)' : 'Inter College (Class 11-12)',
      tuitionFee: isHindi ? '₹15,000 प्रति तिमाही' : '₹15,000 per quarter',
      admissionFee: isHindi ? '₹25,000 (एक बार)' : '₹25,000 (one time)'
    }
  ];

  return (
    <Container>
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up">
            {isHindi ? 'प्रवेश प्रक्रिया' : 'Admission Process'}
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          
          <p className="text-center mb-10 max-w-3xl mx-auto text-gray-600" data-aos="fade-up" data-aos-delay="200">
            {isHindi 
              ? 'हमारे विद्यालय में आपका स्वागत है। प्रवेश प्रक्रिया और आवश्यक जानकारी नीचे दी गई है।'
              : 'Welcome to our school. Find below the admission process and necessary information.'}
          </p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="300">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'process'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isHindi ? 'प्रवेश प्रक्रिया' : 'Admission Process'}
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'form'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isHindi ? 'आवेदन फॉर्म' : 'Application Form'}
            </button>
            <button
              onClick={() => setActiveTab('fees')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'fees'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isHindi ? 'शुल्क संरचना' : 'Fee Structure'}
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'faq'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isHindi ? 'सामान्य प्रश्न' : 'FAQ'}
            </button>
          </div>
          
          {/* Process Tab Content */}
          {activeTab === 'process' && (
            <div className="max-w-5xl mx-auto" data-aos="fade-up">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center text-amber-700">
                  {isHindi ? 'प्रवेश प्रक्रिया के चरण' : 'Admission Process Steps'}
                </h2>
                
                <div className="relative">
                  {/* Process Step Timeline */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
                  
                  {/* Process Steps */}
                  {admissionSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col md:flex-row mb-8 items-center ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                      data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                      data-aos-delay={index * 100}
                    >
                      <div className="md:w-5/12"></div>
                      
                      <div className="md:w-2/12 flex justify-center">
                        <div className="bg-amber-600 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold z-10">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className="md:w-5/12 bg-white p-5 rounded-lg shadow-md border border-amber-100 mt-3 md:mt-0">
                        <h3 className="font-bold text-lg text-amber-700 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Required Documents */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100 mb-10">
                <h3 className="text-xl font-bold mb-4 text-amber-700">
                  {isHindi ? 'आवश्यक दस्तावेज' : 'Required Documents'}
                </h3>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Information */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  {isHindi ? 'अधिक जानकारी के लिए संपर्क करें' : 'Contact for More Information'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div>
                      <p className="font-semibold">{isHindi ? 'फोन' : 'Phone'}</p>
                      <p className="text-amber-100">+91 8887581023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <p className="font-semibold">{isHindi ? 'ईमेल' : 'Email'}</p>
                      <p className="text-amber-100">admissions@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p className="font-semibold">{isHindi ? 'कार्यालय समय' : 'Office Hours'}</p>
                      <p className="text-amber-100">
                        {isHindi ? 'सोम-शनि: 9 AM - 2 PM' : 'Mon-Sat: 9 AM - 2 PM'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Form Tab Content */}
          {activeTab === 'form' && (
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100">
                <h2 className="text-2xl font-bold mb-6 text-center text-amber-700">
                  {isHindi ? 'प्रवेश आवेदन फॉर्म' : 'Admission Application Form'}
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-green-700">
                          {isHindi ? 'आवेदन सफलतापूर्वक जमा किया गया' : 'Application Submitted Successfully'}
                        </h3>
                        <p className="mt-2 text-green-600">
                          {isHindi 
                            ? 'आपका आवेदन प्राप्त हो गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।'
                            : 'Your application has been received. Our team will contact you soon.'}
                        </p>
                        <div className="mt-4">
                          <button
                            type="button"
                            onClick={() => {
                              setIsSubmitted(false);
                              setFormData({
                                studentName: '',
                                parentName: '',
                                email: '',
                                phone: '',
                                address: '',
                                grade: '',
                                dob: '',
                                gender: '',
                                previousSchool: '',
                                message: '',
                                agreeTerms: false
                              });
                            }}
                            className="text-green-700 hover:text-green-800 underline"
                          >
                            {isHindi ? 'नया फॉर्म भरें' : 'Submit New Application'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Student Name */}
                      <div>
                        <label htmlFor="studentName" className="block text-gray-700 font-medium mb-1">
                          {isHindi ? 'छात्र का नाम' : 'Student Name'} *
                        </label>
                        <input
                          type="text"
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${
                            formErrors.studentName ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring focus:ring-amber-200`}
                        />
                        {formErrors.studentName && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.studentName}</p>
                        )}
                      </div>
                      
                      {/* Parent/Guardian Name */}
                      <div>
                        <label htmlFor="parentName" className="block text-gray-700 font-medium mb-1">
                          {isHindi ? 'अभिभावक का नाम' : 'Parent/Guardian Name'} *
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${
                            formErrors.parentName ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring focus:ring-amber-200`}
                        />
                        {formErrors.parentName && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.parentName}</p>
                        )}
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                          {isHindi ? 'ईमेल' : 'Email'} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${
                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring focus:ring-amber-200`}
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                        )}
                      </div>
                      
                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                          {isHindi ? 'फोन नंबर' : 'Phone Number'} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${
                            formErrors.phone ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring focus:ring-amber-200`}
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                      
                      {/* Grade Applying For */}
                      <div>
                        <label htmlFor="grade" className="block text-gray-700 font-medium mb-1">
                          {isHindi ? 'आवेदित कक्षा' : 'Grade Applying For'} *
                        </label>
                        <select
                          id="grade"
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${
                            formErrors.grade ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring focus:ring-amber-200 bg-white`}
                        >
                          <option value="">{isHindi ? 'कक्षा चुनें' : 'Select Grade'}</option>
                          <option value="Nursery">{isHindi ? 'नर्सरी' : 'Nursery'}</option>
                          <option value="LKG">{isHindi ? 'एल.के.जी.' : 'LKG'}</option>
                          <option value="UKG">{isHindi ? 'यू.के.जी.' : 'UKG'}</option>
                          {[...Array(12)].map((_, i) => (
                            <option key={i} value={`Class ${i+1}`}>
                              {isHindi ? `कक्षा ${i+1}` : `Class ${i+1}`}
                            </option>
                          ))}
                        </select>
                        {formErrors.grade && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.grade}</p>
                        )}
                      </div>
                      
                      {/* Date of Birth */}
                      <div>
                        <label htmlFor="dob" className="block text-gray-700 font-medium mb-1">
                          {isHindi ? 'जन्म तिथि' : 'Date of Birth'} *
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md ${
                            formErrors.dob ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring focus:ring-amber-200`}
                        />
                        {formErrors.dob && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.dob}</p>
                        )}
                      </div>
                      
                      {/* Gender */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-1">
                          {isHindi ? 'लिंग' : 'Gender'} *
                        </label>
                        <div className="flex space-x-4 mt-1">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={formData.gender === 'male'}
                              onChange={handleChange}
                              className="mr-1 text-amber-600 focus:ring-amber-500"
                            />
                            <span>{isHindi ? 'पुरुष' : 'Male'}</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={formData.gender === 'female'}
                              onChange={handleChange}
                              className="mr-1 text-amber-600 focus:ring-amber-500"
                            />
                            <span>{isHindi ? 'महिला' : 'Female'}</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value="other"
                              checked={formData.gender === 'other'}
                              onChange={handleChange}
                              className="mr-1 text-amber-600 focus:ring-amber-500"
                            />
                            <span>{isHindi ? 'अन्य' : 'Other'}</span>
                          </label>
                        </div>
                        {formErrors.gender && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.gender}</p>
                        )}
                      </div>
                      
                      {/* Previous School */}
                      <div>
                        <label htmlFor="previousSchool" className="block text-gray-700 font-medium mb-1">
                          {isHindi ? 'पिछला विद्यालय' : 'Previous School'}
                        </label>
                        <input
                          type="text"
                          id="previousSchool"
                          name="previousSchool"
                          value={formData.previousSchool}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200"
                        />
                      </div>
                    </div>
                    
                    {/* Address */}
                    <div>
                      <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                        {isHindi ? 'पता' : 'Address'}
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        rows="2"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200"
                      ></textarea>
                    </div>
                    
                    {/* Additional Message */}
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                        {isHindi ? 'अतिरिक्त संदेश' : 'Additional Message'}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200"
                      ></textarea>
                    </div>
                    
                    {/* Terms and Conditions */}
                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className={`mt-1 mr-2 text-amber-600 focus:ring-amber-500 ${
                            formErrors.agreeTerms ? 'border-red-500' : ''
                          }`}
                        />
                        <span className="text-sm text-gray-700">
                          {isHindi 
                            ? 'मैं पुष्टि करता/करती हूं कि ऊपर दी गई सभी जानकारी सही है और मैं स्कूल के नियमों और शर्तों से सहमत हूं।'
                            : 'I confirm that all information given above is correct and I agree to the school rules and regulations.'}
                        </span>
                      </label>
                      {formErrors.agreeTerms && (
                        <p className="text-red-500 text-xs ml-6">{formErrors.agreeTerms}</p>
                      )}
                    </div>
                    
                    {/* Submit Button */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {isHindi ? 'आवेदन जमा करें' : 'Submit Application'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
          
          {/* Fees Tab Content */}
          {activeTab === 'fees' && (
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100 mb-10">
                <h2 className="text-2xl font-bold mb-6 text-center text-amber-700">
                  {isHindi ? 'शुल्क संरचना (2025-26)' : 'Fee Structure (2025-26)'}
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-amber-200">
                    <thead>
                      <tr className="bg-amber-100 text-amber-800">
                        <th className="py-3 px-4 text-left">{isHindi ? 'श्रेणी' : 'Category'}</th>
                        <th className="py-3 px-4 text-left">{isHindi ? 'शिक्षण शुल्क' : 'Tuition Fee'}</th>
                        <th className="py-3 px-4 text-left">{isHindi ? 'प्रवेश शुल्क' : 'Admission Fee'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-200">
                      {feesStructure.map((fee, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-amber-50' : ''}>
                          <td className="py-3 px-4 font-medium">{fee.category}</td>
                          <td className="py-3 px-4">{fee.tuitionFee}</td>
                          <td className="py-3 px-4">{fee.admissionFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-amber-700 mb-3">
                    {isHindi ? 'अतिरिक्त शुल्क' : 'Additional Fees'}
                  </h3>
                  
                  <ul className="space-y-2 pl-5 list-disc text-gray-700">
                    <li>
                      {isHindi 
                        ? 'परिवहन शुल्क: दूरी के अनुसार ₹2,000 - ₹4,000 प्रति तिमाही'
                        : 'Transportation Fee: ₹2,000 - ₹4,000 per quarter depending on distance'}
                    </li>
                    <li>
                      {isHindi 
                        ? 'कंप्यूटर लैब शुल्क: ₹500 प्रति तिमाही'
                        : 'Computer Lab Fee: ₹500 per quarter'}
                    </li>
                    <li>
                      {isHindi 
                        ? 'पाठ्यक्रम सामग्री शुल्क: ₹3,000 प्रति वर्ष'
                        : 'Study Material Fee: ₹3,000 per year'}
                    </li>
                    <li>
                      {isHindi 
                        ? 'खेल और अतिरिक्त गतिविधि शुल्क: ₹1,500 प्रति वर्ष'
                        : 'Sports & Extra-Curricular Activities Fee: ₹1,500 per year'}
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 bg-amber-50 p-4 rounded-md border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-700 mb-2">
                    {isHindi ? 'नोट' : 'Note'}
                  </h3>
                  
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {isHindi 
                        ? 'सभी शुल्क हर तिमाही के पहले महीने के 10वें दिन तक देय हैं।'
                        : 'All fees are due by the 10th of the first month of every quarter.'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {isHindi 
                        ? 'भुगतान ऑनलाइन, चेक या डिमांड ड्राफ्ट के माध्यम से किया जा सकता है।'
                        : 'Payment can be made through online transfer, cheque, or demand draft.'}
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {isHindi 
                        ? 'देर से भुगतान पर ₹50 प्रति दिन का जुर्माना लगाया जाएगा।'
                        : 'Late payment will incur a penalty of ₹50 per day.'}
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2 rounded-md transition duration-200">
                    {isHindi ? 'पूर्ण शुल्क विवरण डाउनलोड करें' : 'Download Complete Fee Details'}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* FAQ Tab Content */}
          {activeTab === 'faq' && (
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100">
                <h2 className="text-2xl font-bold mb-6 text-center text-amber-700">
                  {isHindi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
                </h2>
                
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <details 
                      key={index} 
                      className="group border border-amber-200 rounded-md"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <summary className="flex justify-between items-center cursor-pointer p-4 bg-amber-50 group-open:bg-amber-100 group-open:text-amber-800 transition-colors duration-150">
                        <span className="font-medium">{item.question}</span>
                        <svg className="w-5 h-5 text-amber-600 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </summary>
                      <div className="p-4 border-t border-amber-200">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
                
                {/* Still Have Questions */}
                <div className="mt-8 bg-amber-50 p-4 rounded-md border border-amber-200 text-center">
                  <h3 className="text-lg font-semibold text-amber-700 mb-2">
                    {isHindi ? 'अभी भी सवाल हैं?' : 'Still Have Questions?'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isHindi 
                      ? 'हमारी प्रवेश टीम आपकी सहायता के लिए तत्पर है।'
                      : 'Our admission team is ready to help you.'}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="tel:+918887581023" className="flex items-center text-amber-600 hover:text-amber-800">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      {isHindi ? 'हमें कॉल करें' : 'Call Us'}
                    </a>
                    <a href="mailto:admissions@example.com" className="flex items-center text-amber-600 hover:text-amber-800">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      {isHindi ? 'ईमेल करें' : 'Email Us'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Admissions;
