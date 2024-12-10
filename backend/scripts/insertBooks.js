const mongoose = require("mongoose");
const Book = require("../models/book-model"); // Adjust the path to your Book model
require("dotenv").config(); 

const mockBooks = [
    {
      "bookid": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": ["Fiction", "Drama"],
      "publishDate": "1960-07-11",
      "pages": 281,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.8,
      "image": "https://example.com/images/to-kill-a-mockingbird.jpg",
      "description": "A gripping tale of racial injustice and moral growth."
    },
    {
      "bookid": 2,
      "title": "1984",
      "author": "George Orwell",
      "genre": ["Dystopian", "Science Fiction"],
      "publishDate": "1949-06-08",
      "pages": 328,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.7,
      "image": "https://example.com/images/1984.jpg",
      "description": "A chilling depiction of a totalitarian society."
    },
    {
      "bookid": 3,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": ["Classic", "Tragedy"],
      "publishDate": "1925-04-10",
      "pages": 180,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.6,
      "image": "https://example.com/images/the-great-gatsby.jpg",
      "description": "A tale of love, wealth, and tragedy in the Jazz Age."
    },
    {
      "bookid": 4,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": ["Romance", "Classic"],
      "publishDate": "1813-01-28",
      "pages": 279,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.9,
      "image": "https://example.com/images/pride-and-prejudice.jpg",
      "description": "A witty and romantic exploration of social norms."
    },
    {
      "bookid": 5,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": ["Fiction", "Coming-of-Age"],
      "publishDate": "1951-07-16",
      "pages": 214,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.2,
      "image": "https://example.com/images/the-catcher-in-the-rye.jpg",
      "description": "A young man's journey through angst and alienation."
    },
    {
      "bookid": 6,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": ["Fantasy", "Adventure"],
      "publishDate": "1937-09-21",
      "pages": 310,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.9,
      "image": "https://example.com/images/the-hobbit.jpg",
      "description": "An epic journey through Middle-earth with Bilbo Baggins."
    },
    {
      "bookid": 7,
      "title": "Moby Dick",
      "author": "Herman Melville",
      "genre": ["Adventure", "Classic"],
      "publishDate": "1851-10-18",
      "pages": 635,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.3,
      "image": "https://example.com/images/moby-dick.jpg",
      "description": "A thrilling quest for revenge against the great white whale."
    },
    {
      "bookid": 8,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "genre": ["Fiction", "Philosophy"],
      "publishDate": "1988-01-01",
      "pages": 208,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.8,
      "image": "https://example.com/images/the-alchemist.jpg",
      "description": "A magical tale of following one's dreams and destiny."
    },
    {
      "bookid": 9,
      "title": "War and Peace",
      "author": "Leo Tolstoy",
      "genre": ["Historical", "Classic"],
      "publishDate": "1869-01-01",
      "pages": 1225,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.6,
      "image": "https://example.com/images/war-and-peace.jpg",
      "description": "A grand depiction of Russian society during the Napoleonic Wars."
    },
    {
      "bookid": 10,
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "genre": ["Horror", "Science Fiction"],
      "publishDate": "1818-01-01",
      "pages": 280,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.5,
      "image": "https://example.com/images/frankenstein.jpg",
      "description": "A haunting tale of ambition and unintended consequences."
    },
    {
      "bookid": 11,
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "genre": ["Dystopian", "Science Fiction"],
      "publishDate": "1932-01-01",
      "pages": 311,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.4,
      "image": "https://example.com/images/brave-new-world.jpg",
      "description": "A provocative vision of a future shaped by technology and control."
    },
    {
      "bookid": 12,
      "title": "Jane Eyre",
      "author": "Charlotte Bronte",
      "genre": ["Romance", "Classic"],
      "publishDate": "1847-10-16",
      "pages": 500,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.8,
      "image": "https://example.com/images/jane-eyre.jpg",
      "description": "A tale of love, independence, and resilience."
    },
    {
      "bookid": 13,
      "title": "Wuthering Heights",
      "author": "Emily Bronte",
      "genre": ["Romance", "Classic"],
      "publishDate": "1847-12-01",
      "pages": 400,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.7,
      "image": "https://example.com/images/wuthering-heights.jpg",
      "description": "A passionate tale of love and revenge on the Yorkshire moors."
    },
    {
      "bookid": 14,
      "title": "Animal Farm",
      "author": "George Orwell",
      "genre": ["Satire", "Political Fiction"],
      "publishDate": "1945-08-17",
      "pages": 112,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.9,
      "image": "https://example.com/images/animal-farm.jpg",
      "description": "A satirical tale of power and corruption on a farm."
    },
    {
      "bookid": 15,
      "title": "Dracula",
      "author": "Bram Stoker",
      "genre": ["Horror", "Classic"],
      "publishDate": "1897-05-26",
      "pages": 418,
      "volume": 1,
      "totalVolumes": 1,
      "averageRating": 4.6,
      "image": "https://example.com/images/dracula.jpg",
      "description": "A chilling tale of the original vampire, Count Dracula."
    }
  ];
  

  const insertBooks = async () => {
    try {
      await mongoose.connect(process.env.MONG_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
  
      // Insert mock data into the database
      await Book.insertMany(mockBooks);
      console.log("Mock books inserted successfully");
  
      // Close the connection
      mongoose.connection.close();
    } catch (error) {
      console.error("Error inserting books:", error);
      mongoose.connection.close();
    }
  };

insertBooks();
