// src/components/trips/YourHomeInfo.tsx
import React,{useState} from 'react';
import type { Property } from '../../types/Property';
import { createSupportRequest } from '../../services/api';
import AiSupportModal from './AiSupportModal';
// A simple card for displaying information
const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
    <h4 className="font-bold text-lg mb-3">{title}</h4>
    <div className="text-gray-700 space-y-2">{children}</div>
  </div>
);

const YourHomeInfo: React.FC<{ property: Property; bookingId: string }> = ({ property, bookingId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState('');

  const openAiHelp = (applianceName: string) => {
    setSelectedAppliance(applianceName);
    setIsModalOpen(true);
  };
  // In a real app, this data would come from property.guidebookInfo
  const guidebookData = {
    wifi: { ssid: 'UrbanStay_Guest', password: 'perfect-stay-2024!' },
    checkout: 'Please load and run the dishwasher, take out all trash, and lock the door behind you.',
    appliances: [
      { name: 'Smart TV', manualUrl: '#' },
      { name: 'Nespresso Machine', manualUrl: '#' }
    ]
    };
    const handleContactHost = async () => {
    const issue = prompt("What issue are you experiencing?");
    if (issue) {
        try {
            await createSupportRequest({
                bookingId,
                propertyId: property.id,
                issue,
            });
            alert('Support request sent! The property manager will be in touch.');
        } catch (error) {
            alert('Failed to send support request.');
        }
    }
  };


  return (
    <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-8">
      <InfoCard title="Wi-Fi Network">
        <p><strong>Network:</strong> {guidebookData.wifi.ssid}</p>
        <p><strong>Password:</strong> {guidebookData.wifi.password}</p>
      </InfoCard>
      
      <InfoCard title="Check-out procedure">
        <p>{guidebookData.checkout}</p>
      </InfoCard>

      <InfoCard title="Appliance Guides">
          <ul className="space-y-2">
            {guidebookData.appliances.map(appliance => (
              <li key={appliance.name} className="flex justify-between items-center">
                <a href={appliance.manualUrl} className="text-brand-primary underline hover:text-brand-primary_hover">
                  {appliance.name} Manual
                </a>
                <button 
                  onClick={() => openAiHelp(appliance.name)}
                  className="ml-3 text-xs bg-blue-100 text-white font-semibold px-2 py-1 rounded-full hover:bg-blue-200"
                >
                  AI Help
                </button>
              </li>
            ))}
          </ul>
        </InfoCard>
{isModalOpen && (
        <AiSupportModal 
          applianceName={selectedAppliance} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
      <InfoCard title="Contact your host">
        <p>For any urgent issues, please contact {property.host?.name ?? 'your host'}.</p>
        <button className="mt-3 font-semibold text-white border border-gray-800 rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors" onClick={handleContactHost}>
          Contact Host
        </button>
      </InfoCard>
    </div>
  );
};

export default YourHomeInfo;