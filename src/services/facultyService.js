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

const COLLECTION_NAME = 'faculty';

/**
 * Get all faculty members with optional filtering and sorting
 * @param {Object} options - Query options
 * @param {number} options.limitCount - Maximum number of faculty to retrieve
 * @param {string} options.department - Filter by department
 * @returns {Promise<Array>} Array of faculty objects
 */
export const getAllFaculty = async ({ limitCount = 100, department = null } = {}) => {
  try {
    let facultyQuery = collection(db, COLLECTION_NAME);
    
    // Apply filters
    if (department) {
      facultyQuery = query(
        facultyQuery, 
        where('department', '==', department), 
        orderBy('order', 'asc'),
        limit(limitCount)
      );
    } else {
      facultyQuery = query(
        facultyQuery, 
        orderBy('order', 'asc'),
        limit(limitCount)
      );
    }
    
    const snapshot = await getDocs(facultyQuery);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting faculty:", error);
    throw error;
  }
};

/**
 * Get a faculty member by ID
 * @param {string} id - The faculty ID
 * @returns {Promise<Object|null>} Faculty object or null if not found
 */
export const getFacultyById = async (id) => {
  try {
    const facultyDoc = await getDoc(doc(db, COLLECTION_NAME, id));
    
    if (facultyDoc.exists()) {
      return {
        id: facultyDoc.id,
        ...facultyDoc.data()
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error getting faculty with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Upload a faculty photo and get the download URL
 * @param {File} file - The image file to upload
 * @param {string} facultyId - The faculty member's ID
 * @returns {Promise<string>} The download URL for the uploaded image
 */
export const uploadFacultyPhoto = async (file, facultyId) => {
  try {
    const fileExtension = file.name.split('.').pop();
    const storageRef = ref(storage, `faculty/${facultyId}.${fileExtension}`);
    
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error) {
    console.error("Error uploading faculty photo:", error);
    throw error;
  }
};

/**
 * Create a new faculty member
 * @param {Object} faculty - The faculty object
 * @param {string} faculty.name - Faculty name (English)
 * @param {string} faculty.nameHi - Faculty name (Hindi)
 * @param {string} faculty.position - Position/role (English)
 * @param {string} faculty.positionHi - Position/role (Hindi)
 * @param {string} faculty.department - Department
 * @param {string} faculty.qualification - Educational qualifications
 * @param {string} faculty.experience - Years of experience
 * @param {string} faculty.photoUrl - URL to faculty photo
 * @returns {Promise<Object>} Created faculty object with ID
 */
export const createFaculty = async (faculty) => {
  try {
    // Add timestamp and default values
    const newFaculty = {
      ...faculty,
      createdAt: serverTimestamp(),
      lastUpdated: serverTimestamp(),
      order: faculty.order || 999 // Default order at end
    };
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), newFaculty);
    
    return {
      id: docRef.id,
      ...newFaculty
    };
  } catch (error) {
    console.error("Error creating faculty:", error);
    throw error;
  }
};

/**
 * Update an existing faculty member
 * @param {string} id - The faculty ID
 * @param {Object} updates - The fields to update
 * @returns {Promise<void>}
 */
export const updateFaculty = async (id, updates) => {
  try {
    const facultyRef = doc(db, COLLECTION_NAME, id);
    
    // Add last updated timestamp
    await updateDoc(facultyRef, {
      ...updates,
      lastUpdated: serverTimestamp()
    });
  } catch (error) {
    console.error(`Error updating faculty with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a faculty member
 * @param {string} id - The faculty ID
 * @param {boolean} deletePhoto - Whether to also delete the associated photo
 * @returns {Promise<void>}
 */
export const deleteFaculty = async (id, deletePhoto = true) => {
  try {
    // Get faculty data to check for photo
    if (deletePhoto) {
      const faculty = await getFacultyById(id);
      if (faculty && faculty.photoUrl) {
        // Extract the path from the URL
        const photoPath = faculty.photoUrl.split('faculty%2F')[1].split('?')[0];
        const storageRef = ref(storage, `faculty/${photoPath}`);
        
        try {
          await deleteObject(storageRef);
        } catch (photoError) {
          console.warn("Photo may not exist or couldn't be deleted:", photoError);
        }
      }
    }
      // Delete the document
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error(`Error deleting faculty with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Get all unique departments from faculty data
 * @returns {Promise<Array<string>>} Array of department names
 */
export const getAllDepartments = async () => {
  try {
    const facultyData = await getAllFaculty();
    const departments = [...new Set(facultyData.map(faculty => faculty.department))].filter(Boolean);
    return departments;
  } catch (error) {
    console.error("Error getting departments:", error);
    throw error;
  }
};
