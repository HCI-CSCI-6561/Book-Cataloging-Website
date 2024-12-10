import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Bookshelf = () => {
  const navigate = useNavigate();

  // 每个分类的书籍数据独立管理
  const [categories, setCategories] = useState([
    {
      name: "Reviewed by You",
      books: [
        {
          id: 1,
          title: "Book Title A",
          author: "Author A",
          lastReviewed: "24/11/2023, 10:00 PM",
          image: "https://via.placeholder.com/100",
        },
        {
          id: 2,
          title: "Book Title B",
          author: "Author B",
          lastReviewed: "24/11/2023, 9:00 PM",
          image: "https://via.placeholder.com/100",
        },
      ],
      sortType: "author",
      isDropdownOpen: false,
    },
    {
      name: "Currently Reading",
      books: [
        {
          id: 3,
          title: "Book Title C",
          author: "Author C",
          lastReviewed: "23/11/2023, 8:00 PM",
          image: "https://via.placeholder.com/100",
        },
        {
          id: 4,
          title: "Book Title D",
          author: "Author D",
          lastReviewed: "22/11/2023, 7:00 PM",
          image: "https://via.placeholder.com/100",
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
    { id: 5, title: "Book Title E", author: "Author E", image: "https://via.placeholder.com/100" },
    { id: 6, title: "Book Title F", author: "Author F", image: "https://via.placeholder.com/100" },
    { id: 7, title: "Book Title G", author: "Author G", image: "https://via.placeholder.com/100" },
  ]); // 示例书籍数据库

  const [isAddBookOpen, setIsAddBookOpen] = useState(false); // 控制添加书籍窗口
  const [newBook, setNewBook] = useState({ title: "", author: "", image: "" }); // 新书信息
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
    setNewBook({ title: "", author: "", image: "" });
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
  const uploadNewBook = () => {
    if (newBook.title && newBook.author && newBook.image) {
      const bookWithId = {
        ...newBook,
        id: Date.now(), // 使用时间戳生成唯一 ID
        lastReviewed: new Date().toLocaleString(),
      };
      addBookToCategory(bookWithId);
    }
  };

  // 跳转到书籍评论页面
  const handleComment = (bookId) => {
    navigate(`/book/${bookId}/comments`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Breadcrumb 导航 */}
      <div className="mb-6 text-lg">
        <Link to="/" className="text-blue-600 cursor-pointer hover:underline">
          Home
        </Link>
        <span> &gt; </span>
        <span className="text-blue-600 cursor-pointer">Bookshelf</span>
      </div>

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
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
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

            <p className="text-center text-gray-500 mb-4">Or add a new book:</p>

            {/* 自定义书籍上传 */}
            <input
              type="text"
              className="w-full mb-2 p-2 border border-gray-300 rounded-md"
              placeholder="Book Title"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            />
            <input
              type="text"
              className="w-full mb-2 p-2 border border-gray-300 rounded-md"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            />
            <input
              type="file"
              className="w-full mb-4 p-2"
              onChange={(e) =>
                setNewBook({ ...newBook, image: URL.createObjectURL(e.target.files[0]) })
              }
            />

            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-600 text-white py-2 px-4 rounded-md"
                onClick={closeAddBookModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-md"
                onClick={uploadNewBook}
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 书籍分类展示 */}
      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="gray-100, p-4 rounded-md shadow-md">
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
  );
};

export default Bookshelf;
