import React, { useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    const addReview = () => {
    if (newReview.trim() !== '') {
        setReviews([...reviews, newReview]);
        setNewReview('');
    }
    };

    return (
    <div className="bg-[#f4e8e4] p-6 mt-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Reviews</h3>
        <textarea
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write a review..."
        className="w-full border border-gray-300 rounded-md p-3 mb-4"
        />
        <button
        onClick={addReview}
        className="bg-[#815f55] text-white py-2 px-6 rounded-md hover:bg-[#6c4c46] mb-4"
        >
        Post
        </button>
        <div>
        {reviews.map((review, index) => (
        <div key={index} className="border-t border-gray-300 pt-4 mt-4">
            <p>{review}</p>
            <button className="bg-[#815f55] text-white py-1 px-4 mt-2 rounded-md hover:bg-[#6c4c46]">
            Reply
            </button>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Reviews;
