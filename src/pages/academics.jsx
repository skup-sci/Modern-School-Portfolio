import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../LanguageContext.jsx';
import Container from '../components/Container';

const AcademicsPage = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  const [curriculumActiveIndex, setCurriculumActiveIndex] = useState(0);
  const [quickInfoActiveIndex, setQuickInfoActiveIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('curriculum');
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const curriculum = [
    {
      title: isHindi ? '📚 प्राथमिक कक्षाएं (कक्षा 1-5)' : '📚 Primary Classes (Grade 1-5)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="/images/classroom.jpg" alt="Primary Classroom" className="w-full h-32 object-cover mb-4 rounded-md shadow-md" />
            <ul className="space-y-2 text-gray-800">
              {isHindi ? (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>भाषा कौशल:</strong> हिंदी, अंग्रेजी, सामान्य ज्ञान</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>गणित:</strong> नंबर सिस्टम, बुनियादी गणित कौशल</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>पर्यावरण अध्ययन:</strong> प्रकृति, समाज और विज्ञान की बुनियादी अवधारणाएँ</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Language Skills:</strong> Hindi, English, General Knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Mathematics:</strong> Number system, basic math skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Environmental Studies:</strong> Basic concepts of nature, society and science</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">{isHindi ? 'शिक्षण पद्धति' : 'Teaching Methodology'}</h4>
            <ul className="space-y-2 text-gray-800">
              {isHindi ? (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>खेल-आधारित सीखने की गतिविधियाँ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>समूह परियोजनाएँ और प्रस्तुतियाँ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>दैनिक कक्षा में मनोरंजक गतिविधियाँ</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Play-based learning activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Group projects and presentations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Fun activities in daily classroom routine</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: isHindi ? '📘 माध्यमिक कक्षाएं (कक्षा 6-8)' : '📘 Middle Classes (Grade 6-8)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="/images/Gallery5.jpg" alt="Middle School" className="w-full h-32 object-cover mb-4 rounded-md shadow-md" />
            <ul className="space-y-2 text-gray-800">
              {isHindi ? (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>विषय:</strong> हिंदी, अंग्रेजी, गणित, विज्ञान, सामाजिक विज्ञान, संस्कृत</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>प्रौद्योगिकी:</strong> कंप्यूटर विज्ञान की मूल बातें</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>कला और संस्कृति:</strong> नृत्य, संगीत, चित्रकला</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Subjects:</strong> Hindi, English, Mathematics, Science, Social Science, Sanskrit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Technology:</strong> Fundamentals of Computer Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Arts & Culture:</strong> Dance, Music, Painting</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">{isHindi ? 'शिक्षण पद्धति' : 'Teaching Methodology'}</h4>
            <ul className="space-y-2 text-gray-800">
              {isHindi ? (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>प्रयोगात्मक सीखने के लिए अन्वेषण-आधारित शिक्षाशास्त्र</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>प्रयोगशालाओं में व्यावहारिक सत्र</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>डिजिटल शिक्षण सामग्री के साथ एकीकृत अध्ययन</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Inquiry-based pedagogy for experiential learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Practical sessions in laboratories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Integrated study with digital learning materials</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: isHindi ? '📚 हाईस्कूल (कक्षा 9-10)' : '📚 High School (Grade 9-10)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="/images/classroom.jpg" alt="High School" className="w-full h-32 object-cover mb-4 rounded-md shadow-md" />
            <ul className="space-y-2 text-gray-800">
              {isHindi ? (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>अनिवार्य विषय:</strong> हिंदी, अंग्रेजी, गणित, विज्ञान, सामाजिक विज्ञान</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>वैकल्पिक विषय:</strong> कंप्यूटर विज्ञान, कला</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>जीवन कौशल:</strong> सामाजिक और भावनात्मक शिक्षा</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Compulsory Subjects:</strong> Hindi, English, Mathematics, Science, Social Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Optional Subjects:</strong> Computer Science, Arts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Life Skills:</strong> Social and Emotional Learning</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">{isHindi ? 'परीक्षा और मूल्यांकन' : 'Exams & Assessment'}</h4>
            <ul className="space-y-2 text-gray-800">
              {isHindi ? (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>यूपी बोर्ड परीक्षा के लिए तैयारी</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>नियमित अभ्यास परीक्षाएँ और पूर्वाभ्यास परीक्षाएँ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>विषयवार अतिरिक्त कक्षाएँ</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Preparation for UP Board examination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Regular practice tests and mock exams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Subject-wise extra classes</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: isHindi ? '📝 इंटर कॉलेज (कक्षा 11-12)' : '📝 Inter College (Grade 11-12)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="/images/Gallery4.jpg" alt="Inter College" className="w-full h-32 object-cover mb-4 rounded-md shadow-md" />
            <h4 className="font-semibold text-orange-600 mb-2">{isHindi ? 'उपलब्ध स्ट्रीम' : 'Available Streams'}</h4>
            <ul className="space-y-2 text-gray-800">
              {isHindi ? (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>विज्ञान:</strong> भौतिकी, रसायन विज्ञान, जीव विज्ञान, गणित</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>कला:</strong> इतिहास, राजनीति विज्ञान, अर्थशास्त्र, भूगोल</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Science:</strong> Physics, Chemistry, Biology, Mathematics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span><strong>Arts:</strong> History, Political Science, Economics, Geography</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">{isHindi ? 'करियर मार्गदर्शन' : 'Career Guidance'}</h4>
            <ul className="space-y-2 text-gray-800">
              {isHindi ? (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>नियमित करियर परामर्श सत्र</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>प्रवेश परीक्षाओं के लिए मार्गदर्शन</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>जीवन कौशल और नेतृत्व विकास</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>विश्वविद्यालयों और कॉलेजों से विशेषज्ञ अतिथि व्याख्यान</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Regular career counseling sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Guidance for entrance examinations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Life skills and leadership development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span> 
                    <span>Expert guest lectures from universities and colleges</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      ),
    },
  ];
  
  const tabs = [
    {
      title: isHindi ? '📚 कक्षाएं' : '📚 Classes',
      content: (
        <div>
          <img src="/images/classroom.jpg" alt="Classroom" className="w-32 mb-4 rounded-md shadow-md" />
          <ul className="space-y-2 text-gray-800">
            {isHindi ? (
              <>
                <li>• <strong>नर्सरी से 8वीं तक:</strong> अंग्रेज़ी माध्यम</li>
                <li>• <strong>8वीं से हाईस्कूल:</strong> हिन्दी माध्यम</li>
              </>
            ) : (
              <>
                <li>• <strong>Nursery to 8th:</strong> English Medium</li>
                <li>• <strong>8th to High School:</strong> Hindi Medium</li>
              </>
            )}
          </ul>
        </div>
      ),
    },
    {
      title: isHindi ? '📅 सत्र 2025–26' : '📅 Session 2025–26',
      content: (
        <div>
          <img src="/images/session.jpg" alt="Session" className="w-32 mb-4" />
          <ul className="space-y-2 text-gray-800">
            {isHindi ? (
              <>
                <li>• यूपी बोर्ड और NEP आधारित NCERT पैटर्न</li>
                <li>• प्रयोगात्मक गतिविधियों पर विशेष ध्यान</li>
              </>
            ) : (
              <>
                <li>• UP Board and NEP-based NCERT pattern</li>
                <li>• Special focus on experiential activities</li>
              </>
            )}
          </ul>
        </div>
      ),
    },
    {
      title: isHindi ? '❓ अक्सर पूछे प्रश्न' : '❓ Frequently Asked Questions',
      content: (
        <div className="text-gray-800 space-y-4">
          <details className="border border-orange-300 rounded-md p-3">
            <summary className="font-semibold cursor-pointer">
              {isHindi ? 'क्या सभी कक्षाओं के लिए NCERT पैटर्न लागू है?' : 'Is the NCERT pattern applicable for all classes?'}
            </summary>
            <p className="mt-2">
              {isHindi 
                ? 'जी हाँ, पूरा पाठ्यक्रम NCERT और नई शिक्षा नीति के अनुसार है।' 
                : 'Yes, the entire curriculum follows NCERT guidelines and the New Education Policy.'}
            </p>
          </details>
          <details className="border border-orange-300 rounded-md p-3">
            <summary className="font-semibold cursor-pointer">
              {isHindi 
                ? 'क्या प्रयोगात्मक गतिविधियाँ सभी क्लासेज़ में होती हैं?' 
                : 'Are practical activities conducted in all classes?'}
            </summary>
            <p className="mt-2">
              {isHindi 
                ? 'जी हाँ, हमारी शिक्षण प्रणाली में प्रैक्टिकल लर्निंग पर विशेष ज़ोर दिया गया है।' 
                : 'Yes, our teaching methodology places special emphasis on practical learning across all grades.'}
            </p>
          </details>
        </div>
      ),
    },
  ];
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-8 sm:py-12">
      <Container>
        {/* Section Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6" data-aos="fade-up">
            <button
              onClick={() => setActiveSection('curriculum')}
              className={`px-4 py-2 rounded-lg font-semibold border transition-all duration-300 ${
                activeSection === 'curriculum'
                  ? 'bg-orange-500 text-white border-orange-600'
                  : 'bg-white text-orange-600 border-orange-400 hover:bg-orange-100'
              }`}
            >
              {isHindi ? 'पाठ्यक्रम' : 'Curriculum'}
            </button>
            <button
              onClick={() => setActiveSection('methodology')}
              className={`px-4 py-2 rounded-lg font-semibold border transition-all duration-300 ${
                activeSection === 'methodology'
                  ? 'bg-orange-500 text-white border-orange-600'
                  : 'bg-white text-orange-600 border-orange-400 hover:bg-orange-100'
              }`}
            >
              {isHindi ? 'शिक्षण पद्धति' : 'Teaching Methodology'}
            </button>
            <button
              onClick={() => setActiveSection('achievements')}
              className={`px-4 py-2 rounded-lg font-semibold border transition-all duration-300 ${
                activeSection === 'achievements'
                  ? 'bg-orange-500 text-white border-orange-600'
                  : 'bg-white text-orange-600 border-orange-400 hover:bg-orange-100'
              }`}
            >
              {isHindi ? 'शैक्षिक उपलब्धियां' : 'Academic Achievements'}
            </button>
          </div>
        </div>

        {/* Curriculum Section */}
        {activeSection === 'curriculum' && (
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-6 sm:mb-8" data-aos="fade-up">
              {isHindi ? '🏫 पाठ्यक्रम' : '🏫 Curriculum'}
            </h2>

            {/* Class Level Tabs */}            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8" data-aos="fade-up">
              {curriculum.map((level, index) => (
                <button
                  key={index}
                  onClick={() => setCurriculumActiveIndex(index)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold border transition-all duration-300 text-sm sm:text-base ${
                    curriculumActiveIndex === index
                      ? 'bg-orange-500 text-white border-orange-600'
                      : 'bg-white text-orange-600 border-orange-400 hover:bg-orange-100'
                  }`}
                >
                  {level.title}
                </button>
              ))}
            </div>

            {/* Class Level Content */}
            <div
              className="bg-white shadow-md p-4 sm:p-6 rounded-xl border border-orange-200 text-left"
              data-aos="zoom-in"
              key={`curriculum-${curriculumActiveIndex}`} // Re-triggers animation when tab changes
            >
              {curriculum[curriculumActiveIndex].content}
            </div>
          </div>
        )}

        {/* Teaching Methodology Section */}
        {activeSection === 'methodology' && (
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-6 sm:mb-8">
              {isHindi ? '🧠 शिक्षण पद्धति' : '🧠 Teaching Methodology'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-md p-5 border border-orange-200" data-aos="fade-up" data-aos-delay="100">
                <div className="h-16 w-16 mx-auto bg-orange-100 rounded-full flex justify-center items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">
                  {isHindi ? 'अनुभवात्मक शिक्षा' : 'Experiential Learning'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isHindi
                    ? 'छात्रों को वास्तविक दुनिया के अनुभवों से सीखने के लिए प्रोत्साहित किया जाता है, प्रयोगात्मक परियोजनाओं और व्यावहारिक प्रयोगों के माध्यम से।'
                    : 'Students are encouraged to learn from real-world experiences through hands-on projects and practical experiments.'}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-md p-5 border border-orange-200" data-aos="fade-up" data-aos-delay="200">
                <div className="h-16 w-16 mx-auto bg-orange-100 rounded-full flex justify-center items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">
                  {isHindi ? 'सहयोगात्मक अधिगम' : 'Collaborative Learning'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isHindi
                    ? 'छात्र समूह परियोजनाओं में काम करते हैं, टीमवर्क विकसित करते हैं, और विविध विचारों के माध्यम से समस्याओं को हल करना सीखते हैं।'
                    : 'Students work on group projects, develop teamwork, and learn to solve problems through diverse perspectives.'}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-md p-5 border border-orange-200" data-aos="fade-up" data-aos-delay="300">
                <div className="h-16 w-16 mx-auto bg-orange-100 rounded-full flex justify-center items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">
                  {isHindi ? 'प्रौद्योगिकी-एकीकृत शिक्षा' : 'Technology-Integrated Education'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isHindi
                    ? 'डिजिटल शिक्षण सामग्री और अनुकूलित अध्ययन अनुभवों के साथ छात्रों को 21वीं सदी के कौशल से लैस करना।'
                    : 'Equipping students with 21st-century skills through digital learning materials and personalized learning experiences.'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-orange-200 text-left mb-6" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-orange-600 mb-4 border-b border-orange-200 pb-2">
                {isHindi ? 'हमारी शिक्षण पद्धति के घटक' : 'Components of Our Teaching Methodology'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-gray-700">
                      {isHindi ? 'समस्या-समाधान आधारित शिक्षा' : 'Problem-solving based learning'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-gray-700">
                      {isHindi ? 'नियमित फ़ील्ड ट्रिप और शैक्षिक यात्राएँ' : 'Regular field trips and educational tours'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-gray-700">
                      {isHindi ? 'उच्च-क्रम सोच कौशल का विकास' : 'Development of higher-order thinking skills'}
                    </span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-gray-700">
                      {isHindi ? 'व्यक्तिगत प्रतिभा की पहचान और प्रोत्साहन' : 'Identification and encouragement of individual talents'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-gray-700">
                      {isHindi ? 'अंतर-अनुशासनात्मक शिक्षण दृष्टिकोण' : 'Interdisciplinary teaching approach'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-gray-700">
                      {isHindi ? 'सतत और व्यापक मूल्यांकन' : 'Continuous and comprehensive evaluation'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Academic Achievements Section */}
        {activeSection === 'achievements' && (
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-6 sm:mb-8">
              {isHindi ? '🏆 शैक्षिक उपलब्धियां' : '🏆 Academic Achievements'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Board Results */}
              <div className="bg-white rounded-xl shadow-md border border-orange-200 overflow-hidden" data-aos="fade-up">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-white">
                  <h3 className="font-bold text-lg">
                    {isHindi ? 'बोर्ड परीक्षा परिणाम 2024' : 'Board Examination Results 2024'}
                  </h3>
                </div>
                <div className="p-5">
                  <div className="flex justify-around items-center mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">98%</div>
                      <p className="text-sm text-gray-600">
                        {isHindi ? 'उत्तीर्ण दर' : 'Pass Rate'}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">85%</div>
                      <p className="text-sm text-gray-600">
                        {isHindi ? 'प्रथम श्रेणी' : 'First Division'}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">12</div>
                      <p className="text-sm text-gray-600">
                        {isHindi ? 'टॉपर्स' : 'Toppers'}
                      </p>
                    </div>
                  </div>                  <p className="text-sm text-gray-700">
                    {isHindi
                      ? 'हमारे विद्यालय की छात्राओं ने लगातार तीसरे वर्ष जिले में सर्वश्रेष्ठ प्रदर्शन किया है।'
                      : 'Our school\'s students have consistently performed the best in the district for the third consecutive year.'}
                  </p>
                </div>
              </div>

              {/* Competition Achievements */}
              <div className="bg-white rounded-xl shadow-md border border-orange-200 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-white">
                  <h3 className="font-bold text-lg">
                    {isHindi ? 'प्रतियोगिता में उपलब्धियां' : 'Competition Achievements'}
                  </h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">🥇</span>
                      <span className="text-gray-700 text-sm">
                        {isHindi
                          ? 'राज्य स्तरीय विज्ञान प्रतियोगिता में प्रथम पुरस्कार (रजनी शर्मा, कक्षा 10)'
                          : 'First Prize in State Level Science Competition (Rajni Sharma, Class 10)'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">🥈</span>
                      <span className="text-gray-700 text-sm">
                        {isHindi
                          ? 'जिला स्तरीय गणित ओलंपियाड में द्वितीय पुरस्कार (प्रिया यादव, कक्षा 9)'
                          : 'Second Prize in District Level Math Olympiad (Priya Yadav, Class 9)'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">🏆</span>
                      <span className="text-gray-700 text-sm">
                        {isHindi
                          ? 'अंतर-विद्यालयी वाद-विवाद प्रतियोगिता में विजेता टीम'
                          : 'Winner Team in Inter-school Debate Competition'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-orange-200" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-orange-600 mb-4 border-b border-orange-200 pb-2 text-left">
                {isHindi ? 'हमारी शीर्ष प्रदर्शक छात्राएं (2024)' : 'Our Top Performing Students (2024)'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Student 1 */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-200 mx-auto mb-3">
                    <img src="/images/Teachers.jpg" alt="Top Student" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-orange-600">
                    {isHindi ? 'अंजलि सिंह' : 'Anjali Singh'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isHindi ? 'कक्षा 12 - 96.5%' : 'Class 12 - 96.5%'}
                  </p>
                </div>
                
                {/* Student 2 */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-200 mx-auto mb-3">
                    <img src="/images/Teachers.jpg" alt="Top Student" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-orange-600">
                    {isHindi ? 'रीना पटेल' : 'Reena Patel'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isHindi ? 'कक्षा 12 - 95.8%' : 'Class 12 - 95.8%'}
                  </p>
                </div>
                
                {/* Student 3 */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-200 mx-auto mb-3">
                    <img src="/images/Teachers.jpg" alt="Top Student" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-orange-600">
                    {isHindi ? 'सोनिया गुप्ता' : 'Sonia Gupta'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isHindi ? 'कक्षा 10 - 97.2%' : 'Class 10 - 97.2%'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Original Fast Info Tabs */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-orange-600 mb-6">{isHindi ? 'त्वरित जानकारी' : 'Quick Information'}</h3>
          
          {/* Tab Buttons */}          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8" data-aos="fade-up">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setQuickInfoActiveIndex(index)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold border transition-all duration-300 text-sm sm:text-base ${
                  quickInfoActiveIndex === index
                    ? 'bg-orange-500 text-white border-orange-600'
                    : 'bg-white text-orange-600 border-orange-400 hover:bg-orange-100'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            className="bg-white shadow-md p-4 sm:p-6 rounded-xl border border-orange-200 text-left"
            data-aos="zoom-in"
            key={`tab-${quickInfoActiveIndex}`} // Re-triggers animation when tab changes
          >
            {tabs[quickInfoActiveIndex].content}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AcademicsPage;
