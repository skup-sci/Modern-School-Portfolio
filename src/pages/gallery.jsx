import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import { useLanguage } from '../LanguageContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Gallery page displays a collection of school photos and events.
 * Uses the Container component for consistent layout with other pages.
 */
const Gallery = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Gallery categories
  const categories = [
    { id: 'all', name: isHindi ? 'सभी' : 'All' },
    { id: 'campus', name: isHindi ? 'परिसर' : 'Campus' },
    { id: 'events', name: isHindi ? 'कार्यक्रम' : 'Events' },
    { id: 'sports', name: isHindi ? 'खेल' : 'Sports' },
    { id: 'classroom', name: isHindi ? 'कक्षा' : 'Classroom' },
    { id: 'achievements', name: isHindi ? 'उपलब्धियाँ' : 'Achievements' },
  ];

  // Define gallery images
  const galleryImages = [
    {
      id: 1,
      title: isHindi ? 'स्कूल भवन' : 'School Building',
      category: 'campus',
      src: '/images/Gallery1.jpg',
      alt: 'School main building',
      description: isHindi ? 'हमारे स्कूल का मुख्य भवन' : 'Our school\'s main building',
      year: '2023'
    },
    {
      id: 2,
      title: isHindi ? 'वार्षिक दिवस समारोह' : 'Annual Day Celebration',
      category: 'events',
      src: '/images/Gallery2.jpg',
      alt: 'Annual Day celebrations',
      description: isHindi ? 'छात्रों द्वारा सांस्कृतिक कार्यक्रम प्रस्तुत किया गया' : 'Cultural program presented by students',
      year: '2023'
    },
    {
      id: 3,
      title: isHindi ? 'विज्ञान प्रयोगशाला' : 'Science Laboratory',
      category: 'classroom',
      src: '/images/Gallery3.jpg',
      alt: 'Science laboratory',
      description: isHindi ? 'हमारी अत्याधुनिक विज्ञान प्रयोगशाला' : 'Our state-of-the-art science laboratory',
      year: '2022'
    },
    {
      id: 4,
      title: isHindi ? 'स्पोर्ट्स मीट' : 'Sports Meet',
      category: 'sports',
      src: '/images/Gallery4.jpg',
      alt: 'Annual sports meet',
      description: isHindi ? 'वार्षिक खेल प्रतियोगिता के दौरान छात्र' : 'Students during annual sports competition',
      year: '2023'
    },
    {
      id: 5,
      title: isHindi ? 'कंप्यूटर लैब' : 'Computer Lab',
      category: 'classroom',
      src: '/images/Gallery5.jpg',
      alt: 'Computer laboratory',
      description: isHindi ? 'छात्र कंप्यूटर लैब में अभ्यास करते हुए' : 'Students practicing in computer lab',
      year: '2022'
    },
    {
      id: 6,
      title: isHindi ? 'स्वतंत्रता दिवस समारोह' : 'Independence Day Celebration',
      category: 'events',
      src: '/images/Gallery1.jpg',
      alt: 'Independence Day celebration',
      description: isHindi ? 'स्वतंत्रता दिवस समारोह में छात्र' : 'Students in Independence Day celebration',
      year: '2023'
    },
    {
      id: 7,
      title: isHindi ? 'खेल मैदान' : 'Sports Ground',
      category: 'campus',
      src: '/images/Gallery2.jpg',
      alt: 'School sports ground',
      description: isHindi ? 'हमारे विद्यालय का विशाल खेल मैदान' : 'Our school\'s vast sports ground',
      year: '2022'
    },
    {
      id: 8,
      title: isHindi ? 'योग कार्यक्रम' : 'Yoga Program',
      category: 'sports',
      src: '/images/Gallery3.jpg',
      alt: 'Yoga session',
      description: isHindi ? 'अंतर्राष्ट्रीय योग दिवस पर विशेष योग सत्र' : 'Special yoga session on International Yoga Day',
      year: '2023'
    },
    {
      id: 9,
      title: isHindi ? 'पुस्तकालय' : 'Library',
      category: 'campus',
      src: '/images/Gallery4.jpg',
      alt: 'School library',
      description: isHindi ? 'हमारा विशाल पुस्तकालय विभिन्न विषयों की पुस्तकों से भरा है' : 'Our vast library is filled with books on various subjects',
      year: '2022'
    },
    {
      id: 10,
      title: isHindi ? 'विज्ञान प्रदर्शनी' : 'Science Exhibition',
      category: 'events',
      src: '/images/Gallery5.jpg',
      alt: 'Science exhibition',
      description: isHindi ? 'छात्रों द्वारा बनाई गई विज्ञान परियोजनाएँ' : 'Science projects created by students',
      year: '2023'
    },
    {
      id: 11,
      title: isHindi ? 'बोर्ड परीक्षा टॉपर' : 'Board Exam Toppers',
      category: 'achievements',
      src: '/images/Gallery1.jpg',
      alt: 'Board exam toppers',
      description: isHindi ? '2023 बोर्ड परीक्षा में उत्कृष्ट प्रदर्शन करने वाली छात्राएँ' : 'Students who performed excellently in 2023 board exams',
      year: '2023'
    },
    {
      id: 12,
      title: isHindi ? 'सांस्कृतिक कार्यक्रम' : 'Cultural Program',
      category: 'events',
      src: '/images/Gallery2.jpg',
      alt: 'Cultural program',
      description: isHindi ? 'वार्षिकोत्सव पर सांस्कृतिक प्रस्तुति' : 'Cultural presentation at the annual festival',
      year: '2022'
    },
  ];

  // Filter gallery images based on selected category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openImageModal = (image) => {
    setSelectedImage(image);
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    // Enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Navigate between images in modal
  const navigateToPrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const navigateToNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <Container>
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up">
            {isHindi ? 'गैलरी' : 'Gallery'}
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          
          <p className="text-center mb-10 max-w-3xl mx-auto text-gray-600" data-aos="fade-up" data-aos-delay="200">
            {isHindi 
              ? 'हमारे विद्यालय के विभिन्न कार्यक्रमों, गतिविधियों और अवसरों की झलकियाँ देखें।'
              : 'View glimpses of various events, activities, and occasions from our school.'}
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="300">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openImageModal(image)}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-56 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium">{image.title}</h3>
                  <p className="text-gray-200 text-sm mt-1">{image.year}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-10">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                {isHindi ? 'कोई छवियां नहीं मिलीं' : 'No images found'}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {isHindi 
                  ? 'इस श्रेणी में कोई छवि उपलब्ध नहीं है।' 
                  : 'There are no images available in this category.'}
              </p>
            </div>
          )}
          
          {/* Share Album Section */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">
              {isHindi ? 'अपनी यादें साझा करें' : 'Share Your Memories'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              {isHindi
                ? 'क्या आपके पास स्कूल के बारे में कोई पुरानी या हालिया तस्वीरें हैं? हमें भेजें और हमारी गैलरी में अपना योगदान दें!'
                : 'Do you have any old or recent pictures of the school? Send them to us and contribute to our gallery!'}
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2 rounded-md transition duration-200">
              {isHindi ? 'फोटो भेजें' : 'Submit Photos'}
            </button>
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-2 right-2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeImageModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* Previous button */}
            <button 
              className="absolute left-2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateToPrevious();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            {/* Next button */}
            <button 
              className="absolute right-2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateToNext();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            {/* Image */}
            <div className="h-full w-full flex flex-col">
              <div className="flex-grow flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </div>
              
              {/* Image details */}
              <div className="bg-black bg-opacity-70 p-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300 mt-1">{selectedImage.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-400">{selectedImage.year}</span>
                  <div className="flex gap-3">
                    <button className="text-white hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                      </svg>
                    </button>
                    <button className="text-white hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Annual Events Photo Collection */}
      <section className="py-16 bg-amber-50 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">
            {isHindi ? 'वार्षिक समारोह' : 'Annual Celebrations'}
          </h2>
          <p className="text-center mb-10 max-w-3xl mx-auto text-gray-600" data-aos="fade-up" data-aos-delay="100">
            {isHindi 
              ? 'हमारे विद्यालय में हर साल मनाए जाने वाले विशेष समारोहों और कार्यक्रमों की झलकियां'
              : 'Glimpses of special celebrations and events held in our school every year'}
          </p>
          
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
            {[1, 2, 3, 4, 5].map((item) => (
              <div 
                key={item} 
                className="min-w-[280px] snap-start bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <img 
                  src={`/images/Gallery${item}.jpg`} 
                  alt={`Annual celebration ${item}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">
                    {isHindi ? `वार्षिक समारोह ${item}` : `Annual Celebration ${item}`}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">2023</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8" data-aos="fade-up">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2 rounded-md transition duration-200">
              {isHindi ? 'सभी समारोह देखें' : 'View All Celebrations'}
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Gallery;
