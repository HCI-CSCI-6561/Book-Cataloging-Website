import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { IoClose } from "react-icons/io5";


const Bookshelf = () => {
  const navigate = useNavigate();
  
//
  const [categories, setCategories] = useState([
    {
      name: "Reviewed by You",
      books: [
        {
          id: 9,
        title: "Educated: The international bestselling memoir",
      author: 'Tara Westover',
      views: '2M',
      reviews: 20,
      rating: 4.0,
      image: myImage,
      description: 'People only see me as different....',
        },
        {
          id: 10,
      title: 'The Republic',
      author: 'Plato',
      views: '1.5M',
      reviews: 15,
      rating: 4.2,
      image: TheRepublic,
      description: 'A philosophical dialogue exploring justice and politics...',
        },
      ],
      sortType: "author",
      isDropdownOpen: false,
    },
    {
      name: "Currently Reading",
      books: [
        {
          id: 11,
      title: 'Good Energy',
      author: 'Casey Means MD',
      views: '3M',
      reviews: 30,
      rating: 4.8,
      image: GoodEnergy,
      description: 'Discover the surprising connection between metabolism and health...',
        },
        {
          id: 12,
      title: 'Harry Potter and the Cursed Child',
      author: 'J. K. Rowling',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: HarryPotter,
      description: 'A continuation of Harry Potter\'s story through his children...',
        },
      ],
      sortType: "author",
      isDropdownOpen: false,
    },
    {
      name: "Read by Me",
      books: [],
      sortType: "author",
      isDropdownOpen: false,
    },
    {
      name: "Want to Read",
      books: [],
      sortType: "author",
      isDropdownOpen: false,
    },
  ]);

  const [bookDatabase] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      reviews: 4,
      rating: 4.8,
      description: "A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South.",
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      views:'1M',
      reviews: 1,
      Rating: 4.7,
      description: "A chilling dystopian novel that explores the dangers of totalitarianism and extreme surveillance.",
      image: A1984,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      views:'1M',
      reviews:1,
      Rating: 4.6,
      description: "A tragic story of love, ambition, and the American Dream set in the Jazz Age.",
      image: TheGreatGatsby,
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      views:'1M',
      reviews: 1,
      Rating: 4.8,
      description: "A thrilling adventure of Bilbo Baggins, a hobbit who discovers courage and friendship on an epic quest.",
      image: TheHobbit,
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      views:'1M',
      reviews: 1,
      Rating: 4.7,
      description: "A witty exploration of manners, marriage, and society in Regency-era England.",
      image: PrideandPrejudice
    },/*
    {
      id: 6,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      views:'1M',
      reviews: 4,
      Rating: 4.8,
      description: "A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South.",
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      id: 7,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      views:'1M',
      reviews: 4,
      Rating: 4.8,
      description: "A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South.",
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      id: 8,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      views:'1M',
      reviews: 4,
      Rating: 4.8,
      description: "A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South. A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South.",
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },*/
    {
      id: 9,
      title: 'Educated: The international bestselling memoir',
      author: 'Tara Westover',
      views: '2M',
      reviews: 20,
      rating: 4.0,
      image: myImage,
      description: 'People only see me as different....',
    },
    {
      id: 10,
      title: 'The Republic',
      author: 'Plato',
      views: '1.5M',
      reviews: 15,
      rating: 4.2,
      image: TheRepublic,
      description: 'A philosophical dialogue exploring justice and politics...',
    },
    {
      id: 11,
      title: 'Good Energy',
      author: 'Casey Means MD',
      views: '3M',
      reviews: 30,
      rating: 4.8,
      image: GoodEnergy,
      description: 'Discover the surprising connection between metabolism and health...',
    },
    {
      id: 12,
      title: 'Harry Potter and the Cursed Child',
      author: 'J. K. Rowling',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: HarryPotter,
      description: 'A continuation of Harry Potter\'s story through his children...',
    },
    {
      id: 13,
      title: 'Hamilton: The Revolution',
      author: 'Lin-Manuel Miranda',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: Hamilton,
      description: 'The story behind the groundbreaking musical Hamilton...',
    },
    {
      id: 14,
      title: 'When Breath Becomes Air',
      author: 'Paul Kalanithi',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: WhenBreath,
      description: 'A memoir on the journey of life, death, and what makes life meaningful...',
    },
    {
      id: 15,
      title: 'Are We Smart Enough',
      author: 'Frans de Waal',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: AreWe,
      description: 'A scientific exploration of animal intelligence and cognition...',
    },
    {
      id: 16,
      title: 'Say Thank You for Everything',
      author: 'Jim Edwards',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: SayThank,
      description: 'Practical strategies for effective management...',
    },
  ]); // 示例书籍数据库

  const [isAddBookOpen, setIsAddBookOpen] = useState(false); // 控制添加书籍窗口
