import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import { useLanguage } from '../LanguageContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Faculty page displays information about the school's teachers and staff.
 * Uses the Container component for consistent layout with other pages.
 */
const Faculty = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Faculty categories
  const categories = [
    { id: 'all', name: isHindi ? 'सभी' : 'All' },
    { id: 'administration', name: isHindi ? 'प्रशासन' : 'Administration' },
    { id: 'science', name: isHindi ? 'विज्ञान विभाग' : 'Science Department' },
    { id: 'humanities', name: isHindi ? 'मानविकी विभाग' : 'Humanities Department' },
    { id: 'mathematics', name: isHindi ? 'गणित विभाग' : 'Mathematics Department' },
    { id: 'sports', name: isHindi ? 'खेल विभाग' : 'Sports Department' },
  ];

  // Sample faculty data
  const facultyMembers = [
    {
      id: 1,
      name: isHindi ? 'नंदिनी पाण्डेय' : 'Nandini Pandey',
      position: isHindi ? 'प्रिंसिपल' : 'Principal',
      qualification: 'M.Ed., Ph.D.',
      experience: isHindi ? '20+ वर्षों का अनुभव' : '20+ years of experience',
      category: 'administration',
      image: '/images/Principal.jpg',
      specialization: isHindi ? 'शिक्षा प्रशासन, नेतृत्व विकास' : 'Educational Administration, Leadership Development',
      bio: isHindi 
        ? 'डॉ. नंदिनी पांडे एक अनुभवी शिक्षाविद हैं जिन्होंने शिक्षा प्रशासन में 20 से अधिक वर्षों का अनुभव हासिल किया है। वह 2015 से हमारे स्कूल की प्रिंसिपल के रूप में कार्यरत हैं और इस दौरान स्कूल ने कई उल्लेखनीय उपलब्धियां हासिल की हैं।'
        : 'Dr. Nandini Pandey is an experienced educator with more than 20 years of experience in educational administration. She has been serving as the Principal of our school since 2015, during which the school has achieved numerous notable accomplishments.'
    },
    {
      id: 2,
      name: isHindi ? 'रश्मि गुप्ता' : 'Rashmi Gupta',
      position: isHindi ? 'वरिष्ठ विज्ञान शिक्षक' : 'Senior Science Teacher',
      qualification: 'M.Sc., B.Ed.',
      experience: isHindi ? '15+ वर्षों का अनुभव' : '15+ years of experience',
      category: 'science',
      image: '/images/Teachers.jpg',
      specialization: isHindi ? 'रसायन विज्ञान, प्रयोगात्मक शिक्षा' : 'Chemistry, Experimental Education',
      bio: isHindi
        ? 'श्रीमती रश्मि गुप्ता एक समर्पित विज्ञान शिक्षक हैं जो छात्रों के बीच वैज्ञानिक सोच और प्रयोगात्मक अध्ययन को प्रोत्साहित करने के लिए जानी जाती हैं। उनके मार्गदर्शन में कई छात्राओं ने राज्य स्तरीय विज्ञान प्रतियोगिताओं में पुरस्कार जीते हैं।'
        : 'Mrs. Rashmi Gupta is a dedicated science teacher known for fostering scientific thinking and experimental learning among students. Under her guidance, many students have won awards in state-level science competitions.'
    },
    {
      id: 3,
      name: isHindi ? 'संजय त्रिपाठी' : 'Sanjay Tripathi',
      position: isHindi ? 'गणित विभाग प्रमुख' : 'Head of Mathematics Department',
      qualification: 'M.Math., B.Ed.',
      experience: isHindi ? '12+ वर्षों का अनुभव' : '12+ years of experience',
      category: 'mathematics',
      image: '/images/Teachers.jpg',
      specialization: isHindi ? 'उच्च गणित, अंकगणित' : 'Advanced Mathematics, Arithmetic',
      bio: isHindi
        ? 'श्री संजय त्रिपाठी एक उत्कृष्ट गणित शिक्षक हैं जो जटिल गणितीय अवधारणाओं को सरल और आकर्षक तरीके से समझाने की क्षमता के लिए जाने जाते हैं। उन्होंने गणित विषय में स्कूल के प्रदर्शन को बढ़ाने में महत्वपूर्ण भूमिका निभाई है।'
        : 'Mr. Sanjay Tripathi is an excellent mathematics teacher known for his ability to explain complex mathematical concepts in simple and engaging ways. He has played a significant role in improving the school\'s performance in the subject of mathematics.'
    },
    {
      id: 4,
      name: isHindi ? 'प्रीति शर्मा' : 'Preeti Sharma',
      position: isHindi ? 'अंग्रेजी शिक्षिका' : 'English Teacher',
      qualification: 'M.A. (English), B.Ed.',
      experience: isHindi ? '8+ वर्षों का अनुभव' : '8+ years of experience',
      category: 'humanities',
      image: '/images/Teachers.jpg',
      specialization: isHindi ? 'अंग्रेजी साहित्य, भाषा कौशल' : 'English Literature, Language Skills',
      bio: isHindi
        ? 'श्रीमती प्रीति शर्मा छात्रों में अंग्रेजी भाषा और साहित्य के प्रति प्रेम जगाने के लिए जानी जाती हैं। वे नवीन शिक्षण विधियों का उपयोग करके छात्रों में संचार कौशल विकसित करने पर ज़ोर देती हैं।'
        : 'Mrs. Preeti Sharma is known for instilling a love for English language and literature among students. She emphasizes developing communication skills in students using innovative teaching methods.'
    },
    {
      id: 5,
      name: isHindi ? 'राजीव कुमार' : 'Rajeev Kumar',
      position: isHindi ? 'शारीरिक शिक्षा प्रशिक्षक' : 'Physical Education Instructor',
      qualification: 'M.P.Ed.',
      experience: isHindi ? '10+ वर्षों का अनुभव' : '10+ years of experience',
      category: 'sports',
      image: '/images/Teachers.jpg',
      specialization: isHindi ? 'एथलेटिक्स, टीम स्पोर्ट्स' : 'Athletics, Team Sports',
      bio: isHindi
        ? 'श्री राजीव कुमार एक उत्साही खेल प्रशिक्षक हैं जो छात्रों में टीम वर्क और खेल भावना विकसित करने के लिए प्रतिबद्ध हैं। उनके मार्गदर्शन में हमारी स्कूल टीमों ने जिला और राज्य स्तर पर कई खेल प्रतियोगिताओं में भाग लिया है।'
        : 'Mr. Rajeev Kumar is an enthusiastic sports instructor committed to developing teamwork and sportsmanship in students. Under his guidance, our school teams have participated in various sports competitions at district and state levels.'
    },
    {
      id: 6,
      name: isHindi ? 'अंजलि वर्मा' : 'Anjali Verma',
      position: isHindi ? 'भौतिकी शिक्षिका' : 'Physics Teacher',
      qualification: 'M.Sc. (Physics), B.Ed.',
      experience: isHindi ? '7+ वर्षों का अनुभव' : '7+ years of experience',
      category: 'science',
      image: '/images/Teachers.jpg',
      specialization: isHindi ? 'भौतिकी, STEM शिक्षा' : 'Physics, STEM Education',
      bio: isHindi
        ? 'श्रीमती अंजलि वर्मा एक प्रेरणादायक भौतिकी शिक्षिका हैं जो छात्रों को वैज्ञानिक अवधारणाओं का व्यावहारिक अनुप्रयोग समझने में मदद करती हैं। वे अपनी कक्षाओं में प्रयोगात्मक और प्रोजेक्ट-आधारित शिक्षण पद्धति अपनाती हैं।'
        : 'Mrs. Anjali Verma is an inspiring physics teacher who helps students understand practical applications of scientific concepts. She adopts an experimental and project-based teaching methodology in her classes.'
    },
  ];

  // Filter faculty members based on selected category
  const filteredFacultyMembers = activeCategory === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.category === activeCategory);

  const handleFacultyClick = (faculty) => {
    setSelectedFaculty(faculty);
  };

  const closeModal = () => {
    setSelectedFaculty(null);
  };

  return (
    <Container>
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up">
            {isHindi ? 'हमारे संकाय सदस्य' : 'Our Faculty Members'}
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          
          <p className="text-center mb-10 max-w-3xl mx-auto text-gray-600" data-aos="fade-up" data-aos-delay="200">
            {isHindi 
              ? 'हमारे स्कूल में अनुभवी और समर्पित शिक्षकों की एक टीम है जो छात्रों को सर्वांगीण विकास के लिए प्रेरित करते हैं। हर शिक्षक अपने विषय में विशेषज्ञ है और शैक्षिक उत्कृष्टता के प्रति प्रतिबद्ध है।' 
              : 'Our school has a team of experienced and dedicated teachers who inspire students for holistic development. Every teacher is an expert in their subject and committed to academic excellence.'}
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="300">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacultyMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => handleFacultyClick(member)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                    {categories.find(cat => cat.id === member.category).name}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-1">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.qualification}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{member.experience}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{isHindi ? 'विशेषज्ञता' : 'Specialization'}</h4>
                    <p className="text-sm text-gray-600 mt-1">{member.specialization}</p>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFacultyClick(member);
                    }}
                    className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                  >
                    {isHindi ? 'और अधिक जानें' : 'Learn more'}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredFacultyMembers.length === 0 && (
            <div className="text-center py-10">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">{isHindi ? 'कोई परिणाम नहीं मिला' : 'No results found'}</h3>
              <p className="mt-1 text-sm text-gray-500">
                {isHindi 
                  ? 'इस श्रेणी में कोई संकाय सदस्य नहीं है।' 
                  : 'There are no faculty members in this category.'}
              </p>
            </div>
          )}
        </div>
        
        {/* Staff Statistics */}
        <div className="mt-20 bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-xl py-10 px-6 max-w-5xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            {isHindi ? 'हमारे शिक्षक - एक नज़र में' : 'Our Teachers - At a Glance'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
              <p className="text-indigo-200">{isHindi ? 'अनुभवी शिक्षक' : 'Experienced Teachers'}</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">80%</div>
              <p className="text-indigo-200">{isHindi ? 'स्नातकोत्तर शिक्षक' : 'Postgraduate Teachers'}</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">12:1</div>
              <p className="text-indigo-200">{isHindi ? 'शिक्षक-छात्र अनुपात' : 'Teacher-Student Ratio'}</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-indigo-200">{isHindi ? 'औसत अनुभव (वर्षों में)' : 'Avg. Experience (Years)'}</p>
            </div>
          </div>
        </div>
        
        {/* Join Our Team Section */}
        <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-indigo-100" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-4">{isHindi ? 'हमारी टीम से जुड़ें' : 'Join Our Team'}</h2>
          <p className="text-center text-gray-600 mb-6">
            {isHindi 
              ? 'हम हमेशा प्रेरित और योग्य शिक्षकों की तलाश में रहते हैं जो हमारे छात्रों के विकास में योगदान दे सकें।' 
              : 'We are always looking for motivated and qualified teachers who can contribute to the growth of our students.'}
          </p>
          <div className="text-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-md transition duration-200">
              {isHindi ? 'करियर अवसरों को देखें' : 'View Career Opportunities'}
            </button>
          </div>
        </div>
      </section>
      
      {/* Faculty Detail Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
              <h3 className="text-lg font-bold text-gray-900">{selectedFaculty.name}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img 
                    src={selectedFaculty.image} 
                    alt={selectedFaculty.name} 
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-square"
                  />
                  
                  <div className="mt-4 bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800">{isHindi ? 'विवरण' : 'Details'}</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">{isHindi ? 'पद' : 'Position'}:</span>
                        <span className="text-sm font-medium text-gray-800">{selectedFaculty.position}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">{isHindi ? 'योग्यता' : 'Qualification'}:</span>
                        <span className="text-sm font-medium text-gray-800">{selectedFaculty.qualification}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">{isHindi ? 'अनुभव' : 'Experience'}:</span>
                        <span className="text-sm font-medium text-gray-800">{selectedFaculty.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">{isHindi ? 'विभाग' : 'Department'}:</span>
                        <span className="text-sm font-medium text-gray-800">
                          {categories.find(cat => cat.id === selectedFaculty.category).name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                    {isHindi ? 'परिचय' : 'Biography'}
                  </h4>
                  <p className="text-gray-700 mb-4">{selectedFaculty.bio}</p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                      {isHindi ? 'विशेषज्ञता' : 'Specialization'}
                    </h4>
                    <p className="text-gray-700 mb-4">{selectedFaculty.specialization}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                      {isHindi ? 'शिक्षण दर्शन' : 'Teaching Philosophy'}
                    </h4>
                    <p className="text-gray-700">
                      {isHindi 
                        ? 'मेरा मानना है कि प्रत्येक छात्र अद्वितीय है और उनके पास विकास की असीमित क्षमता है। मेरा लक्ष्य हमेशा एक ऐसा वातावरण बनाना रहा है जहां छात्र अपनी पूरी क्षमता का एहसास कर सकें।'
                        : 'I believe that each student is unique and has unlimited potential for growth. My goal has always been to create an environment where students can realize their full potential.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button 
                onClick={closeModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md px-4 py-2 transition duration-200"
              >
                {isHindi ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Faculty;