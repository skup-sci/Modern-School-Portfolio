import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useLanguage } from '../../LanguageContext.jsx';
import LoadingSpinner from '../../components/LoadingSpinner.jsx';
import ProtectedRoute from '../../components/ProtectedRoute.jsx';
import NoticesManager from '../../components/admin/NoticesManager.jsx';
import FacultyManager from '../../components/admin/FacultyManager.jsx';
import GalleryManager from '../../components/admin/GalleryManager.jsx';
import BackupManager from '../../components/admin/BackupManager.jsx';

const Dashboard = () => {
  const { user } = useAuth();
  const { lang, langContent } = useLanguage();
  const [activeTab, setActiveTab] = useState('notices');
  const [loading, setLoading] = useState(false);
  const tabs = [
    { id: 'notices', key: 'manageNotices' },
    { id: 'faculty', key: 'manageFaculty' },
    { id: 'gallery', key: 'manageGallery' },
    { id: 'academics', key: 'manageAcademics' },
    { id: 'backups', key: 'manageBackups' },
  ];
  const renderContent = () => {
    if (loading) return <LoadingSpinner />;

    switch (activeTab) {
      case 'notices':
        return <NoticesManager />;
      case 'faculty':
        return <FacultyManager />;
      case 'gallery':
        return <GalleryManager />;
      case 'academics':
        return <AcademicsManager />;
      case 'backups':
        return <BackupManager />;
      default:
        return null;
    }
  };

  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-2xl font-bold mb-6 text-gray-900">
              {lang === 'hi' ? 'प्रशासक डैशबोर्ड' : 'Admin Dashboard'}
            </h1>
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
              <div className="flex flex-wrap space-x-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-md mb-2 ${
                      activeTab === tab.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {langContent[lang][tab.key]}
                  </button>
                ))}
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

// Content Management Components
const FacultyManagerBackup = () => {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-4">
        {lang === 'hi' ? 'शिक्षक प्रबंधन' : 'Faculty Management'}
      </h2>
      <p className="text-gray-600">
        {lang === 'hi' ? 'यह सुविधा जल्द ही उपलब्ध होगी।' : 'This feature will be available soon.'}
      </p>
    </div>
  );
const GalleryManager = () => {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-4">
        {lang === 'hi' ? 'गैलरी प्रबंधन' : 'Gallery Management'}
      </h2>
      <p className="text-gray-600">
        {lang === 'hi' ? 'यह सुविधा जल्द ही उपलब्ध होगी।' : 'This feature will be available soon.'}
      </p>
    </div>
  );
};

const AcademicsManager = () => {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-4">
        {lang === 'hi' ? 'शैक्षिक प्रबंधन' : 'Academic Management'}
      </h2>
      <p className="text-gray-600">
        {lang === 'hi' ? 'यह सुविधा जल्द ही उपलब्ध होगी।' : 'This feature will be available soon.'}
      </p>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.content) return;

    try {
      setLoading(true);
      const { createNotice, updateNotice } = await import('../../services/noticeService');
      
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
        
        setEditingNotice(null);      } else {
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
        lang === 'hi' 
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
    if (!window.confirm(lang === 'hi' ? 'क्या आप वाकई इस सूचना को हटाना चाहते हैं?' : 'Are you sure you want to delete this notice?')) {
      return;
    }
    
    try {
      setLoading(true);
      const { deleteNotice } = await import('../../services/noticeService');
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
        lang === 'hi' 
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
    
    return date.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
    const newNoticeItem = {
      id: newId,
      title: newNotice.title,
      content: newNotice.content,
      date: new Date().toISOString().split('T')[0]
    };

    setNotices([...notices, newNoticeItem]);
    setNewNotice({ title: '', content: '' });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {langContent[lang].manageNotices}
      </h2>

      {/* List existing notices */}
      {notices.length > 0 ? (
        <div className="mb-6 overflow-hidden border border-gray-200 rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {langContent[lang].title}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {lang === 'hi' ? 'दिनांक' : 'Date'}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {langContent[lang].actions}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {notices.map((notice) => (
                <tr key={notice.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{notice.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notice.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                      {langContent[lang].edit}
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      {langContent[lang].delete}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mb-4">{lang === 'hi' ? 'कोई सूचना नहीं मिली' : 'No notices found'}</p>
      )}

      {/* Form to add new notice */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {langContent[lang].title}
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={newNotice.title}
            onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {langContent[lang].content}
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows="4"
            value={newNotice.content}
            onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {langContent[lang].addNotice}
        </button>
      </form>
    </div>
  );
};

const AcademicsManager = () => {
  const { lang, langContent } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {langContent[lang]?.manageAcademics || (lang === 'hi' ? 'शैक्षिक प्रबंधन' : 'Academic Management')}
      </h2>
      <p className="text-gray-500 italic">
        {lang === 'hi' ? 'यह सुविधा विकास के अधीन है।' : 'This feature is under development.'}
      </p>
    </div>
  );
};

export default Dashboard; 