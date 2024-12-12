import React, { useState } from 'react';
import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import { useParams } from 'react-router-dom';
import A1984 from '../assets/A1984.png';
import AreWe from '../assets/AreWe.png';
import GoodEnergy from '../assets/GoodEnergy.png';
import Hamilton from '../assets/Hamilton.png';
import HarryPotter from '../assets/HarryPotter.png';
import PrideandPrejudice from '../assets/PrideandPrejudice.png';
import SayThank from '../assets/SayThank.png';
import TheGreatGatsby from '../assets/TheGreatGatsby.png';
import TheHobbit from '../assets/TheHobbit.png';
import TheRepublic from '../assets/TheRepublic.png';
import WhenBreath from '../assets/WhenBreath.png';
import myImage from '../assets/myImage.png';
import NavBar from "./NavBar.js";
import NavHeader from "./NavHeader.js";
import './ReviewPage.css';

function ReviewPage() {
  const { id } = useParams();
  
    // Dynamic star rendering component
  const RatingStars = ({ rating }) => {
    const getStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
          // Full star
          stars.push(
            <TbStarFilled key={i} className="text-yellow-500" size={20} fill="currentColor" />
          );
        } else if (rating >= i - 0.5) {
          // Half star
          stars.push(
            <TbStarHalfFilled key={i} className="text-yellow-500 opacity-70" size={20} fill="currentColor" />
          );
        } else {
          // Empty star
          stars.push(
            <TbStar key={i} className="text-gray-300" size={20} />
          );
        }
      }
      return stars;
    };
  
    return <div className="flex">{getStars()}</div>;
  };

  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      tags:["Fiction", "Horror"],
      publishedDate: "1960-07-11",
      pages: 281,
      volume: 1,
      totalVolume: 4,
      rating:  4.8,
      discussions: 5,
      reviews: 2,
      userRatings: [5, 4, 5, 4, 5],
      description: "A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South.",
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      tags: ["Science Fiction", "Dystopian"],
      pages: 328,
      volume: 1,
      totalVolume: 1,
      rating: 4.7,
      discussions: 5,
      reviews: 2,
      userRatings: [5, 5, 4, 5, 4],
      description: "A chilling dystopian novel that explores the dangers of totalitarianism and extreme surveillance.",
      publishedDate: "1949-06-08",
      image: A1984,
    },
    {
      id: 3,
      title : "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      tags: ["Classic", "Tragedy"],
      publishedDate: "1925-04-10",
      pages: 180,
      volume: 1,
      totalVolume: 1,
      rating: 4.6,
      reviews:2,
      discussions:5,
      userRatings: [4, 5, 4, 5, 4],
      description: "A tragic story of love, ambition, and the American Dream set in the Jazz Age.",
      image: TheGreatGatsby,
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      tags: ["Fantasy", "Adventure"],
      publishedDate: "1937-09-21",
      pages: 310,
      volume: 1,
      totalVolume: 1,
      discussions:2,
      rating: 4.8,
      reviews:2,
      ratings: [5, 5, 5, 4, 4],
      description: "A thrilling adventure of Bilbo Baggins, a hobbit who discovers courage and friendship on an epic quest.",
      image: TheHobbit,
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      tags: ["Classic", "Romance"],
      publishedDate: "1813-01-28",
      pages: 279,
      volume: 1,
      totalVolume: 1,
      rating: 4.7,
      reviews:2,
      discussions:2,
      userRatings: [5, 4, 4, 5, 5],
      description: "A witty exploration of manners, marriage, and society in Regency-era England.",
      image: PrideandPrejudice,
    },
    /*
    {
      id: 6,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: ["Fiction", "Horror"],
      publishDate: "1960-07-11",
      pages: 281,
      volume: 1,
      totalVolume: 4,
      averageRating: 4.8,
      userRatings: [5, 4, 5, 4, 5],
      description: "A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South.",
    },
    {
      id: 7,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: ["Fiction", "Horror"],
      publishDate: "1960-07-11",
      pages: 281,
      volume: 1,
      totalVolume: 4,
      averageRating: 4.8,
      userRatings: [5, 4, 5, 4, 5],
      description: "A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South.",
    },*/
    {
      id: 9,
      title: 'Educated: The international bestselling memoir',
      author: 'Tara Westover',
      rating: 4.0,
      reviews: 10,
      discussions: 6,
      description: 'People only see me as different',
      publishedDate: '2018-03-01',
      volume: 1,
      totalVolumes: 1,
      genre: 'Memoir',
      tags: ['Education', 'Biography', 'Inspiration'],
      image: myImage,
    },
    {
      id: 10,
      title: 'The Republic',
      author: 'Plato',
      rating: 4.2,
      reviews: 15,
      discussions: 8,
      description: 'A philosophical dialogue exploring justice and politics',
      publishedDate: '380 BC',
      genre: 'Philosophy',
      tags: ['Philosophy', 'Politics', 'Classic'],
      image: TheRepublic,
    },
    {
      id: 11,
      title: 'Good Energy',
      author: 'Casey Means MD',
      rating: 4.8,
      reviews: 30,
      discussions: 12,
      description: 'Discover the surprising connection between metabolism and health',
      publishedDate: '2022-05-15',
      genre: 'Health',
      tags: ['Health', 'Wellness', 'Lifestyle'],
      image: GoodEnergy,
    },
    {
      id: 12,
      title: 'Harry Potter and the Cursed Child',
      author: 'J. K. Rowling',
      rating: 4.1,
      reviews: 10,
      discussions: 5,
      description: "A continuation of Harry Potter's story through his children",
      publishedDate: '2016-07-31',
      genre: 'Fantasy',
      tags: ['Magic', 'Adventure', 'Family'],
      image: HarryPotter,
    },
    {
      id: 13,
      title: 'Hamilton: The Revolution',
      author: 'Lin-Manuel Miranda',
      rating: 4.1,
      reviews: 10,
      discussions: 7,
      description: 'The story behind the groundbreaking musical Hamilton',
      publishedDate: '2016-04-12',
      genre: 'History',
      tags: ['History', 'Musical', 'Biography'],
      image: Hamilton,
    },
    {
      id: 14,
      title: 'When Breath Becomes Air',
      author: 'Paul Kalanithi',
      rating: 4.1,
      reviews: 10,
      discussions: 6,
      description: 'A memoir on the journey of life, death, and what makes life meaningful',
      publishedDate: '2016-01-12',
      genre: 'Memoir',
      tags: ['Life', 'Death', 'Inspiration'],
      image: WhenBreath,
    },
    {
      id: 15,
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
      id: 16,
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

  /*const handleInputChange = (event) => {
    setReviewInput(event.target.value);
  };*/

  /*const handleSubmitReview = () => {
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
  };*/
  const handleSubmitReview = () => {
    if (reviewInput.text?.trim()) {
      const newReview = {
        id: Date.now(),
        username: 'NewUser',
        rating: reviewInput.rating || 0,
        text: reviewInput.text,
        date: new Date().toISOString().split('T')[0],
      };
      setReviews([newReview, ...reviews]);
      setReviewInput({}); // 重置输入
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
    <>
    <NavBar/>
    <NavHeader/>
    <div className="review-page">
      <div className="left-panel">
        <img src={book.image} alt={book.title} className="book-image" />
        <h1 className="text-xl font-bold truncate" >{book.title}</h1>
        <p className="text-gray-700 italic text-lg">by {book.author}</p>
        <p className="rating">Rating: {book.rating}</p>
        <p className="text-base text-black mt-1">Reviews: {book.reviews}</p>
        <p className="text-base text-black mt-1">Discussions: {book.discussions}</p>
        <p className="text-base text-black mt-1">Published On: {book.publishedDate}</p>
        <p className="text-base text-black mt-1">Genre: {book.genre}</p>
        <p className="text-base text-black mt-1">Tags: {Array.isArray(book.tags) ? book.tags.join(', ') : 'No tags available'}</p>
        <p className="text-base text-black mt-1">{book.description}</p>
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
                <RatingStars rating={review.rating} className="rating"/> 
                
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
      <h3 className='mb-4 mt-3'>Adjust the Slider to Rate and Write Your Review!💌</h3>

      {/* 滑动评分组件 */}
      <div className="rating-slider">
        <label htmlFor="rating" className="slider-label">
          Rating: {reviewInput.rating ? reviewInput.rating : 0} ★
        </label>
        <input
          id="rating"
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={reviewInput.rating || 0}
          onChange={(e) =>
            setReviewInput({
              ...reviewInput,
              rating: parseFloat(e.target.value),
            })
          }
          className="slider"
        />
      </div>

      {/* 文本框 */}
      <textarea
        placeholder="Write your review here..."
        value={reviewInput.text || ''}
        onChange={(e) =>
          setReviewInput({ ...reviewInput, text: e.target.value })
        }
        className="modal-input"
      ></textarea>

      {/* 按钮 */}
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
    </>
  );

}

export default ReviewPage