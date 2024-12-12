const mockBooks = [
    {
      id: 1,
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
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      reviews: [
        {
          user: "John Doe",
          comment: "A timeless classic!",
          rating: 5,
        },
        {
          user: "Jane Smith",
          comment: "Beautifully written and thought-provoking.",
          rating: 4,
        },
      ],
    }]

    const mockUsers = [
        {
          username: "booklover123",
          firstName: "Alex",
          lastName: "Smith",
          age: 25,
          email: "alex.smith@example.com",
          image: "https://example.com/images/user1.jpg",
          books: [
            {
              bookName: "To Kill a Mockingbird",
              bookStatus: "Read",
              bookReviewed: true,
              bookReview: "A deeply impactful story that resonates even today.",
            },
            {
              bookName: "1984",
              bookStatus: "Want to Read",
              bookReviewed: false,
              bookReview: "",
            },
          ],
        }]


        const genres = [
            "Fiction",
            "Non-Fiction",
            "Science Fiction",
            "Mystery",
            "Fantasy",
            "Biography",
            "Adventure",
            "Crime",
            "Horror",
            "Classic",
            "Tragedy",
            "Dystopian",
            "Romance",
            "Historical Fiction",
            "Thriller",
          ];
          
          
          export { genres, mockBooks, mockUsers}