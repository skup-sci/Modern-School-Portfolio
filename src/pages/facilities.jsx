import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import { useLanguage } from '../LanguageContext';
import SchoolFacilities from '../components/SchoolFacilitiesNew';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Facilities page to showcase school infrastructure and amenities.
 * Uses the Container component for consistent layout with other pages.
 */
const Facilities = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  const [activeTab, setActiveTab] = useState('infrastructure');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Facilities categories
  const categories = [
    {
      id: 'infrastructure',
      name: isHindi ? 'बुनियादी ढाँचा' : 'Infrastructure',
    },
    {
      id: 'academic',
      name: isHindi ? 'शैक्षिक सुविधाएँ' : 'Academic Facilities',
    },
    {
      id: 'sports',
      name: isHindi ? 'खेल सुविधाएँ' : 'Sports Facilities',
    },
    {
      id: 'other',
      name: isHindi ? 'अन्य सुविधाएँ' : 'Other Amenities',
    },
  ];

  // Detailed facilities data
  const facilitiesData = {
    infrastructure: [
      {
        title: isHindi ? 'आधुनिक भवन' : 'Modern Building',
        description: isHindi 
          ? 'हमारा स्कूल एक आधुनिक और सुरक्षित भवन में स्थित है जिसमें हवादार कक्षाएं, विशाल गलियारे और उचित प्रकाश व्यवस्था है।'
          : 'Our school is housed in a modern and secure building with well-ventilated classrooms, spacious corridors, and proper lighting.',
        image: 'https://images.unsplash.com/photo-1599725055007-2f1863e342e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? '30,000 वर्ग फुट का क्षेत्रफल' : '30,000 sq. ft. area',
          isHindi ? 'भूकंपरोधी डिज़ाइन' : 'Earthquake-resistant design',
          isHindi ? 'प्रत्येक मंजिल पर अग्नि सुरक्षा उपकरण' : 'Fire safety equipment on each floor',
        ]
      },
      {
        title: isHindi ? 'डिजिटल कक्षाएं' : 'Digital Classrooms',
        description: isHindi 
          ? 'हमारे सभी कक्षाएँ स्मार्ट बोर्ड और मल्टीमीडिया प्रोजेक्टर से सुसज्जित हैं जो अध्यापन को अधिक प्रभावी और अंतरक्रियात्मक बनाते हैं।'
          : 'All our classrooms are equipped with smart boards and multimedia projectors that make teaching more effective and interactive.',
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'इंटरएक्टिव स्मार्ट बोर्ड' : 'Interactive smart boards',
          isHindi ? 'एंड्रॉइड/विंडोज उपकरण' : 'Android/Windows device support',
          isHindi ? 'उच्च गुणवत्ता वाले ऑडियो सिस्टम' : 'High-quality audio systems',
        ]
      },
      {
        title: isHindi ? 'कैंटीन' : 'Cafeteria',
        description: isHindi
          ? 'हमारी कैंटीन स्वच्छ और स्वास्थ्यवर्धक भोजन प्रदान करती है। यहां छात्रों को पौष्टिक और संतुलित आहार मिलता है।'
          : 'Our cafeteria provides clean and healthy food. Students get nutritious and balanced diet here.',
        image: 'https://images.unsplash.com/photo-1544018531-76c69ae77fbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'पौष्टिक भोजन मेनू' : 'Nutritious food menu',
          isHindi ? 'स्वच्छ और हाइजीनिक वातावरण' : 'Clean and hygienic environment',
          isHindi ? '200 छात्रों की बैठने की क्षमता' : 'Seating capacity for 200 students',
        ]
      },
    ],
    academic: [
      {
        title: isHindi ? 'पुस्तकालय' : 'Library',
        description: isHindi
          ? 'हमारा पुस्तकालय 10,000 से अधिक पुस्तकों, पत्रिकाओं और डिजिटल संसाधनों से सुसज्जित है। यह अध्ययन और अनुसंधान के लिए एक शांत स्थान प्रदान करता है।'
          : 'Our library is stocked with over 10,000 books, periodicals, and digital resources. It provides a quiet space for study and research.',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? '10,000+ पुस्तकें और संसाधन' : '10,000+ books and resources',
          isHindi ? 'ई-लाइब्रेरी की सुविधा' : 'E-library facility',
          isHindi ? 'शांत अध्ययन क्षेत्र' : 'Quiet study areas',
        ]
      },
      {
        title: isHindi ? 'विज्ञान प्रयोगशालाएँ' : 'Science Laboratories',
        description: isHindi
          ? 'हमारे पास भौतिकी, रसायन विज्ञान और जीव विज्ञान के लिए अलग-अलग प्रयोगशालाएँ हैं जो आधुनिक उपकरणों से सुसज्जित हैं।'
          : 'We have separate laboratories for Physics, Chemistry, and Biology equipped with modern equipment.',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'अत्याधुनिक प्रयोगशाला उपकरण' : 'State-of-the-art laboratory equipment',
          isHindi ? 'प्रशिक्षित लैब सहायक' : 'Trained lab assistants',
          isHindi ? 'सुरक्षा उपकरण और प्रोटोकॉल' : 'Safety equipment and protocols',
        ]
      },
      {
        title: isHindi ? 'कंप्यूटर लैब' : 'Computer Lab',
        description: isHindi
          ? 'हमारा कंप्यूटर लैब नवीनतम हार्डवेयर और सॉफ्टवेयर से लैस है, ताकि छात्रों को डिजिटल दुनिया के लिए तैयार किया जा सके।'
          : 'Our computer lab is equipped with the latest hardware and software to prepare students for the digital world.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? '50 से अधिक कंप्यूटर वर्कस्टेशन' : '50+ computer workstations',
          isHindi ? 'हाई-स्पीड इंटरनेट' : 'High-speed internet',
          isHindi ? 'कोडिंग और रोबोटिक्स सुविधाएँ' : 'Coding and robotics facilities',
        ]
      },
      {
        title: isHindi ? 'स्मार्ट क्लासरूम' : 'Smart Classrooms',
        description: isHindi 
          ? 'हमारे स्मार्ट क्लासरूम मल्टीमीडिया शिक्षण के साथ एक इंटरैक्टिव लर्निंग एनवायरनमेंट प्रदान करते हैं।'
          : 'Our smart classrooms provide an interactive learning environment with multimedia teaching.',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'इंटरैक्टिव व्हाइटबोर्ड' : 'Interactive whiteboards',
          isHindi ? 'डिजिटल लर्निंग टूल्स' : 'Digital learning tools',
          isHindi ? 'ऑनलाइन संसाधनों तक पहुँच' : 'Access to online resources',
        ]
      },
    ],
    sports: [
      {
        title: isHindi ? 'विशाल खेल मैदान' : 'Spacious Playground',
        description: isHindi
          ? 'हमारे पास एक विशाल खेल मैदान है जहां विभिन्न आउटडोर खेल और गतिविधियां आयोजित की जाती हैं।'
          : 'We have a spacious playground where various outdoor sports and activities are conducted.',
        image: 'https://images.unsplash.com/photo-1587590227264-0a3bc3866ce9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'फुटबॉल और क्रिकेट मैदान' : 'Football and cricket fields',
          isHindi ? 'एथलेटिक्स ट्रैक' : 'Athletics track',
          isHindi ? 'आउटडोर खेल क्षेत्र' : 'Outdoor play areas',
        ]
      },
      {
        title: isHindi ? 'इंडोर खेल हॉल' : 'Indoor Sports Hall',
        description: isHindi
          ? 'हमारे इंडोर खेल हॉल में बैडमिंटन, टेबल टेनिस, शतरंज और अन्य इंडोर खेलों के लिए सुविधाएँ हैं।'
          : 'Our indoor sports hall has facilities for badminton, table tennis, chess, and other indoor games.',
        image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'बैडमिंटन कोर्ट' : 'Badminton courts',
          isHindi ? 'टेबल टेनिस टेबल्स' : 'Table tennis tables',
          isHindi ? 'शतरंज और कैरम बोर्ड' : 'Chess and carrom boards',
        ]
      },
      {
        title: isHindi ? 'योग और व्यायाम केंद्र' : 'Yoga and Fitness Center',
        description: isHindi
          ? 'छात्रों के शारीरिक और मानसिक स्वास्थ्य के लिए नियमित योग और व्यायाम सत्र आयोजित किए जाते हैं।'
          : 'Regular yoga and exercise sessions are conducted for the physical and mental well-being of students.',
        image: 'https://images.unsplash.com/photo-1599447421416-3414256d6574?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'योग्य प्रशिक्षकों द्वारा मार्गदर्शन' : 'Guidance by qualified instructors',
          isHindi ? 'आधुनिक फिटनेस उपकरण' : 'Modern fitness equipment',
          isHindi ? 'शांत और हवादार योग हॉल' : 'Calm and airy yoga hall',
        ]
      },
    ],
    other: [
      {
        title: isHindi ? 'संगीत कक्ष' : 'Music Room',
        description: isHindi
          ? 'हमारा संगीत कक्ष विभिन्न वाद्य यंत्रों और ध्वनि प्रणालियों से सुसज्जित है जहां छात्र संगीत सीखते और अभ्यास करते हैं।'
          : 'Our music room is equipped with various musical instruments and sound systems where students learn and practice music.',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'विभिन्न वाद्य यंत्र' : 'Various musical instruments',
          isHindi ? 'ध्वनिरोधी दीवारें' : 'Soundproof walls',
          isHindi ? 'संगीत प्रदर्शन क्षेत्र' : 'Music performance area',
        ]
      },
      {
        title: isHindi ? 'कला और शिल्प केंद्र' : 'Arts and Crafts Center',
        description: isHindi
          ? 'हमारा कला और शिल्प केंद्र छात्रों की रचनात्मकता को बढ़ावा देता है और उन्हें अपने कौशल को विकसित करने का अवसर प्रदान करता है।'
          : 'Our arts and crafts center promotes creativity in students and provides them an opportunity to develop their skills.',
        image: 'https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'कला सामग्री और उपकरण' : 'Art materials and tools',
          isHindi ? 'प्रदर्शन क्षेत्र' : 'Exhibition area',
          isHindi ? 'कला प्रशिक्षण सत्र' : 'Art training sessions',
        ]
      },
      {
        title: isHindi ? 'मेडिकल रूम' : 'Medical Room',
        description: isHindi
          ? 'हमारे पास एक अच्छी तरह से सुसज्जित मेडिकल रूम है जहां आपातकालीन स्थिति में प्राथमिक चिकित्सा प्रदान की जाती है।'
          : 'We have a well-equipped medical room where first aid is provided in case of emergency.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'प्रशिक्षित नर्स उपलब्ध' : 'Trained nurse available',
          isHindi ? 'आपातकालीन दवाएं' : 'Emergency medications',
          isHindi ? 'नजदीकी अस्पताल से संबद्धता' : 'Affiliation with nearby hospital',
        ]
      },
      {
        title: isHindi ? 'परिवहन सेवा' : 'Transportation Service',
        description: isHindi
          ? 'हम छात्रों के लिए सुरक्षित और आरामदायक परिवहन सेवाएं प्रदान करते हैं। सभी बसों में सुरक्षा उपकरण और जीपीएस ट्रैकिंग सिस्टम है।'
          : 'We provide safe and comfortable transportation services for students. All buses have safety equipment and GPS tracking systems.',
        image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        highlights: [
          isHindi ? 'अनुभवी चालक और सहायक' : 'Experienced drivers and attendants',
          isHindi ? 'जीपीएस ट्रैकिंग सिस्टम' : 'GPS tracking system',
          isHindi ? 'सुरक्षा प्रोटोकॉल' : 'Safety protocols',
        ]
      },
    ],
  };

  // Virtual tour data
  const virtualTourPoints = [
    {
      title: isHindi ? 'स्कूल का प्रवेश द्वार' : 'School Entrance',
      description: isHindi 
        ? 'स्कूल का मुख्य प्रवेश द्वार जहां से विद्यार्थियों का दिन शुरू होता है।'
        : 'The main entrance of the school where the day begins for students.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: isHindi ? 'प्रार्थना और सभा क्षेत्र' : 'Prayer and Assembly Area',
      description: isHindi 
        ? 'यहां प्रतिदिन प्रार्थना और महत्वपूर्ण घोषणाएं होती हैं।'
        : 'Daily prayers and important announcements are made here.',
      image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: isHindi ? 'खेल मैदान' : 'Playground',
      description: isHindi 
        ? 'विशाल खेल मैदान जहां छात्राएं विभिन्न खेलों का आनंद लेती हैं।'
        : 'Spacious playground where students enjoy various sports.',
      image: 'https://images.unsplash.com/photo-1533230058256-3ba67de75fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: isHindi ? 'पुस्तकालय' : 'Library',
      description: isHindi 
        ? 'ज्ञान का भंडार जहां छात्राएं पढ़ने और अध्ययन का आनंद लेती हैं।'
        : 'Treasury of knowledge where students enjoy reading and studying.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <Container>
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up">
            {isHindi ? 'हमारी सुविधाएँ' : 'Our Facilities'}
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600" data-aos="fade-up" data-aos-delay="200">
            {isHindi 
              ? 'हमारा विद्यालय छात्रों के समग्र विकास के लिए अत्याधुनिक सुविधाओं से सुसज्जित है। यहां हम छात्रों को सर्वोत्तम शिक्षा प्रदान करने के लिए प्रतिबद्ध हैं।'
              : 'Our school is equipped with state-of-the-art facilities for the holistic development of students. We are committed to providing the best education to our students here.'}
          </p>

          {/* School Facilities Component */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="300">
            <SchoolFacilities />
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="300">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Facilities Content */}
          <div className="mb-16">
            {categories.map((category) => (
              activeTab === category.id && (
                <div key={category.id}>
                  {facilitiesData[category.id].map((facility, index) => (
                    <div 
                      key={index} 
                      className={`flex flex-col ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } mb-16 bg-white rounded-lg shadow-md overflow-hidden`}
                      data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                      data-aos-delay={index * 100}
                    >
                      <div className="md:w-1/2">
                        <img 
                          src={facility.image} 
                          alt={facility.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4 text-amber-700">{facility.title}</h2>
                        <p className="text-gray-600 mb-4">{facility.description}</p>
                        
                        <div className="mt-2">
                          <h3 className="font-semibold text-amber-700 mb-2">
                            {isHindi ? 'विशेषताएं' : 'Highlights'}:
                          </h3>
                          <ul className="space-y-2">
                            {facility.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>
          
          {/* Virtual Tour Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-amber-700" data-aos="fade-up">
              {isHindi ? 'वर्चुअल टूर' : 'Virtual Tour'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {virtualTourPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg shadow-md group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img 
                    src={point.image} 
                    alt={point.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-white/80">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-md transition duration-200 flex items-center mx-auto">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                {isHindi ? 'पूरा वर्चुअल टूर देखें' : 'View Complete Virtual Tour'}
              </button>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="bg-amber-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-amber-700" data-aos="fade-up">
              {isHindi ? 'हमारी सुविधाओं के बारे में अभिभावकों की राय' : 'Parent Testimonials About Our Facilities'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-right">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold">{isHindi ? 'श्रीमती शर्मा' : 'Mrs. Sharma'}</h3>
                    <p className="text-sm text-gray-500">{isHindi ? 'कक्षा 8 की छात्रा की माता' : 'Mother of Class 8 Student'}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  {isHindi 
                    ? '"स्कूल की प्रयोगशालाएँ अत्यधिक प्रभावशाली हैं। मेरी बेटी अब विज्ञान विषयों में अधिक रुचि दिखा रही है क्योंकि वह प्रयोग करके अवधारणाएं सीख रही है।"'
                    : '"The school laboratories are highly impressive. My daughter is now showing more interest in science subjects because she\'s learning concepts through experiments."'}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl mr-4">
                    R
                  </div>
                  <div>
                    <h3 className="font-bold">{isHindi ? 'श्री रामेश' : 'Mr. Ramesh'}</h3>
                    <p className="text-sm text-gray-500">{isHindi ? 'कक्षा 5 की छात्रा के पिता' : 'Father of Class 5 Student'}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  {isHindi 
                    ? '"डिजिटल क्लासरूम की सुविधा बहुत अच्छी है। मेरी बेटी हर दिन स्कूल जाने के लिए उत्साहित रहती है और घर आकर अपनी कक्षा की गतिविधियों के बारे में बताती है।"'
                    : '"The digital classroom facility is excellent. My daughter is excited to go to school every day and comes home talking about her classroom activities."'}
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div 
            className="bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-lg p-8 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4">
              {isHindi ? 'हमारी सुविधाओं को स्वयं देखें' : 'See Our Facilities In Person'}
            </h2>
            <p className="mb-6 max-w-3xl mx-auto">
              {isHindi 
                ? 'हमारे स्कूल का दौरा करें और हमारी अत्याधुनिक सुविधाओं को स्वयं देखें। हम आपका स्वागत करने के लिए तत्पर हैं।'
                : 'Visit our school and see our state-of-the-art facilities in person. We are eager to welcome you.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="bg-white text-amber-700 hover:bg-amber-100 font-medium px-6 py-2 rounded-md transition duration-200 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {isHindi ? 'भेंट के लिए समय निर्धारित करें' : 'Schedule a Visit'}
              </a>
              <a href="#" className="border border-white text-white hover:bg-white hover:text-amber-700 font-medium px-6 py-2 rounded-md transition duration-200 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                {isHindi ? 'हमसे संपर्क करें' : 'Contact Us'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Facilities;
