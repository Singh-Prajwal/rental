// src/components/details/Reviews.tsx
import React from 'react';
import type{ Review } from '../../types/Property';
import ReviewCard from './ReviewCard';

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="py-8 mt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold">No reviews yet</h3>
        <p className="text-gray-600">Be the first to review this stay!</p>
      </div>
    );
  }

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="py-8 mt-8 border-t border-gray-200">
      <h3 className="text-xl font-semibold mb-6">
        ★ {averageRating} · {reviews.length} reviews
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {reviews.slice(0, 4).map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      {reviews.length > 4 && (
        <div className="mt-8">
          <button className="font-semibold text-gray-800 border border-gray-800 rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors">
            Show all {reviews.length} reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;