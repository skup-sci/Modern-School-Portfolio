import React from 'react';
import { useLanguage } from '../LanguageContext';

const Testimonials = () => {
  const { lang } = useLanguage();
  
  // Testimonial data with bilingual support
  const testimonials = [
    {
      id: 1,
      name: {
        en: 'Priya Sharma',
        hi: 'प्रिया शर्मा'
      },
      role: {
        en: 'Former Student, Batch of 2022',
        hi: 'पूर्व छात्रा, बैच 2022'
      },
      quote: {
        en: 'The years I spent at this school were the most formative of my life. The teachers not only focused on academics but also on developing our character and confidence.',
        hi: 'इस विद्यालय में बिताए गए वर्ष मेरे जीवन के सबसे महत्वपूर्ण थे। शिक्षकों ने न केवल पढ़ाई पर बल्कि हमारे चरित्र और आत्मविश्वास के विकास पर भी ध्यान दिया।'
      },
      avatar: '/images/Teachers.jpg'
    },
    {
      id: 2,
      name: {
        en: 'Rajesh Patel',
        hi: 'राजेश पटेल'
      },
      role: {
        en: 'Parent',
        hi: 'अभिभावक'
      },
      quote: {
        en: 'I am extremely pleased with the holistic education my daughter receives here. The school has a perfect balance of academics, cultural activities and sports.',
        hi: 'मेरी बेटी को यहां मिलने वाली समग्र शिक्षा से मैं बेहद संतुष्ट हूं। विद्यालय में शैक्षिक, सांस्कृतिक गतिविधियों और खेल का एकदम सही संतुलन है।'
      },
      avatar: '/images/Principal1.jpg'
    },
    {
      id: 3,
      name: {
        en: 'Meera Singh',
        hi: 'मीरा सिंह'
      },
      role: {
        en: 'Current Student, Class 12',
        hi: 'वर्तमान छात्रा, कक्षा 12'
      },
      quote: {
        en: 'The facilities here are excellent and the teachers are very supportive. I especially love our science labs and library which have helped me develop a deeper interest in research.',
        hi: 'यहां की सुविधाएं उत्कृष्ट हैं और शिक्षक बहुत सहायक हैं। मुझे विशेष रूप से हमारी विज्ञान प्रयोगशाला और पुस्तकालय पसंद है जिन्होंने मुझे अनुसंधान में गहरी रुचि विकसित करने में मदद की है।'
      },
      avatar: '/images/Teachers.jpg'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-10 rounded-lg shadow-sm mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          {lang === 'hi' ? 'प्रतिक्रियाएँ' : 'Testimonials'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={lang === 'hi' ? testimonial.name.hi : testimonial.name.en} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-900">
                    {lang === 'hi' ? testimonial.name.hi : testimonial.name.en}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {lang === 'hi' ? testimonial.role.hi : testimonial.role.en}
                  </p>
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="text-indigo-500 text-3xl mb-2">"</div>
                <p className="text-gray-700 text-sm italic">
                  {lang === 'hi' ? testimonial.quote.hi : testimonial.quote.en}
                </p>
                <div className="text-indigo-500 text-3xl text-right">"</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
