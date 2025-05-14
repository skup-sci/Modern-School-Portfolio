import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import { trackNoticeView } from '../services/analyticsService';

const NoticeCard = ({ 
  notices = [], 
  previewCount = 3, 
  onSeeAll,
  isLoading = false
}) => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  
  // Display either the preview count or all notices if less than preview count
  const previewNotices = notices.slice(0, previewCount);
  
  // Format date based on language
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    
    if (isHindi) {
      return date.toLocaleDateString('hi-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  };
  
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">
        {isHindi ? 'सूचना पट्ट' : 'Notice Board'}
      </h2>
      
      {isLoading ? (
        <div className="text-center py-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-amber-500 border-r-transparent"></div>
        </div>
      ) : previewNotices.length === 0 ? (
        <p className="text-center py-2 text-gray-500">
          {isHindi ? 'कोई सूचना उपलब्ध नहीं है' : 'No notices available'}
        </p>
      ) : (
        <ul className="space-y-2">          {previewNotices.map((notice) => (
            <li 
              key={notice.id} 
              className="bg-yellow-100 border-l-4 border-yellow-500 px-4 py-2 rounded shadow cursor-pointer hover:bg-yellow-200 transition-colors"
              onClick={() => {
                // Track when a user views a notice
                trackNoticeView(notice.id, isHindi && notice.titleHi ? notice.titleHi : notice.title);
                
                // If there's a details view for notices, you could navigate to it here
                // history.push(`/notices/${notice.id}`);
              }}
            >
              <span className="font-medium">
                {isHindi && notice.titleHi ? notice.titleHi : notice.title}
              </span>
              <span className="block text-sm text-gray-600">
                {formatDate(notice.publishDate)}
              </span>
            </li>
          ))}
        </ul>
      )}
        {onSeeAll && notices.length > 0 && (
        <div className="mt-4 text-center">
          <Link to="/notices">
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded transition duration-300"
              onClick={() => {
                // Track when "See All Notices" is clicked
                trackPageView('All Notices', '/notices');
              }}
            >
              {isHindi ? 'सभी सूचनाएँ देखें' : 'See All Notices'}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NoticeCard;
