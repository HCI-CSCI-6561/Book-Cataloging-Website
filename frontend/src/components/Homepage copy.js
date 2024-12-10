import React from 'react';
import { Link } from 'react-router-dom';
import HomeBlock from './HomeBlock';

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <HomeBlock />
      <div className="review-link">
        {/* lick jump to ReviewPage */}
        <Link to="/review">
          <button>Lets give a Review!</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;