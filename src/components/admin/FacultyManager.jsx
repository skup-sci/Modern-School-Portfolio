import React, { useState, useEffect, useRef } from 'react';
import { 
  getAllFaculty as getFacultyMembers, 
  createFaculty as createFacultyMember, 
  updateFaculty as updateFacultyMember, 
  deleteFaculty as deleteFacultyMember,
  getAllDepartments as getDepartments
} from '../../services/facultyService.js';
import { useLanguage } from '../../LanguageContext.jsx';
import LoadingSpinner from '../LoadingSpinner.jsx';

const FacultyManager = () => {
  const { lang, langContent } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [currentFaculty, setCurrentFaculty] = useState({
    name: '',
    nameHi: '',
    position: '',
    positionHi: '',
    department: '',
    qualification: '',
    experience: '',
    order: 0,
    photoURL: ''
  });

  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('');
  const fileInputRef = useRef(null);

  // Fetch faculty and departments on component mount
  useEffect(() => {
    fetchFaculty();
    fetchDepartments();
  }, []);

  const fetchFaculty = async () => {
    try {
      setLoading(true);
      const facultyData = await getFacultyMembers();
      setFaculty(facultyData);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching faculty:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDepartments = async () => {
    try {
      const depts = await getDepartments();
      setDepartments(depts);
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For order, convert to number
    if (name === 'order') {
      setCurrentFaculty({
        ...currentFaculty,
        [name]: parseInt(value) || 0
      });
    } else {
      setCurrentFaculty({
        ...currentFaculty,
        [name]: value
      });
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (editMode) {
        await updateFacultyMember(currentFaculty.id, currentFaculty, photoFile);
      } else {
        await createFacultyMember(currentFaculty, photoFile);
      }
      
      resetForm();
      fetchFaculty();
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error saving faculty:', err);
      setLoading(false);
    }
  };

  const handleEdit = (facultyMember) => {
    setCurrentFaculty(facultyMember);
    setPhotoPreview(facultyMember.photoURL || '');
    setEditMode(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm(langContent[lang]?.confirmDelete || 'Are you sure you want to delete this faculty member?')) {
      setLoading(true);
      try {
        await deleteFacultyMember(id);
        fetchFaculty();
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error deleting faculty:', err);
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setCurrentFaculty({
      name: '',
      nameHi: '',
      position: '',
      positionHi: '',
      department: '',
      qualification: '',
      experience: '',
      order: 0,
      photoURL: ''
    });
    setPhotoFile(null);
    setPhotoPreview('');
    setEditMode(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        {langContent[lang]?.facultyManager || 'Faculty Manager'}
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Faculty Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">
          {editMode 
            ? (langContent[lang]?.editFaculty || 'Edit Faculty Member') 
            : (langContent[lang]?.addNewFaculty || 'Add New Faculty Member')}
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name Fields */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                {langContent[lang]?.nameEnglish || 'Name (English)'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={currentFaculty.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="nameHi">
                {langContent[lang]?.nameHindi || 'Name (Hindi)'}
              </label>
              <input
                type="text"
                id="nameHi"
                name="nameHi"
                value={currentFaculty.nameHi}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            
            {/* Position Fields */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="position">
                {langContent[lang]?.positionEnglish || 'Position (English)'}
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={currentFaculty.position}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="positionHi">
                {langContent[lang]?.positionHindi || 'Position (Hindi)'}
              </label>
              <input
                type="text"
                id="positionHi"
                name="positionHi"
                value={currentFaculty.positionHi}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            
            {/* Department Field */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="department">
                {langContent[lang]?.department || 'Department'}
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={currentFaculty.department}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                list="departments-list"
                required
              />
              <datalist id="departments-list">
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </datalist>
            </div>
            
            {/* Order Field */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="order">
                {langContent[lang]?.displayOrder || 'Display Order'}
              </label>
              <input
                type="number"
                id="order"
                name="order"
                value={currentFaculty.order}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
                min="0"
              />
            </div>
            
            {/* Qualification Field */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="qualification">
                {langContent[lang]?.qualification || 'Qualification'}
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={currentFaculty.qualification}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            
            {/* Experience Field */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="experience">
                {langContent[lang]?.experience || 'Experience'}
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={currentFaculty.experience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          
          {/* Photo Upload Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="photo">
              {langContent[lang]?.photo || 'Photo'}
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handlePhotoChange}
              className="w-full px-3 py-2 border rounded-md"
              accept="image/*"
              ref={fileInputRef}
            />
            {photoPreview && (
              <div className="mt-2">
                <img 
                  src={photoPreview} 
                  alt="Preview" 
                  className="h-32 w-32 object-cover border rounded"
                />
              </div>
            )}
          </div>
          
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
              disabled={loading}
            >
              {loading 
                ? (langContent[lang]?.saving || 'Saving...') 
                : (editMode 
                    ? (langContent[lang]?.updateFaculty || 'Update Faculty') 
                    : (langContent[lang]?.addFaculty || 'Add Faculty'))}
            </button>
          </div>
        </form>
      </div>

      {/* Faculty List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          {langContent[lang]?.facultyList || 'Faculty List'}
        </h3>
        
        {loading && faculty.length === 0 ? (
          <LoadingSpinner />
        ) : faculty.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">{langContent[lang]?.photo || 'Photo'}</th>
                  <th className="px-4 py-2 text-left">{langContent[lang]?.name || 'Name'}</th>
                  <th className="px-4 py-2 text-left">{langContent[lang]?.position || 'Position'}</th>
                  <th className="px-4 py-2 text-left">{langContent[lang]?.department || 'Department'}</th>
                  <th className="px-4 py-2 text-left">{langContent[lang]?.order || 'Order'}</th>
                  <th className="px-4 py-2 text-left">{langContent[lang]?.actions || 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((facultyMember) => (
                  <tr key={facultyMember.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">
                      {facultyMember.photoURL ? (
                        <img 
                          src={facultyMember.photoURL} 
                          alt={facultyMember.name} 
                          className="h-12 w-12 object-cover rounded-full"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-gray-500">N/A</span>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <div>{facultyMember.name}</div>
                      <div className="text-sm text-gray-600">{facultyMember.nameHi}</div>
                    </td>
                    <td className="px-4 py-2">
                      <div>{facultyMember.position}</div>
                      <div className="text-sm text-gray-600">{facultyMember.positionHi}</div>
                    </td>
                    <td className="px-4 py-2">{facultyMember.department}</td>
                    <td className="px-4 py-2">{facultyMember.order}</td>
                    <td className="px-4 py-2">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(facultyMember)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                          {langContent[lang]?.edit || 'Edit'}
                        </button>
                        <button
                          onClick={() => handleDelete(facultyMember.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          {langContent[lang]?.delete || 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">
            {langContent[lang]?.noFacultyFound || 'No faculty members found. Add some!'}
          </p>
        )}
      </div>
    </div>
  );
};

export default FacultyManager;
