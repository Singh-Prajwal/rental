import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

interface ScheduleTechFormProps {
  onSubmit: (data: { technicianName: string; scheduledAt: Date; notes: string; }) => void;
  onClose: () => void;
  isSaving: boolean;
}

const ScheduleTechForm: React.FC<ScheduleTechFormProps> = ({ onSubmit, onClose, isSaving }) => {
  const [technicianName, setTechnicianName] = useState('');
  const [scheduledAt, setScheduledAt] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!technicianName || !scheduledAt) {
      alert('Please fill in all required fields.');
      return;
    }
    onSubmit({ technicianName, scheduledAt, notes });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg  shadow-xl w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Schedule Technician</h2>
            <div className="text-black space-y-4">
              <div>
                <label className="block text-sm font-medium">Technician Name</label>
                <input type="text" value={technicianName} onChange={e => setTechnicianName(e.target.value)} required className="w-full text-black p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Date & Time of Visit</label>
                <DatePicker selected={scheduledAt} onChange={date => setScheduledAt(date)} showTimeSelect dateFormat="Pp" className="w-full text-black p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium">Notes for Technician</label>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} className="w-full text-black p-2 border rounded-md" rows={3}></textarea>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 text-white px-6 py-4 flex justify-end space-x-3">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={isSaving} className="bg-brand-primary text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-400">{isSaving ? 'Scheduling...' : 'Schedule Visit'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleTechForm;