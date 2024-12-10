const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const User = require('./models/user-model');
const Book = require('./models/book-model');
const Review = require('./models/review-model');
const Rating = require('./models/rating-model');

const mongoose = require('mongoose');

// Create Express application
const app = express();

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000', // React app's URL
    credentials: true, // Allow credentials (cookies, headers)
}));

app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
});

//set up engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    keys: [process.env.SESSION_COOKIEKEY]
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());


// Connect to MongoDB
mongoose.connect(process.env.MONG_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Start the server
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & Listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });


// Set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


// Home route
app.get('/', (req, res) => {
    // res.send(' '); // Adjust as needed
    res.render('home', { user: req.user })
});

// Add routes for bookshelf and reviews

const bookRoutes = require('./routes/book-routes');
const reviewRoutes = require('./routes/review-routes');
const ratingRoutes = require('./routes/rating-routes');

// Use routes
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);


app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/ratings', ratingRoutes);