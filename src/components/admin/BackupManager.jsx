import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import { createAndDownloadFullBackup, backupCollections, downloadBackup } from '../../services/backupService.js';
import LoadingSpinner from '../LoadingSpinner.jsx';

const BackupManager = () => {
  const { lang, langContent } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [customCollections, setCustomCollections] = useState('notices,faculty,gallery');

  const handleFullBackup = async () => {
    setLoading(true);
    setMessage(null);
    
    try {
      await createAndDownloadFullBackup();
      setMessage({
        type: 'success',
        text: lang === 'hi' 
          ? 'बैकअप सफलतापूर्वक डाउनलोड किया गया!' 
          : 'Backup successfully downloaded!'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: lang === 'hi'
          ? `बैकअप बनाने में त्रुटि: ${error.message}`
          : `Error creating backup: ${error.message}`
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCustomBackup = async () => {
    if (!customCollections.trim()) {
      setMessage({
        type: 'error',
        text: lang === 'hi'
          ? 'कृपया कम से कम एक कलेक्शन निर्दिष्ट करें'
          : 'Please specify at least one collection'
      });
      return;
    }
    
    setLoading(true);
    setMessage(null);
    
    try {
      // Split by comma and trim whitespace
      const collections = customCollections
        .split(',')
        .map(collection => collection.trim())
        .filter(collection => collection);
      
      // Backup specified collections
      const backupData = await backupCollections(collections);
      downloadBackup(backupData, `custom-backup-${collections.join('-')}`);
      
      setMessage({
        type: 'success',
        text: lang === 'hi'
          ? 'कस्टम बैकअप सफलतापूर्वक डाउनलोड किया गया!'
          : 'Custom backup successfully downloaded!'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: lang === 'hi'
          ? `कस्टम बैकअप बनाने में त्रुटि: ${error.message}`
          : `Error creating custom backup: ${error.message}`
      });
    } finally {
      setLoading(false);
    }
  };

  const handleScheduledBackupToggle = () => {
    // This would connect to a server-side function to set up scheduled backups
    // For now, we'll just show an information message
    setMessage({
      type: 'info',
      text: lang === 'hi'
        ? 'नियमित बैकअप सेवा अभी विकास के अधीन है।'
        : 'Scheduled backup service is currently under development.'
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        {langContent[lang]?.backupManager || 'Backup Manager'}
      </h2>

      {message && (
        <div 
          className={`p-4 mb-6 rounded-md ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 
            message.type === 'error' ? 'bg-red-100 text-red-700' : 
            'bg-blue-100 text-blue-700'
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">
          {langContent[lang]?.fullBackup || 'Full Backup'}
        </h3>
        <p className="mb-4 text-gray-700">
          {langContent[lang]?.fullBackupDescription || 
            'Create a complete backup of all school data including notices, faculty, and gallery images.'}
        </p>
        <button
          onClick={handleFullBackup}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {langContent[lang]?.creating || 'Creating...'}
            </span>
          ) : (
            langContent[lang]?.createFullBackup || 'Create Full Backup'
          )}
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">
          {langContent[lang]?.customBackup || 'Custom Backup'}
        </h3>
        <p className="mb-4 text-gray-700">
          {langContent[lang]?.customBackupDescription || 
            'Specify collections to backup (comma-separated).'}
        </p>
        <div className="mb-4">
          <label htmlFor="collections" className="block text-sm font-medium text-gray-700 mb-2">
            {langContent[lang]?.collections || 'Collections'}
          </label>
          <input
            type="text"
            id="collections"
            value={customCollections}
            onChange={(e) => setCustomCollections(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="notices,faculty,gallery"
          />
        </div>
        <button
          onClick={handleCustomBackup}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-green-300"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {langContent[lang]?.creating || 'Creating...'}
            </span>
          ) : (
            langContent[lang]?.createCustomBackup || 'Create Custom Backup'
          )}
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          {langContent[lang]?.scheduledBackups || 'Scheduled Backups'}
        </h3>
        <p className="mb-4 text-gray-700">
          {langContent[lang]?.scheduledBackupDescription || 
            'Set up automated backups on a schedule (coming soon).'}
        </p>
        <button
          onClick={handleScheduledBackupToggle}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          {langContent[lang]?.setupScheduledBackups || 'Setup Scheduled Backups'}
        </button>
      </div>
    </div>
  );
};

export default BackupManager;
