// src/services/api.ts
const BASE_URL = 'http://localhost:5000/api'; // Your backend server address

// --- Helper Function ---
// A generic function to handle all API requests and error handling
const apiRequest = async (endpoint: string, method: string, body?: any) => {
    try {
       const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    const token = userInfo.token;

    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: headers,
      body: body ? JSON.stringify(body) : null,
    });

    // Check if the response is successful, otherwise parse and throw error
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error(`API request to ${endpoint} failed:`, error);
    throw error; // Re-throw the error so component-level catch blocks can handle it
  }
};

// --- Auth Functions ---
export const registerUser = (userData: any) => 
  apiRequest('/users/register', 'POST', userData);

export const loginUser = (credentials: any) => 
  apiRequest('/users/login', 'POST', credentials);

// --- Booking Functions ---
export const createBooking = (bookingData: any) => 
  apiRequest('/bookings', 'POST', bookingData);

export const getBookings = () => 
  apiRequest('/bookings', 'GET');

export const getBookingById = (id: string) => 
  apiRequest(`/bookings/${id}`, 'GET');

export const updateBookingStatus = (id: string, status: 'Confirmed' | 'Cancelled') =>
  apiRequest(`/bookings/${id}`, 'PATCH', { status });

// --- Support Request Functions ---
export const createSupportRequest = (requestData: any) =>
  apiRequest('/support-requests', 'POST', requestData);

export const getSupportRequests = () =>
  apiRequest('/support-requests', 'GET');

export const updateSupportRequestStatus = (id: string, status: string) =>
  apiRequest(`/support-requests/${id}`, 'PATCH', { status });

// --- AI Support Function ---
export const getAiSupport = (appliance: string, question: string) =>
    apiRequest('/ai/support', 'POST', { appliance, question });

export const getMyBookings = () => apiRequest('/bookings/mybookings', 'GET');
export const getAllProperties = () => 
  apiRequest('/properties', 'GET');

export const getPropertyById = (id: string) => 
  apiRequest(`/properties/${id}`, 'GET');

export const createProperty = (propertyData: any) =>
  apiRequest('/properties', 'POST', propertyData);

export const updateProperty = (id: string, propertyData: any) =>
  apiRequest(`/properties/${id}`, 'PUT', propertyData);

export const deleteProperty = (id: string) =>
  apiRequest(`/properties/${id}`, 'DELETE');