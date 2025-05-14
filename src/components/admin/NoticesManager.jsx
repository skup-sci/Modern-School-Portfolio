import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import LoadingSpinner from '../LoadingSpinner.jsx';
import { getNotices, createNotice, updateNotice, deleteNotice } from '../../services/noticeService.js';

const NoticesManager = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState({ 
    title: '', 
    titleHi: '', 
    content: '', 
    contentHi: '',
    isActive: true 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingNotice, setEditingNotice] = useState(null);

  useEffect(() => {
    // Load notices from Firebase
    const loadData = async () => {
      try {
        setLoading(true);
        const noticesData = await getNotices({ limitCount: 20 });
        setNotices(noticesData);
        setError(null);
      } catch (error) {
        console.error('Error loading notices:', error);
        setError(
          isHindi 
            ? 'सूचनाओं को लोड करने में त्रुटि हुई' 
            : 'Error loading notices'
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [isHindi]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.content) return;

    try {
      setLoading(true);
      
      if (editingNotice) {
        // Update existing notice
        await updateNotice(editingNotice.id, {
          title: newNotice.title,
          titleHi: newNotice.titleHi,
          content: newNotice.content,
          contentHi: newNotice.contentHi,
          isActive: newNotice.isActive
        });
        
        // Update local state
        setNotices(notices.map(notice => 
          notice.id === editingNotice.id ? { ...notice, ...newNotice } : notice
        ));
        
        setEditingNotice(null);
      } else {
        // Create new notice
        const createdNotice = await createNotice(newNotice);
        setNotices([createdNotice, ...notices]);
      }
      
      // Reset form
      setNewNotice({ 
        title: '', 
        titleHi: '', 
        content: '', 
        contentHi: '',
        isActive: true 
      });
      setError(null);
    } catch (error) {
      console.error('Error saving notice:', error);
      setError(
        isHindi 
          ? 'सूचना सहेजने में त्रुटि' 
          : 'Error saving notice'
      );
    } finally {
      setLoading(false);
    }
  };
  
  const handleEdit = (notice) => {
    setEditingNotice(notice);
    setNewNotice({
      title: notice.title || '',
      titleHi: notice.titleHi || '',
      content: notice.content || '',
      contentHi: notice.contentHi || '',
      isActive: notice.isActive !== undefined ? notice.isActive : true
    });
  };
  
  const handleDelete = async (id) => {
    if (!window.confirm(isHindi ? 'क्या आप वाकई इस सूचना को हटाना चाहते हैं?' : 'Are you sure you want to delete this notice?')) {
      return;
    }
    
    try {
      setLoading(true);
      await deleteNotice(id);
      
      // Update local state
      setNotices(notices.filter(notice => notice.id !== id));
      
      if (editingNotice && editingNotice.id === id) {
        setEditingNotice(null);
        setNewNotice({ 
          title: '', 
          titleHi: '', 
          content: '', 
          contentHi: '',
          isActive: true 
        });
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
      setError(
        isHindi 
          ? 'सूचना हटाने में त्रुटि' 
          : 'Error deleting notice'
      );
    } finally {
      setLoading(false);
    }
  };
  
  const handleCancel = () => {
    setEditingNotice(null);
    setNewNotice({ 
      title: '', 
      titleHi: '', 
      content: '', 
      contentHi: '',
      isActive: true 
    });
  };
  
  // Function to format date from Firebase timestamp
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    
    return date.toLocaleDateString(isHindi ? 'hi-IN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">
        {isHindi ? 'सूचनाएँ प्रबंधित करें' : 'Manage Notices'}
      </h2>
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded" role="alert">
          <p>{error}</p>
        </div>
      )}
      
      {/* Notice Creation Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">
          {editingNotice 
            ? (isHindi ? 'सूचना संपादित करें' : 'Edit Notice') 
            : (isHindi ? 'नई सूचना बनाएँ' : 'Create New Notice')
          }
        </h3>
        
        {/* Title fields */}
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              {isHindi ? 'शीर्षक (अंग्रेजी)' : 'Title (English)'}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={newNotice.title}
              onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titleHi">
              {isHindi ? 'शीर्षक (हिंदी)' : 'Title (Hindi)'}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="titleHi"
              type="text"
              value={newNotice.titleHi}
              onChange={(e) => setNewNotice({ ...newNotice, titleHi: e.target.value })}
            />
          </div>
        </div>
        
        {/* Content fields */}
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              {isHindi ? 'सामग्री (अंग्रेजी)' : 'Content (English)'}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              rows="4"
              value={newNotice.content}
              onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
              required
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contentHi">
              {isHindi ? 'सामग्री (हिंदी)' : 'Content (Hindi)'}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contentHi"
              rows="4"
              value={newNotice.contentHi}
              onChange={(e) => setNewNotice({ ...newNotice, contentHi: e.target.value })}
            ></textarea>
          </div>
        </div>
        
        {/* Active status */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
              checked={newNotice.isActive}
              onChange={(e) => setNewNotice({ ...newNotice, isActive: e.target.checked })}
            />
            <span className="ml-2 text-gray-700">
              {isHindi ? 'सक्रिय सूचना' : 'Active Notice'}
            </span>
          </label>
        </div>
        
        {/* Buttons */}
        <div className="flex items-center justify-start space-x-4">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center">
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent mr-2"></span>
                {isHindi ? 'प्रक्रिया में है...' : 'Processing...'}
              </div>
            ) : (
              editingNotice ? (isHindi ? 'अपडेट करें' : 'Update') : (isHindi ? 'बनाएँ' : 'Create')
            )}
          </button>
          
          {editingNotice && (
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCancel}
            >
              {isHindi ? 'रद्द करें' : 'Cancel'}
            </button>
          )}
        </div>
      </form>
      
      {/* Notices List */}
      <div className="bg-white shadow-md rounded">
        <h3 className="text-lg font-semibold p-4 border-b">
          {isHindi ? 'सूचनाओं की सूची' : 'Notices List'}
        </h3>
        
        {loading && !editingNotice ? (
          <div className="flex justify-center items-center p-8">
            <LoadingSpinner />
          </div>
        ) : notices.length === 0 ? (
          <p className="text-center text-gray-500 p-8">
            {isHindi ? 'कोई सूचना नहीं मिली' : 'No notices found'}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">{isHindi ? 'शीर्षक' : 'Title'}</th>
                  <th className="px-4 py-2 border">{isHindi ? 'प्रकाशित तिथि' : 'Publish Date'}</th>
                  <th className="px-4 py-2 border">{isHindi ? 'स्थिति' : 'Status'}</th>
                  <th className="px-4 py-2 border">{isHindi ? 'कार्रवाई' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                {notices.map(notice => (
                  <tr key={notice.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">
                      {isHindi && notice.titleHi ? notice.titleHi : notice.title}
                    </td>
                    <td className="px-4 py-2 border">{formatDate(notice.publishDate)}</td>
                    <td className="px-4 py-2 border">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                        ${notice.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'}`}
                      >
                        {notice.isActive 
                          ? (isHindi ? 'सक्रिय' : 'Active') 
                          : (isHindi ? 'निष्क्रिय' : 'Inactive')}
                      </span>
                    </td>
                    <td className="px-4 py-2 border">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(notice)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
                        >
                          {isHindi ? 'संपादित करें' : 'Edit'}
                        </button>
                        <button
                          onClick={() => handleDelete(notice.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                        >
                          {isHindi ? 'हटाएं' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticesManager;