/*const [newBook, setNewBook] = useState({ title: "", author: "", image: "" }); // 新书信息*/
  const [searchQuery, setSearchQuery] = useState(""); // 搜索框内容
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(null); // 当前分类索引
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false); // 控制删除确认弹窗
  const [deleteCategoryIndex, setDeleteCategoryIndex] = useState(null); // 当前待删除的分类索引
  const [deleteBookIndex, setDeleteBookIndex] = useState(null); // 当前待删除的书籍索引

  // 切换下拉菜单的显示状态
  const toggleDropdown = (index) => {
    const updatedCategories = categories.map((category, i) => ({
      ...category,
      isDropdownOpen: i === index ? !category.isDropdownOpen : false, // 确保只有一个下拉菜单打开
    }));
    setCategories(updatedCategories);
  };

  // 处理排序逻辑
  const handleSort = (categoryIndex, type) => {
    const updatedCategories = [...categories];
    const sortedBooks = [...updatedCategories[categoryIndex].books].sort((a, b) => {
      if (type === "author") {
        return a.author.localeCompare(b.author); // 按作者姓名从 A 到 Z 排序
      } else if (type === "title") {
        return a.title.localeCompare(b.title); // 按图书名字从 A 到 Z 排序
      }
      return 0;
    });
    updatedCategories[categoryIndex].books = sortedBooks;
    updatedCategories[categoryIndex].sortType = type;
    updatedCategories[categoryIndex].isDropdownOpen = false; // 排序后关闭下拉菜单
    setCategories(updatedCategories);
  };

  // 打开删除确认弹窗
  const confirmDelete = (categoryIndex, bookIndex) => {
    setDeleteCategoryIndex(categoryIndex);
    setDeleteBookIndex(bookIndex);
    setIsConfirmDeleteOpen(true);
  };

  // 确认删除操作
  const handleDelete = () => {
    const updatedCategories = [...categories];
    updatedCategories[deleteCategoryIndex].books = updatedCategories[
      deleteCategoryIndex
    ].books.filter((_, i) => i !== deleteBookIndex);
    setCategories(updatedCategories);
    setIsConfirmDeleteOpen(false);
  };

  // 取消删除操作
  const handleCancel = () => {
    setDeleteCategoryIndex(null);
    setDeleteBookIndex(null);
    setIsConfirmDeleteOpen(false);
  };

  // 打开添加书籍窗口
  const openAddBookModal = (categoryIndex) => {
    setCurrentCategoryIndex(categoryIndex);
    setIsAddBookOpen(true);
  };

  // 关闭添加书籍窗口
  const closeAddBookModal = () => {
    setIsAddBookOpen(false);
   /* setNewBook({ title: "", author: "", image: "" });*/
    setSearchQuery("");
  };

  // 添加书籍到分类
  const addBookToCategory = (book) => {
    const updatedCategories = [...categories];
    updatedCategories[currentCategoryIndex].books.push(book);
    setCategories(updatedCategories);
    closeAddBookModal();
  };

  // 上传自定义书籍
  /*
  const uploadNewBook = () => {
    if (newBook.title && newBook.author && newBook.image) {
      const bookWithId = {
        ...newBook,
        id: Date.now(), // 使用时间戳生成唯一 ID
        lastReviewed: new Date().toLocaleString(),
      };
      addBookToCategory(bookWithId);
    }
  };*/

  // 跳转到书籍评论页面
  const handleComment = (bookId) => {
    navigate(`/review/${bookId}`); // 跳转到 /review/:id
  };
  

  return (
    <>
    <NavBar/>
    <NavHeader/>

    <div className="bg-gray-100 min-h-screen p-6">
      {/* 删除确认弹窗 */}
      {isConfirmDeleteOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-lg font-bold">Are you sure you want to delete this book?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-md"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-600 text-white py-2 px-4 rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

       {/* 添加书籍弹窗 */}
      {isAddBookOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
      {/* 关闭按钮 */}
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        onClick={closeAddBookModal} // 使用已有的关闭弹窗函数
      >
        <IoClose size={24} />
      </button>

      <h2 className="mb-4 text-lg font-bold">Add a Book</h2>

            {/* 搜索书籍 */}
            <input
              type="text"
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
              placeholder="Search for a book..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="max-h-40 overflow-y-auto mb-4">
              {bookDatabase
                .filter((book) =>
                  book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  book.author.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((book) => (
                  <div
                    key={book.id}
                    className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                    onClick={() => addBookToCategory(book)}
                  >
                    <img src={book.image} alt={book.title} className="w-12 h-12 inline mr-2" />
                    {book.title} by {book.author}
                  </div>
                ))}
            </div>

            </div>
          </div>
      )}

      {/* 书籍分类展示 */}
      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="white, p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-4 relative">
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <button
                onClick={() => toggleDropdown(categoryIndex)}
                className="text-xl cursor-pointer"
              >
                ⇅
              </button>

              {/* 下拉菜单 */}
              {category.isDropdownOpen && (
                <div className="absolute right-0 mt-8 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul>
                    <li
                      onClick={() => handleSort(categoryIndex, "author")}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Sort by Author (A to Z)
                    </li>
                    <li
                      onClick={() => handleSort(categoryIndex, "title")}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Sort by Title (A to Z)
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <p className="mb-4 text-sm">Total Books: {category.books.length}</p>
            <p className="mb-4 text-sm">💬:review| 🗑️:delete| ➕：add</p>
            {/* 书籍卡片列表 */}
            <div className="space-y-4 mb-6">
              {category.books.map((book, bookIndex) => (
                <div key={bookIndex} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex mb-3">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-16 h-16 bg-gray-300 rounded-lg mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold">{book.title}</h3>
                      <p className="text-sm text-gray-600">by {book.author}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Last Reviewed On: {book.lastReviewed}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleComment(book.id)}
                        className="text-blue-600 text-xl"
                      >
                        💬
                      </button>{" "}
                      {/* 评论图标 */}
                      <button
                        onClick={() => confirmDelete(categoryIndex, bookIndex)}
                        className="text-red-600 text-xl"
                      >
                        🗑️
                      </button>{" "}
                      {/* 删除图标 */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 添加书籍按钮 */}
            <div className="flex justify-center mb-4">
              <button
                className="text-3xl text-gray-600"
                onClick={() => openAddBookModal(categoryIndex)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Bookshelf;