import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import { getNotices } from '../services/noticeService';
import { useLanguage } from '../LanguageContext';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * Notices page displays school announcements and important information.
 * Uses the Container component for consistent layout with other pages.
 */
const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        // Only fetch active notices
        const noticesData = await getNotices({ activeOnly: true });
        setNotices(noticesData);
        setError(null);
      } catch (err) {
        console.error('Error fetching notices:', err);
        setError(isHindi ? 'सूचनाएँ लोड करने में त्रुटि हुई' : 'Error loading notices');
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, [isHindi]);

  // Format date based on language
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    
    if (isHindi) {
      // Format date in Hindi style (DD-MM-YYYY)
      return date.toLocaleDateString('hi-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } else {
      // Format date in English style (Month DD, YYYY)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  };

  return (
    <Container>
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {isHindi ? 'सूचनाएँ' : 'Notices'}
        </h1>
        <p className="text-center mb-8">
          {isHindi 
            ? 'स्कूल की घोषणाएँ और महत्वपूर्ण जानकारी' 
            : 'School announcements and important information'}
        </p>
        
        {loading ? (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            {error}
          </div>
        ) : notices.length === 0 ? (
          <div className="text-center text-gray-600">
            {isHindi 
              ? 'कोई सूचनाएँ उपलब्ध नहीं हैं' 
              : 'No notices available'}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {notices.map((notice) => (
              <div 
                key={notice.id} 
                className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4 rounded shadow"
              >
                <h2 className="font-semibold text-lg">
                  {isHindi && notice.titleHi ? notice.titleHi : notice.title}
                </h2>
                {notice.content && (
                  <p className="text-gray-800 mt-2">
                    {isHindi && notice.contentHi ? notice.contentHi : notice.content}
                  </p>
                )}
                <p className="text-sm text-gray-700 mt-1">
                  {formatDate(notice.publishDate)}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </Container>
  );
};

export default Notices;