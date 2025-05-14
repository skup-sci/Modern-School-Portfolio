import React, { useState, useEffect, useRef } from 'react';
import { getGalleryImages as getGalleryItems, uploadGalleryImage, deleteGalleryImage as deleteGalleryItem } from '../../services/galleryService.js';
import { useLanguage } from '../../LanguageContext.jsx';
import LoadingSpinner from '../LoadingSpinner.jsx';

const GalleryManager = () => {
  const { lang, langContent } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: ''
  });
  
  const [newImage, setNewImage] = useState({
    title: '',
    titleHi: '',
    description: '',
    descriptionHi: '',
    category: '',
    imageFile: null,
    imagePreview: ''
  });
  
  const fileInputRef = useRef(null);

  // Fetch gallery items on component mount and when filters change
  useEffect(() => {
    fetchGalleryItems();
  }, [filters]);

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      const galleryData = await getGalleryItems({ category: filters.category || null });
      setGallery(galleryData);
      
      // Extract unique categories for category filter
      const uniqueCategories = [...new Set(galleryData.map(item => item.category))];
      setCategories(uniqueCategories);
      
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching gallery items:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImage({
      ...newImage,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError(langContent[lang]?.fileTooLarge || 'File is too large. Maximum size is 5MB.');
        return;
      }
      
      setNewImage({
        ...newImage,
        imageFile: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFilters({
      ...filters,
      category
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!newImage.imageFile) {
      setError(langContent[lang]?.selectImage || 'Please select an image to upload');
      return;
    }
    
    try {
      setUploading(true);
      
      // Create gallery item with image
      await uploadGalleryImage({
        title: newImage.title,
        titleHi: newImage.titleHi,
        description: newImage.description,
        descriptionHi: newImage.descriptionHi,
        category: newImage.category || 'General',
        imageFile: newImage.imageFile
      });
      
      // Reset form
      resetForm();
      
      // Refresh gallery items
      fetchGalleryItems();
      
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error uploading gallery image:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm(langContent[lang]?.confirmDelete || 'Are you sure you want to delete this gallery item?')) {
      setLoading(true);
      try {
        await deleteGalleryItem(id);
        fetchGalleryItems();
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error deleting gallery item:', err);
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setNewImage({
      title: '',
      titleHi: '',
      description: '',
      descriptionHi: '',
      category: currentCategory,
      imageFile: null,
      imagePreview: ''
    });
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        {langContent[lang]?.galleryManager || 'Gallery Manager'}
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Upload Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">
          {langContent[lang]?.uploadImage || 'Upload New Image'}
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Title Fields */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="title">
                {langContent[lang]?.titleEnglish || 'Title (English)'}
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newImage.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="titleHi">
                {langContent[lang]?.titleHindi || 'Title (Hindi)'}
              </label>
              <input
                type="text"
                id="titleHi"
                name="titleHi"
                value={newImage.titleHi}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            
            {/* Description Fields */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="description">
                {langContent[lang]?.descriptionEnglish || 'Description (English)'}
              </label>
              <textarea
                id="description"
                name="description"
                value={newImage.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="descriptionHi">
                {langContent[lang]?.descriptionHindi || 'Description (Hindi)'}
              </label>
              <textarea
                id="descriptionHi"
                name="descriptionHi"
                value={newImage.descriptionHi}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                rows="3"
              />
            </div>
            
            {/* Category Field */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="category">
                {langContent[lang]?.category || 'Category'}
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={newImage.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                list="categories-list"
              />
              <datalist id="categories-list">
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
                <option value="General">General</option>
                <option value="Events">Events</option>
                <option value="Facilities">Facilities</option>
                <option value="Students">Students</option>
              </datalist>
            </div>
            
            {/* Image Upload Field */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="imageFile">
                {langContent[lang]?.image || 'Image'} 
                <span className="text-gray-500 text-xs ml-2">
                  {langContent[lang]?.maxFileSize || '(Max: 5MB)'}
                </span>
              </label>
              <input
                type="file"
                id="imageFile"
                name="imageFile"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded-md"
                accept="image/*"
                ref={fileInputRef}
                required
              />
            </div>
          </div>
          
          {/* Image Preview */}
          {newImage.imagePreview && (
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                {langContent[lang]?.imagePreview || 'Image Preview'}
              </p>
              <img 
                src={newImage.imagePreview} 
                alt="Preview" 
                className="h-48 object-contain border rounded"
              />
            </div>
          )}
          
          {/* Form Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              {langContent[lang]?.cancel || 'Cancel'}
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              disabled={uploading}
            >
              {uploading 
                ? (langContent[lang]?.uploading || 'Uploading...') 
                : (langContent[lang]?.upload || 'Upload')}
            </button>
          </div>
        </form>
      </div>

      {/* Gallery Items */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            {langContent[lang]?.galleryImages || 'Gallery Images'}
          </h3>
          
          {/* Filter Controls */}
          <div className="flex items-center space-x-2">
            <label className="text-gray-700" htmlFor="filterCategory">
              {langContent[lang]?.filterByCategory || 'Filter by Category'}:
            </label>
            <select
              id="filterCategory"
              value={filters.category}
              onChange={handleCategoryChange}
              className="px-3 py-2 border rounded-md"
            >
              <option value="">{langContent[lang]?.allCategories || 'All Categories'}</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        
        {loading ? (
          <LoadingSpinner />
        ) : gallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map(item => (
              <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img 
                    src={item.imageURL} 
                    alt={item.title} 
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1">
                    {item.category}
                  </span>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold truncate">{item.title}</h4>
                  <p className="text-sm text-gray-500 truncate">{item.titleHi}</p>
                  {item.description && (
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                  )}
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                    >
                      {langContent[lang]?.delete || 'Delete'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">
            {langContent[lang]?.noImagesFound || 'No gallery images found. Upload some!'}
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryManager;
