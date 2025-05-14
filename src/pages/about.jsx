import React from 'react';
import { FaSchool, FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext.jsx';
import Container from '../components/Container';

const About = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  return (
    <Container>
      <section className="bg-white text-gray-800 py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center border-b-2 border-amber-600 pb-2 inline-block mx-auto">
            {isHindi ? 'हमारे बारे में' : 'About Us'}
          </h2>

          {/* Hero Banner */}
          <div className="relative mb-8 md:mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-amber-800">
                  {isHindi 
                    ? 'शहीद पंडित राम प्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज' 
                    : 'Shaheed Pandit Ram Prasad Bismil Smarak Balika Inter College'}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  {isHindi 
                    ? 'पचमा, जमुई पंडित, महराजगंज, उत्तर प्रदेश में स्थित, हमारा संस्थान गुणवत्तापूर्ण शिक्षा और सांस्कृतिक मूल्यों के माध्यम से छात्राओं को सशक्त बनाने के लिए समर्पित है। महान स्वतंत्रता सेनानी पंडित राम प्रसाद बिस्मिल के नाम पर, विद्यालय अपने छात्रों में अनुशासन, देशभक्ति और नेतृत्व विकसित करने का प्रयास करता है।' 
                    : 'Located in Pachma, Jamui Pandit, Maharajganj, Uttar Pradesh, our institution is dedicated to empowering girls through quality education and cultural values. Named after the great freedom fighter Pandit Ram Prasad Bismil, the school strives to build discipline, patriotism, and leadership among its students.'}
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-amber-100 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                  <img 
                    src="/images/Logo_Left.jpg" 
                    alt="School Logo"
                    className="w-40 h-40 md:w-48 md:h-48 object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-10 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-amber-600 pl-3">
              {isHindi ? 'हमारी यात्रा' : 'Our Journey'}
            </h3>
            <div className="relative border-l-4 border-amber-500 ml-4 pl-6">
              <div className="mb-6 relative">
                <div className="absolute -left-8 top-0 bg-white p-1 rounded-full border-2 border-amber-500">
                  <FaSchool className="text-amber-700 text-xl" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  {isHindi ? '2007 – विद्यालय की स्थापना' : '2007 – School Established'}
                </h4>
                <p className="text-gray-700">
                  {isHindi 
                    ? 'ग्रामीण क्षेत्रों में लड़कियों को गुणवत्तापूर्ण शिक्षा प्रदान करने के उद्देश्य से स्थापित।' 
                    : 'Founded with the goal of providing quality education to girls in rural areas.'}
                </p>
              </div>

              <div className="mb-6 relative">
                <div className="absolute -left-8 top-0 bg-white p-1 rounded-full border-2 border-amber-500">
                  <FaUserGraduate className="text-amber-700 text-xl" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  {isHindi ? '2010 – हाई स्कूल अनुमोदन (9वीं और 10वीं)' : '2010 – High School Approval (9th & 10th)'}
                </h4>
                <p className="text-gray-700">
                  {isHindi 
                    ? '9वीं और 10वीं कक्षा के लिए आधिकारिक मान्यता प्राप्त की।' 
                    : 'Received official recognition to run classes for 9th and 10th standard.'}
                </p>
              </div>

              <div className="mb-6 relative">
                <div className="absolute -left-8 top-0 bg-white p-1 rounded-full border-2 border-amber-500">
                  <FaChalkboardTeacher className="text-amber-700 text-xl" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  {isHindi ? '2014 – इंटरमीडिएट अनुमोदन (11वीं और 12वीं)' : '2014 – Intermediate Approval (11th & 12th)'}
                </h4>
                <p className="text-gray-700">
                  {isHindi 
                    ? 'कला और विज्ञान स्ट्रीम के साथ 11वीं और 12वीं की शुरुआत की।' 
                    : 'Started offering 11th and 12th with Arts and Science streams.'}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-0 bg-white p-1 rounded-full border-2 border-amber-500">
                  <FaCalendarAlt className="text-amber-700 text-xl" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  {isHindi ? 'वर्तमान – पूर्ण मान्यता प्राप्त संस्थान' : 'Present – Fully Recognized Institution'}
                </h4>
                <p className="text-gray-700">
                  {isHindi 
                    ? 'उत्तर प्रदेश सरकार द्वारा अनुमोदित, मूल्य आधारित शिक्षा प्रदान करना जारी है।' 
                    : 'Approved by the Government of Uttar Pradesh, continuing to deliver value-based education.'}
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-amber-50 rounded-lg p-6 mb-10 md:mb-16 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <FaQuoteLeft className="text-amber-400 text-3xl mb-4" />
              <p className="text-lg md:text-xl italic text-gray-800 mb-4">
                {isHindi 
                  ? '"शिक्षा वह हथियार है जिसका उपयोग आप दुनिया को बदलने के लिए कर सकते हैं।"' 
                  : '"Education is the most powerful weapon which you can use to change the world."'}
              </p>
              <p className="font-semibold text-amber-800">
                {isHindi ? '— नेल्सन मंडेला' : '— Nelson Mandela'}
              </p>
              <FaQuoteRight className="text-amber-400 text-3xl mt-4" />
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-10 md:mb-16">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-100">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-amber-800 flex items-center">
                <span className="mr-2 text-2xl">🎯</span> 
                {isHindi ? 'हमारा मिशन' : 'Our Mission'}
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>{isHindi ? 'ग्रामीण क्षेत्रों में लड़कियों के लिए गुणवत्तापूर्ण शिक्षा प्रदान करना' : 'Provide quality education for girls in rural areas'}</li>
                <li>{isHindi ? 'आत्मनिर्भरता, नेतृत्व और देशभक्ति को बढ़ावा देना' : 'Promote self-reliance, leadership, and patriotism'}</li>
                <li>{isHindi ? 'भविष्य के लिए तैयार, जिम्मेदार नागरिक का निर्माण करना' : 'Build future-ready, responsible citizens'}</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-100">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-amber-800 flex items-center">
                <span className="mr-2 text-2xl">👁</span>
                {isHindi ? 'हमारी दृष्टि' : 'Our Vision'}
              </h3>
              <p className="text-gray-700">
                {isHindi 
                  ? 'एक समावेशी और सशक्त समाज का निर्माण करना जहां हर लड़की को विकास करने, नेतृत्व करने और शैक्षणिक और जीवन में सफल होने का अवसर हो।' 
                  : 'To create an inclusive and empowered society where every girl has the opportunity to grow, lead, and succeed in academics and life.'}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-100 mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-amber-800 flex items-center">
              <span className="mr-2 text-2xl">💡</span>
              {isHindi ? 'हमारे मूल मूल्य' : 'Our Core Values'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <p className="font-medium text-amber-900">
                  {isHindi ? 'समानता और समर्पण' : 'Equality & Dedication'}
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <p className="font-medium text-amber-900">
                  {isHindi ? 'देशभक्ति और सत्यनिष्ठा' : 'Patriotism & Integrity'}
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <p className="font-medium text-amber-900">
                  {isHindi ? 'शैक्षिक उत्कृष्टता और नवाचार' : 'Academic Excellence & Innovation'}
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <p className="font-medium text-amber-900">
                  {isHindi ? 'संस्कृति और विरासत के लिए सम्मान' : 'Respect for Culture & Heritage'}
                </p>
              </div>
            </div>
          </div>          {/* Leadership */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-amber-600 pl-3">
              {isHindi ? 'हमारा नेतृत्व' : 'Our Leadership'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-amber-100 rounded-full overflow-hidden mb-4">
                  <img src="/images/Principal.jpg" alt="Principal" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-amber-800">
                  {isHindi ? 'नंदिनी पाण्डेय' : 'Nandini Pandey'}
                </h4>
                <p className="text-gray-600">{isHindi ? 'प्रिंसिपल' : 'Principal'}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-amber-100 rounded-full overflow-hidden mb-4">
                  <img src="/images/Founder1.jpg" alt="Manager" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-amber-800">
                  {isHindi ? 'मनोज सिंह' : 'Manoj Singh'}
                </h4>
                <p className="text-gray-600">{isHindi ? 'प्रबंधक' : 'Manager'}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-amber-100 rounded-full overflow-hidden mb-4">
                  <img src="/images/Principal.jpg" alt="Chairman" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-amber-800">
                  {isHindi ? 'रविकांत पटेल' : 'Ravikant Patel'}
                </h4>
                <p className="text-gray-600">{isHindi ? 'अध्यक्ष' : 'Chairman'}</p>
              </div>
            </div>
          </div>
          
          {/* Infrastructure */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-amber-600 pl-3">
              {isHindi ? 'हमारा बुनियादी ढांचा' : 'Our Infrastructure'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-amber-100">
                <div className="h-48 overflow-hidden">
                  <img src="/images/classroom.jpg" alt="Classroom" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">
                    {isHindi ? 'आधुनिक कक्षाएं' : 'Modern Classrooms'}
                  </h4>
                  <p className="text-gray-700">
                    {isHindi 
                      ? 'हमारी सभी कक्षाएं अच्छी तरह से रोशनी और हवादार हैं, जो सीखने के लिए एक सकारात्मक वातावरण प्रदान करती हैं।' 
                      : 'All our classrooms are well-lit and ventilated, providing a positive environment for learning.'}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-amber-100">
                <div className="h-48 overflow-hidden">
                  <img src="/images/Gallery5.jpg" alt="Computer Lab" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">
                    {isHindi ? 'कंप्यूटर प्रयोगशाला' : 'Computer Laboratory'}
                  </h4>
                  <p className="text-gray-700">
                    {isHindi 
                      ? 'आधुनिक कंप्यूटर और इंटरनेट सुविधाओं से लैस एक समर्पित कंप्यूटर प्रयोगशाला।' 
                      : 'A dedicated computer laboratory equipped with modern computers and internet facilities.'}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-amber-100">
                <div className="h-48 overflow-hidden">
                  <img src="/images/Gallery1.jpg" alt="Library" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">
                    {isHindi ? 'पुस्तकालय' : 'Library'}
                  </h4>
                  <p className="text-gray-700">
                    {isHindi 
                      ? 'विभिन्न विषयों पर पुस्तकों का विशाल संग्रह, पढ़ने और अध्ययन के लिए एक शांत स्थान।' 
                      : 'A vast collection of books on various subjects, a quiet place for reading and studying.'}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-amber-100">
                <div className="h-48 overflow-hidden">
                  <img src="/images/Gallery3.jpg" alt="Playground" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-amber-800 mb-2">
                    {isHindi ? 'खेल का मैदान' : 'Playground'}
                  </h4>
                  <p className="text-gray-700">
                    {isHindi 
                      ? 'विभिन्न खेलों और शारीरिक गतिविधियों के लिए विशाल खेल का मैदान।' 
                      : 'A spacious playground for various sports and physical activities.'}
                  </p>
                </div>              </div>
            </div>
          </div>

          {/* Recognitions & Achievements */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-amber-600 pl-3">
              {isHindi ? 'मान्यताएं और उपलब्धियां' : 'Recognitions & Achievements'}
            </h3>
            
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                    <span className="mr-2 text-2xl">🏆</span>
                    {isHindi ? 'शैक्षिक उत्कृष्टता' : 'Academic Excellence'}
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      {isHindi 
                        ? '2023 में जिले में सर्वश्रेष्ठ बोर्ड परीक्षा परिणाम' 
                        : 'Best board examination results in the district in 2023'}
                    </li>
                    <li>
                      {isHindi 
                        ? '95% से अधिक छात्रों ने हाई स्कूल और इंटरमीडिएट परीक्षाओं में प्रथम श्रेणी हासिल की' 
                        : 'Over 95% students secured first division in High School and Intermediate examinations'}
                    </li>
                    <li>
                      {isHindi 
                        ? '2022 में राज्य स्तरीय विज्ञान प्रतियोगिता में 3 छात्राओं ने पुरस्कार जीते' 
                        : '3 students won awards in State Level Science Competition in 2022'}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                    <span className="mr-2 text-2xl">🌟</span>
                    {isHindi ? 'सरकारी मान्यताएं' : 'Government Recognitions'}
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      {isHindi 
                        ? 'उत्तर प्रदेश माध्यमिक शिक्षा परिषद द्वारा पूर्ण मान्यता' 
                        : 'Full recognition by Uttar Pradesh Board of Secondary Education'}
                    </li>
                    <li>
                      {isHindi 
                        ? 'उत्तर प्रदेश सरकार द्वारा "ए" ग्रेड प्राप्त' 
                        : '"A" grade certified by Government of Uttar Pradesh'}
                    </li>
                    <li>
                      {isHindi 
                        ? '2019 में स्वच्छ विद्यालय पुरस्कार प्राप्त' 
                        : 'Received Clean School Award in 2019'}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                  <span className="mr-2 text-2xl">🏅</span>
                  {isHindi ? 'खेल और अतिरिक्त गतिविधियाँ' : 'Sports & Extra-curricular'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl text-amber-600 font-bold">12</div>
                    <p className="text-gray-700">
                      {isHindi ? 'जिला स्तरीय खेल पुरस्कार' : 'District Level Sports Awards'}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl text-amber-600 font-bold">8</div>
                    <p className="text-gray-700">
                      {isHindi ? 'सांस्कृतिक प्रतियोगिता विजेता' : 'Cultural Competition Winners'}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl text-amber-600 font-bold">5</div>
                    <p className="text-gray-700">
                      {isHindi ? 'राज्य स्तरीय प्रतिभागी' : 'State Level Participants'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
