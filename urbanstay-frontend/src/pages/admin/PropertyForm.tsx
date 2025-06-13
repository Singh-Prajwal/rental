import React, { useState, useEffect } from 'react';
import type { Property } from '../../types/Property';

interface PropertyFormProps {
  initialData: Partial<Property> | null;
  onSubmit: (data: Partial<Property>) => void;
  onClose: () => void;
  isSaving: boolean;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ initialData, onSubmit, onClose, isSaving }) => {
  const [formData, setFormData] = useState<Partial<Property>>({
    name: '',
    description: '',
    location: '',
    pricePerNight: 100,
    maxGuests: 2,
    beds: 1,
    baths: 1,
    amenities: [],
    images: [],
    // Add other fields from your Property type as needed
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // Handle special cases for arrays (comma-separated strings)
    if (name === 'amenities' || name === 'images') {
        setFormData({ ...formData, [name]: value.split(',').map(item => item.trim()) });
    } else {
        setFormData({ ...formData, [name]: type === 'number' ? Number(value) : value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Simple input component to reduce repetition
  const FormField = ({ label, name, type = 'text', value, required = true, isTextArea = false }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {isTextArea ? (
            <textarea name={name} value={value} onChange={handleChange} required={required} className="w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" rows={4}></textarea>
        ) : (
            <input type={type} name={name} value={value} onChange={handleChange} required={required} className="w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {initialData ? 'Edit Property' : 'Add New Property'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Property Name" name="name" value={formData.name} />
                <FormField label="Location" name="location" value={formData.location} />
                <FormField label="Price per Night" name="pricePerNight" type="number" value={formData.pricePerNight} />
                <FormField label="Max Guests" name="maxGuests" type="number" value={formData.maxGuests} />
                <FormField label="Beds" name="beds" type="number" value={formData.beds} />
                <FormField label="Baths" name="baths" type="number" value={formData.baths} />
                <div className="md:col-span-2">
                    <FormField label="Description" name="description" value={formData.description} isTextArea />
                </div>
                 <div className="md:col-span-2">
                    <FormField label="Amenities (comma-separated)" name="amenities" value={Array.isArray(formData.amenities) ? formData.amenities.join(', ') : ''} />
                </div>
                 <div className="md:col-span-2">
                    <FormField label="Image URLs (comma-separated)" name="images" value={Array.isArray(formData.images) ? formData.images.join(', ') : ''} />
                </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" disabled={isSaving} className="bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-primary_hover transition-colors disabled:bg-gray-400">
              {isSaving ? 'Saving...' : 'Save Property'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;