// src/services/mockData.ts
import type { Property } from '../types/Property';

// Keep this for the homepage

export const mockFeaturedProperties: Property[] = [
{
    id: '102',
    title: 'Modern City Apartment',
        type: 'Entire Apartment',
    beds: 2,
    bedrooms: 2,
    baths: 1,
    maxGuests: 3,
    pricePerNight: 170,
    location: 'Mission District, San Francisco',
    description: 'This beautifully renovated space offers a perfect blend of classic architecture and modern amenities, providing a comfortable and stylish retreat after a day of exploring the city. The location is ideal, close to many restaurants and shops.',
    images: [
      'https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1673014200221-524696a1edd9?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    host: {
      name: 'Sophia Carter',
      avatarUrl: 'https://images.unsplash.com/photo-1600188768079-6df9f96e0b86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    amenities: ['Wifi', 'Kitchen', 'Washer', 'TV', 'Free parking on premises', 'Air conditioning'],
    reviews: [
      {
        id: 'r1',
        userName: 'Ethan Bennett',
        userAvatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
        rating: 4,
        text: 'The house was clean, well-equipped, and had a great vibe. The only minor issue was the street noise at night, but it didn’t detract too much from our stay.',
      },
      {
        id: 'r2',
        userName: 'Olivia Hayes',
        userAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
        rating: 5,
        text: 'Our expectations were exceeded! The Victorian charm was evident throughout the house, and the modern updates made it very comfortable. We especially loved the garden.',
      },
    ]
},
{
    id: '101',
    title: 'Cozy Beachfront Cabin',
        type: 'Entire Cabin',
    beds: 2,
    bedrooms: 1,
    baths: 1,
    maxGuests: 2,
    pricePerNight: 140,
    location: 'Mission District, San Francisco',
    description: 'This beautifully renovated space offers a perfect blend of classic architecture and modern amenities, providing a comfortable and stylish retreat after a day of exploring the city. The location is ideal, close to many restaurants and shops.',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1673014200221-524696a1edd9?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    host: {
      name: 'Emma Stone',
      avatarUrl: 'https://images.unsplash.com/photo-1600188768079-6df9f96e0b86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    amenities: ['Wifi', 'Kitchen', 'Washer', 'TV', 'Free parking on premises', 'Air conditioning'],
    reviews: [
      {
        id: 'r1',
        userName: 'Ethan Bennett',
        userAvatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
        rating: 4,
        text: 'The house was clean, well-equipped, and had a great vibe. The only minor issue was the street noise at night, but it didn’t detract too much from our stay.',
      },
      {
        id: 'r2',
        userName: 'Olivia Hayes',
        userAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
        rating: 5,
        text: 'Our expectations were exceeded! The Victorian charm was evident throughout the house, and the modern updates made it very comfortable. We especially loved the garden.',
      },
    ]
},
    {
    id: '103',
    title: 'Rustic Mountain Retreat',
        type: 'Entire Cabin',
    beds: 3,
    bedrooms: 3,
    baths: 1,
    maxGuests: 4,
    pricePerNight: 150,
    location: 'Aspen, CO',
    description: 'Escape to this secluded cabin in the mountains, offering breathtaking views and tranquility.',
    images: [
     'https://plus.unsplash.com/premium_photo-1686090448422-de8536066f64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1673014200221-524696a1edd9?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    host: {
      name: 'Olivia Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1600188768079-6df9f96e0b86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    amenities: ['Wifi', 'Kitchen', 'Washer', 'TV', 'Free parking on premises', 'Air conditioning'],
    reviews: [
      {
        id: 'r1',
        userName: 'Ethan Bennett',
        userAvatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
        rating: 4,
        text: 'The house was clean, well-equipped, and had a great vibe. The only minor issue was the street noise at night, but it didn’t detract too much from our stay.',
      },
      {
        id: 'r2',
        userName: 'Olivia Hayes',
        userAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
        rating: 5,
        text: 'Our expectations were exceeded! The Victorian charm was evident throughout the house, and the modern updates made it very comfortable. We especially loved the garden.',
      },
    ]
},

{
      id: '104',
      title: 'Charming Lakeside Cottage',
      type: 'Entire cottage',
      beds: 2,
      bedrooms: 2,
      baths: 1,
      maxGuests: 4,
      pricePerNight: 160,
      location: 'Lake Tahoe, California',
      description: 'A picturesque cottage by the lake, perfect for fishing, boating, and family fun. Enjoy stunning sunsets from the private deck and cozy up by the fireplace at night.',
      images: [
        'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1594697982229-aa9848c0f7d5?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600210492493-41c3243c3def?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570796773884-a696222b0059?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop',
      ],
      host: {
        name: 'David Chen',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
      },
      amenities: ['Wifi', 'Kitchen', 'Washer', 'TV', 'Free parking on premises', 'Air conditioning'],
      reviews: [
        {
          id: 'r3',
          userName: 'Michael Lee',
          userAvatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop',
          rating: 5,
          text: 'Absolutely perfect location. The cottage was clean, cozy, and had everything we needed for a wonderful weekend away. We will be back!',
        },
      ]
    }
];

export const mockAllStays: Property[] = [
    {
    id: '101',
    title: 'Cozy Beachfront Cabin',
        type: 'Entire Cabin',
    beds: 2,
    bedrooms: 1,
    baths: 1,
    maxGuests: 2,
    pricePerNight: 140,
    location: 'Mission District, San Francisco',
    description: 'This beautifully renovated space offers a perfect blend of classic architecture and modern amenities, providing a comfortable and stylish retreat after a day of exploring the city. The location is ideal, close to many restaurants and shops.',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1673014200221-524696a1edd9?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    host: {
      name: 'Emma Stone',
      avatarUrl: 'https://images.unsplash.com/photo-1600188768079-6df9f96e0b86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    amenities: ['Wifi', 'Kitchen', 'Washer', 'TV', 'Free parking on premises', 'Air conditioning'],
    reviews: [
      {
        id: 'r1',
        userName: 'Ethan Bennett',
        userAvatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
        rating: 4,
        text: 'The house was clean, well-equipped, and had a great vibe. The only minor issue was the street noise at night, but it didn’t detract too much from our stay.',
      },
      {
        id: 'r2',
        userName: 'Olivia Hayes',
        userAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
        rating: 5,
        text: 'Our expectations were exceeded! The Victorian charm was evident throughout the house, and the modern updates made it very comfortable. We especially loved the garden.',
      },
    ]
},
    {
    id: '103',
    title: 'Rustic Mountain Retreat',
        type: 'Entire Cabin',
    beds: 3,
    bedrooms: 3,
    baths: 1,
    maxGuests: 4,
    pricePerNight: 150,
    location: 'Aspen, CO',
    description: 'Escape to this secluded cabin in the mountains, offering breathtaking views and tranquility.',
    images: [
     'https://plus.unsplash.com/premium_photo-1686090448422-de8536066f64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1673014200221-524696a1edd9?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    host: {
      name: 'Olivia Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1600188768079-6df9f96e0b86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    amenities: ['Wifi', 'Kitchen', 'Washer', 'TV', 'Free parking on premises', 'Air conditioning'],
    reviews: [
      {
        id: 'r1',
        userName: 'Ethan Bennett',
        userAvatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
        rating: 4,
        text: 'The house was clean, well-equipped, and had a great vibe. The only minor issue was the street noise at night, but it didn’t detract too much from our stay.',
      },
      {
        id: 'r2',
        userName: 'Olivia Hayes',
        userAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
        rating: 5,
        text: 'Our expectations were exceeded! The Victorian charm was evident throughout the house, and the modern updates made it very comfortable. We especially loved the garden.',
      },
    ]
},
    {
    id: '104',
    title: 'Charming Lakeside Cottage',
        type: 'Entire Cottage',
    beds: 4,
    bedrooms: 4,
    baths: 1,
    maxGuests: 5,
    pricePerNight: 160,
    location: 'Lake Tahoe, CA',
    description: 'A picturesque cottage by the lake, perfect for fishing, boating, and family fun.',
    images: [
     'https://plus.unsplash.com/premium_photo-1673014202349-38687dd47f94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1673014200221-524696a1edd9?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    host: {
      name: 'Olivia Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1600188768079-6df9f96e0b86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    amenities: ['Wifi', 'Kitchen', 'Washer', 'TV', 'Free parking on premises', 'Air conditioning'],
    reviews: [
      {
        id: 'r1',
        userName: 'Ethan Bennett',
        userAvatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
        rating: 4,
        text: 'The house was clean, well-equipped, and had a great vibe. The only minor issue was the street noise at night, but it didn’t detract too much from our stay.',
      },
      {
        id: 'r2',
        userName: 'Olivia Hayes',
        userAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
        rating: 5,
        text: 'Our expectations were exceeded! The Victorian charm was evident throughout the house, and the modern updates made it very comfortable. We especially loved the garden.',
      },
    ]
},

];