import React, { useState, useEffect } from 'react';
import { getAllProperties, deleteProperty, createProperty, updateProperty } from '../../services/api';
import type { Property } from '../../types/Property';
import PropertyForm from './PropertyForm'; // Import the new form

const AdminPropertiesPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Partial<Property> | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const data = await getAllProperties();
      setProperties(data.map((p: any) => ({ ...p, id: p._id })));
    } catch (err) {
      setError('Failed to fetch properties.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleOpenAddModal = () => {
    setEditingProperty(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (property: Property) => {
    setEditingProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProperty(null);
  };

  const handleFormSubmit = async (data: Partial<Property>) => {
    setIsSaving(true);
    try {
      if (editingProperty) {
        // Update existing property
        await updateProperty(editingProperty.id!, data);
        alert('Property updated successfully.');
      } else {
        // Create new property
        await createProperty(data);
        alert('Property created successfully.');
      }
      handleCloseModal();
      fetchProperties(); // Refresh the list
    } catch (err) {
      alert('Failed to save property. Please check the console for errors.');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await deleteProperty(id);
        alert('Property deleted successfully.');
        fetchProperties();
      } catch (err) {
        alert('Failed to delete property.');
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Properties</h1>
          <p className="text-gray-600">Add, edit, or remove property listings.</p>
        </div>
        <button onClick={handleOpenAddModal} className="bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-primary_hover transition-colors">
          + Add New Property
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        {/* ... (keep the existing table JSX) ... */}
        <table className="min-w-full divide-y divide-gray-200">
          {/* ... (thead) ... */}
          <tbody className="bg-white divide-y divide-gray-200">
               {loading ? (
    <tr>
      <td colSpan={4} className="text-center py-4 text-gray-500">
        Loading properties...
      </td>
    </tr>
  ) : error ? (
    <tr>
      <td colSpan={4} className="text-center py-4 text-red-500">
        {error}
      </td>
    </tr>
  ) : properties.length === 0 ? (
    <tr>
      <td colSpan={4} className="text-center py-4 text-gray-500">
        No properties found.
      </td>
    </tr>
  ) : (
    properties.map((prop:any) => (
      <tr key={prop.id}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prop.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prop.location}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${prop.pricePerNight}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-4">
          <button onClick={() => handleOpenEditModal(prop)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
          <button onClick={() => handleDelete(prop.id)} className="text-red-600 hover:text-red-900">Delete</button>
        </td>
      </tr>
    ))
  )}
            </tbody>
        </table>
      </div>

      {/* The Modal Form */}
      {isModalOpen && (
        <PropertyForm 
          initialData={editingProperty} 
          onSubmit={handleFormSubmit} 
          onClose={handleCloseModal} 
          isSaving={isSaving}
        />
      )}
    </div>
  );
};

export default AdminPropertiesPage;