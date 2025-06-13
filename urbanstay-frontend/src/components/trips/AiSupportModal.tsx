// src/components/trips/AiSupportModal.tsx
import React, { useState } from 'react';
import { getAiSupport } from '../../services/api';

interface AiSupportModalProps {
  applianceName: string;
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const AiSupportModal: React.FC<AiSupportModalProps> = ({ applianceName, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: `Hi! How can I help you with the ${applianceName}?`, sender: 'ai' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage: Message = { text: userInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await getAiSupport(applianceName, userInput);
      const aiMessage: Message = { text: response.answer, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = { text: 'Sorry, I encountered an error. Please try again.', sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">AI Support: {applianceName}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">×</button>
        </div>

        {/* Chat Area */}
        <div className="p-4 h-80 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && <div className="text-center text-gray-500">AI is thinking...</div>}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t flex space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            disabled={isLoading}
          />
          <button type="submit" className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-primary_hover disabled:bg-gray-400" disabled={isLoading}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiSupportModal;