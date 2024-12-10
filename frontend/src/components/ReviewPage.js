import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AreWe from '../assets/AreWe.png';
import GoodEnergy from '../assets/GoodEnergy.png';
import Hamilton from '../assets/Hamilton.png';
import HarryPotter from '../assets/HarryPotter.png';
import SayThank from '../assets/SayThank.png';
import TheRepublic from '../assets/TheRepublic.png';
import WhenBreath from '../assets/WhenBreath.png';
import myImage from '../assets/myImage.png';
import './ReviewPage.css';

function ReviewPage() {
  const { id } = useParams();

  const books = [
    {
      id: 1,
      title: 'Educated: The international bestselling memoir',
      author: 'Tara Westover',
      rating: 4.0,
      reviews: 10,
      discussions: 6,
      description: 'People only see me as different...',
      publishedDate: '2018-03-01',
      volume: 1,
      totalVolumes: 1,
      genre: 'Memoir',
      tags: ['Education', 'Biography', 'Inspiration'],
      image: myImage,
    },
    {
      id: 2,
      title: 'The Republic',
      author: 'Plato',
      rating: 4.2,
      reviews: 15,
      discussions: 8,
      description: 'A philosophical dialogue exploring justice and politics...',
      publishedDate: '380 BC',
      genre: 'Philosophy',
      tags: ['Philosophy', 'Politics', 'Classic'],
      image: TheRepublic,
    },
    {
      id: 3,
      title: 'Good Energy',
      author: 'Casey Means MD',
      rating: 4.8,
      reviews: 30,
      discussions: 12,
      description: 'Discover the surprising connection between metabolism and health...',
      publishedDate: '2022-05-15',
      genre: 'Health',
      tags: ['Health', 'Wellness', 'Lifestyle'],
      image: GoodEnergy,
    },
    {
      id: 4,
      title: 'Harry Potter and the Cursed Child',
      author: 'J. K. Rowling',
      rating: 4.1,
      reviews: 10,
      discussions: 5,
      description: "A continuation of Harry Potter's story through his children...",
      publishedDate: '2016-07-31',
      genre: 'Fantasy',
      tags: ['Magic', 'Adventure', 'Family'],
      image: HarryPotter,
    },
    {
      id: 5,
      title: 'Hamilton: The Revolution',
      author: 'Lin-Manuel Miranda',
      rating: 4.1,
      reviews: 10,
      discussions: 7,
      description: 'The story behind the groundbreaking musical Hamilton...',
      publishedDate: '2016-04-12',
      genre: 'History',
      tags: ['History', 'Musical', 'Biography'],
      image: Hamilton,
    },
    {
      id: 6,
      title: 'When Breath Becomes Air',
      author: 'Paul Kalanithi',
      rating: 4.1,
      reviews: 10,
      discussions: 6,
      description: 'A memoir on the journey of life, death, and what makes life meaningful...',
      publishedDate: '2016-01-12',
      genre: 'Memoir',
      tags: ['Life', 'Death', 'Inspiration'],
      image: WhenBreath,
    },
    {
      id: 7,
      title: 'Are We Smart Enough',
      author: 'Frans de Waal',
      rating: 4.1,
      reviews: 10,
      discussions: 5,
      description: 'A scientific exploration of animal intelligence and cognition...',
      publishedDate: '2016-04-25',
      genre: 'Science',
      tags: ['Science', 'Animals', 'Cognition'],
      image: AreWe,
    },
    {
      id: 8,
      title: 'Say Thank You for Everything',
      author: 'Jim Edwards',
      rating: 4.1,
      reviews: 10,
      discussions: 4,
      description: 'Practical strategies for effective management...',
      publishedDate: '2020-11-10',
      genre: 'Business',
      tags: ['Business', 'Management', 'Self-help'],
      image: SayThank,
    },
  ];

  const book = books.find((b) => b.id === parseInt(id, 10));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewInput, setReviewInput] = useState('');
  const [reviews, setReviews] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  if (!book) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Book not found. Please check the ID.</p>;
  }

  const handleInputChange = (event) => {
    setReviewInput(event.target.value);
  };

  const handleSubmitReview = () => {
    if (reviewInput.trim()) {
      const newReview = {
        id: Date.now(),
        username: 'NewUser',
        rating: 4.0,
        text: reviewInput,
        date: new Date().toISOString().split('T')[0],
      };
      setReviews([newReview, ...reviews]);
      setReviewInput('');
      setIsModalOpen(false);
    }
  };

  const openDeleteModal = (id) => {
    setDeleteTargetId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteReview = () => {
    setReviews(reviews.filter((review) => review.id !== deleteTargetId));
    setDeleteTargetId(null);
    setIsDeleteModalOpen(false);
  };

  const cancelDelete = () => {
    setDeleteTargetId(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="review-page">
      <div className="left-panel">
        <img src={book.image} alt={book.title} className="book-image" />
        <h2>{book.title}</h2>
        <p className="author">by {book.author}</p>
        <p className="rating">Rating: ★★★★☆ {book.rating}</p>
        <p>Reviews: {book.reviews}</p>
        <p>Discussions: {book.discussions}</p>
        <p>Published On: {book.publishedDate}</p>
        <p>Genre: {book.genre}</p>
        <p>Tags: {Array.isArray(book.tags) ? book.tags.join(', ') : 'No tags available'}</p>
        <p className="description">{book.description}</p>
        <button className="review-button" onClick={() => setIsModalOpen(true)}>
          Let's Give a Review!
        </button>
      </div>
      <div className="right-panel">
        <h3>User Reviews</h3>
        <div className="review-list">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div className="review-card" key={review.id}>
                <p className="username">{review.username}</p>
                <p className="rating">★★★★☆ {review.rating}</p>
                <p className="date">{review.date}</p>
                <p className="text">{review.text}</p>
                <button
                  className="delete-button"
                  onClick={() => openDeleteModal(review.id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>

      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to delete this review?</h3>
            <div className="modal-buttons">
              <button className="submit-button" onClick={confirmDeleteReview}>
                Delete
              </button>
              <button className="cancel-button" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Write Your Review</h3>
            <textarea
              placeholder="Write your review here..."
              value={reviewInput}
              onChange={handleInputChange}
              className="modal-input"
            ></textarea>
            <div className="modal-buttons">
              <button className="submit-button" onClick={handleSubmitReview}>
                Submit
              </button>
              <button
                className="cancel-button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewPage;