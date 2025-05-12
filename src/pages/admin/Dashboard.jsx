import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useLanguage } from '../../LanguageContext.jsx';
import { mockNotices, mockFaculty } from '../../utils/mockApi.js';
import LoadingSpinner from '../../components/LoadingSpinner.jsx';
import ProtectedRoute from '../../components/ProtectedRoute.jsx';

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
const NoticesManager = () => {
  const { lang, langContent } = useLanguage();
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setNotices(mockNotices);
      } catch (error) {
        console.error('Error loading notices:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.content) return;

    const newId = notices.length > 0 ? Math.max(...notices.map(n => n.id)) + 1 : 1;
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

const FacultyManager = () => {
  const { lang, langContent } = useLanguage();
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMember, setNewMember] = useState({
    name: '',
    position: '',
    qualification: '',
    experience: '',
  });

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setFaculty(mockFaculty);
      } catch (error) {
        console.error('Error loading faculty:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMember.name || !newMember.position) return;

    const newId = faculty.length > 0 ? Math.max(...faculty.map(f => f.id)) + 1 : 1;
    const newFacultyMember = {
      id: newId,
      ...newMember
    };

    setFaculty([...faculty, newFacultyMember]);
    setNewMember({
      name: '',
      position: '',
      qualification: '',
      experience: '',
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {langContent[lang].manageFaculty}
      </h2>

      {/* List existing faculty */}
      {faculty.length > 0 ? (
        <div className="mb-6 overflow-hidden border border-gray-200 rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {langContent[lang].name}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {langContent[lang].position}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {langContent[lang].actions}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {faculty.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.position}</td>
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
        <p className="text-gray-500 mb-4">{lang === 'hi' ? 'कोई शिक्षक नहीं मिला' : 'No faculty members found'}</p>
      )}

      {/* Form to add new faculty member */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {langContent[lang].name}
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {langContent[lang].position}
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={newMember.position}
            onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {langContent[lang].addFaculty}
        </button>
      </form>
    </div>
  );
};

const GalleryManager = () => {
  const { lang, langContent } = useLanguage();
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    // Mock image upload functionality
    const files = Array.from(e.target.files);
    const newImages = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      url: URL.createObjectURL(file),
      file
    }));

    setImages([...images, ...newImages]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {langContent[lang].manageGallery}
      </h2>
      
      {/* Display uploaded images */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {images.map(image => (
            <div key={image.id} className="relative group">
              <img src={image.url} alt={image.name} className="h-40 w-full object-cover rounded-md" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                <button className="text-white bg-red-600 px-2 py-1 rounded-md text-sm">
                  {langContent[lang].delete}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>
    </div>
  );
};

const AcademicsManager = () => {
  const { lang, langContent } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {langContent[lang].manageAcademics}
      </h2>
      <p className="text-gray-500 italic">
        {lang === 'hi' ? 'यह सुविधा विकास के अधीन है।' : 'This feature is under development.'}
      </p>
    </div>
  );
};

export default Dashboard; 