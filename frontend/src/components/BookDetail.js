import React, { useState } from 'react';

const BookDetail = () => {
  const [readingStatus, setReadingStatus] = useState("Want to Read");

  return (
    <div className="flex bg-[#f4e8e4] p-6">
      {/* 左侧栏：图书封面和操作按钮 */}
      <div className="w-1/4 bg-[#c6a89a] p-4 mr-8 rounded-md flex flex-col items-center">
        <div className="w-full h-72 bg-[#a89a94] mb-4 rounded-lg"></div> {/* 图书封面占位符 */}

        {/* 书籍状态选择下拉框 */}
        <select
          value={readingStatus}
          onChange={(e) => setReadingStatus(e.target.value)}
          className="w-full bg-[#815f55] text-white py-2 px-3 mb-2 rounded-md text-center cursor-pointer"
        >
          <option value="Want to Read">Want to Read</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Read">Read</option>
        </select>

        <button className="bg-[#815f55] text-white w-full py-2 mb-2 rounded-md hover:bg-[#6c4c46]">Join Book Discussion</button>
        <div className="flex justify-center mb-2">
          {'★★★★★'.split('').map((star, index) => (
            <span key={index} className="text-[#815f55] text-xl">{star}</span>
          ))}
        </div>
        <p className="text-center mb-2">Rate this book!</p>
        <button className="bg-[#815f55] text-white w-full py-2 rounded-md hover:bg-[#6c4c46]">Review this Book</button>
      </div>

      {/* 右侧栏：书籍详情 */}
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-2">Book Title</h1>
        <p className="text-xl text-gray-700 mb-2">Author name</p>
        <div className="flex items-center text-[#d60000] mb-4">
          ★★★★☆ 4.0 <span className="text-sm text-gray-600 ml-2">(154,000 ratings, 260,188 reviews)</span>
        </div>
        <p className="italic text-gray-600 mb-4">
          "In 'Memoirs of a Geisha,' we enter a world where appearances are paramount...
          <span className="text-blue-600 cursor-pointer"> more</span>
        </p>
        <div className="mb-4">
          <p className="mb-1">Genre:</p>
          <div className="flex space-x-2">
            <div className="bg-gray-300 px-3 py-1 rounded-full">Drama</div>
            <div className="bg-gray-300 px-3 py-1 rounded-full">Historical</div>
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-1">Tags:</p>
          <div className="flex space-x-2">
            <div className="bg-gray-300 px-3 py-1 rounded-full">Fiction</div>
            <div className="bg-gray-300 px-3 py-1 rounded-full">Culture</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          333 Pages | Published On: January 2005 | Total Volumes: 4 | Volume: 1
        </p>
        <div className="flex items-center text-gray-600">
          <span className="mr-4">294 People are currently reading</span>
          <span>18 People want to read this book</span>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

