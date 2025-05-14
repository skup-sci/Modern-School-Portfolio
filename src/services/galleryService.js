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
import { db, storage } from '../firebase.js';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const COLLECTION_NAME = 'gallery';

/**
 * Get all gallery images with optional filtering
 * @param {Object} options - Query options
 * @param {number} options.limitCount - Maximum number of images to retrieve
 * @param {string} options.category - Filter by image category
 * @returns {Promise<Array>} Array of gallery image objects
 */
export const getGalleryImages = async ({ limitCount = 20, category = null } = {}) => {
  try {
    let galleryQuery = collection(db, COLLECTION_NAME);
    
    if (category) {
      galleryQuery = query(
        galleryQuery, 
        where('category', '==', category), 
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
    } else {
      galleryQuery = query(
        galleryQuery, 
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
    }
    
    const snapshot = await getDocs(galleryQuery);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting gallery images:", error);
    throw error;
  }
};

/**
 * Upload a gallery image and add it to the database
 * @param {File} file - The image file to upload
 * @param {Object} metadata - Image metadata
 * @param {string} metadata.title - Image title (English)
 * @param {string} metadata.titleHi - Image title (Hindi)
 * @param {string} metadata.description - Image description (English)
 * @param {string} metadata.descriptionHi - Image description (Hindi)
 * @param {string} metadata.category - Image category (e.g., "event", "campus")
 * @returns {Promise<Object>} The created gallery image object with ID
 */
export const uploadGalleryImage = async (file, metadata) => {
  try {
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const filename = `${timestamp}.${fileExtension}`;
    const storageRef = ref(storage, `gallery/${filename}`);
    
    // Upload the file
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    
    // Create document in Firestore
    const imageData = {
      ...metadata,
      imageUrl: downloadURL,
      filename,
      createdAt: serverTimestamp()
    };
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), imageData);
    
    return {
      id: docRef.id,
      ...imageData
    };
  } catch (error) {
    console.error("Error uploading gallery image:", error);
    throw error;
  }
};

/**
 * Update gallery image metadata
 * @param {string} id - The image ID
 * @param {Object} updates - The metadata fields to update
 * @returns {Promise<void>}
 */
export const updateGalleryImage = async (id, updates) => {
  try {
    const imageRef = doc(db, COLLECTION_NAME, id);
    
    await updateDoc(imageRef, {
      ...updates,
      lastUpdated: serverTimestamp()
    });
  } catch (error) {
    console.error(`Error updating gallery image with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a gallery image
 * @param {string} id - The image ID
 * @returns {Promise<void>}
 */
export const deleteGalleryImage = async (id) => {
  try {
    // Get image data to retrieve the filename
    const imageData = await getDoc(doc(db, COLLECTION_NAME, id));
    
    if (imageData.exists() && imageData.data().filename) {
      const filename = imageData.data().filename;
      const storageRef = ref(storage, `gallery/${filename}`);
      
      try {
        // Delete from Storage
        await deleteObject(storageRef);
      } catch (storageError) {
        console.warn("Image may not exist in storage or couldn't be deleted:", storageError);
      }
    }
    
    // Delete from Firestore
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error(`Error deleting gallery image with ID ${id}:`, error);
    throw error;
  }
};
