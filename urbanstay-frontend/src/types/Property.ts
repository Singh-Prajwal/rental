// frontend/src/types/Property.ts

// Interface for appliance details, matching the backend
export interface Appliance {
  name: string;
  model?: string;
  manual_text: string;
}

// Interface for review details
// export interface Review {
//   id: string; // This will likely come from a separate model later
//   userName: string;
//   userAvatarUrl: string;
//   rating: number;
//   text: string;
// }

// Main property interface, now matching the backend Mongoose schema
// export interface Property {
//   id: string; // Mongoose uses `_id`, we will map it to `id`
//   name: string;
//   description: string;
//   heroImage: string;
//   images: string[];
//   amenities: string[];
//   wifi_ssid: string;
//   wifi_password?: string;
//   checkin_instructions: string;
//   checkout_instructions: string;
//   appliances: Appliance[];
  
//   // These fields are from the mock data and can be kept for now
//   // as we phase it out. Or you can add them to your backend schema.
//   type: string;
//   beds: number;
//   bedrooms: number;
//   baths: number;
//   maxGuests: number;
//   pricePerNight: number;
//   location: string;
//   host: {
//     name: string;
//     avatarUrl:string;
//   };
//   reviews: Review[];
// }
// src/types/Property.ts
export interface Review {
  id: string;
  userName: string;
  userAvatarUrl: string;
  rating: number;
  text: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: string;
  beds: number;
  bedrooms: number;
  baths: number;
  maxGuests: number;
  pricePerNight: number;
  location: string;
  images: string[];
  host: {
    name: string;
    avatarUrl: string;
  };
  amenities: string[];
  reviews: Review[];
}