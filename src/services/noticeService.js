import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  limit, 
  where, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase.js';

const COLLECTION_NAME = 'notices';

/**
 * Get all notices with optional filtering and sorting
 * @param {Object} options - Query options
 * @param {number} options.limitCount - Maximum number of notices to retrieve
 * @param {boolean} options.activeOnly - Whether to retrieve only active notices
 * @returns {Promise<Array>} Array of notice objects
 */
export const getNotices = async ({ limitCount = 20, activeOnly = false } = {}) => {
  try {
    let noticesQuery = collection(db, COLLECTION_NAME);
    
    // Apply filters
    if (activeOnly) {
      noticesQuery = query(
        noticesQuery, 
        where('isActive', '==', true), 
        orderBy('publishDate', 'desc'),
        limit(limitCount)
      );
    } else {
      noticesQuery = query(
        noticesQuery, 
        orderBy('publishDate', 'desc'),
        limit(limitCount)
      );
    }
    
    const snapshot = await getDocs(noticesQuery);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting notices:", error);
    throw error;
  }
};

/**
 * Get a single notice by ID
 * @param {string} id - The notice ID
 * @returns {Promise<Object|null>} Notice object or null if not found
 */
export const getNoticeById = async (id) => {
  try {
    const noticeDoc = await getDoc(doc(db, COLLECTION_NAME, id));
    
    if (noticeDoc.exists()) {
      return {
        id: noticeDoc.id,
        ...noticeDoc.data()
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error getting notice with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Create a new notice
 * @param {Object} notice - The notice object
 * @param {string} notice.title - Notice title (English)
 * @param {string} notice.titleHi - Notice title (Hindi)
 * @param {string} notice.content - Notice content (English)
 * @param {string} notice.contentHi - Notice content (Hindi)
 * @param {boolean} notice.isActive - Whether the notice is active
 * @returns {Promise<Object>} Created notice object with ID
 */
export const createNotice = async (notice) => {
  try {
    // Add timestamp and default values
    const newNotice = {
      ...notice,
      publishDate: serverTimestamp(),
      lastUpdated: serverTimestamp(),
      isActive: notice.isActive ?? true
    };
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), newNotice);
    
    return {
      id: docRef.id,
      ...newNotice
    };
  } catch (error) {
    console.error("Error creating notice:", error);
    throw error;
  }
};

/**
 * Update an existing notice
 * @param {string} id - The notice ID
 * @param {Object} updates - The fields to update
 * @returns {Promise<void>}
 */
export const updateNotice = async (id, updates) => {
  try {
    const noticeRef = doc(db, COLLECTION_NAME, id);
    
    // Add last updated timestamp
    await updateDoc(noticeRef, {
      ...updates,
      lastUpdated: serverTimestamp()
    });
  } catch (error) {
    console.error(`Error updating notice with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a notice
 * @param {string} id - The notice ID
 * @returns {Promise<void>}
 */
export const deleteNotice = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error(`Error deleting notice with ID ${id}:`, error);
    throw error;
  }
};
