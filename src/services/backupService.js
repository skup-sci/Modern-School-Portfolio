// backupService.js - Handles automated backups of Firestore data
import { 
  collection, 
  getDocs,
  query,
  limit
} from 'firebase/firestore';
import { db } from '../firebase.js';

/**
 * Creates a backup of data from a specific collection
 * @param {string} collectionName - The name of the collection to backup
 * @param {number} maxDocs - Maximum number of documents to backup
 * @returns {Promise<Array>} - Array of documents from the collection
 */
export const backupCollection = async (collectionName, maxDocs = 1000) => {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, limit(maxDocs));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error backing up collection ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Creates backups of multiple collections
 * @param {Array<string>} collections - Array of collection names to backup
 * @returns {Promise<Object>} - Object with collection names as keys and arrays of documents as values
 */
export const backupCollections = async (collections = ['notices', 'faculty', 'gallery']) => {
  try {
    const backups = {};
    
    for (const collectionName of collections) {
      backups[collectionName] = await backupCollection(collectionName);
    }
    
    return backups;
  } catch (error) {
    console.error('Error backing up collections:', error);
    throw error;
  }
};

/**
 * Downloads backup data as a JSON file
 * @param {Object} backupData - Data to backup
 * @param {string} fileName - Name for the backup file
 */
export const downloadBackup = (backupData, fileName = 'school-website-backup') => {
  try {
    // Create a Blob from the JSON data
    const jsonData = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Set link properties
    link.href = url;
    link.download = `${fileName}-${new Date().toISOString().split('T')[0]}.json`;
    
    // Add to document, trigger download and cleanup
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading backup:', error);
    throw error;
  }
};

/**
 * Create a full backup of all specified collections and download as JSON
 */
export const createAndDownloadFullBackup = async () => {
  try {
    const backupData = await backupCollections();
    downloadBackup(backupData);
    return { success: true };
  } catch (error) {
    console.error('Error creating full backup:', error);
    return { success: false, error: error.message };
  }
};

// Default export removed
// export default {
//   backupCollection,
//   backupCollections,
//   downloadBackup,
//   createAndDownloadFullBackup
// };
