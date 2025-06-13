// src/components/trips/GuidebookTabs.tsx
import React, { useState } from 'react';
import type { Property } from '../../types/Property';

// We'll create these content components next
import YourHomeInfo from './YourHomeInfo';
import LocalGuide from './LocalGuide';

interface GuidebookTabsProps {
    property: Property;
    bookingId:string
}

type Tab = 'yourHome' | 'guidebook';

const GuidebookTabs: React.FC<GuidebookTabsProps> = ({ property,bookingId }) => {
  const [activeTab, setActiveTab] = useState<Tab>('yourHome');

  const getTabClass = (tabName: Tab) => 
    `px-4 py-2 font-semibold rounded-t-lg transition-colors ${
      activeTab === tabName
        ? 'bg-white border-b-2 border-brand-primary text-brand-primary'
        : 'text-gray-500 hover:bg-gray-100'
    }`;
  
  return (
    <div className="mt-8">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-4">
          <button onClick={() => setActiveTab('yourHome')} className={getTabClass('yourHome')}>
            Your home
          </button>
          <button onClick={() => setActiveTab('guidebook')} className={getTabClass('guidebook')}>
            Guest guidebook
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-8 px-2">
        {activeTab === 'yourHome' && <YourHomeInfo property={property} bookingId={bookingId} />}
        {activeTab === 'guidebook' && <LocalGuide property={property} />}
      </div>
    </div>
  );
};

export default GuidebookTabs;